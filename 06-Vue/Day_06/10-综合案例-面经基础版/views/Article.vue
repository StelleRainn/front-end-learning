<template>
  <div class="article-page">
    <!-- 使用keep-alive实现组件缓存，可配置包括include，exclude和max三个属性 -->
    <!-- 给定include属性一个数组，其中指定要保留的组件名（组件名的优先级，也就是name属性，大于文件名） -->
    <keep-alive :include="['ArticlePage']">
      <!-- v-for放在想要重复的最小元素单位上 -->
      <div
        class="article-item"
        v-for="item in articles"
        :key="item.id"
        @click="$router.push(`/detail/${item.id}`)"
      >
        <div class="head">
          <img :src="item.creatorAvator" alt="" />
          <div class="con">
            <p class="title">{{ item.stem }}</p>
            <p class="other">{{ item.creatorName }} | {{ item.createdAt }}</p>
          </div>
        </div>
        <div class="body">
          {{ item.content }}
        </div>
        <div class="foot">
          点赞 {{ item.likeCounts }} | 浏览 {{ item.views }}
        </div>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import axios from "axios";

// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get
export default {
  name: "ArticlePage",
  data() {
    return {
      articles: [],
    };
  },
  async created() {
    const res = await axios.get("https://mock.boxuegu.com/mock/3083/articles");
    this.articles = res.data.result.rows;
  },

  /**
   * 使用keep-alive且在组件被缓存后，created，mounted等钩子函数就失效了；
   * 这时候可以使用提供的两个新钩子：activated和deactivated
   */

  activated() {
    alert("你好，欢迎回到首页。");
    console.log("activated组件被激活");
  },

  deactivated() {
    console.log("deactivated离开了组件，失活");
  },
};
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
