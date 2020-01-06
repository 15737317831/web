<template>
  <div name='news'>
    <el-container>
      <el-aside class="aside" style="overflow:auto">
        <Aside @showProductInfo='showProductInfo'></Aside>
      </el-aside>
      <el-container>
        <el-main>
          <div style="margin-bottom: 10px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item ><a @click="toIndex">首页</a></el-breadcrumb-item>
              <el-breadcrumb-item v-if='!tabContent.label'>公司名称</el-breadcrumb-item>
              <el-breadcrumb-item v-else>{{tabContent.label}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <Card :label='label' :contenttext='contenttext' :isimg='isimg' @showProductInfo='showProductInfo' :ismore='ismore'></Card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import companyInof from '@/components/companyInfo'
  import productImg from '@/components/productImg'
  import productRecommend from '@/components/productRecommend.vue'
  import Card from '@/components/card'
  import Aside from "@/components/aside"
  export default {
    name: 'news',
    props: {
      tabContent: {
        type: Object,
        default () {
          return {}
        }
      },
    },
    data() {
      return {
        isimg: false,
        ismore: false,
        label: '新闻资讯',
        contenttext: ['夏季蛋鸡产蛋下降怎么办？','产蛋鸡的最适温度是15℃~23℃，只有在这种环境下，产蛋鸡才有可能最大限度的发挥其生产性能。当夏季环境温度超过28度时，产蛋鸡体内代谢就会发生变化，表现出采食量降低，产蛋率下降，蛋个变小，砂皮蛋增多，鸡群死亡率增加，给养殖户造成了很大的经济损失。这就是鸡群热应激带来的危害,严重时可以致鸡死亡',
       '防治措施：1、适当降低蛋鸡的饲养密度，可避免因饲养密度过大而引起舍温升高，有利于肌体散热和空气的流通。一般平养鸡由每平方米6-7羽减少到3-5羽，笼养鸡减少到原来的70%-80%。夏季高温来临之前，应对产蛋鸡群中病、残、弱鸡、低产鸡、肥胖鸡提前淘汰；在高产期或高峰期来临之前，对鸡群中体重不达标或未开产的鸡及时淘汰，减少鸡群的饲养密度，有利于鸡群散热，改善饲养环境。',
     ' 2、水——水是家禽的一种最重要的营养物质，在中等温度下，家禽的饮水量是采食量的1倍，而在30℃时的饮水量比15℃时高1倍。正常产蛋鸡群断水24小时，可使鸡群产蛋率下降30%，断水48小时，就可使鸡群绝产，并且28-30天后产蛋才开始恢复。在热应激状态下，产蛋鸡断水12小时，就出现死亡。因为在热应激状态下，鸡的呼吸道蒸发散热是它主要的散热方式，同时从呼吸道蒸发掉大量水分，所以鸡群一旦缺水，就会出现死亡。在鸡群处于热应激状态下，除了不间断饮水外，还要想办法降低饮水的温度，因为凉水可以增加鸡的饮水量，缓解鸡体内蓄积的热量，增加鸡的采食量。'],
        detail: '精品推荐',
        productlabel: '精品推荐',
        productlist: '产品橱窗',
        companyInof: '工商信息',
        productList: [],
        loading: true,
      };
    },
    components: {
      Card,
      Aside,
      productRecommend,
      productImg,
      companyInof
    },
    computed: {
    },
    created() {
    },
    mounted() {
      setTimeout(() => {
        this.productList = this.$productRecommend
        this.loading = this.$loading
      }, 3000)
    },
    watch: {
    },
    methods: {
      showProductInfo(e) {
        this.$emit('showProductInfo', e)
      },
      toIndex(){
        this.$emit('showProductInfo','index' )
      }
    },
  };
</script>

<style scoped>
  /* 布局容器 */
  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    height: 100px !important;
  }
  .el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    text-align: center;
    line-height: 200px;
    margin-top: 50px;
  }
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body>.el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .aside {
    width: 200px !important;
  }
</style>
