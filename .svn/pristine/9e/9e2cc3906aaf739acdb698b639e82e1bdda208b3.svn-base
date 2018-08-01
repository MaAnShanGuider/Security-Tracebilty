import React, { Component, createElement } from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import { Link } from 'react-router';
import { getCookie } from '@utils/utils';
import { LOGIN_BG } from "@constants/constants";
const nameStyle = {
	height: 80,
};
class Aside extends Component {
	constructor(props){
		super(props);
		this.state = {
			collapsed: false, // 是否折叠
			mode: 'inline',
			openKey: '',
			selectedKey: ''
		};
		this.handleCollapse = ::this.handleCollapse;
		this.handleClick = ::this.handleClick;
		this.handleOpenMenu = ::this.handleOpenMenu;
	}
	componentWillMount() {
		this.changeSelectedItem(this.props.path);
	}
	componentWillReceiveProps(nextProps) {
		this.handleCollapse(nextProps.collapsed);
		this.changeSelectedItem(nextProps.path);
	}
	changeSelectedItem = (path) => {
		// 解决三级及以上路由导致左侧Item没有选中的BUG
		let pathArr = path.split('/');
		let openArr = [...pathArr];
		if (pathArr.length >= 4) {
			pathArr.pop();
		}
		this.setState({
			openKey: openArr.splice(0, 2).join('/'),
			selectedKey: pathArr.join('/')
		}, () => { this.scrollLeft(); });
		// this.props.hashUrl(pathArr.join('/'));
	};
	handleCollapse(collapsed){
		this.setState({
			collapsed,
			mode: collapsed ? 'vertical' : 'inline',
		});
	}
	scrollLeft = () => {
		// const bottomArr = [ '/material', '/live', '/setting' ];
		// if (bottomArr.indexOf(this.state.openKey) > -1 ){
		// 	document.getElementsByClassName('ant-layout-sider')[0].scrollTop = 1000;
		// }
	}
	handleClick(e){ // 点击路由
		this.setState({
			selectedKey: e.key
		});
	}
	handleOpenMenu(v){ // 导航收缩
		this.setState({
			openKey: v[v.length - 1]
		});
	}
	render() {
		const { collapsed, actions, list, location } = this.props;
		const { mode, selectedKey, openKey } = this.state;
		const user = getCookie("userManage") || {};
		const menu = (
			<Menu>
				<Menu.Item>
					<div onClick={this.handleSignOut}>修改密码</div>
				</Menu.Item>
				<Menu.Item>
					<div onClick={this.handleSignOut}>退出登录</div>
				</Menu.Item>

			</Menu>
		);
		return (
			<Layout.Sider
				trigger={null}
				breakpoint="lg"
				collapsible
				collapsed={collapsed} // 是否折叠
				// onCollapse={this.handleCollapse}
				style={{ overflowY: 'auto' }}
			>
				<div className="g-flex g-bb g-pd-10 g-black-middle g-m-b-10" style={nameStyle}>
					<img src={LOGIN_BG} className="g-br-circle g-img-60"/>
					<div className="g-lh-60 g-pd-l-10">账户名称</div>
					<Dropdown overlay={menu}>
						<div className="ant-dropdown-link g-lh-60 g-fs-12 g-pd-l-10" >
							<Icon type="caret-down" />
						</div>
					</Dropdown>
				</div>
				{
					createElement(
						this.props.component,
						{
							menuProps: {
								onClick: this.handleClick,
								theme: "dark",
								mode: mode,
								selectedKeys: [selectedKey],
								openKeys: [openKey],
								onOpenChange: this.handleOpenMenu,
								list: list,
							},
							actions: actions,
							location: location,
						}
					)
				}
			</Layout.Sider>
		);
	}
}
Aside.defaultProps = {
	// path
};

export default Aside;