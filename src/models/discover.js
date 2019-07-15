export default {
    namespace: 'discover',
    state: 0,
    reducers: {
        add(state){
            console.log(state,111111)
            return state + 1
        },
        sub(state){
            console.log(state,222222)
            return state - 1
        }
    }
}
