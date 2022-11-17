<template>
  <div id="app">
    <div id="appheader">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h3>新增二级商协议</h3>
    <div id="maintitle">
      <h2>协议主题</h2>
    </div>
    <el-card>
      <el-form
      :model="ruleForm"
      :rules="rules"
      :inline="true"
      ref="ruleForm"

      class="demo-ruleForm"
    >
    <!-- 第一行 -->
       <el-row>
        <el-col :span="12">
        <el-form-item label="协议客户" required>
          <el-col :span="24">
            <el-button>选择客户</el-button>
            上海正业医药有限公司
          </el-col>
          <el-col class="line" :span="2">-</el-col>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item>
          <el-col :span="24">
            <span>协议状态:</span>
            <el-select v-model="ruleForm.region" placeholder="正常">
              <el-option label="正常" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
      </el-col>
       </el-row>
       <!-- 第二行 -->
        <el-row>
        <el-col :span="12">
        <el-form-item label="购进指标" required>
        <el-col :span="24">
            <el-select v-model="value1" placeholder="请选择">
    <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
            上海正业医药有限公司
          </el-col>
          <el-col class="line" :span="2">-</el-col>
        </el-form-item>
      </el-col>
       <el-col :span="12">
        <el-form-item label="纯销指标">
        <el-col :span="24">
          <el-col :span="4">

            <el-button>金额</el-button>
          </el-col>
          <el-col :span="20">
<!-- 上海正业医药有限公司 -->
            <el-input v-model="input" placeholder="请输入数量"></el-input>
          </el-col>

          </el-col>
          <el-col class="line" :span="2">-</el-col>
        </el-form-item>
      </el-col>
       </el-row>
       <!-- 第三行 -->
        <el-row>
        <el-col :span="12">
        <el-form-item label="销售区域" required>
          <el-col :span="24">
            <el-button>选择区域</el-button>
          </el-col>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item>
          <el-col :span="24">
            <el-col :span="4">

            <span>签订时间:</span>
            </el-col>
            <el-col :span="20">
<div class="block">
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
            </el-col>

          </el-col>
        </el-form-item>
      </el-col>
       </el-row>
<!-- 第四行 -->
<el-row>
   <el-col :span="12">
        <el-form-item label="购进渠道" required>
        <el-col :span="24">
            <el-col :span="12">
              <el-select v-model="value1" placeholder="请选择渠道">
    <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
            </el-col>
            <el-col :span="12">
                 <el-button>请选择渠道</el-button>
            </el-col>
          </el-col>
          <!-- <el-col class="line" :span="2">-</el-col> -->
        </el-form-item>
      </el-col>
</el-row>
<!-- 第五行 -->
<el-row>
  <el-col :span="24">
<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"

        >
      </el-table-column>
    </el-table>
  </el-col>
</el-row>
    </el-form>
    </el-card>
    <div id="maintitle">
      <h2>产品政策</h2>
    </div>
    <el-button type="primary">添加传品</el-button>
       <el-row>
        <el-col :span="8">
        <el-col :span="24">
          <el-col :span="4">
购进总指标:
          </el-col>
          <el-col :span="20">
<h3>$152</h3>
          </el-col>
          </el-col>

        </el-col>
        <el-col :span="8">
        <el-col :span="24">
          <el-col :span="6">
指标按季度分解
          </el-col>
          <el-col :span="18">
              <el-col :span="4"><h3>$152</h3></el-col>
              <el-col :span="4"><h3>$152</h3></el-col>
              <el-col :span="4"><h3>$152</h3></el-col>

          </el-col>
          </el-col>

        </el-col>

        <el-col :span="8">
        <el-col :span="24">
          <el-col :span="4">
纯销总指标:
          </el-col>
          <el-col :span="18">
 <h3>$152</h3>
          </el-col>
         </el-col>

        </el-col>


       </el-row>
       <el-card>
        <el-row>
          <el-col :span="24">
<el-col :span="4">
  <div id="prtop">
    产品:<el-button>选择产品</el-button>
  <span id="prspan">妹夫较晚24理没和</span>
  </div>
  </el-col>
<el-col :span="18">
 协议小气:
 <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
</el-col>
<el-col :span="2">

  <el-button id="detaile">删除</el-button>
</el-col>

          </el-col>
        </el-row>
       </el-card>
    <el-card>
      <el-form
      :model="ruleForm"
      :rules="rules"
      :inline="true"
      ref="ruleForm"

      class="demo-ruleForm"
    >
    <!-- 第一行 -->
       <el-row>
  <el-col :span="24">
