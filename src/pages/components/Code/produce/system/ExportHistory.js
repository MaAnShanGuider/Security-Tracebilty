import React, { Component } from "react";

class ExportHistory extends Component {
	constructor(props) {
		super(props);
	}

	renderTable = () => {

		return (
			<table>
				<thead>
					<tr>
						<th>文件名</th>
						<th align="center">生成状态</th>
						<th align="center">导出小码数量</th>
						<th align="center">下载次数</th>
						<th align="center">导出时间</th>
						<th align="left">操作</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>哈哈哈</td>
						<td>进行中</td>
						<td>100000</td>
						<td>11</td>
						<td>2018-06-22 15:33:20</td>							
						<td>
							<div>
								<span className="g-gray-dark">下载Excel</span>
								<span>|</span>
								<span>下载Txt</span>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
	render() {
		return (
			<div className="_table system-exporthistory g-pt-10">
				<div className="_exporthistory_title">导出历史<span className="">由于生成的数据量较大，请等待5分钟后再下载文件!</span></div>
				{ this.renderTable() }
			</div>
		);
	}
}

export default ExportHistory;