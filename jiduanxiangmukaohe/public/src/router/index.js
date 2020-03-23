import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 创建组件
import Home from "../views/Home/Home.vue";
import Cart from "../views/Cart/Cart.vue";
import Category from "../views/Category/category.vue";
import Mine from "../views/Mine/Mine.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/mine",
    name: "Mine",
    component: Mine
  }
];

const router = new VueRouter({
  routes
});

export default router;
