import { createRouter, createWebHistory } from 'vue-router';
import SuperHeros from '@/components/SuperHeros'
import Calender from '@/components/Calender'

const routes = [
    { path: '/super-heros', component: SuperHeros },
    { path: '/calendar', component: Calender }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;


