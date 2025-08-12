<template>
    <div style="border: 3px solid cyan; margin: 10px; text-align: center;">
        <!-- 3. 渲染使用 -->
        我是 Son 组件: {{ title }}

        <button @click="msgTofFather">修改 title </button>
    </div>
</template>

<script>
export default {
    // 2. 在子组件通过 props 接收标签
    // props: ['自定义属性名']
    props: ['title'],

    // 子传给父 I. 通过 $emit 触发事件，给父组件发送消息通知
    methods: {
        msgTofFather() {
            // this.$emit('事件名', '新的消息参数')
            this.$emit('changeTitle', '修改为子组件的消息')
        }
    }
}
</script>

<style></style>