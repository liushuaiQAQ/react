import React , { useState } from 'react';
import 'antd/dist/antd.css';
import '../static/css/Login.css';
import { Card, Input, Icon, Button, Spin, message } from 'antd';
import axios from 'axios';
import servicePath from '../config/apiUrl';

function Login(props){
    const [userName, setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const checkLogin = () => {
        if(!userName){
            message.error('请填写用户名~');
            return 
        }
        if(!password){
            message.error('请填写密码~');
            return 
        }
        setIsLoading(true);
        axios(servicePath.checkLogin).then(res => {
            setIsLoading(false);
            localStorage.setItem('openId', res.data.token);
            props.history.push('/index');
        })
    }

    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="JSPang Blog System" bordered={true} style={{ width: 400 }}>
                    <Input 
                        id="userName"
                        size="large"
                        placeholder="username"
                        prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e) => {setUserName(e.target.value)}}
                    />
                    <br/><br/>
                    <Input 
                        id="password"
                        size="large"
                        placeholder="password"
                        prefix={<Icon type="key" style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <br/><br/>
                    <Button type="primary" size="large" onClick={checkLogin}>Login in</Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login;