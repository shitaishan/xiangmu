<!--  -->
<template>
  <div class="categoryRight">
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
    <h1>右边</h1>
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
      categoryGoodsListDatas: [
        {
          id: "1",
          name: "华为"
        },
        {
          id: "2",
          name: "vivo"
        },
        {
          id: "3",
          name: "苹果"
        },
        {
          id: "4",
          name: "三星"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.categoryRight {
  width: 70%;
  height: 85%;
  //仅该区域上下滚动
  overflow-y: scroll;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.3rem 0 1.4rem 0;
}
</style>
