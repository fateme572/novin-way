<template>
  <div class="app">
    <div class="app__nav-bar"></div>
    <div class="app__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>
<style lang="less" src="./index.less"></style>