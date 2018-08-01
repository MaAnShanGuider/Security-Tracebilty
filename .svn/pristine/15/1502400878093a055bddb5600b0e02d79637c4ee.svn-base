/*
* 追溯
*/

// import { redirectUserToLogin, redirectUserToHome } from '@router/auth';
export const codeConfig = [
	{
		path: '/code',
		childRoutes: [
			{
				path: 'list', // 追溯码列表
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/CodeList').default);
					});
				},
				// onEnter: redirectUserToHome
			},
			{
				path: 'produce', // 追溯码生成
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/CodeProduce').default);
					});
				},
				// onEnter: redirectUserToHome
			},
			{
				path: 'detail', // 代理追溯码详情
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/CodeDetail').default);
					});
				},
				// onEnter: redirectUserToHome
			},
			{
				path: 'distribute', // 追溯码划拨
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/CodeDistribute').default);
					});
				},
				// onEnter: redirectUserToHome
			},
			{
				path: 'record', // 追溯码记录
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/CodeRecord').default);
					});
				},
				// onEnter: redirectUserToHome
			},
			{
				path: 'remind', // 窜货提醒
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/CodeRemind').default);
					});
				},
				// onEnter: redirectUserToHome
			},
		]
	},
	
];
