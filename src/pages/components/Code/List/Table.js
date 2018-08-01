/**
 * 列表
 */
import React, { Component } from "react";
import { Button, Form, Select, DatePicker, message, Input } from "antd";
import { DebounceClick, Paging } from "wya-rc";
import { getHashUrl } from "@utils/utils";
import * as _common from "@constants/actions/_common";
import * as types from "@constants/actions/code";
import Item from "./Item";
import Btn from "./Btn";

const title = [
	"追溯码",
	"码规格",
	"商品",
	"出入库",
	"状态",
	"操作"
];
class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: false,
			showAll: false,
			checkedArr: {}
		};
		this.loadDataForPaging = this.loadDataForPaging.bind(this);
	}
	componentDidMount() {
		this.loadDataForPaging();
	}
	loadDataForPaging(page) {
		const { listInfo = {} } = this.props;
		const { itemArr } = listInfo;
		if (listInfo.isEnd > 0) { // 只有状态为0时才可以加载数据
			return false;
		}
		let url = types.CODE_LIST_GET;
		let param = {
			page: page || 1,
		};
		let params = {
			param: param,
			ajaxType: 'post',
			onSuccess: (res) => {
			},
			onError: (res) => {
				console.log(res);
			}
		};
		this.props.actions.request(url, params, { setPage: itemArr[page] });
	}
	handleSelectAll = () => {
		this.paging && this.paging.handleCheckAll();
	};
	handleRowSelection = () => {
		return {
			getCheckboxProps: (record) => ({
				disabled: false,
				checked: false,
			}),
			onChange: (selectedRowKeys, selectedRows) => {
				let curPage = this.props.listInfo.curPage;
				let checkedArr = this.state.checkedArr;
				let pageArr = [];
				let selectArr = [];
				checkedArr[curPage] = selectedRowKeys;
				for (let key in checkedArr) {
					pageArr.push(key);
					selectArr = [ ...selectArr, ...this.state.checkedArr[key] ];
				};
				this.setState({
					checkedArr: checkedArr,
					pageArr: [...pageArr],
					selectArr: [...selectArr]
				});		
			},
		};
	}
	render() {
		const { listInfo, actions } = this.props;
		const {
			isEnd,
			curPage,
			totalPage,
			resetPage,
			itemArr,
			itemObj,
			selectArr
		} = listInfo;
		;
		return (
			<div >
				<Paging
					title={title}
					isEnd={isEnd}
					curPage={curPage}
					totalPage={totalPage}
					loadDataForPaging={this.loadDataForPaging}
					resetPrvScrollTop={curPage}
					resetPage = {resetPage}
					ref={paging => this.paging = paging}
					rowSelection={this.handleRowSelection()}
					dataSource={{ itemArr, itemObj }}
					renderRow={Item}
					actions={actions}
					rowProps={{ selectArr: this.state.selectArr, onOffline: this.handleOffline }}
					showTotal={
						totalCount => `共 ${
							this.props.listInfo.totalCount == undefined 
								? "" : this.props.listInfo.totalCount
						} 条数据`
					}
				>
					<Btn 
						selectArr={this.state.selectArr}
						itemArr={itemArr[curPage]}
						actions={actions}
						onSelectAll={this.handleSelectAll}
					/>
				</Paging>
			</div>
		);
	}
}

export default Table;
