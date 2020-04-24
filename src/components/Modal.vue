<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{ title }}</span>
          <a href="" class="icon-close" @click.prevent="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a
            href=""
            v-if="btnType === '1'"
            class="btn"
            @click="$emit('submit')"
            >{{ sureText }}</a
          >
          <a
            href=""
            v-if="btnType === '2'"
            class="btn"
            @click="$emit('cancel')"
            >{{ cancelText }}</a
          >
          <div class="btn-group" v-if="btnType === '3'">
            <a
              href=""
              v-if="btnType === '1'"
              class="btn"
              @click="$emit('submit')"
              >{{ sureText }}</a
            >
            <a
              href=""
              v-if="btnType === '2'"
              class="btn"
              @click="$emit('cancel')"
              >{{ cancelText }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    modalType: {
      type: String,
      default: 'form'
    },
    title: String,
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/modal.scss';
</style>
