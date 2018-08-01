import React, { Component } from "react";

// 引入小组件
import CodeSettings from "./system/CodeSettings";
import CodeRelations from "./system/CodeRelations";
import ExportHistory from "./system/ExportHistory";
import ExportSettings from "./system/ExportSettings";
class System extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="g-pd-20 g-pt-20 v-code">
								
				<div className="g-flex">
					<div className="g-m-r-20">
						<CodeSettings  />
						<CodeRelations />
					</div>
					<ExportSettings />
				</div>
				<ExportHistory />			
			</div>
		);
	}
}

export default System;