/**
 * 顶部导航栏Item
 */
import React, { PureComponent } from 'react';
import { getCookie } from "@utils/utils";

class TopNavItem extends PureComponent {
	constructor(){
		super();
		
	}
	handleClick = (item) => {
		_global.history.push(item.key);
	}
	render() {
		const { list, url, type } = this.props;
		let childOne = '首页', childTwo = [];
		for (let i = 0; i < list.length; i++){
			for (let j = 0; j < list[i].children.length; j++){
				let child = list[i].children[j];
				if (url === child.key) {
					if (child.children && child.children.length > 0 ){
						childTwo = child.children;
					}
					childOne = child.text;
				}
			}
		}
		return (
			<div >
				{
					childTwo.length !== 0 ?
						childTwo.map((item, index) => {
							let itemType = Number(item.key.split("?type=")[1]);
							return (
								<div 
									className={
										`g-pd-l-20 g-pd-r-10 g-lh-80 g-inline 
										${type && Number(type) === itemType ? "g-blue-middle" : 
									(!type && Number(index) === 0 ? "g-blue-middle" : "") }`
									} 
									key={index} 
									onClick={this.handleClick.bind(this, item)}
								>
									{item.text}
								</div>	
							);

						})
						:
						<div className="g-pd-l-20 g-lh-80">{childOne}</div>		
				}
				
			</div>
		);
	}
}

export default TopNavItem;
