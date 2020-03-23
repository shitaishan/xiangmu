<!--  -->
<template>
  <div class="header">
    <div class="header_content">
      <div class="headerUp">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <span>
          中国移动
          <i class="iconfont icon-wuxian wuxian"></i>
        </span>
        <span>上午11:50</span>
        <span>
          <i class="iconfont icon-zhifeiji feiji"></i>
          <i class="iconfont icon-lanya lanya"></i>
          76%
          <i class="iconfont icon-electricquantity2dianchidianliang"></i>
        </span>
      </div>
      <div class="headerBottom">
        <span onclick="window.history.back()">
          <i class="iconfont icon-zuojiantou"></i>
        </span>
        <span class="title">{{title}}</span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: ["title", "icon"]
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.header {
  width: 100%;
  height: 2rem;
  background: #008742;
  .header_content {
    .headerUp {
      display: flex;
      height: 0.75rem;
      ul {
        display: flex;
        position: relative;
        top: 0.2rem;
        left: 5px;
        margin-right: 5px;
        li {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #fff;
          margin-left: 2px;
          border: 1px solid #cccccc;
        }
        li:nth-child(5) {
          background: none;
          border: 1px solid #cccccc;
        }
      }
      span {
        display: block;
        font-size: 0.37rem;
        color: #fff;
        margin-right: 30px;
        margin-left: 5px;
        margin-top: 2px;
        i {
          margin-left: 3px;
          font-size: 0.5rem;
        }
        i.wuxian {
          font-size: 0.37rem;
        }
      }
      span:nth-child(4) {
        display: flex;
        margin-right: 0;
        position: absolute;
        right: 5px;
        top: 0;
        i {
          color: #fecb03;
          font-size: 1rem;
          line-height: 0.5rem;
        }
        i.lanya {
          font-size: 0.4rem;
          margin-right: 2px;
          margin-left: 2px;
          color: lightgray;
        }
        i.feiji {
          font-size: 0.4rem;
          color: #fff;
        }
      }
    }
    .headerBottom {
      position: relative;
      top: 10px;
      span:nth-child(1) {
        display: block;
        color: #fff;
        font-size: 0.5rem;
        i {
          font-size: 0.6rem;
          margin-right: 30px;
          font-weight: bold;
        }
      }
      span:nth-child(2) {
        position: absolute;
        top: 0px;
        left: 40%;
        color: #fff;
      }
      span.title {
        font-size: 0.5rem;
      }
      ul {
        display: flex;
        position: absolute;
        top: 0.25rem;
        right: 10px;
        li {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #fff;
          margin-right: 5px;
          border: 1px solid #cccccc;
        }
      }
    }
  }
}
</style>