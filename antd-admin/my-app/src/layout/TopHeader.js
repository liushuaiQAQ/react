import React, { Component } from 'react'
import { Avatar } from 'antd';

class TopHeader extends Component {
    render(){
        return (
            <div className="top-header-wrap">
                <Avatar className="avatar" size={40} icon="user" />
            </div>
        )
    }
}


export default TopHeader;