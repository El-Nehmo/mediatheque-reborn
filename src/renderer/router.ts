import { createRouter, createMemoryHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Albums from "./pages/Albums.vue";
//import AlbumDetail from "./pages/AlbumDetail.vue";
import Categories from "./pages/Categories.vue";
import Utilisateurs from "./pages/Utilisateurs.vue";
import Exemplaires from "./pages/Exemplaires.vue";
import Locations from "./pages/Locations.vue";
import Reservations from "./pages/Reservations.vue";
import Paiements from "./pages/Paiements.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/albums', component: Albums },
    //{ path: '/albums/:id_album', component: AlbumDetail },
    { path: '/categories', component: Categories },
    { path: '/utilisateurs', component: Utilisateurs },
    { path: '/exemplaires', component: Exemplaires },
    { path: '/locations', component: Locations },
    { path: '/reservations', component: Reservations },
    { path: '/paiements', component: Paiements },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
]

export const router = createRouter({routes, history: createMemoryHistory()});