import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {       //存储数据
    userInfo:{
        
    }

  },
  getters:{         //类似于computed 计算属性 对数据的操作


  },
  mutations: {    //改变state数据的唯一途径    不能处理异步的操作
        changeLogin(state,status){
            state.userInfo = status;
        }

  },
  actions: {     //可以进行异步操作 可以用于提交mutation
    loginAction({commit},user){
        commit('changeLogin',user)
    }

  },

});
