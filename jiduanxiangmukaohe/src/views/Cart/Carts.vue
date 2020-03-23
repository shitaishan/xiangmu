<!--  -->
<template>
  <div class="cart">
    <Header title="购物车" />
    <div class="cart-content">
      <ul>
        <li v-for="(cartsListData,index) in cartsListDatas" :key="cartsListData.product_id">
          <div class="select" @click="clickRadio(cartsListData)">
            <i class="iconfont icon-weixuanzhong" v-show="!cartsListData.showHide"></i>
            <i class="iconfont icon-xuanzhong" v-show="cartsListData.showHide" style="color:green"></i>
          </div>
          <div class="cart-img">
            <img :src="cartsListData.product_img_url" alt />
          </div>
          <div class="cart-info">
            <div class="cart-title">{{cartsListData.product_name}}</div>
            <div class="cart-wrap">
              <span class="price">{{cartsListData.product_price}}</span>
              <div class="number">
                <a @click="jianCarts(index)">-</a>
                <input type="text" value="1" v-model="cartsListData.value" />
                <a @click="addCarts(index)">+</a>
                <button @click="deleteCarts(index)">删除</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="noCart" v-show="!cartsListDatas.length>0">
      <i class="iconfont icon-ziyuan"></i>
      <p>
        购物车是空的，
        <router-link to="/">请去选择您喜欢的商品</router-link>
      </p>
    </div>
    <div class="cartFooter" v-show="cartsListDatas.length>0">
      <div class="checkAll" @click="checkAll()">
        <i class="iconfont icon-weixuanzhong" v-show="!flag"></i>
        <i class="iconfont icon-xuanzhong" v-show="flag" style="color:green"></i>
        <span>全选</span>
      </div>
      <div class="priceAll">
        <span>{{zongjia}}</span>
      </div>
      <div class="tobuy">
        <a href="javascript:;">立即结算</a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "./component/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapMutations } from "vuex";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    Footer
  },
  data() {
    //这里存放数据
    return {
      flag: false
    };
  },
  computed: {
    cartsListDatas() {
      return this.$store.state.carts;
    },
    // 计算总价
    zongjia() {
      var zongjia = 0;
      this.$store.state.carts.forEach(cart => {
        if (cart.showHide) {
          zongjia += cart.product_price * cart.value;
        }
      });
      return zongjia;
    }
  },
  methods: {
    ...mapMutations(["jianCarts", "addCarts", "deleteCarts"]),
    // 单选框
    clickRadio(cartsListData) {
      cartsListData.showHide = !cartsListData.showHide;
      //   定义一个空数组存放数据
      var arr = [];
      //   this.$store.state.carts为购物车中的数据
      var cartData = this.$store.state.carts;
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].showHide) {
          arr.push(cartData[i]);
        }
      }
      //   如果数组中存放的数据长度等于购物车中的数据长度，视为全选中
      if (arr.length == cartData.length) {
        this.flag = true;
      }
      if (!cartsListData.showHide) {
        this.flag = false;
      }
    },
    checkAll() {
      this.flag = !this.flag;
      if (this.flag) {
        this.$store.state.carts.forEach(cart => {
          cart.showHide = true;
        });
      } else {
        this.$store.state.carts.forEach(cart => {
          cart.showHide = false;
        });
      }
    }
  },
  mounted() {}
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.cart-content {
  width: 100%;
  margin-bottom: 1.4rem;
  li {
    display: flex;
    height: 3.6rem;
    border-bottom: 1px solid #efefef;
    .select {
      width: 10%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      i {
        font-size: 0.6rem;
      }
    }
    .cart-img {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .cart-info {
      width: 65%;
      display: flex;
      margin-left: 5%;
      flex-direction: column;
      justify-content: center;
      input {
        width: 1.2rem;
        text-align: center;
        border: 1px solid #ccc;
        outline: none;
        float: left;
        line-height: 18px;
      }
      .cart-title {
        font-size: 0.37rem;
        height: 1rem;
        margin-bottom: 10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
      }
      .price {
        color: red;
        font-size: 0.5rem;
        &::before {
          content: "￥";
        }
        float: left;
      }
      .number {
        float: right;
        a {
          float: left;
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          background: #efefef;
          font-size: 0.32rem;
        }
        button {
          width: 40px;
          height: 20px;
          background: #efefef;
          font-size: 0.32rem;
          border: none;
          outline: none;
          float: left;
          margin: 0px 10px;
        }
      }
    }
  }
}
.cartFooter {
  position: fixed;
  height: 1.2rem;
  background: #efefef;
  bottom: 1.7rem;
  width: 100%;
  display: flex;
  font-size: 0.37rem;
  line-height: 1.2rem;
  .checkAll {
    width: 30%;
    text-align: center;
    i {
      font-size: 0.6rem;
    }
    span {
      font-size: 0.5rem;
    }
  }
  .priceAll {
    width: 40%;
    span {
      color: red;
      font-weight: bold;
      font-size: 0.5rem;
      &::before {
        content: "￥ ";
      }
    }
  }
  .tobuy {
    width: 30%;
    background: #ff8347;
    text-align: center;
    a {
      color: #ffffff;
      font-size: 0.5rem;
    }
  }
}
.noCart {
  i {
    font-size: 4rem;
    color: #cccccc;
    margin: 2rem 0 0.5rem;
  }
  font-size: 0.37rem;
  color: #999;
  text-align: center;
}
</style>