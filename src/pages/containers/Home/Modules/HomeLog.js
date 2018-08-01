import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '@actions/home';
import * as types from '@constants/actions/home';
// 公用组件
// import SetTitle from '@components/_common/SetTitle/SetTitle';
// 业务组件

class Container extends Component {
	constructor(...params) {
		super(...params);
	}
	componentWillMount() {
		console.log("3e3434");
	}
	componentDidMount() {
		// this.loadData(this.props);
		console.log("fhjdfhjdv");
	}
	loadData($props){
		return;
		if ($props.homeMain.isFetching === 0) {
			let url = types.HOME_MAIN_GET;
			let param = {};

			let params = {
				param: param,
				ajaxType: 'GET',
				onSuccess: (res) => {
					//
				},
				onError: (res) => {
					//
				}
			};
			$props.actions.request(url, params, {});
		}
	}
	render() {
		return (
			<div>
				操作日志
			</div>
		);
	}
};

Container.propTypes = {};

function mapStateToProps(state) {
	return {
		homeMain: state.homeMain,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
