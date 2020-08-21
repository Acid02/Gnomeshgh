<template>
	<div id="details">
		<router-link :to="{name:'Tags'}">详情页</router-link>
		<a @click="$router.back(-1)">123123</a>
		<router-link to="/">详情页</router-link>
	</div>
</template>

<script>
	export default {
		name:"Details"
	}
</script>

<style scoped>
	#details{
		width: 100%;
		height: 100vh;
		background-color: #000000;
		color: #00A1D6;
		animation: slideMove .3s cubic-bezier(.62,0.91,.45,1.27);
	}
	@keyframes slideMove{
		from{transform: translate3d(100%,0,0);}
		to{transform: translate3d(0,0,0)}
	}
</style>
