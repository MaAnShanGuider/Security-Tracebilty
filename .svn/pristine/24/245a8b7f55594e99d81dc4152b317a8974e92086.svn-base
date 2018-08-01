/**
 * 搜索栏
 */
import React, { Component } from "react";
import { Button, Form, Select, DatePicker, message, Input } from "antd";
import { DebounceClick } from "wya-rc";
import { getHashUrl } from "@utils/utils";
import moment from "moment";
import * as _common from "@constants/actions/_common";

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const Option = Select.Option;

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: false,
			showAll: false,
		};
		this.loadModuleList();
	}

	handleSearch = event => {
		
	};

	loadModuleList = () => {
		
	};
	handleShow = () => {
		this.setState({
			showAll: !this.state.showAll,
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { showAll } = this.state;
		return (
			<div
				className="g-pd-20 g-antd-select-container"
				id="popup-container"
			>
				<Form layout="inline">
					<FormItem>
						{getFieldDecorator('name', {
							rules: [{
								required: true,
								message: 'Input something!',
							}],
						})(
							<Input 
								placeholder="请输入追溯码进行搜索"
								style={{ width: 300 }}
							 />
						)}
					</FormItem>
					<DebounceClick
						className="g-btn-blue"
						style={{ marginTop: 4 }}
						tag={Button}
						onClick={this.handleSearch}
					>
					搜索
					</DebounceClick>
					<span 
						className="g-m-l-20"
						onClick={this.handleShow}
					>
					更多筛选条件
					</span>
					{
						showAll &&
						<div className="g-bg-search g-pd-20 g-m-t-20">
							<FormItem>
								{getFieldDecorator("module", {
									initialValue: ''
								})(
									<Select
										style={{ width: 220 }}
										placeholder="操作模块"
										size="default"
										className="g-input-ph"
										allowClear
										getPopupContainer={() =>
											document.getElementById("popup-container")
										}
									>
										<Option
											value="44444"
										>
									333333
										</Option>
										<Option
											value="44444"
										>
									333333
										</Option>
										<Option
											value="44444"
										>
									333333
										</Option>
									</Select>
								)}
							</FormItem>

							<FormItem>
								{getFieldDecorator("start_time", {
									initialValue: ""
								})(
									<DatePicker 
										showTime 
										format="YYYY-MM-DD HH:mm:ss"
										placeholder="操作开始时间"
										className="g-input-ph"
										style={{ width: 220 }}
							 />
								)}
							</FormItem>
							<FormItem>
								{getFieldDecorator("end_time", {
									initialValue: ""
								})(
									<DatePicker 
										showTime 
										format="YYYY-MM-DD HH:mm:ss"
										placeholder="操作结束时间"
										className="g-input-ph"
										style={{ width: 220 }}
							 />
								)}
							</FormItem>
							<DebounceClick
								className="g-btn-blue"
								style={{ marginTop: 4 }}
								tag={Button}
								onClick={this.handleSearch}
							>
							筛选
							</DebounceClick>
						</div>
					}
					
				</Form>
				
			</div>
		);
	}
}

export default Form.create()(Search);
