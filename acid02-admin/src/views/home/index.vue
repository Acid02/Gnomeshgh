<template>
	<a-layout id="components-layout-demo-side" style="min-height: 100vh">
		<a-layout-sider v-model="collapsed">
			<!-- <div class="logo" /> -->
			<a-menu theme="dark" :default-selected-keys="[`${this.$route.meta.keys}`]" mode="inline">
				<a-menu-item key="1">
					<router-link :to="{name:'User'}">
					<a-icon type="pie-chart" />
					<span>首页{{this.$route.meta.keys}}</span>
					</router-link>
				</a-menu-item>
				<a-menu-item key="2">
					<router-link :to="{name:'articlelist'}">
					<a-icon type="desktop" />
					<span>文章管理</span>
					</router-link>
				</a-menu-item>
				<a-menu-item key="3">
					<router-link :to="{name:'compile'}">
						<a-icon type="desktop" />
						<span>编辑文章</span>
					</router-link>
				</a-menu-item>


				<!-- 	<a-sub-menu key="sub1">
					<span slot="title">
						<a-icon type="user" />
						<span>User</span>
					</span>
					<a-menu-item key="3">
						Tom
					</a-menu-item>
					<a-menu-item key="4">
						Bill
					</a-menu-item>
					<a-menu-item key="5">
						Alex
					</a-menu-item>
				</a-sub-menu>
				<a-sub-menu key="sub2">
					<span slot="title">
						<a-icon type="team" /><span>Team</span></span>
					<a-menu-item key="6">
						Team 1
					</a-menu-item>
					<a-menu-item key="8">
						Team 2
					</a-menu-item>
				</a-sub-menu> -->
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header style="background: #fff; padding: 0 16px;box-sizing: border-box;height: 50px;">
				<a-row type="flex" style='line-height: initial;  height: inherit;'>
					<a-col flex="auto" class='flexee' :span="6">
						<a-button type="link" style="color: #000000;padding: 0;" @click="collapsed =!collapsed">
							<a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
						</a-button>
					</a-col>
					<a-col flex="auto" class='flexee' :span="6" style="text-align: right;">

						<a-dropdown :trigger="['click']">
							<a class="ant-dropdown-link" @click="e => e.preventDefault()">
								<img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" width="100%"
								 height="100%" style="object-fit: cover;" class="userimg" />
								<a-icon type="down" />
							</a>
							<a-menu slot="overlay">
								<a-menu-item key="0">
									<a href="">个人中心</a>
								</a-menu-item>
								<a-menu-item key="1">
									<a href="">项目地址</a>
								</a-menu-item>
								<a-menu-divider />
								<a-menu-item key="3">
									退出登录
								</a-menu-item>
							</a-menu>
						</a-dropdown>
					</a-col>
				</a-row>
			</a-layout-header>
			<a-layout-content style="margin: 16px">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '90vh'}" style="overflow: auto;">
					<router-view></router-view>

				</div>
			</a-layout-content>
			<a-layout-footer style="text-align: center">
				Ant Design ©2018 Created by Ant UED
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>
<script>
	export default {
		data() {
			return {
				collapsed: true,
			};
		},
	};
</script>

<style>
	#components-layout-demo-side .logo {
		height: 32px;
		background: rgba(255, 255, 255, 0.2);
		margin: 16px;
	}

	.ant-dropdown-link {
		display: flex;
		color: #000000;
		align-items: flex-end;
		width: 40px;
		height: 40px;
	}

	.flexee {
		display: flex;
		align-items: center;
	}

	.flexee:last-child {
		justify-content: flex-end;
		padding-right: 12px;
	}

	.userimg {
		border-radius: 10px;
	}
</style>
