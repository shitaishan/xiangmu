<!--  -->
<template>
  <div class="homeMain">
    <ul>
      <li v-for="homeMainList in homeMainLists" :key="homeMainList.id">
        <img :src="homeMainList.imgsrc" alt="" />
        <p>{{ homeMainList.name }}</p>
        <div class="price">{{ homeMainList.price }}</div>
        <div class="count">{{ homeMainList.count }}</div>
        <div>{{ homeMainList.title }}</div>
        <div>{{ homeMainList.title2 }} {{ homeMainList.num }}</div>
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
      homeMainLists: [
        {
          id: "1",
          imgsrc:
            "https://img13.360buyimg.com/n7/jfs/t1/102775/3/8679/104120/5e05c96fEc775994e/ef9d2eb3a3fb34f7.jpg",
          name: "戴尔鼠标",
          price: "64.00",
          count: "84.00",
          title: "新品",
          title2: "销量：",
          num: "1"
        },
        {
          id: "2",
          imgsrc:
            "https://img12.360buyimg.com/n7/jfs/t1/97989/24/15416/224445/5e72d648E792a130a/3644b08a6b941cc8.jpg",
          name: "静音不饶人",
          price: "108.00",
          count: "150.00",
          title: "新品",
          title2: "销量：",
          num: "10"
        },
        {
          id: "3",
          imgsrc:
            "https://img12.360buyimg.com/n7/jfs/t1/39182/6/9991/138578/5d131c26E43318979/e7a4b0901f4a75d9.jpg",
          name: "加油鸭鼠标垫",
          price: "9.9",
          count: "19.9",
          title: "新品",
          title2: "销量：",
          num: "15"
        },
        {
          id: "4",
          imgsrc:
            "https://img12.360buyimg.com/n7/jfs/t1/17254/13/6417/158777/5c4ea41aEe9819cba/4a4a7405fec03f55.jpg",
          name: "京东自营",
          price: "12.00",
          count: "20.00",
          title: "新品",
          title2: "销量：",
          num: "0"
        },
        {
          id: "5",
          imgsrc:
            "https://img12.360buyimg.com/n7/jfs/t1/72608/25/16399/42232/5ddded25E6540f241/ef980f0b82bf520f.jpg",
          name: "京东自营",
          price: "4.90",
          count: "10.00",
          title: "新品",
          title2: "销量：",
          num: "22"
        },
        {
          id: "6",
          imgsrc:
            "https://img14.360buyimg.com/n7/jfs/t1/20094/5/14387/89298/5ca5f35dE7c7278f3/9016188006e3f2a7.jpg",
          name: "现代办公鼠标垫",
          price: "12.00",
          count: "20.00",
          title: "新品",
          title2: "销量：",
          num: "56"
        },
        {
          id: "7",
          imgsrc:
            "https://img14.360buyimg.com/n7/jfs/t1/53362/29/3432/164657/5d131f1aE01f047b3/9dc3149a8de96658.jpg",
          name: "大狗泰迪",
          price: "16.00",
          count: "20.00",
          title: "新品",
          title2: "销量：",
          num: "20"
        },
        {
          id: "8",
          imgsrc:
            "https://img12.360buyimg.com/n7/jfs/t3796/67/339760812/547323/e99fbdbb/5806d4c3N8d652b82.jpg",
          name: "雷蛇",
          price: "99.00",
          count: "108.00",
          title: "新品",
          title2: "销量：",
          num: "56"
        },
        {
          id: "9",
          imgsrc:
            "https://img12.360buyimg.com/n7/jfs/t1/17254/13/6417/158777/5c4ea41aEe9819cba/4a4a7405fec03f55.jpg",
          name: "游戏鼠标垫",
          price: "12.00",
          count: "20.00",
          title: "新品",
          title2: "销量：",
          num: "0"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.homeMain {
  width: 100%;
  margin-bottom: 1.7rem;
  position: absolute;
  top: 5rem;
  left: 0;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 45%;
      padding: 8px;
      border: 1px solid lightgray;
      img {
        width: 100%;
      }
      p {
        margin: 0;
        font-size: 0.5rem;
      }
      div {
        width: 50%;
        display: inline-block;
        font-size: 0.47rem;
        color: gray;
      }
      .price {
        color: red;
        &::before {
          content: "￥";
        }
      }
      .count {
        font-size: 0.37rem;
        text-decoration: line-through;
        &::before {
          content: "￥";
        }
      }
    }
  }
}
</style>
