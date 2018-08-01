import React, { Component, Fragment } from 'react';
import { Layout, Menu, Icon, message } from 'antd';
import Aside from './Aside';
// redux 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LayoutActions from '@actions/layout';
import * as typesLogin from '@constants/actions/login';
import LeftNav from './LeftNav';
import TopNavItem from './TopNavItem';
const { Header, Content } = Layout;
const list = [
	{
		key: '/home',
		text: '首页',
		icon: 'icon-shouye',
		children: [
			{
				key: '/home/main',
				text: '首页',
			},
			{
				key: '/home/log',
				text: '操作日志',
			},
		]
	},
	{
		key: '/code',
		text: '追溯',
		icon: 'icon-jiancezhuisu',
		children: [
			{
				key: '/code/list',
				text: '追溯码列表',
			},
			{
				key: '/code/produce',
				text: '追溯码生成',
				children: [
					{
						key: '/code/produce?type=1',
						text: '系统生成',
					},
					{
						key: '/code/produce?type=2',
						text: '扫码入库',
					},	
					{
						key: '/code/produce?type=3',
						text: '第三方导入',
					},
				]
			},
			{
				key: '/code/detail',
				text: '代理追溯码详情',
			},
			{
				key: '/code/distribute',
				text: '追溯码划拨',
			},
			{
				key: '/code/record?type=1',
				text: '追溯码记录',
				children: [
					{
						key: '/code/record?type=1',
						text: '追溯码入库记录',
					},
					{
						key: '/code/produce?type=2',
						text: '追溯码出库记录',
					}
				]
			},
			{
				key: '/code/remind',
				text: '窜货提醒',
			},
		]
	},
	{
		key: '/security',
		text: '防伪',
		icon: 'icon-fangweishixinzhe',
		children: [
			{
				key: '/security/list',
				text: '防伪码列表',
			},
			{
				key: '/security/produce',
				text: '防伪码生成',
			},
		]
	},
	{
		key: '/set',
		text: '设置',
		icon: 'icon-shezhi',
		children: [
			{
				key: '/set/shop',
				text: '设置店铺',
			},
			{
				key: '/set/security',
				text: '防伪追溯设置',
			},
			{
				key: '/set/decoration',
				text: '装修页面',
				children: [
					{
						key: '/set/decoration?type=1',
						text: '追溯码装修',
					},
					{
						key: '/set/decoration?type=2',
						text: '防伪码装修',
					}
				]
			},
		]
	},
];
 
function mapStateToProps(state) {
	return {
		layoutMain: state.layoutMain
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(LayoutActions, dispatch)
	};
}

// decorator
export default (options = {}) => 
	function createDecorator(Left) {
		class LayoutDecorator extends Component {
			constructor() {
				super();
				this.state = {
				// 是否折叠
					collapsed: false,
				};
			}
		handleToggle = () => {
			this.setState({
				collapsed: !this.state.collapsed,
			});
		};
		handleSignOut = () => {
			// message.destroy();
			// message.loading('提交中...', 0);

			// let url = typesLogin.LOGIN_OUT_POST;
			// let param = {};

			// let params = {
			// 	param: param,
			// 	ajaxType: 'DELETE',
			// 	onSuccess: (res) => {
			// 		message.destroy();
			// 		// delCookie('userManage');
			// 		_global.history.push('/login');
			// 	},
			// 	onError: (res) => {
			// 		message.destroy();
			// 		message.error(res.msg, 1.5);
			// 	}
			// };
			// // console.log(this.props.actions);
			// this.props.actions.request(url, params, {});
		}
		render() {
			const { location: { pathname, search, query }, actions, layoutMain } = this.props;
			const { text = "", child = [] } = layoutMain;
			const { type } = query;
			return (
				<div className="g-reset-antd" style={{ height: _global.innerHeight }}>
					<Layout className="ant-layout-has-sider g-ant-layout">
						<Aside 
							path={`${pathname}${search}`} 
							location = {location}
							collapsed={false} 
							component={LeftNav} 
							actions={actions}
							list={list}
						/>
						<Layout className="g-ant-layout" id="contents">
							<Header style={{ background: '#fff', padding: 0, height: 80 }} >
								<TopNavItem 
									list={list}
									url={`${pathname}`}
									type={type}
								/>
							</Header>
							<Content 
								style={{ 
									margin: '10px 10px 0 10px', 
									overflow: 'initial',
									 height: _global.innerHeight - 90, 
									 overflow: "auto" }}
							>
								{this.props.children}
							</Content>
						</Layout>
					</Layout>
				</div>
			);
		}
		};
		return connect(mapStateToProps, mapDispatchToProps)(LayoutDecorator);
	};

