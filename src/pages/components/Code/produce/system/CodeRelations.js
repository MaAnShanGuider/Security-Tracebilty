import React, { Component } from "react";
import classnames from "classnames";
import { Modal } from "antd";
import RelationsFixed from "./CodeRelationsFixed";
class CodeRelations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}
	handlClickShowModal = () => {
		this.setState({ visible: true });
	}
	handlClickShowModalSure = () => {

		// this.relationsFixed.xixi();
		this.relationsFixed.getParentData();
		this.setState({ visible: false });
	}
	handlClickShowModalCancel = () => {
		this.setState({ visible: false });
	}
	getCodeBox = (data) => {
		console.log(data);
	}
	render() {
		const { visible } = this.state;
		return (
			<div className="_box system-coderelations">
				<div className="_title">条码关系<span className="_relations_fixed" onClick={this.handlClickShowModal}>修改</span></div>
				<div className="_relations_text">
					<p>1大码=10中码</p>
					<p>1中码=10小码</p>
				</div>
				<Modal
					title="条码关系修改"
					visible={visible}
					onOk={this.handlClickShowModalSure}
					onCancel={this.handlClickShowModalCancel}
					destroyOnClose={true}
					okText="确认"
					cancelText="取消"
				>
					<RelationsFixed 
						wrappedComponentRef={relationsFixed => this.relationsFixed = relationsFixed}
						getCodeBox={this.getCodeBox}
					/>
				</Modal>
			</div>
		);
	}
}

export default CodeRelations;