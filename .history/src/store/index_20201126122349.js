import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
        }
    },

    mutations: {
        serIsLoggedIn(state) {
            state.isLoggedIn = true;
        }
    }
})

export default store;