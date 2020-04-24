<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    async getUser () {
      const res = await this.axios.get('/user') || {}
      this.$store.dispatch('saveUserName', res.username)
    },
    async getCartCount () {
      const res = await this.axios.get('/carts/products/sum') || {}
      this.$store.dispatch('saveCartCount', res)
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
