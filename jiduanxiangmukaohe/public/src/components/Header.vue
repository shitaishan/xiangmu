<!--  -->
<template>
  <div class="header">
    <header>
      <a
        class="icon-left iconfont icon-jiantou3"
        onclick="window.history.back()"
      ></a>
      <div class="title">{{ title }}</div>
      <span>...</span>
    </header>
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
  },
  props: ["title"]
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
header {
  width: 100%;
  height: 1.3rem;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  background: #00813e;
  border-bottom: 1px solid #efefef;
  z-index: 10;
  line-height: 1.3rem;
  a {
    width: 10%;
    display: block;
    text-align: center;
    position: relative;
    z-index: 10;
  }
  .title {
    width: 100%;
    height: 1.3rem;
    font-size: 0.47rem;
    text-align: center;
    position: absolute;
    top: 0px;
    left: 0;
  }
  span {
    width: 10%;
    display: block;
    position: absolute;
    top: -8px;
    right: 0;
  }
}
</style>
