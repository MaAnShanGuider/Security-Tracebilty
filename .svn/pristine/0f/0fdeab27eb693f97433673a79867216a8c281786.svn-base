import React, { Component } from 'react';
import * as types from '@constants/actions/login';
import { createForm } from 'rc-form';
import { LOGIN } from "@constants/constants";
import From from './Form';
import "./Styles.scss";
@createForm()
class LoginForm extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div 
				className="v-login-box g-white g-flex-cc g-jc-c g-ai-c"
			>
				<div className="g-col g-tc g-pd-20 _left">
					<img src={LOGIN} className="_logo"/>
					<div className="g-fs-60 g-pd-t-10 g-color-white g-lh-66">
						防伪追溯系统
					</div>
					<div className="g-fs-24">
						店铺管理后台
					</div>
				</div>
				<From />
			</div>
		);
	}
}
export default LoginForm;