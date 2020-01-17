import React, { useState, useEffect } from 'react';
import marked from 'marked';
import { Row, Col, Input, Select, Button, DatePicker, message } from 'antd';
import axios from 'axios';
import servicePath from '../config/apiUrl';

const { Option } = Select;
const { TextArea } = Input;

function AddArticle(){
    const [articleId, setArticleId] = useState(0);  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle, setArticleTitle] = useState('');   //文章标题
    const [articleContent , setArticleContent] = useState('');  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容'); //html内容
    const [introducemd, setIntroducemd] = useState();            //简介的markdown内容
    const [introducehtml, setIntroducehtml] = useState('等待编辑'); //简介的html内容
    const [showDate, setShowDate] = useState();   //发布日期
    const [updateDate, setUpdateDate] = useState(); //修改日志的日期
    const [typeInfo, setTypeInfo] = useState([]); // 文章类别信息
    const [selectedType, setSelectType] = useState(1); //选择的文章类别

    marked.setOptions({
        renderer: new marked.Renderer(),     
        gfm: true,            //允许 Git Hub标准
        pedantic: false,      //尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误
        sanitize: false,      //对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
        tables: true,         //允许支持表格语法
        breaks: false,        //允许回车换行
        smartLists: true,     //使用比原生markdown更时髦的列表
        smartypants: false,   //使用更为时髦的标点
    })

    useEffect(() => {
        getTypeInfo();
    }, [])

    const getTypeInfo = () => {
        axios(servicePath.getTypeInfo).then(res => {
            setTypeInfo(res.data.data);
        })
    }
    
    //content 内容
    const changeContent = (e) => {
        setArticleContent(e.target.value);
        let html = marked(e.target.value);
        setMarkdownContent(html);
    }

    //简介 内容
    const changeIntroduce = (e) => {
        setIntroducemd(e.target.value);
        let html = marked(e.target.value);
        setIntroducehtml(html);
    }

    //选择主题
    const selectTypeHandler = (value) => {
        setSelectType(value);
    }

    //保存文章
    const saveArticle = () => {
        message.success('保存成功~');
        axios(servicePath.saveArticle).then(res => {
            message.success(res.data.data);
        })
    }

    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input 
                                value={articleTitle} 
                                placeholder="标题" 
                                size="large" 
                                onChange={e=> setArticleTitle(e.target.value)}     
                            />
                        </Col>
                        <Col span={4}>
                            &nbsp;
                            <Select defaultValue={selectedType} size="large" onChange={selectTypeHandler}>
                                {
                                    typeInfo.map((item, index) => {
                                        return (<Option key={index} value={item.id}>{item.typeName}</Option>)
                                    })
                                }
                            </Select>
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea 
                                className="markdown-content"
                                rows={35}
                                onChange={changeContent}
                                onPressEnter={changeContent}
                                placeholder="文章内容"
                            />
                        </Col>
                        <Col span={12}>
                            <div 
                                className="show-html"
                                dangerouslySetInnerHTML = {{__html:markdownContent}}
                            ></div>
                        </Col>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Button  size="large">暂存文章</Button>&nbsp;
                            <Button type="primary" size="large" onClick={saveArticle}>发布文章</Button>
                            <br/>
                        </Col>
                        <Col span={24}>
                            <br/>
                            <TextArea 
                                rows={4} 
                                onChange={changeIntroduce}
                                onPressEnter={changeIntroduce}
                                placeholder="文章简介"
                            />
                            <br/><br/>
                            <div 
                                className="introduce-html"
                                dangerouslySetInnerHTML = {{__html:'文章简介：'+introducehtml}}
                            ></div>
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker
                                    onChange={(date,dateString)=>setShowDate(dateString)}
                                    placeholder="发布日期"
                                    size="large"  
                                />
                            </div>
                        </Col>
                     </Row>
                </Col>

            </Row>
        </div>
    )
}

export default AddArticle;