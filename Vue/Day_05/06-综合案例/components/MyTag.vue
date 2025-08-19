<template>
  <div class="my-tag" @dblclick="handleClick">
    <input
      v-if="isEdit"
      v-focus
      @blur="isEdit = false"
      :value="value"
      @keyup.enter="handleEnter"
      ref="inp"
      class="input"
      type="text"
      placeholder="输入标签"
    />

    <div v-else class="text">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
    };
  },

  methods: {
    handleClick() {
      this.isEdit = true;
    },

    handleEnter() {
      // console.log(this.$refs.inp.value);
      if (this.$refs.inp.value.trim()) {
        this.$emit("input", this.$refs.inp.value);
        this.isEdit = false;
      } else {
        alert("输入不能为空");
      }
    },
  },

  props: {
    value: String,
  },
};
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>