<el-table
 border
      :data="tableData1"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="协议价元"
        >
        <template slot-scope="scope">
       <el-input placeholder="请输入"></el-input>
      </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="票折"
        >
        <el-input placeholder="请输入"></el-input>
      </el-table-column>
      <el-table-column
        prop="address"
        label="零售配送"

        >
        <el-input></el-input>
      </el-table-column>
      <el-table-column
        prop="address"
        label="购进指标两(小单位)"

        >
        <el-input placeholder="请输入"></el-input>
      </el-table-column>
      <el-table-column
        prop="address"
        label="购进金额(万元)"

        >
        <el-input placeholder="请输入"></el-input>
      </el-table-column>
      <el-table-column
        prop="address"
        label="纯销指标两(小单位)"

        >
        <el-input placeholder="请输入"></el-input>
      </el-table-column>
      <el-table-column
        prop="address"
        label="纯销金额(万元)"

        >
        <el-input placeholder="请输入"></el-input>
      </el-table-column>
    </el-table>
  </el-col>
</el-row>
       <!-- 第二行 -->
            <el-row>
  <el-col :span="24">
<el-table
 border
      :data="tableData1"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="分销奖励"
        >
        <template slot-scope="scope">
       <el-input placeholder="请输入"></el-input>
      </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="费用科目"
        >
        <el-input placeholder="请输入"></el-input>
      </el-table-column>
      <el-table-column
        prop="address"
        label="零售配送"

        >
        <el-input></el-input>
      </el-table-column>
      <el-table-column
        prop="address"
        label="费用科目"

        >
        <el-input placeholder="请输入"></el-input>
      </el-table-column>
      <el-table-column
        prop="address"
        label="医疗送商"

        >
        <el-input placeholder="请输入"></el-input>
      </el-table-column>
      <el-table-column
        prop="address"
        label="纯销指标两(小单位)"

        >
        <el-input placeholder="请输入"></el-input>
      </el-table-column>
      <el-table-column
        prop="address"
        label="费用科目"

        >
        <el-input placeholder="请输入"></el-input>
      </el-table-column>
      <el-table-column
        prop="address"
        label="zidingyi7"

        >
        <el-input placeholder="请输入"></el-input>
      </el-table-column>
      <el-table-column
        prop="address"
        label="自定义8"

        >
        <el-input placeholder="请输入"></el-input>
      </el-table-column>
    </el-table>
  </el-col>
</el-row>
    </el-form>
    </el-card>
     <div id="maintitle">
      <h2>补充协议</h2>
      <el-row>
        <el-col :span="22">
          <el-col :span="8">
            <el-row>
                <el-button style="width:76px;height:36px">默认按钮</el-button>
                <el-button style="width:76px;height:36px">默认按钮</el-button>
                <el-button style="width:76px;height:36px">默认按钮</el-button>
                <el-button style="width:76px;height:36px">默认按钮</el-button>
            </el-row>
          </el-col>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" style="width:76px;height:36px">新增</el-button>
        </el-col>

      </el-row>
      <el-row>
        <el-card>
          <el-row>
            <el-col :span="22">
              协议内容:
            </el-col>
            <el-col :span="2">
              <el-button style="width:76px;height:36px;color:yellow">删除</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
          </el-row>
        </el-card>
        <el-card>
          <el-row>
            <el-button type="primary" style="width:76px;height:36px">保存</el-button>
          </el-row>
        </el-card>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        region: "",
        date2: "",
      },
      rules: {
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
      },
      value: [],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      options1: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: '',
        input:'',
        value2: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
         tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
 tableData1: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            address: '上海市普陀区金沙江路 1518 弄',
            address: '上海市普陀区金沙江路 1518 弄',
            address: '上海市普陀区金沙江路 1518 弄'

          }],
          textarea: ''
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.el-row,.el-col .el-col-12{
  margin-bottom: 0px !important;
  height: 40px !important;
}
#maintitle > h2 {
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
}
.el-row > .last-child {
  margin-bottom: 0;
}
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
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
 .el-col .el-col-24{
  width: 100% !important;
}
.el-form-item__content{
  display: flex !important;
  width: 100% !important;
  height: 40px !important;
}
.el-form-item .elform{
  width: 100% !important;
}
#prtop{
  margin-top: 8px;
}
#prspan{
color:blue;margin-left:5px
}
#detaile{
  color: yellow;
}
</style>
