<!--  -->
<template>
  <div class="homebanner">
    <mt-swipe :auto="3000">
      <mt-swipe-item
        v-for="homeBannerList in homeBannerLists"
        :key="homeBannerList.id"
      >
        <img :src="homeBannerList.imgsrc" />
      </mt-swipe-item>
    </mt-swipe>
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
      homeBannerLists: [
        {
          id: "1",
          imgsrc:
            "https://img30.360buyimg.com/popshop/jfs/t16627/140/1181462456/8920/18031805/5abf6f26N31658aa2.jpg"
        },
        {
          id: "2",
          imgsrc:
            "https://img30.360buyimg.com/popshop/jfs/t1/78845/18/13806/11340/5db2b91fEf940638d/49b30bb0377030d1.jpg"
        },
        {
          id: "3",
          imgsrc:
            "https://img30.360buyimg.com/popshop/jfs/t1312/315/315615466/4441/5a865e93/5565f5a2N0b8169ae.jpg"
        },
        {
          id: "4",
          imgsrc:
            "https://img30.360buyimg.com/popshop/jfs/t1/30221/1/5809/2875/5c88da6fE05b9691a/a687b198a375b4ff.png"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.homebanner {
  margin-top: 1.3rem;
  width: 100%;
  height: 3.2rem;
  img {
    width: 100%;
  }
}
</style>
