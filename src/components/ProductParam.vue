<template>
  <div class="nav-bar" :class="{ is_fixed: isFixed }">
    <div class="container">
      <div class="pro-title">
        {{ title }}
      </div>
      <div class="pro-param">
        <a href="">概述</a><span>|</span> <a href="">参数</a><span>|</span>
        <a href="">参数</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > 152 ? true : false
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';

.nav-bar {
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  box-shadow: 0 5px 5px rgba($color: #000000, $alpha: 0.02);
  &.is_fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 5px 5px rgba($color: #000000, $alpha: 0.1);
  }
  .container {
    @include flex();
    .pro-title {
      font-size: 18px;
      color: $colorB;
      font-weight: 700;
    }
    .pro-param {
      font-size: 14px;
      span {
        margin: 0 10px;
      }
      a {
        color: #666;
      }
    }
  }
}
</style>
