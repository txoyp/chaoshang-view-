<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">登录</router-link> |
      <router-link to="/register">注册</router-link> |
      <router-link to="/signUp">报名</router-link> |
      <router-link to="/navList">商城</router-link> |
      <router-link to="/logisticInform">物流信息录入</router-link> |
      <router-link to="/memberSelect">会员查询物流信息</router-link>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
