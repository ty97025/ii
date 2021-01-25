<template>
<div class="image">
  <ul class="drop-down-menu">
  <li>
		<a href="#">網站介紹</a>
		<ul>
			<li>
				<a href="#">Time</a>
			</li>
			<li>
				<a href="#">環繞立體物件</a>
			</li>
			<li>
				<a href="#">幾何互動</a>
			</li>
			<li>
				<a href="#">旋轉的球</a>
			</li>
		</ul>
	</li>
	<li>
		<a href="#">聯絡我們</a></li>
		<li>
			<a href="#">構思發想</a>
			<ul>
				<li>
					<a href="#">時鐘</a>
					<ul>
						<li>
							<a href="#">整體配色</a>
						</li>
						<li>
							<a href="#">貓咪樣式</a>
						</li>
						<li>
							<a href="#">指針配置</a>
						</li>
						<li>
							<a href="#">邊框選擇</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">立體轉轉</a>
					<ul>
						<li>
							<a href="#">金屬色</a>
						</li>
						<li>
							<a href="#">3D環繞</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">圖形交錯</a>
					<ul>
						<li>
							<a href="#">邊長計算</a>
						</li>
						<li>
							<a href="#">放大縮小</a>
						</li>
						<li>
							<a href="#">底色選擇</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">球形自轉</a>
				</li>
			</ul>
		</li>
	</ul>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default 
{
  name: 'Home',
  components: 
  {
    HelloWorld
  },
  data()
  {
    return{}
  }
}
</script>
<style>
ul {
  /* 取消ul預設的內縮及樣式 */
  margin: 5;
  padding: 0;
  list-style: none;
}

ul.drop-down-menu {
  border: rgb(252, 251, 251) 2px solid;
  display: inline-block;
  font-family: Yantramanav;
  font-size: 15px;
}

ul.drop-down-menu li {
  position: relative;
  white-space: nowrap;
  border-right: rgb(255, 254, 254) 2px solid;
}

ul.drop-down-menu>li:last-child {
  border-right: none;
}

ul.drop-down-menu>li {
  float: left;
  /* 只有第一層是靠左對齊*/
}

ul.drop-down-menu a {
  background-color: rgb(181, 196, 203);
  color: #333;
  display: block;
  padding: 0 100px;
  text-decoration: none;
  line-height: 30px;
}

ul.drop-down-menu a:hover {
  /* 滑鼠滑入按鈕變色*/
  background-color: #4f7785;
  color: #fff;
}

ul.drop-down-menu li:hover>a {
  /* 滑鼠移入次選單上層按鈕保持變色*/
  background-color:#4f7785;
  color: #fff;
}

ul.drop-down-menu ul {
  border: rgb(255, 255, 255) 1.5px solid;
  position: absolute;
  z-index: 99;
  left: -1px;
  top: 100%;
  min-width: 18px;
}

ul.drop-down-menu ul li {
  border-bottom: rgb(255, 255, 255) 1px solid;
}

ul.drop-down-menu ul li:last-child {
  border-bottom: none;
}

ul.drop-down-menu ul ul {
  /*第三層以後的選單出現位置與第二層不同*/
  z-index: 999;
  top: 10px;
  left: 90%;
}

ul.drop-down-menu ul {
  /*隱藏次選單*/
  display: none;
}

ul.drop-down-menu li:hover>ul {
  /* 滑鼠滑入展開次選單*/
  display: block;
}
#p5Canvas {
  width: 100vw;
  position: relative;
}

main {
  margin: 0 auto;
  width: 90vw;
}
div.image{
  background-image: url("../assets/ab.png");
  position: absolute;
  width: 1440px;
  height: 810px;
  left: 5px;
  top: 80px;
  background-size: cover;
}
</style>