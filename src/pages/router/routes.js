// import { redirectToLogin, redirectToIndex, redirectVerifyBelong } from './auth';
import { loginConfig } from '../containers/Login/App';
import { homeConfig } from '../containers/Home/App';
import { codeConfig } from '../containers/Code/App';
import { securityConfig } from '../containers/Security/App';
import { setConfig } from '../containers/Set/App';
import Layout from './Layout';
export const routeConfig = [
	/**
	 * 模版部分
	 */
	{
		path: '/',
		component: Layout,
		indexRoute: { onEnter: (nextState, replace) => replace('/home/main') },
		childRoutes: [	
			
			// 首页
			...homeConfig,
			// 追溯
			...codeConfig,
			// 防伪
			...securityConfig,
			// 设置
			...setConfig,
		]
	},
	// 登录首页
	...loginConfig,
	// 授权回来后给后端发起请求
	{
		path: '/auth',
		// onEnter: redirectToIndex
	},
	// error
	{
		path: '*',
		onEnter: (nextState, replace) => replace('/login')
	}
];
