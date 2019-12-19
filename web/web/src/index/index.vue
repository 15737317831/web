<template>
	<div class="index">
		<div class="line"></div>
		<div class="main">
		<el-tabs class="tabs" v-model="activeName" type="card" @tab-click="handleClick" stretch>
    <el-tab-pane label="首页" name="1">
			<Home></Home>
		</el-tab-pane>
    <el-tab-pane label="公司介绍" name="2"> 
			<companydetails :tabContent='tabContent'></companydetails>
			</el-tab-pane>
    <el-tab-pane label="产品展示" name="3">
				<Product :tabContent='tabContent'></Product>
		</el-tab-pane>
    <el-tab-pane label="公司相册" name="4">
				<Content :tabContent='tabContent'></Content>
		</el-tab-pane>
		<el-tab-pane label="产品视频" name="5">
				<Content :tabContent='tabContent'></Content>
		</el-tab-pane>
		<el-tab-pane label="最新供应" name="6">
				<Content :tabContent='tabContent'></Content>
		</el-tab-pane>
		<el-tab-pane label="资质证书" name="7">
				<Content :tabContent='tabContent'></Content>
		</el-tab-pane>
		<el-tab-pane label="新闻资讯" name="8">
				<Content :tabContent='tabContent'></Content>
		</el-tab-pane>
		<el-tab-pane label="联系我们" name="9">
				<Content :tabContent='tabContent'></Content>
		</el-tab-pane>
  </el-tabs>
		</div>
	</div>
</template>

<script>
import Home from '@/home/home.vue'
import Product from '@/product/product.vue'
import Content from '@/components/content.vue'
import companydetails from '@/companyDetails/companydetails.vue'
	export default {
		name: 'index',
		data() {
			return {
				 activeName: '1',
				 tabContent: {}
			}
		},
		components: {
			Home,
			Content,
			Product,
			companydetails
    },
		methods: {
			handleClick(tab, event) {
				this.tabContent=tab
        console.log(tab, event);
      }
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
	margin: 30px auto;
	width: 90%;
}
.main /deep/ .el-tabs--card>.el-tabs__header .el-tabs__item{
	background: #0075BB;
	color: #fff;
	border-color: #0075BB;
}
.main /deep/ .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
	background: #21B4E8;
	border-color: #21B4E8;
}
</style>
