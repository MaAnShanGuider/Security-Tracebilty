import React, { Component } from "react";
import { Modal } from 'antd';
import GoodsModal from "./CodeSettingsGoodsModal";

class CodeSettings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			selected: {}
		};
	}
	// 点击打开弹窗
	handleClickShowGoods = () => {
		
		this.setState({ visible: true });
	}
	// 弹窗确定按钮
	handleClickShowGoodsSure = () => {
		let obj = this.goodsModal.getSelectedGoodsToParent();
		let hasSkuBool = obj.hasSkuBool;
		let hasSearch = obj.hasSearch;
		let hasTableSelected = obj.hasTableSelected;

		// 必须搜索之后，有规格就选择规格，没规格就不选规格，然后渲染，否则不渲染

		if (hasSearch && hasTableSelected && !hasSkuBool) {

		}
		this.setState({ 
			visible: !(hasSearch && !hasSkuBool && hasTableSelected )
		 });
	}
	// 弹窗取消按钮
	handleClickShowGoodsCancel = () => {

		this.setState({ visible: false });
	}
	getSelectedGoods = (data, obj) => {
		// 为真，阻止关闭；为假，一切正常。
		const { hasSearch, hasSkuBool, hasTableSelected } = obj;
 		if (hasSearch && hasTableSelected && !hasSkuBool) {
			this.setState({
				selected: data
			});
		}		
	}
	render() {
		const { visible, selected } = this.state;
		const len = Object.keys(selected).length;
		return (
			<div className="_box system-codesettings">
				<div className="_title">条码设置</div>
				<div className="g-pd-20 _goods_preview g-flex">
					
					{
						len > 0 
							? (
								<div className="_goods_content g-flex" onClick={this.handleClickShowGoods}>
									<img src={selected.selectedRows[0].avator} alt=""/>
									<div className="_goods_detail">
										<div>{selected.selectedRows[0].goods_name}</div>
										<div>{selected.optionsValue[0].sku_name}</div>
									</div>
								</div>
							)
							: (<i onClick={this.handleClickShowGoods}>＋</i>)
					}
					<Modal
						title="请选择商品"
						visible={visible}
						onOk={this.handleClickShowGoodsSure}
						onCancel={this.handleClickShowGoodsCancel}
						destroyOnClose={true}
						width={880}
						okText="确认"
						cancelText="取消"
					>
						<GoodsModal 
							wrappedComponentRef={goodsModal => this.goodsModal = goodsModal} 
							selectedGoods={this.getSelectedGoods}
						/>
					</Modal>
				</div>
			</div>
		);
	}
}

export default CodeSettings;