import { createRouter, createWebHasHistory } from 'vue-router';
import SuperHeros from '@/components/SuperHeros'
import Calender from '@/components/Calender'

const routes = [
    { path: '/super-heros', component: SuperHeros },
    { path: '/calendar', component: Calender }
]

const router = VueRouter.createRouter({
    routes,
});
export default router;


