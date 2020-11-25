import { createRouter, createWebHistory } from 'vue-router';
import SuperHeros from '@/pages/SuperHeros'
import Calender from '@/pages/Calender'
import Home from '@/pages/Home'
import MarkDown from '@/pages/MarkDown'
import Slider from '@/pages/Slider'
import Calculator from '@/pages/Calculator'


const routes = [
    { path: '/', component: Home },
    { path: '/super-heros', component: SuperHeros },
    { path: '/calendar', component: Calender },
    { path: '/markdown', component: MarkDown },
    { path: '/slider', component: Slider },
    { path: '/calculator', component: Calculator },
    { path: '/modal', component: ReuseableModal },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;


