import { createRouter, createWebHistory } from 'vue-router';
import SuperHeros from '@/pages/SuperHeros'
import Calender from '@/pages/Calender'
import Home from '@/pages/Home'
import MarkDown from '@/pages/MarkDown'
import Slider from '@/pages/Slider'
import Calculator from '@/pages/Calculator'
import ReusableModal from '@/pages/ReusableModal'
import Chat from '@/pages/Chat'
import store from './store/index'

const routes = [
    { path: '/', component: Home },
    { path: '/super-heros', component: SuperHeros },
    { path: '/calendar', component: Calender },
    { path: '/markdown', component: MarkDown },
    { path: '/slider-carousel', component: Slider },
    { path: '/calculator', component: Calculator },
    { path: '/reusable-modal', component: ReusableModal },
    {
        path: '/chat',
        component: Chat,
        meta: { middleware: 'auth' }
        beforeEnter: (_, __, next) => {
            if (!store.state.isLoggedIn) {
                next('/');
            } else {
                next();
            }
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;


