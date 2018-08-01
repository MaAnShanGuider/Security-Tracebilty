import React, { Component } from "react";
import * as types from '@constants/actions/Code';
import { Modal, Button, message, Checkbox } from 'antd';
class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			selectArr: []
		};
	}
	componentDidMount () {

	}
	componentWillReceiveProps(nextProps){

	}
	render() {
		let { itemData, rowSelection, selectArr = [] } = this.props;
		return (
			<tr>
				
				<td width="55px">
					<Checkbox
						disabled = {rowSelection.disabled}
						checked={rowSelection.checked}
						onChange={rowSelection.onChange}
					/>
				</td>
				
				<td style={{ width: 205 }}>
					<p>111</p>
				</td>
				<td>
					<p>222</p>
				</td>
				<td>
					333
				</td>
				<td>
					444
				</td>
				<td>
					555
				</td>
				<td>
					666
				</td>
			</tr>
		);
	}
}
export default Item;