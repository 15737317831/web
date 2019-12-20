<template>
  <div name='card'>
    <el-card class="box-card" shadow="hover">
      <div class="clearfix" v-if='isTitle'>
        <div class="title">
          <i class="el-icon-arrow-right"></i> {{label}}
        </div>
      </div>
      <ul class="content" >
        <li class='item' v-for="item in imglist" >
          <img v-if='isimg' class="img" :src="item.url" alt="">
          <div class="text">{{item.description}}</div>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      label: {
        type: String,
        default () {
          return ''
        }
      },
      contenttext: {
        type: Array,
        default () {
          return []
        }
      },
      imgsrc: {
        type: String,
        default () {
          return ''
        }
      },
      isimg: {
        type: Boolean,
        default () {
          return true
        }
      },
      isTitle: {
        type: Boolean,
        default () {
          return true
        }
      }
    },
    data() {
      return {
        imglist: [{
            url: require("@/img/content/1.jpg"),
            description: "产品1"
          },
          {
            url: require("@/img/content/2.jpg"),
            description: "产品2"
          }, {
            url: require("@/img/content/3.jpg"),
            description: "产品3"
          }, {
            url: require("@/img/content/4.jpg"),
            description: "产品4"
          }, {
            url: require("@/img/content/5.jpg"),
            description: "产品5"
          },
          {
            url: require("@/img/content/1.jpg"),
            description: "产品1"
          },
          {
            url: require("@/img/content/2.jpg"),
            description: "产品2"
          }, {
            url: require("@/img/content/3.jpg"),
            description: "产品3"
          }, {
            url: require("@/img/content/4.jpg"),
            description: "产品4"
          }, {
            url: require("@/img/content/5.jpg"),
            description: "产品5"
          },
          {
            url: require("@/img/content/2.jpg"),
            description: "产品2"
          }, {
            url: require("@/img/content/3.jpg"),
            description: "产品3"
          }, {
            url: require("@/img/content/4.jpg"),
            description: "产品4"
          }, {
            url: require("@/img/content/5.jpg"),
            description: "产品5"
          }, {
            url: require("@/img/content/4.jpg"),
            description: "产品4"
          }, {
            url: require("@/img/content/5.jpg"),
            description: "产品5"
          },
        ]
      };
    },
    components: {},
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
  };
</script>

<style scoped>
  .clearfix {
    height: 45px;
    line-height: 45px;
    text-align: left;
    background: #f9f9f9;
    border-bottom: 1px solid #E0E0E0;
  }
  .title {
    width: 170px;
    background: #0177BF;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding-left: 15px;
  }
  .text {
    line-height: 26px;
  }
  .box-card {
    margin-top: 10px;
    width: 100%;
  }
  .img {
    float: left;
    width: 100%;
    height: 160px;

    margin-right: 8px;
  }
  .content {
    display: flex;
    flex-direction: row ;
    flex-wrap:  wrap;
    justify-content: space-around; 
    margin-left: 20px;
    padding: 10px;
  }
  .content .item {
    margin: 10px 5px;
    width: 22%;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 5%;
    background: #f5f7fa;
   box-shadow: 5px 5px 5px #ccc;
  }
  .content .item:hover{
    transform:scale(1.1,1.1)
  }
</style>
