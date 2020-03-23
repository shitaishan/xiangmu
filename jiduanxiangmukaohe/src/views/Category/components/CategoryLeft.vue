<!--  -->
<template>
  <div class="categoryLeft">
    <ul>
      <li v-for="productNav in productNavs" :key="productNav.id">
        <router-link :to="'/category/' + productNav.id">{{
          productNav.title
        }}</router-link>
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
    return {
      productNavs: [
        {
          id: "1",
          title: "手机"
        },
        {
          id: "2",
          title: "电脑"
        },
        {
          id: "3",
          title: "平板"
        },
        {
          id: "4",
          title: "智能硬件"
        },
        {
          id: "5",
          title: "周边配件"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.categoryLeft {
  ul {
    height: 85%;
    width: 30%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 1.3rem 0 1.4rem 0;
    background-color: lightgrey;
    li {
      width: 100%;
      list-style: none;
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      a {
        font-size: 0.47rem;
        color: black;
        text-decoration: none;
      }
      .router-link-active {
        background: #ffffff;
      }
    }
    .active {
      background: #ffffff;
      a {
        color: #f23030;
      }
    }
  }
}
</style>
