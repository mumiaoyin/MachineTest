<template>
  <div class="hello">
    <el-row :gutter="24">
  <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
    <div class="grid-content bg-purple">
      <asideview/>
    </div>
  </el-col>
  <el-col :xs="24" :sm="24" :md="20" :lg="20" :xl="20"><div class="grid-content bg-purple-light">
    <el-container>
      <el-header>
        <headerview/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    </div></el-col>
</el-row>
  </div>
</template>

<script>
import asideview from './asideview.vue'
import headerview from './headrview.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    asideview,
    headerview
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
    width: 100%;
    height: 960px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    /* text-align: center; */
    line-height: 60px;
  }

</style>
