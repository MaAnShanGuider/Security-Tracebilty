/*
* 防伪
*/

// import { redirectUserToLogin, redirectUserToHome } from '@router/auth';
export const securityConfig = [
	{
		path: '/security',
		childRoutes: [
			{
				path: 'list', // 防伪码列表
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/Securitylist').default);
					});
				},
				// onEnter: redirectUserToHome
			},
			{
				path: 'produce', // 防伪码生成
				getComponent: (nextState, cb) => {
					require.ensure([], (require) => {
						cb(null, require('./Modules/SecurityProduce').default);
					});
				},
				// onEnter: redirectUserToHome
			},
		]
	},
	
];
