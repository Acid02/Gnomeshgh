<template>
	<div id="login">
		<h1>登录</h1>
		<a-form-model layout="vertical" :model="formInline" @submit="handleSubmit" @submit.native.prevent class='loginfont'>
			<a-form-model-item>
				<a-input v-model="formInline.user" placeholder="输入用户名" allow-clear size="large">
					<a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
				</a-input>
			</a-form-model-item>
			<a-form-model-item>
				<a-input v-model="formInline.password" type="password" placeholder="密码" allow-clear size="large">
					<a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
				</a-input>
			</a-form-model-item>
			<a-form-model-item>
				<a-button type="primary" size="large" :loading="loading" html-type="submit" block :disabled="formInline.user === '' || formInline.password === ''">
					{{loading?'loading':'登录'}}
				</a-button>
			</a-form-model-item>
		</a-form-model>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					password: '',
				},
				loading:false,
			};
		},
		methods: {
			handleSubmit(e) {
				this.loading = true
				console.log(this.formInline);
			},
		},
	};
</script>
<style scoped>
	#login{
		text-align: center;
		width: 90%;
		margin: 20% auto;
	    max-width: 300px;
		background-color: #2D3A4B;
	}
</style>