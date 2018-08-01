import React, { Component } from "react";
import { createForm } from "rc-form";
import { Form, Checkbox, Input, Col, InputNumber   } from "antd";
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

@createForm()
class RelationsFixed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasChecked: {
				bigCode: false,
				middleCode: false,
				defaultCode: false
			},
			hasCheckedValues: [],
			inputDisabled: {
				bigCode: true,
				middleCode: true,
			}
		};
	}
	// 这种情况下，我要遍历所有的值，并且
	getParentData = () => {
		const { validateFields } = this.props.form;
		const obj = {};
		console.log(this.props.form.getFieldsValue());
        
		validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}
    // 能想出这种需求的产品，绝对是人才。
    handleCheckboxGroupClick = (values) => {
    	const { hasCheckedValues } = this.state;
        
    	// const 
    	

    }
    // 自己写个点击事件，和上面的其实是有冲突的。不过不慌
    handleCheckboxClick = (value) => {
    	const { hasChecked, inputDisabled } = this.state;
    	const { bigCode, middleCode, defaultCode } = hasChecked;
    	
    	switch (value){
    		case 'defaultCode':
    			if (!defaultCode) {
    				hasChecked.defaultCode = true;
    				hasChecked.middleCode = false;
    				hasChecked.bigCode = false;
        
    				inputDisabled.bigCode = true;
    				inputDisabled.middleCode = true;
    				this.setState({
    					hasCheckedValues: ["defaultCode"],
    					hasChecked: { ...hasChecked },
    					inputDisabled: { ...inputDisabled }
                        
    				});
    			} else {
    				hasChecked.defaultCode = false;
    				// hasChecked.middleCode = false;
    				// hasChecked.bigCode = false;
        
    				this.setState({
    					hasCheckedValues: [],
    					hasChecked: { ...hasChecked }
                        
    				});
    			}
    			break;
    		case 'bigCode':
    			if (!bigCode) {
    				hasChecked.defaultCode = false;
    				hasChecked.middleCode = true;
    				hasChecked.bigCode = true;
        
    				inputDisabled.bigCode = false;
    				inputDisabled.middleCode = false;
    				this.setState({
    					hasCheckedValues: ["bigCode", "middleCode"],
    					hasChecked: { ...hasChecked },
    					inputDisabled: { ...inputDisabled }
                        
    				});
    			} else {
    				hasChecked.bigCode = false;
    				let arr = hasChecked.middleCode ? ["middleCode"] : [];

    				inputDisabled.bigCode = true;
    				this.setState({
    					hasCheckedValues: arr,
    					hasChecked: { ...hasChecked },
    					inputDisabled: { ...inputDisabled }
                        
    				});
    			}
    			break;
    		case 'middleCode':
    			if (!middleCode) {
    				hasChecked.defaultCode = false;
    				hasChecked.middleCode = true;
                    
    				let arr = hasChecked.bigCode ? ["bigCode", "middleCode"] : ["middleCode"];
                    
    				// inputDisabled.bigCode = !hasChecked.bigCode;
    				inputDisabled.middleCode = false;

    				this.setState({
    					hasCheckedValues: arr,
    					hasChecked: { ...hasChecked },
    					inputDisabled: { ...inputDisabled }
                        
    				});
    			} else {
    				hasChecked.middleCode = false;
                    
    				// 在这里需要判断，之前的 middleCode = true 是自己设的，还是bigCode给的。
    				let arr = hasChecked.bigCode ? ["bigCode"] : [];

    				// inputDisabled.bigCode = !hasChecked.bigCode;
    				inputDisabled.middleCode = true;
                    
    				this.setState({
    					hasCheckedValues: arr,
    					hasChecked: { ...hasChecked },
    					inputDisabled: { ...inputDisabled }
                        
    				});
    				
    			}
    			break;
    		default:
    			return;
    	};
    }
    // 使用了CheckGroup就不能再使用Check中的checked
    render() {
    	const { getFieldDecorator } = this.props.form;
    	const { inputDisabled, hasCheckedValues } = this.state;
    	const { bigCode, middleCode } = inputDisabled;
        
    	return (
    		<div className="_relationsfixed">
    			<p className="_relationsfixed_warning">确认修改入库后，入库页面将刷新，数据将会清空，请注意!</p>
				

    			<CheckboxGroup style={{ width: '100%' }} onChange={this.handleCheckboxGroupClick} value={hasCheckedValues}>
    				<FormItem>
    					<div>
    						<Checkbox value="bigCode" onClick={() => this.handleCheckboxClick("bigCode")}><span className="_relationsfixed_code_prefix">1大码=</span></Checkbox>
    						
    						{
    							getFieldDecorator("bigCode", {
    								initialValue: 10,
    								disabled: true,
    								rules: [{
    									type: 'number',
    									required: true,
    									message: "丢你楼某"
    								}],
    							})(
    								<InputNumber style={{ width: 86, marginRight: 10 }} disabled={bigCode} /> 
    							)
    							}
    						<span className="_relationsfixed_code_suffix">中码<i>(三级关系)</i></span>
    					</div>
    				</FormItem>
    				<FormItem>
    					<div>
    						<Checkbox value="middleCode" onClick={() => this.handleCheckboxClick("middleCode")}><span className="_relationsfixed_code_prefix">1中码=</span></Checkbox>
    						
    						{
    							getFieldDecorator("middleCode", {
    								initialValue: 10,
    								
    								rules: [{
    									type: 'number',
    									required: true,
    									message: "丢你楼某"
    								}],
    							})(
    								<InputNumber style={{ width: 86, marginRight: 10 }} disabled={middleCode} /> 
    							)
    							}
    						<span className="_relationsfixed_code_suffix">小码<i>(二级关系)</i></span>
    					</div>
    				</FormItem>
    				<FormItem>
    					<div>
    						<Checkbox value="defaultCode" onClick={() => this.handleCheckboxClick("defaultCode")}><span className="_relationsfixed_code_prefix">默认条码关系</span></Checkbox>
    						<span className="_relationsfixed_code_suffix"><i>(一级关系)</i></span>
    					</div>
    				</FormItem>
    			</CheckboxGroup>
    		</div>
    	);
    }
}
export default RelationsFixed;