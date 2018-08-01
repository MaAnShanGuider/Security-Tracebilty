import * as types from '../constants/actions/layout';
/**
 * 引入共用的action
 * ajax
 */
export { request } from './_common/request';

export const initHomeMain = () => {
	return {
		type: types.LOYOUT_HOME_MAIN_INIT
	};
};
export const menuInit = () => {
	return {
		type: types.LAYOUT_MENU_ITEM_CLICK
	};
};
export const topText = (text, child) => {
	return {
		type: types.LAYOUT_MENU_TOP_TEXT,
		text,
		child
	};
};


