import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            authUser: {},
        }
    },

    mutations: {
        serIsLoggedIn(state) {
            state.isLoggedIn = true;
        }
        setAuthUser(state) {
            state.authUser
        }
    }
})

export default store;