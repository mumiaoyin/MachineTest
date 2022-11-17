import App from './App.vue'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
// 1. 引入你需要的组件
import { Button } from 'vant';
// 2. 引入组件样式
// import 'vant/lib/index.css';
const app = new Vue({
	...App
})
app.$mount()
console.log(app)
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
