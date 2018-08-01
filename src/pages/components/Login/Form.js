import React, { Component } from 'react';
import * as types from "@constants/actions/login";
import net from "@utils/net";
import API_ROOT from "../../constants/apiRoot";
import { createForm } from 'rc-form';
import { DebounceClick } from "wya-rc";
@createForm()
class LoginForm extends Component {
	constructor(props, context) {
		super(props, context);
	}
	componentWillMount() {
		// console.log("22222");
		// net.ajax({
		// 	url: API_ROOT[types._LOGIN_MAIN_VERIFICATION_GET],
		// 	type: "POST",
		// })
		// 	.then(response => {
		// 		console.log(response, "response");
			
		// 	})
		// 	.catch(errors => {
		// 		message.error(errors.msg);
		// 	});
	}
	render() {
		return (
			<div className="g-flex-cc g-fd-c g-jc-sb g-col g-fs-16">
				<div className="g-flex _input g-m-b-20">
					<label className="g-w-2 g-tr">账号</label>
					<input
						type="text"
						maxLength={20}
					/>
				</div>
				<div className="g-flex _input g-m-b-20">
					<label className="g-w-2 g-tr">密码</label>
					<input
						type="password"
						autoComplete="new-password"
					/>
				</div>
				<div className="g-m-b-20 g-flex g-jc-sb">
					<div className="g-flex _input-short">
						<label className="g-w-5 g-tr">验证码</label>
						<input type="text" />
					</div>
					{/* {
						net.ajax({
							url: API_ROOT[types._LOGIN_MAIN_VERIFICATION_GET],
							type: "POST",
						})
					} */}
				</div>
				
				<div className="g-flex _check">
					<input
						type="checkBox"
					/>
					<label className="g-w-3 g-fs-12 g-pd-l-20">忘记密码</label>
				</div>
				
				<DebounceClick>
					<div
						className="_login-btn g-m-t-10 g-tc"
						onClick={this.handleValidity} 
					>
						登录
					</div>
				</DebounceClick>
			</div>
		);
	}
}
export default LoginForm;