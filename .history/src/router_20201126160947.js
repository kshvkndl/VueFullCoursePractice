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
    { path: '/calculator', component: Calculator, meta: { middleware: 'auth' }, },
    { path: '/reusable-modal', component: ReusableModal },
    {
        path: '/chat',
        component: Chat,
        meta: { middleware: 'auth' },
    },
    { path: '/reusable-modal', component: ReusableModal },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _, next) => {
    if (to.meta.middleware) {
        const middleware = require(`./middleware/${to.meta.middleware}`);
        if (middleware) {
            middleware.default(next, store);
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;


