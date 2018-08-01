/*
* 首页
*/

// import { redirectUserToLogin, redirectUserToHome } from '@router/auth';
export const homeConfig = [
	{
		path: '/home',
		childRoutes: [
			{
				path: 'main', // 首页
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/HomeMain').default);
					});
				},
				// onEnter: redirectUserToHome
			},
			{
				path: 'log', // 操作日志
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/HomeLog').default);
					});
				},
				// onEnter: redirectUserToHome
			},
		]
	},
	
];
