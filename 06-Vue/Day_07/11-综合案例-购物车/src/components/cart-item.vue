<template>
  <div class="goods-container">
    <!-- 左侧图片区域 -->
    <div class="left">
      <img :src="item.thumb" class="avatar" alt="">
    </div>
    <!-- 右侧商品区域 -->
    <div class="right">
      <!-- 标题 -->
      <div class="title">{{ item.name }}</div>
      <div class="info">
        <!-- 单价 -->
        <span class="price">￥{{ item.price }}</span>
        <div class="btns">
          <!-- 按钮区域 -->
          <button class="btn btn-light" @click="changeCount(-1)">-</button>
          <span class="count">{{ item.count }}</span>
          <button class="btn btn-light" @click="changeCount(1)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  methods: {
    // 2.1 按钮注册点击事件，将新数据提交到 actions
    changeCount (count) {
      const newCount = this.item.count + count
      const id = this.item.id

      if (newCount < 1) return
      this.$store.dispatch('cart/changeCountAsync', {
        id,
        count: newCount
      })
    }
  },

  // 1.4 接收父组件传来的数据
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  display: flex;
  padding: 10px;

  + .goods-container {
    border-top: 1px solid #f8f8f8;
  }

  .left {
    .avatar {
      width: 100px;
      height: 100px;
    }

    margin-right: 10px;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    .title {
      font-weight: bold;
    }

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        color: red;
        font-weight: bold;
      }

      .btns {
        .count {
          display: inline-block;
          width: 30px;
          text-align: center;
        }
      }
    }
  }
}

.custom-control-label::before,
.custom-control-label::after {
  top: 3.6rem;
}
</style>
