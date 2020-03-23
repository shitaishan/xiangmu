<!--  -->
<template>
  <div id="categoryLeft">
    <div class="category-left">
      <ul class="categoryNav">
        <li v-for="categoryLeftData in categoryLeftDatas" :key="categoryLeftData.category_id">
          <router-link
            :to="'/category/'+categoryLeftData.category_id"
          >{{categoryLeftData.category_name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      categoryLeftDatas: []
    };
  },
  methods: {
    getCateDatasFn() {
      Axios.get("http://localhost:3000/api/category").then(res => {
        console.log(res.data);
        this.categoryLeftDatas = res.data;
      });
    }
  },
  mounted() {
    this.getCateDatasFn();
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.category-left {
  height: 100%;
  width: 100px;
  background: #efefef;
  ul {
    li {
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      a {
        font-size: 0.37rem;
        display: block;
        color: #000;
      }
    }
  }
}
.router-link-active {
  background: #fff;
}
</style>