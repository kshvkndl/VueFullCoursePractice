import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            authUser: {},
            isLoginOpen: false,
        }
    },

    mutations: {
        setIsLoggedIn(state, payload) {
            state.isLoggedIn = payload;
        },

        setAuthUser(state, payload) {
            state.authUser = payload;
        },
        setLoginModal(state, payload) {

        }
    }
})

export default store;