import { createRouter, createWebHistory } from 'vue-router';
import SuperHeros from '@/pages/SuperHeros'
import Calender from '@/pages/Calender'
import Home from '@/pages/Home'
import MarkDown from '@/pages/MarkDown'
import Slider from '@/pages/Slider'
import Calculator from '@/pages/Calculator'
import ReusableModal from '@/pages/ReusableModal'

const routes = [
    { path: '/', component: Home },
    { path: '/super-heros', component: SuperHeros },
    { path: '/calendar', component: Calender },
    { path: '/markdown', component: MarkDown },
    { path: '/slider-carousel', component: Slider },
    { path: '/calculator', component: Calculator },
    { path: '/reusable-modal', component: ReusableModal },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;


