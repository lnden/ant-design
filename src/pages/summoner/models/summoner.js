import { querySummoner } from 'services/api';

export default {
    name: 'summoner',
    state: {
        summoners: [],
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/summoner') {
                    dispatch({
                        type: 'fetch',
                    });
                }
            });
        },
    },
    reducers: {
        save(state,{payload}){
            return {...state,...payload}
        }
    },
    effects: {
        * fetch({ type, payload }, { call, put, select }) {
            const summoner = yield call(querySummoner);
            yield put({
                type: 'save',
                payload:{
                    summoners:summoner
                }
            })
        },
    },
};
