export default {
  saveUserName (context, username) {
    context.commit('saveUserName', username)
  },
  saveCartCount (context, count) {
    console.log(count);
    context.commit('saveCartCount', count)
  }
}
