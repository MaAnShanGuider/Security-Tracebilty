import React, { Component } from "react";
import { Button, message, Modal, Checkbox } from "antd";
import * as types from '@constants/actions/Code';
class Btn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			selectArr: []
		};
		this.handleSelectAll = this.handleSelectAll.bind(this);
	}
	componentDidMount () {

	}
	componentWillReceiveProps(nextProps){

	}
	handleSelectAll() {
		const { onSelectAll } = this.props;
		onSelectAll && onSelectAll();
	}
	render() {
		let { selectArr = [], itemArr = [] } = this.props;
		console.log(itemArr);
		return (
			<div className="g-pd-lr-10">
				<Checkbox
					className="g-m-r-10 "
					onClick={this.handleSelectAll}
					indeterminate={selectArr && selectArr.length > 0 && selectArr.length < itemArr.length ? true : ""}
					checked={selectArr.length == itemArr.length ? true : false}
				>
					<span className="g-pd-r-10">全选</span>
				</Checkbox>
				<Button className="g-m-r-10" >批量作废</Button>
				<Button className="g-m-r-10">批量划拨</Button>
				<Button className="g-m-r-10">批量删除</Button>
			</div>
		);
	}
}
export default Btn;