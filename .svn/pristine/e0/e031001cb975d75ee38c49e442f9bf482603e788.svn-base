import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '@actions/code';
import * as types from '@constants/actions/code';
import { dataValidity, setItem, getItem, setCookie, getCookie } from '@utils/utils';
// 公用组件
// import SetTitle from '@components/_common/SetTitle/SetTitle';
// 业务组件
import Search from "@components/Code/List/Search";
import Table from "@components/Code/List/Table";

class Container extends Component {
	constructor(...params) {
		super(...params);
	}
	// 使用之前的数据设置cookie
	// componentDidMount() {
	// 	setCookie('admin', '%7B%22admin_id%22%3A7%2C%22username%22%3A%22admin%22%2C%22nickname%22%3A%22admin%22%2C%22type%22%3A2%2C%22job%22%3A%22%E7%AE%A1%E7%90%86%E5%91%98%22%2C%22head_img%22%3A%22http%3A%2F%2Foss.ruishan666.com%2Fimage%2Fxcx%2F180131%2F366383151314%2Ftimg.jpg%22%2C%22good%22%3A%22%22%2C%22introduction%22%3A%22%22%7D');
	// }
	render() {
		const { codeList = {}, actions } = this.props;
		console.log(codeList);
		return (
			<div className="g-page g-pd-10">
				<Search />
				<Table 
					listInfo={codeList}
					actions={actions}
				/>
			</div>
		);
	}
};

Container.propTypes = {};

function mapStateToProps(state) {
	return {
		codeList: state.codeList,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
