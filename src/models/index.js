export default {
    namespace: 'example',
    state: {
        count: 0,
    },
    reducers: {
        save() {
        },
    },
    effects: {
        * getData({ type, payload }, { call, put, select }) {
            // const user = yield select(states=>states.user)
            // const daata = yield call(doSomethingFunc, params);
            // yield put({ type: '', payload: {} });
        },
    },
    subscriptions: {
        setup() {
        },
    },
};
