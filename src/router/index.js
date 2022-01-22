import Vue from 'vue';
import VueRouter from 'vue-router';

// pages
import home from '@/views/home/index.vue';
import movieDetails from '@/views/details/index.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: home,
    },
    {
        path: "/movie/:id",
        name: "movie-details",
        component: movieDetails,
    }
]

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;