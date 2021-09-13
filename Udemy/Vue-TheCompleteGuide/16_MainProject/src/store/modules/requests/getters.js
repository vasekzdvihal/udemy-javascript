export default {
    requests(state) {
        return state.requests;
    },
    hasRequests(state) {
        return state.requests && state.requests.length > 0;
    },
    myRequests(state, getters, rootState, rootGetters) {
      const coachId = rootGetters.userId;
      return state.requests.filter(req => req.coachId === coachId);
    },
    hasMyRequests(state, getters) {
        return getters.myRequests && state.requests.length > 0;
    }
};