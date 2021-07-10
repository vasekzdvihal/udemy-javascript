import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import TeamMembers from "./components/teams/TeamMembers";
import UsersList from './components/users/UsersList';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/teams', component: TeamsList },
        { path: '/teams/:teamId', component: TeamMembers },
        { path: '/users', component: UsersList },
    ],
    linkActiveClass: 'active'
});

const app = createApp(App)
app.use(router);
app.mount('#app');
