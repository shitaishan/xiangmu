<!--  -->
<template>
  <div>
    <Header title="商品详情" />
    <div class="detail-wrap">
      <div class="banner-wrap" id="banner">
        <mt-swipe :auto="8000">
          <mt-swipe-item
            v-for="detailBannerData in detailBannerDatas"
            :key="detailBannerData.image_id"
          >
            <img :src="detailBannerData.image_url" alt />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="detail-content">
        <h3>{{detailDatas.product_name}}</h3>
        <div class="price">
          <span>{{detailDatas.product_price}}</span>
          <span>{{detailDatas.product_num}}</span>
        </div>
        <span class="pinpai">{{detailDatas.product_pinpai}}</span>
        <span class="zhifu">{{detailDatas.product_zhifu}}</span>
        <div class="detail-xq">
          <div class="xq">{{detailDatas.product_detail}}</div>
          <div class="canshu">{{detailDatas.product_canshu}}</div>
        </div>
        <div class="title">{{detailDatas.product_title}}</div>
        <p class="jieshao">{{detailDatas.product_jieshao}}</p>
        <div class="chuliqi">
          <span>{{detailDatas.product_xianka}}</span>
          <span>{{detailDatas.product_chuliqi}}</span>
        </div>
        <img :src="detailDatas.product_img_url" alt />
      </div>
    </div>

    <div class="detailFooter">
      <div class="kefu">
        <i class="iconfont icon-xiaoxizhongxin" style="color:green"></i>
        <span>客服</span>
      </div>
      <div class="shoucang">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </div>
      <div class="addCart" @click="[addCartsFn(detailDatas),toCarts()]">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "./component/Header.vue";
import Axios from "axios";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header
  },
  data() {
    //这里存放数据
    return {
      detailBannerDatas: [],
      detailDatas: []
    };
  },
  computed: {
    cartDataLength() {
      var cartCount = 0;
      this.$store.state.carts.forEach(cartData => {
        cartCount += cartData.value;
      });
      return cartCount;
    }
  },
  methods: {
    getProductDetailDatasFn(id) {
      Axios.get("http://localhost:3000/api/goodsdetail?pid=" + id).then(res => {
        console.log(res.data.detailDatas);
        this.detailBannerDatas = res.data.detailDatas[0];
        this.detailDatas = res.data.detailDatas[1];
      });
    },
    addCartsFn(data) {
      console.log(data);
      console.log(this.$store.state.carts);
      if (this.$store.state.carts != "undefined") {
        var isCarts = this.$store.state.carts.find(function(value) {
          if (value.product_id == data.product_id) {
            value.value++;
          }
          return value.product_id == data.product_id;
        });
        console.log(isCarts);
        if (!isCarts) {
          var cartData = {
            product_id: data.product_id,
            category_id: data.category_id,
            product_name: data.product_name,
            product_price: data.product_price,
            product_img_url: data.product_img_url,

            value: 1,
            showHide: false
          };
        }
      }
      this.$store.commit("setCartsDatas", cartData);
    },
    toCarts() {
      this.$router.push("/cart");
    }
  },
  mounted() {
    this.getProductDetailDatasFn(this.$route.params.id);
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.detail-wrap {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin-top: 1.3rem;
  margin-bottom: 1.4rem;
  .banner-wrap {
    height: 7rem;
    img {
      height: 7rem;
      width: 100%;
    }
    .mint-swipe-indicator {
      background: red;
      opacity: 1;
      width: 18px;
      border-radius: 0;
    }
    .mint-swipe-indicator.is-active {
      background: yellow;
    }
  }
  .detail-content {
    margin-top: 20px;
    h3 {
      width: 100%;
      height: 1.5rem;
      font-size: 0.5rem;
      line-height: 2rem;
      text-indent: 0.5rem;
      border-left: 2px solid lightgray;
      margin-left: 2px;
    }
    .price {
      width: 100%;
      height: 0.8rem;
      text-indent: 0.5rem;
      span:nth-child(1) {
        font-size: 0.5rem;
        float: left;
        color: #f00;
        &::before {
          content: "￥：";
        }
      }
      span:nth-child(2) {
        font-size: 0.4rem;
        float: right;
        margin-right: 5px;
        color: lightgray;
        line-height: 0.8rem;
        &::before {
          content: "库存：";
        }
      }
    }
    .pinpai {
      text-indent: 0.5rem;
      display: block;
      font-size: 0.4rem;
      color: gray;
      margin-bottom: 5px;
      &::before {
        content: "品牌：";
      }
    }
    .zhifu {
      text-indent: 0.5rem;
      display: block;
      font-size: 0.4rem;
      color: gray;
      margin-bottom: 38px;
      &::before {
        content: "支付：";
      }
    }
    .detail-xq {
      width: 100%;
      font-size: 0.5rem;
      height: 1.5rem;
      margin-bottom: 60px;
      .xq {
        color: #f00;
        width: 50%;
        float: left;
        text-align: center;
        line-height: 1.5rem;
        border-right: 1px solid lightgray;
        border-bottom: 2px solid #f00;
      }
      .canshu {
        width: 49.5%;
        float: right;
        text-align: center;
        line-height: 1.5rem;
        border-bottom: 1px solid lightgray;
      }
    }
    .title {
      width: 100%;
      text-align: center;
      font-size: 0.7rem;
      font-weight: 400;
      margin-bottom: 15px;
    }
    .jieshao {
      width: 100%;
      text-align: center;
      font-size: 0.5rem;
      font-weight: 400;
      margin-bottom: 20px;
      color: gray;
    }
    .chuliqi {
      width: 100%;
      font-size: 0.37rem;
      color: darkred;
      text-align: center;
      margin-bottom: 100px;
      span:nth-child(2) {
        border: 1px solid #f00;
        margin-left: 5px;
        padding: 0 5px;
      }
    }
  }
  img {
    width: 100%;
  }
}
.detailFooter {
  width: 100%;
  height: 1.4rem;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0px;
  left: 0;
  background: #ffffff;
  display: flex;
  z-index: 999;
  div {
    font-size: 0.32rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #666;
    i {
      font-size: 0.7rem;
    }
    span {
      display: block;
    }
  }
  .cart {
    position: relative;
    em {
      display: block;
      font-style: normal;
      background: red;
      color: #ffffff;
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      min-width: 0.48rem;
      height: 0.48rem;
      border-radius: 50%;
    }
  }
  .addCart {
    flex: 2;
    background: #ff976a;
    color: #ffffff;
    font-size: 0.37rem;
  }
  .buy {
    flex: 2;
    background: #f44;
    color: #ffffff;
    font-size: 0.37rem;
  }
}
</style>