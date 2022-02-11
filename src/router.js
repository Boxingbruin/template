import { createWebHistory, createRouter } from "vue-router";

//Website Home
import About from "./components/home/About.vue";
import Resources from "./components/home/Resources.vue";

//App Components
import ListBox from "./components/app/ListBox.vue";
//import Invoices from "./components/app/Invoices.vue";
import Login from "./components/app/user/Login.vue";
import Register from "./components/app/user/Register.vue";

// lazy-loaded
const Profile = () => import("./components/app/user/Profile.vue")
const BoardAdmin = () => import("./components/app/user/BoardAdmin.vue")
const BoardModerator = () => import("./components/app/user/BoardModerator.vue")
const BoardUser = () => import("./components/app/user/BoardUser.vue")

const routes = [
  {
    path: "/",
    name: "about",
    component: About,
  },
  {
    path: "/home",
    component: About,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/search",
    component: ListBox,
  },
  /*{
    path: "/invoices",
    component: Invoices,
  },*/
  {
    path: "/resources",
    component: Resources,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home', '/shop', '/resources', '/invoices', '/search', '/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });

export default router;