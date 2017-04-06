<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <button @click="aa">点击</button>
    <button @click="aa">点击</button>
    <button @click="aa">点击</button>

    <el-alert
      title="成功提示的文案"
      type="success">
    </el-alert>

    <h2></h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <!-- <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
import Vue from 'vue'
import {Alert, Toast, testToast} from 'hv-vue-component'
// import {Alert, testToast} from '../../lib/packages/main/index.js'
// import Toast from '../../lib/index.js'
// var Toast = require('hv-vue-component')
console.log(Alert)
// import aa from 'vueui-m/src/components/Alert/index'
// import {Tab, MButton} from 'vueui-m'
// console.log(Tab)
// console.log(MButton)
Vue.use(Alert)
// Vue.use(Toast.Alert)

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to the Harvey\'s Vue2.0 components.',

    }
  },
  methods: {
    aa: function() {
      testToast({
        message: '肯啊啊啊啊 啊!!还是hen肯 啊啊 啊 ',
        position: 'bottom'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    /*transform: translateX(60px) rotate(70deg);*/
  }
</style>
