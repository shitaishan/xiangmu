<!--  -->
<template>
  <div class="mine-content">
    <div class="tx">
      <img src="http://img0.imgtn.bdimg.com/it/u=284185776,1831341858&fm=26&gp=0.jpg" alt />
      <span>寒星晓月</span>
    </div>
    <div class="dingdan">
      <span>全部订单</span>
      <span>查看全部订单 ></span>
    </div>
    <ul class="list">
      <li>
        <i class="iconfont icon-daifukuan"></i>
        <span>待付款(0)</span>
      </li>
      <li>
        <i class="iconfont icon-xiaoxi"></i>
        <span>待收货(0)</span>
      </li>
      <li>
        <i class="iconfont icon-daishouhuo-"></i>
        <span>已完成(0)</span>
      </li>
      <li>
        <i class="iconfont icon-tuikuan"></i>
        <span>退款/售后(0)</span>
      </li>
    </ul>
    <ul class="address">
      <li>
        <span>地址管理</span>
        <span>></span>
      </li>
      <li>
        <span>优惠卷</span>
        <span>></span>
      </li>
      <li>
        <span>联系客服</span>
        <span>></span>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.tx {
  height: 5rem;
  background: #008742;
  margin-top: -1px;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 30px;
    margin-bottom: 5px;
  }
  span {
    display: block;
    color: #fff;
    font-size: 0.5rem;
  }
}
.dingdan {
  height: 1.5rem;
  border-bottom: 2px solid lightgray;
  font-size: 0.4rem;
  line-height: 1.5rem;
  span:nth-child(1) {
    float: left;
    margin-left: 15px;
  }
  span:nth-child(2) {
    float: right;
    color: gray;
    margin-right: 15px;
  }
}
.list {
  width: 100%;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    width: 25%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span {
      font-size: 0.37rem;
    }
    i {
      font-size: 0.8rem;
      color: gray;
    }
  }
}
.address {
  font-size: 0.37rem;
  li {
    padding: 30px 0;
    border-bottom: 1px solid lightgray;
    line-height: 0;
    span:nth-child(1) {
      float: left;
      margin-left: 15px;
    }
    span:nth-child(2) {
      float: right;
      margin-right: 15px;
      color: gray;
    }
  }
}
</style>