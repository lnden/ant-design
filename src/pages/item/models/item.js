import { queryItem } from 'services/api';

export default {
    name: 'item',
    state: {
        items: [],
        filterKey: 0
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/item') {
                    dispatch({
                        type: 'fetch',
                    });
                }
            });
        },
    },
    reducers: {
        save(state, { payload }) {
            return { ...state, ...payload };
        },
    },
    effects: {
        * fetch({ type, payload }, { put, call, select }) {
            const item = yield call(queryItem);
            yield put({
                type: 'save',
                payload: {
                    items: item,
                },
            });
        },
    },
};
