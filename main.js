import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.host = "http://performer.dzhdjgxx.com/api/"

const app = new Vue({
    ...App
})
app.$mount()
