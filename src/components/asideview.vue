<template>
  <div id="app">
    <el-row class="tac">
  <el-col :span="24">
    <el-menu
      :route="route"
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item>
        <!-- <el-image src="../assets/logo.png" id="titlelogo" style="width:100%;height:5px"></el-image> -->
    <h2>上海正业医药</h2>

      </el-menu-item>
      <el-menu-item :index="index.toString()" v-for="(item,index) in menulist" :key="index">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
  </div>
</template>

<script>
import rout from '../router/index'
export default {
  data(){
         return{
           menulist:[
            {id:1,title:'功能A'},
            {id:2,title:'功能B'},
            {id:3,title:'功能C'},
            {id:4,title:'功能D'},
            {id:5,title:'功能E'},
            {id:6,title:'功能F'}
           ],
           route:[]
         }
  },
 methods: {
  initData(){
    this.route.push(...rout.options.routes[0].children)
  },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        this.$router.push({path:this.route[key].path})
      }
},
mounted(){
  this.initData();
},
computed:{

}
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.el-menu-vertical-demo{
  height: 919px;
}
#titlelogo{
  width: 100%;
  height: 56px;
  border: 1px solid red;
}
</style>
