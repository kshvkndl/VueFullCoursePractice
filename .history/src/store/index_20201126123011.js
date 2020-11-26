import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            authUser: {},
        }
    },

    mutations: {
        setIsLoggedIn(state) {
            state.isLoggedIn = true;
        }
        setAuthUser(state) {
            state.authUser = 
        }
    }
})

export default store;