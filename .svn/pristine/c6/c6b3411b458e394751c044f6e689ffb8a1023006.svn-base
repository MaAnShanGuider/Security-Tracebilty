import * as types from '@constants/actions/code';
import { initPage, initItem } from '@utils/utils';
const initialState = {
	isFetching: 0, // 是否已经获取
	itemArr: [],
	itemObj: {},
	curPage: 1,

};
export const codeList = (state = initialState, action) => {
	let curPage, totalPage, items, id, selectArr, idArr, totalCount, itemArr, itemObj;
	switch (action.type) {
		case types.CODE_LIST_GET + '_ON':
			state = {
				...state,
				isEnd: 1
			};
			return state;

		case types.CODE_LIST_GET + '_SUCCESS':
			curPage = action.param.page; // 当前页
			totalPage = action.data.totalPage; // 后端给的字段
			items = initItem(action.data.lists, 'paper_id');
			totalCount = action.data.totalCount;
			totalPage = action.data.totalPage;
			state = {
				...state,
				curPage,
				totalPage,
				totalCount,
				itemArr: { ...state.itemArr, [curPage]: [...items.itemArr] },
				itemObj: { ...state.itemObj, ...items.itemObj },
				isEnd: 0
			};
			return state;
		case types.CODE_LIST_GET + '_SETPAGE':
			state = {
				...state,
				curPage: action.param.page,
			// selectArr: []
			};
			return state;
		case types.CODE_LIST_GET + '_ERROR':
			state = {
				...state,
				isEnd: 3
			};
			return state;
		default:
			return state;
	}
};
