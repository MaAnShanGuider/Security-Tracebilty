import React, { Component } from 'react';
import { Form, message, Input, Button, Table, Select } from 'antd';
import { createForm, formShape } from 'rc-form';
import  net from "@utils/net";
const FormItem = Form.Item;
const Option = Select.Option;

const columns = [{
	title: '货号',
	dataIndex: 'pid',
	key: "pid",
	render: text => <span>{text}</span>,
	width: 180,
}, {
	title: '商品名称',
	key: "avator",
	dataIndex: 'avator',
	width: 340,
	render: (imgUrl, data) => {
		return (
			<div>
				<img src={imgUrl} className="_goods_img g-m-r-20" />
				<span classNam="_goods_name">{data.goods_name}</span>
			</div>
		);   
	}
}, {
	title: '规格',
	key: "pid",
	dataIndex: 'sku',
	render: (sku) => {
		return (
			<div>
				{
					sku.length > 0 
						? <Select
							showSearch
							style={{ width: 156 }}
							placeholder="请选择规格"
							onChange={handleSelectedClick}
						>
							{
								sku.map(ele => {
									return <Option value={ele.sku_pid} key={ele.sku_pid}>{ele.sku_name}</Option>;
								})
							}
						</Select>
						: <span>无</span>
				}
			</div>
                    
		);
	}
}];
const handleSelectedClick = (value) => {
	// 执行静态方法
	GoodsModal.getOptionsSelected(value);
};

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		GoodsModal.getTableSelected(selectedRowKeys, selectedRows);
	},
	getCheckboxProps: record => ({
        
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
		name: record.name,
	}),
	type: "radio",
};
const pagination = {
	pageSize: 5
};
let _this = null;
// const 



@createForm()
class GoodsModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: {},			
			hasSearch: false,
			hasTableSelected: false,
			selected: {
				selectedRowKeys: [],
				selectedRows: [],
				optionsValue: {},
			}
		};
	}
	static getTableSelected (selectedRowKeys, selectedRows) {
    	const selected = {};
    	selected.selectedRowKeys = selectedRowKeys;
		selected.selectedRows = selectedRows;
		selected.optionsValue = {};

		// 每一次选择之后，必须初始化optionsValue
        
    	_this.setState({
			selected,
			hasTableSelected: true
    	});
	}
	// 遍历出合适的值
	static getOptionsSelected (value) {
    	const { selected, list } = _this.state;
		let optionsValue = {};
		let selectedRowKeys = [];
		let selectedRows = [];
        
		let skuArr = list.reduce(function(pre, later, i){
			if (i === 1) {
				pre.sku.forEach(ele => {
					ele.key = pre.key;
				});
				later.sku.forEach(ele => {
					ele.key = later.key;
				});
				return pre.sku.concat(later.sku);
			} else {
				later.sku.forEach(ele => {
					ele.key = later.key;
				});
				return pre.concat(later.sku);
			}
		});
		// skuArr 把数据接口拍平了
		optionsValue = skuArr.filter((ele) => {
			return ele.sku_pid === value;
		});
		selectedRowKeys = [optionsValue[0].key];
		selectedRows = list.filter(ele => {
			return ele.key === optionsValue[0].key;
		});
		// console.log(selectedRowKeys, selectedRows, optionsValue, "123");
		selected.optionsValue = optionsValue;
		selected.selectedRowKeys = selectedRowKeys;
		selected.selectedRows = selectedRows;
    	_this.setState({
			selected: { ...selected },
			hasTableSelected: true
    	});
	}
	componentDidMount() {
		_this = this;
	}
	// 将数据传给父组件
	getSelectedGoodsToParent = () => {
		const { selectedGoods } = this.props;
		const { selected, hasSearch, hasTableSelected } = this.state;
		const { selectedRowKeys, selectedRows, optionsValue } = selected;
		
		rowSelection.selectedRowKeys = [];

		if (!hasSearch || !hasTableSelected) {
			message.error("请选择商品"); 
			return { 
				hasSkuBool: true, 
				hasTableSelected: true,
				hasSearch 
			};
		}

		const hasSkuBool =  selectedRows[0].sku.length > 0 && Object.keys(optionsValue).length === 0;
		// 这里如果有规格，但是没有选择规格，要给提示
		if (hasSkuBool) message.error('请选择规格');
			
		selectedGoods(selected, { hasSkuBool, hasSearch, hasTableSelected });
		return { hasSkuBool, hasSearch, hasTableSelected };
		
	}
    handleSearchSubmit = () => {
    	const { form } = this.props;
    	const keyword = form.getFieldValue("goods");
    	const hide = message.loading('请求商品数据中', 0);
        
    	// 在这里请求商品数据
    	net.ajax({ url: "/goods" })
    		.then((res) => {
    			// 提示消失
    			hide();
    			this.setState({
    				list: res.data.list,
    				hasSearch: true
    			});
    		}
    		);

    }
    render() {
    	const { getFieldDecorator } = this.props.form;
    	const { list, selected } = this.state;
    	const { optionsValue, selectedRowKeys } = selected;

    	if ( selectedRowKeys.length === 1 ) {
    		rowSelection.selectedRowKeys = selectedRowKeys;
    	}
    	return (
    		<div className="_goodsmodal">
    			<FormItem
    			>
    				{getFieldDecorator('goods', {
    					rules: [{ required: true, message: '请输入商品名称、货号' }],
    				})(
    					<Input  placeholder="请输入商品名称、货号进行搜索" />
    				)}
    				<Button type="primary" onClick={this.handleSearchSubmit}>搜索</Button>
    			</FormItem>
    			{
    				list.length > 0 
    					? <Table
    						rowSelection={rowSelection} 
    						columns={columns} 
    						dataSource={list} 
    						pagination={pagination} 
    						scroll={{ y: 420 }}
    						width={880}
    					/>
    					: null
    			}
    			
    		</div>
    	);
    }
}
export default GoodsModal;