// import request from '../utils/request';
import { queryHeroList, getHeroDetails, getFreeHeros } from 'services/api';

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
            const freeheros = yield call(getFreeHeros, { number: 13 });
            const localData = [
                {
                    ename: 105,
                    cname: '廉颇',
                    title: '正义爆轰',
                    new_type: 0,
                    hero_type: 3,
                    skin_name: '正义爆轰|地狱岩魂',
                },
                {
                    ename: 106,
                    cname: '小乔',
                    title: '恋之微风',
                    new_type: 0,
                    hero_type: 2,
                    skin_name: '恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽',
                },
            ];
            yield put({
                type: 'save',
                payload: {
                    heros: herolist || localData,
                    freeheros: freeheros,
                },
            });
        },
    },
};
