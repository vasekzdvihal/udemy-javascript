export default {
    testAuth(state, getters, rootState) {
        return rootState.isLoggedIn;
    },
    finalCounter(state) {
        return state.counter * 3;
    },
    normalizeCounter(_, getters) { // pouziva se kdyz to prvni nepouzivam ale potrebuji to abych se dostal ke druhymu
        if(getters.finalCounter < 0) {
            return 0;
        }
        if(getters.finalCounter > 100) {
            return 100;
        }
        return getters.finalCounter;
    },
}