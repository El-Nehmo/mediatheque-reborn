import { createRouter, createMemoryHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Albums from "./pages/Albums.vue";
import AlbumDetail from "./pages/AlbumDetail.vue";
import Categories from "./pages/Categories.vue";
import Utilisateurs from "./pages/Utilisateurs.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/albums', component: Albums },
    { path: '/albums/:id_album', component: AlbumDetail },
    { path: '/categories', component: Categories },
    { path: '/utilisateurs', component: Utilisateurs }
]

export const router = createRouter({routes, history: createMemoryHistory()});