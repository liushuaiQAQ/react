import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { menus } from '@/router/menus';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

class SideMenu extends Component {
    render(){
        return (
            <Sider trigger={null} collapsible className="app-sider">
				<Menu style={{ height: '50px' }} theme="dark"  mode="inline">
					{this.renderMenu(menus)}
				</Menu>
			</Sider>
        )
    }

    // 递归渲染菜单
	renderMenu = data => {
		return data.map(item => {
			if (item.children) {
				return (
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                {item.icon ? <Icon type={item.icon} /> : ''}
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
			}
			return (
                <Menu.Item key={item.path}>
                    <Link to={item.path}>
                        {item.icon ? <Icon type={item.icon} /> : ''}
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
            )
		});
	};
}


export default SideMenu;