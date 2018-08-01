/*
* 首页
*/

// import { redirectUserToLogin, redirectUserToHome } from '@router/auth';
export const setConfig = [
	{
		path: '/set',
		childRoutes: [
			{
				path: 'shop', // 店铺设置
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/SetShop').default);
					});
				},
				// onEnter: redirectUserToHome
			},
			{
				path: 'security', // 防伪追溯设置
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/SetSecurity').default);
					});
				},
				// onEnter: redirectUserToHome
			},
			{
				path: 'decoration', // 装修页面
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/SetDecoration').default);
					});
				},
				// onEnter: redirectUserToHome
			},
		]
	},
	
];
