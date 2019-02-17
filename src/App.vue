<template>
  <div id="app">
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>
    <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/login">登录</router-link> |
      <router-link to="/register">注册</router-link> |
      <router-link to="/signUp">报名</router-link> |
      <router-link to="/shop">商城</router-link> |
      <router-link to="/logisticInform">物流信息录入</router-link> |
      <router-link to="/memberSelect">会员查询物流信息</router-link> |
    </div>
  </div>
</template>

<script>
  import Home from './Home'

  export default {
      components:{
          Home
      }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(244,244,241);
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
