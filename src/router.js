import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "./views/Home")
    },
    {
      path: "/colors",
      name: "colors",
      component: () =>
        import(/* webpackChunkName: "colors" */ "./views/Colors")
    },
    {
      path: "/typography",
      name: "typography",
      component: () =>
        import(/* webpackChunkName: "typography" */ "./views/Typography")
    },
    {
      path: "/grid",
      name: "grid",
      component: () =>
        import(/* webpackChunkName: "grid" */ "./views/Grid")
    }
  ]
});
