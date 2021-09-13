import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter';
import UsersFootere from './pages/UsersFooter';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            meta: { needsAuth: true },
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true } // /teams/t1
            ]
        }, // our-domain.com/teams => TeamsList
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFootere
            },
            beforeEnter(to, from, next) {
                console.log('users before enter');
                console.log(to, from);
                next();
            }
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        //console.log(to, from, savedPosition);
        if(savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0};
    }
});

router.beforeEach(function(to, form, next) {
    console.log('global beforeEach')
    console.log(to, form);
    // if(to.name === 'team-members') {
    //     next();
    // }
    //
    // next({name: 'team-members', params: {teamId : 't2' }});

    if(to.meta.needsAuth) {
        console.log('Needs auth!');
    }

    next();
});

router.afterEach(function (to, from) {
    // sending analytics data

    console.log('global afterEach');
    console.log(from, to);
});

export default router;