export default {
  saveUserName (state, username) {
    state.username = username
  },
  saveCartCount (state, count) {
    console.log('mutation');
    state.cartCount = count
  }
}
