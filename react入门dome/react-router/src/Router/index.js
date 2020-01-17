import Index from '../view/Index';
import User from '../view/User';
import About from '../view/About';

export const Menus = [
    { path: '/', exact: true, component: Index },
    { path: '/user', component: User },
    { path: '/about', component: About },
]