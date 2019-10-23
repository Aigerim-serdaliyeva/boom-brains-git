const SET_MESSAGE = "SET_MESSAGE";

export const error = {
    namespaced: true,
    state: {
        hasError: false,
        message: null
    },
    getters: {
        hasError: ({ hasError }) => hasError,
        message: ({ message }) => message
    },
    mutations: {
        [SET_MESSAGE](state, message) {
            state.message = message;
            state.hasError = true;
        }
    },
    actions: {
        setMessage({ commit }, message) {
            commit(SET_MESSAGE, message);
        }
    }
};
