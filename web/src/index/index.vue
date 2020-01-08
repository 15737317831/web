<template>
	<div class="index">
		<div class="line">
			<!--top bar-->
			<div class="top_bar">
				<div class="w1200">
					<div class="fl ">欢迎来到河南康普尔动物药业有限公司官网！</div>
					<ul class="fr">
						<li class="wx">
							<img class="wxImg" src="../images/wx_icon.png" alt="">
							<div class="">官方微信</div>
							<div class="wxerweima">
								<img src="../images/erweima.png" />
							</div>
						</li>
						<li class='wb'>
								<img class="wbImg" src="../images/wb_icon.png" alt="">
							<div class="">官方微博</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="top">
				<div class="w1200">
					<div class="logo fl">
						<div>
							<img class="logoimg" src="../images/logo.png" alt="" align="absbottom" />
						</div>
					</div>
					<h1 class="fl lh">河南康普尔动物药业有限公司</h1>
					<!-- <div class="search fl">
									<form action="#">
										<input type="text" name="keyword" placeholder="请输入搜索内容" />
										<input type="submit" value="" />
									</form>
								</div> -->
					<div class="tel fr">
						<img class="telImg" src="../images/tel_icon.png" alt="" width="40px" height="40px">
						0371-6531-1511
					</div>
				</div>
			</div>
			<!--nav-->
		</div>
		<div class="main">
			<el-tabs class="tabs" v-model="activeName" type="card" @tab-click="handleClick" stretch>
				<el-tab-pane label="首页" name="1" >
					<transition name="el-zoom-in-center">
						<div v-show="activeName=='1'">
							<Home @showProductInfo='showProductInfo' :pageloading='pageloading'></Home>
								<el-container>
								<el-footer>
									<Footer></Footer>
								</el-footer>
							</el-container>
						</div>
					</transition>
				</el-tab-pane>
				<el-tab-pane label="公司介绍" name="2" >
					<transition name="el-zoom-in-center">
						<div v-show="activeName=='2'">
							<!--公共banner-->
							<div class="banner">
								<div class="banner_text">
									<p class="zh">康普尔药业<br>一切为了养殖户</p>
									<p class="en">All for the farmers</p>
								</div>
							</div>
							<companydetails :tabContent='tabContent' @showProductInfo='showProductInfo'></companydetails>
							<!-- 公共底部 -->
							<el-container>
								<el-footer>
									<Footer></Footer>
								</el-footer>
							</el-container>
						</div>
					</transition>
				</el-tab-pane>
				<el-tab-pane label="产品展示" name="3" >
					<transition name="el-zoom-in-center">
						<div v-show="activeName=='3'">
						<!--公共banner-->
						<div class="banner">
							<div class="banner_text">
								<p class="zh">康普尔药业<br>一切为了养殖户</p>
								<p class="en">All for the farmers</p>
							</div>
						</div>
						<Product :search='search' :productlist='productlist' :loading='pageloading' :activeTab='activeTab' :tabContent='tabContent' :showList='showList' :productInfo='productInfo' @showProductInfo='showProductInfo'></Product>
						<!-- 公共底部 -->
						<el-container>
							<el-footer>
								<Footer></Footer>
							</el-footer>
						</el-container>
						</div>
					</transition>
				</el-tab-pane>
				<el-tab-pane label="公司相册" name="4" >
					<transition name="el-zoom-in-center">
						<div v-show="activeName=='4'">
						<!--公共banner-->
						<div class="banner">
							<div class="banner_text">
								<p class="zh">康普尔药业<br>一切为了养殖户</p>
								<p class="en">All for the farmers</p>
							</div>
						</div>
						<companyphoto :tabContent='tabContent' @showProductInfo='showProductInfo'></companyphoto>
						<!-- 公共底部 -->
						<el-container>
							<el-footer>
								<Footer></Footer>
							</el-footer>
						
						</el-container>
							</div>
					</transition>
				</el-tab-pane>
				<!-- <el-tab-pane label="产品视频" name="5" >
					<transition name="el-zoom-in-center">
						<div v-show="activeName=='5'">
					
						<div class="banner">
							<div class="banner_text">
								<p class="zh">康普尔药业<br>一切为了养殖户</p>
								<p class="en">All for the farmers</p>
							</div>
						</div>
						<companyvideo :tabContent='tabContent'></companyvideo>
				
						<el-container>
							<el-footer>
								<Footer></Footer>
							</el-footer>
						</el-container>
							</div>
					</transition>
				</el-tab-pane> -->
				<el-tab-pane label="最新供应" name="6" >
					<transition name="el-zoom-in-center">
						<div v-show="activeName=='6'">
						<!--公共banner-->
						<div class="banner">
							<div class="banner_text">
								<p class="zh">康普尔药业<br>一切为了养殖户</p>
								<p class="en">All for the farmers</p>
							</div>
						</div>
						<latestsupply :tabContent='tabContent' @showProductInfo='showProductInfo'></latestsupply>
						<!-- 公共底部 -->
						<el-container>
							<el-footer>
								<Footer></Footer>
							</el-footer>
						</el-container>
							</div>
					</transition>
				</el-tab-pane>
				<el-tab-pane label="资质证书" name="7" >
					<transition name="el-zoom-in-center">
						<div v-show="activeName=='7'">
						<!--公共banner-->
						<div class="banner">
							<div class="banner_text">
								<p class="zh">康普尔药业<br>一切为了养殖户</p>
								<p class="en">All for the farmers</p>
							</div>
						</div>
						<qualification :tabContent='tabContent' @showProductInfo='showProductInfo'></qualification>
						<!-- 公共底部 -->
						<el-container>
							<el-footer>
								<Footer></Footer>
							</el-footer>
						</el-container>
							</div>
					</transition>
				</el-tab-pane>
				<el-tab-pane label="新闻资讯" name="8" >
					<transition name="el-zoom-in-center">
						<div v-show="activeName=='8'">
						<!--公共banner-->
						<div class="banner">
							<div class="banner_text">
								<p class="zh">康普尔药业<br>一切为了养殖户</p>
								<p class="en">All for the farmers</p>
							</div>
						</div>
						<news :tabContent='tabContent' @showProductInfo='showProductInfo'></news>
						<!-- 公共底部 -->
						<el-container>
							<el-footer>
								<Footer></Footer>
							</el-footer>
						</el-container>
							</div>
					</transition>
				</el-tab-pane>
				<el-tab-pane label="联系我们" name="9" >
					<transition name="el-zoom-in-center">
						<div v-show="activeName=='9'">
						<!--公共banner-->
						<div class="banner">
							<div class="banner_text">
								<p class="zh">康普尔药业<br>一切为了养殖户</p>
								<p class="en">All for the farmers</p>
							</div>
						</div>
						<contact :tabContent='tabContent' @showProductInfo='showProductInfo'></contact>
						<!-- 公共底部 -->
						<el-container>
							<el-footer>
								<Footer></Footer>
							</el-footer>
						</el-container>
							</div>
					</transition>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import Footer from '@/components/footer'
	import Home from '@/home/home.vue'
	import Product from '@/product/product.vue'
	import Content from '@/components/content.vue'
	import companydetails from '@/companyDetails/companydetails.vue'
	import companyphoto from '@/companyphoto/companyphoto'
	import companyvideo from '@/companyvideo/companyvideo'
	import latestsupply from '@/latestsupply/latestsupply'
	import qualification from '@/qualification/qualification'
	import news from '@/news/news'
	import contact from '@/contact/contact'

	export default {
		name: 'index',
		data() {
			return {
				activeName: '1',
				tabContent: {},
				showList: true,
				productInfo: {},
				activeTab: '',
				productlist:[],
				loading:true,
				search :'',
				pageloading:true
			}
		},
		components: {
			Home,
			Content,
			Product,
			companydetails,
			Footer,
			companyphoto,
			companyvideo,
			latestsupply,
			qualification,
			news,
			contact
		},
		created () {
		},
		watch:{

		},
		mounted(){
		setTimeout(()=>{
				this.productlist=this.$productAll
				this.loading = this.$loadingProductAll
				this.pageloading = false 
			},3000)
		},
		methods: {
			handleClick(tab, event) {
				this.pageloading = true
				setTimeout(()=>{
					this.pageloading = false 
				},1000)
				this.tabContent = tab
				this.showList = true
			},
			showProductInfo(e) {
				this.loading = this.$loadingProductAll
				if (e==='more') {
					setTimeout(() => {
						this.activeName = '2'
					}, 1000);
					return
				}
				if(e==='index'){
					setTimeout(() => {
						this.activeName = '1'
					}, 1000);
					return
				}
				if (e.constructor === Object) {
					setTimeout(() => {
						this.activeName = '3'
						this.showList = false
						this.productInfo = e
					}, 1000);
				}else {
					setTimeout(() => {
						this.activeName = '3'
						this.showList = true
						this.activeTab = e.slice(0, 1)
						this.search = e
					}, 1000)
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
	// @import '@/css/style.css';
	// @import '@/css/mislider.css';
	.index{
		
	}
	.tabs{

	}
	.index /deep/.el-container{
		 min-height: calc(55vh - 700px);
	}
	.main {
		margin: 0 auto;
		width: 94%;
	}
	.main /deep/ .el-tabs--card>.el-tabs__header .el-tabs__item {
		background: #1b434e;
		color: #fff;
		border-color: #1b434e;
	}
	.main /deep/ .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
		background: #099a10;
		border-color: #099a10;
	}
	/* 布局容器 */
	.el-footer {
		width: 1120px;
		background-color: #1b434e;
		color: #9d9d9d;
		text-align: center;
		font-size: 12px;
		line-height: 12px;
		height: 166px !important;
		padding-top: 20px;
	}
	.main /deep/ .el-container .el-aside {
		overflow: hidden !important;
	}
	.top_bar {
		font-size: 10px;
		height: 20px;
		background: #f5f5f5;
		line-height: 30px;
		color: #666;
		padding: 0 20px 0 20px;
		margin: -55px auto 0;
	}
	.scale{
		transform: scale(0.93);
	}
	.top_bar .w1200 {
		overflow: visible;
		line-height: 20px;
	}
	.top_bar ul li {
		display: inline-block;
		margin-left: 20px;
		padding-left: 25px;
		position: relative;
		font-size: 10px;
	}
	.top_bar ul li.wx{
		line-height: 20px;
		float: right;
		display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
	}
	.wxImg,.wbImg{
		width: 15px;
		height: 15px;
		margin-right: 5px
	}
	.top_bar ul li.wb{
		line-height: 20px;
		display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
	}
	.top_bar ul li.wx .wxerweima {
		position: absolute;
		top: 25px;
		right: -10px;
		display: none;
		background: #fff;
		padding: 10px;
		z-index: 10;
	}
	.top_bar ul li.wx .wxerweima img{
		width: 100px;
		height: 100px;
	}
	.top_bar ul li:hover .wxerweima {
		display: block;
	}
	// .top_bar ul li:first-child {
	// 	background: url(../images/wx_icon.png) left center no-repeat;
	// }
	// .top_bar ul li+li {
	// 	background: url(../images/wb_icon.png) left center no-repeat;
	// }
	.fr {
		float: right;
	}
	.fl {
		float: left;
	}
	.top {
		height: 90px;
		background: url(../images/top_bg.png) center top no-repeat;
		padding-top: 44px
	}
	.top .logo {
		margin-right: 0;
	}
	.lh {
		font-size: 24px;
		line-height: 120px;
		font-weight: 900;
	}
	.top .search {
		// background: url(../images/search_bg.png) center center no-repeat;
	}
	.top .search input {
		// display: inline-block;
		border: none;
		height: 42px;
		width: 301px;
		float: left;
		background: none;
	}
	.top .search input[type=text] {
		text-indent: 45px;
	}
	.top .search input[type=submit] {
		width: 80px;
		cursor: pointer;
	}
	.top .search input:focus {
		outline: none;
	}
	.top .tel {
		height: 60px;
		line-height: 60px;
		font-size: 20px;
		color: #099a10;
		padding-left: 6%;
		display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
		// background: url(../images/tel_icon.png) left center no-repeat;
	}
	.telImg{
		width: 40px;
		height: 40px;
		margin-top: 5px;
		margin-right: 15px;
	}
	.w1200 {
		margin: -44px auto;
		width: 1000px;
		min-width: 850px;
		line-height: 10px;
		height: auto;
		overflow: auto;
	} 
	//banner
	.banner {
		width: 100%;
		height: 300px;
		position: relative;
		padding-top: 100px;
		background: url(../images/banner.jpg) no-repeat center center;
	}
	.banner .banner_text {
		margin: -60px auto;
		width: 606px;
		height: 212px;
		background: rgba(81, 115, 124, 0.9);
		position: relative;
		color: #fff;
	}
	.banner .banner_text:after {
		position: absolute;
		content: "";
		width: 592px;
		height: 198px;
		border: 1px solid #fff;
		left: 6px;
		top: 6px;
	}
	.banner .banner_text .zh {
		font-size: 36px;
		text-align: center;
		line-height: 60px;
		padding-top: 35px;
	}
	.banner .banner_text .en {
		font-size: 14px;
		letter-spacing: 8px;
		text-transform: uppercase;
		text-align: center;
		padding-top: 25px;
	}
	.logoimg{
		width: 80px;
		height: 80px;
	}
</style>
