<template>
  <div id="app">
    <ul class="appmenu">
      <li v-for="(item,index) in menulist" :key="index">
        <!-- <el-image :src="item.icon"></el-image> -->
          <h5>{{item.title}}</h5>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
data(){
  return{
    menulist:[
      {id:0,title:'首页',icon:'../assets/logo.png'},
      {id:1,title:'主数据',icon:'../assets/logo.png'},
      {id:2,title:'辖区管理',icon:'../assets/logo.png'},
      {id:3,title:'校讯通行为管理系统',icon:'../assets/logo.png'}

    ]
  }
}
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
ul{
  display: flex;
  list-style: none !important;
  line-height: 61px !important;

}
ul>li{
  margin-left: 20px;
}
</style>
