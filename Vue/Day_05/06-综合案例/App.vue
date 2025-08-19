<template>
  <div class="table-case">
    <MyTable :data="goods">
      <template #header>
        <th>编号</th>
        <th>名称</th>
        <th>图片</th>
        <th width="100px">标签</th>
      </template>

      <template #body="{ item, index }">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <!-- 注意图片的配置方式，应当用v-bind而不是插值表达式 -->
        <td><img :src="item.picture" /></td>
        <td>
          <MyTag v-model="item.tag"></MyTag>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
/**
 * 1. MyTag.vue组件的封装
 *  1.1 创建组件
 *  1.2 实现功能
 *    - 双击显示输入框，并且自动聚焦 → v-if, v-else, 全局自定义指令v-focus自动聚焦, dbclick双击事件(添加到整个tag的div)
 *    - 失焦则隐藏输入框，显示标签 → blur事件操作isEidt即可（添加到输入框的div）
 *    - 输入框编辑状态时，可回显原标签文字 → 子传父(以v-model实现, :value+@input, 简化代码，方便修改)
 *    - 内容修改后按“回车”可以修改标签文字 → @keyup.enter事件，$emit通知; 动态获取输入框的值可以用 $refs.xxx.value 或者函数中使用 e.target.value
 * 2. MyTable.vue组件的封装
 *    - 为了实现自定义化，使用插槽（具名插槽）完成，注意配合作用域插槽以实现子组件向父组件传值
 */
import MyTag from "./components/MyTag.vue";
import MyTable from "./components/MyTable.vue";

export default {
  name: "TableCase",
  components: {
    MyTag,
    MyTable,
  },
  data() {
    return {
      goods: [
        {
          id: 101,
          picture:
            "https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg",
          name: "梨皮朱泥三绝清代小品壶经典款紫砂壶",
          tag: "茶具",
        },
        {
          id: 102,
          picture:
            "https://yanxuan-item.nosdn.127.net/221317c85274a188174352474b859d7b.jpg",
          name: "全防水HABU旋钮牛皮户外徒步鞋山宁泰抗菌",
          tag: "男鞋",
        },
        {
          id: 103,
          picture:
            "https://yanxuan-item.nosdn.127.net/cd4b840751ef4f7505c85004f0bebcb5.png",
          name: "毛茸茸小熊出没，儿童羊羔绒背心73-90cm",
          tag: "儿童服饰",
        },
        {
          id: 104,
          picture:
            "https://yanxuan-item.nosdn.127.net/56eb25a38d7a630e76a608a9360eec6b.jpg",
          name: "基础百搭，儿童套头针织毛衣1-9岁",
          tag: "儿童服饰",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.table-case {
  width: 1000px;
  margin: 50px auto;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }
}
</style>
