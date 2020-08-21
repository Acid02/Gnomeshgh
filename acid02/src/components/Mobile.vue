<template>
	<div id="mobile" @click.stop>
		<div class="mobile_author_icon">
			<img class="avatar-img" :src="$store.state.UserInfo.data.imgurl" alt="">
			<article class="mobile_post_data">
				<div class="mobile_data_link">
					<p class="headline">文章</p>
					<p class="length_num">17</p>
				</div>
				<div class="mobile_data_link">
					<p class="headline">文章</p>
					<p class="length_num">17</p>
				</div>
				<div class="mobile_data_link">
					<p class="headline">文章</p>
					<p class="length_num">17</p>
				</div>
			</article>
		</div>
		<hr />
		<div class="menus_items">
			<div class="menus_item" style='animation-delay: .2s;'>
				<a class="site-page" href="">
					<i class="iconfont icon-zhuye faho"></i>
					<span>主页</span>
				</a>
			</div>
			<div class="menus_item" style='animation-delay: .3s;'>
				<a class="site-page slide" ref="slide" @click="slide($event)">
					<i class="iconfont icon-zhuye faho"></i>
					<span>文章</span>
					<i class="iconfont icon-35_xiangxiajiantou menus-closed"></i>
				</a>
				<ul class="menus_item_child">
						<li>
							<a class="site-page" href="">
								<i class="iconfont icon-zhuye faho"></i>
								<span>标签</span>
							</a>
						</li>
						<li>
							<a class="site-page" href="/categories/">
								<i class="iconfont icon-zhuye faho"></i>
								<span>分类</span>
							</a>
						</li>
				</ul>
			</div>
			<div class="menus_item" style='animation-delay: .4s;'>
				<a class="site-page" href="">
					<i class="iconfont icon-zhuye faho"></i>
					<span>主页</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Mobile",
		data() {
			return {
				sildeToggle: false
			}
		},
		mounted(){},
		methods: {
			slide: function(event) {
				let curTarget = event.currentTarget,
					containsCurClass = curTarget.classList.contains("slide"),
					nextSibling = curTarget.nextSibling;
				while (nextSibling.nodeType == 3 && /\s/.test(nextSibling.nodeValue)) {
					nextSibling = nextSibling.nextSibling;
				};
				let detailScrollHeight = nextSibling.scrollHeight;
				if (containsCurClass) {
					curTarget.classList.remove("slide");
					this.toggleSlide(nextSibling, detailScrollHeight, '500');
				} else {
					curTarget.classList.add("slide");
					this.toggleSlide(nextSibling, 0, '500');
				}
			},
			toggleSlide: function(dom, height, time) {
				dom.style.transition = 'height ' + time + 'ms';
				dom.style.height = height + 'px';
			},
		}
	}
</script>

<style scoped>
	#mobile {
		position: fixed;
		top: 0;
		right: 0;
		width: 251px;
		height: 100vh;
		overflow-y: auto;
		overflow-x: hidden;
		background-color: #FFFFFF;
		z-index: 10;
	}
	.mobile_author_icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 10px;
		box-sizing: border-box;
	}
   
	.avatar-img {
		width: 45%;
		height: 45%;
		border-radius: 50%;
		object-fit: cover;
		padding: 26px 0;
		animation: sidebarItem .4s .1s forwards;
	}

	.mobile_post_data {
		display: flex;
		width: 100%;
		animation: sidebarItem .5s .1s forwards;
	}

	.mobile_data_link {
		flex: 1;
		text-align: center;
	}

	.headline {
		color: #4c4948;
		font-size: 14px;
		line-height: 28px;
	}

	.length_num {
		line-height: 36px;
		font-size: 18px;
		color: #1f2d3d;
	}

	hr {
		border: 2px dashed #d2ebfd;
		margin: 20px 0;
	}

	.menus_items {
		padding: 0 10px;
		padding-bottom: 20px;
		box-sizing: border-box;
	}

	.menus_item {
		transform: translate3d(100%,0,0);
		animation: sidebarItem .5s forwards;
	}

	.site-page {
		position: relative;
		display: block;
		padding: 6px 30px;
		box-sizing: border-box;
		line-height: 32px;
		color: #4c4948;
		font-size: 16px;
	}

	.menus-closed {
		position: absolute;
		right: 10%;
		font-size: 26px;
		font-weight: 900;
		transform: rotate(0);
		transition: transform .5s;
	}
    .slide>.menus-closed{
		transform: rotate(.25turn);
	}
	.faho {
		display: inline-block;
		width: 30%;
		text-align: left;
	}

	.menus_item_child {
		padding-left: 40px;
		overflow: hidden;
	}
	.slide+.menus_item_child{
		height: 0;
	}
	@keyframes sidebarItem{
		from{transform: translate3d(100%,0,0);}
		to{transform: translate3d(0,0,0);}
	}
</style>
