import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import { setCookie } from "@utils/utils";
class Nav extends Component {
	constructor(props) {
		super(props);
	}
	handleClick = (childUrl) => {
		_global.history.push(childUrl);
	}
	
	render() {
		const { menuProps, location: { pathname, search, query } } = this.props; 
		return (
			// 注意，这里的props是createNav中管理的
			<Menu {...menuProps}>
				{
					menuProps.list.map((item, index) => {
						return (
							<Menu.SubMenu 
								key={item.key} 
								title={
									<span className="_nav-text">
										<i className={`iconfont g-fs-19 g-m-r-10 g-icon ${item.icon}`} />
										{item.text}
									</span>
								}
							>
								{
									item.children.map((child, index) => {
										let childUrl = (pathname === child.key) && search ? `${child.key}${search}` : child.key;
										return (
											<Menu.Item key={childUrl}>
												<div onClick={this.handleClick.bind(this, childUrl)}>{child.text}</div>
											</Menu.Item>
										);
									})
								}
							</Menu.SubMenu>
						);
						
					})
				}
			</Menu>
		);
		
	}
}
export default Nav;