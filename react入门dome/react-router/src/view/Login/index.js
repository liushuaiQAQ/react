import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={style.login}>login</div>
        );
    }
}

const style = {
    login: {
        textAlert: 'center'
    }
}

export default Login;