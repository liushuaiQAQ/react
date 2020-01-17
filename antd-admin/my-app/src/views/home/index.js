import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { Form, Row, Col, Input, Button, Select, Table, Tag, Divider, Popconfirm } from 'antd';
const { Option } = Select;

class Home extends Component {
    state = {
        expand: false,
        data: [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            }
        ],
        columns: [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                editable: true,
                // render: text => <a>{text}</a>,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </span>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="javascript:;">Invite {record.name}</a>
                        <Divider type="vertical" />
                        <Popconfirm 
                            title="确定要删除吗?"
                            onConfirm={()=> this.handleDelete(text)}
                        >
                            <a href="javascript:;">Delete</a>
                        </Popconfirm>
                        <Divider type="vertical" />
                        <Link to='/about'>about</Link>
                    </span>
                ),
            },
        ]
    };

    // To generate mock Form.Item
    getFields() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Col>
                <Form.Item label="标题">
                    {getFieldDecorator('title', {
                        rules: [
                            {
                                required: true,
                                message: '请填写标题~',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="用户">
                    <Select
                        showSearch
                        style={{ width: 200 }}
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </Form.Item>
            </Col>
        );
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    };

    handleDelete(data){
        console.log(data)
    };

    render() {
        return (
            <div className="home-wrap">
                <Form className="ant-advanced-search-form" layout="inline" onSubmit={this.handleSearch}>
                    <Row gutter={24}>{this.getFields()}</Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">Search</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>Clear</Button>
                        </Col>
                    </Row>
                </Form>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        );
    }
}

export default withRouter(Form.create()(Home));