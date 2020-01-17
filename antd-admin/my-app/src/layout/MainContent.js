import React from 'react'
import { Redirect, withRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { routes } from '../router/routes';
import { connect } from 'react-redux';
import { Layout } from 'antd';
const { Content } = Layout;

const MainContent = ({ location }) => {
	return (
		<TransitionGroup>
			<CSSTransition classNames="fade" key={location.pathname} timeout={500}>
				<Content style={{ padding: '15px' }}>
					<Switch>
						{routes.map(item => <Route render={() => <item.component />} key={item.path} path={item.path} />)}
						<Redirect from="/" exact to="/home" />
						<Redirect to="/error/404" />
					</Switch>
				</Content>
			</CSSTransition>
		</TransitionGroup>
	);
};

const mapStateToProps = state => ({ userInfo: state.userInfo });
export default withRouter(connect(mapStateToProps)(MainContent));