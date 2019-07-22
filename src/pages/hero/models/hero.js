// import request from '../utils/request';
// import { getHeroDetails } from 'services/api';
import { queryHeroList, getFreeHeros } from 'services/api';
import herolists from './herolist.json'
import freeheros from './freehero.json'

export default {
    namespce: 'hero',
    state: {
        heros: [],
        filterKey: 0,
        freeheros: [],
        itemHover: 0,
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/hero') {
                    dispatch({
                        type: 'fetch',
                    });
                }
            });
        },
    },
    reducers: {
        update(state) {
            return `${state}_hero`;
        },
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    effects: {
        * fetch({ type, payload }, { put, call, select }) {
            // const data = yield request('https://pvp.qq.com/web201605/js/herolist.json');
            // const data = yield request('/api/herolist.json')
            // const data = yield request('/api/herodetails.json', {
            //     method: 'POST',
            //     body: {
            //         ename: 110,
            //     },
            // });

            const herolist = yield call(queryHeroList);
            // const herodetails = yield call(getHeroDetails, { ename: 110 });
            // console.log(herodetails);
            const freehero = yield call(getFreeHeros, { number: 13 });

            yield put({
                type: 'save',
                payload: {
                    heros: herolist || herolists,
                    freeheros: freehero || freeheros,
                },
            });
        },
    },
};
