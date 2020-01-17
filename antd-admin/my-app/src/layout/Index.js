import React, { Component } from 'react'
import { Layout } from 'antd';
import SideMenu from './SideMenu';
import TopHeader from './TopHeader';
import MainContent from './MainContent';

class Index extends Component {
    render(){
        return (
            <div className="layout">
				<Layout style={{ minHeight: '100vh' }}>
					<SideMenu />
					<Layout>
						<TopHeader></TopHeader>
						<MainContent></MainContent>
					</Layout>
				</Layout>
			</div>
        )
    }
}

export default Index;