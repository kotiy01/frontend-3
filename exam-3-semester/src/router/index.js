import VueRouter from 'vue-router'
import MainPage from '../pages/MainPage'
import TasksPage from '../pages/TasksPage'

export default new VueRouter({
    mode: 'history',
    routes: [
        { 
           path: '/',
           name: 'main',
           component: MainPage
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: TasksPage
        }
    ]
})