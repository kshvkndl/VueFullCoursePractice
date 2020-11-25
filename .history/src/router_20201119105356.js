import { createRouter, createWebHistory } from 'vue-router';
import SuperHeros from '@/pages/SuperHeros'
import Calender from '@/pages/Calender'
import Home from '@/pages/Home'
import MarkDown from '@/pages/MarkDown'


const routes = [
    { path: '/', component: Home },
    { path: '/super-heros', component: SuperHeros },
    { path: '/calendar', component: Calender },
    { path: '/markdown', component: MarkDown },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;


