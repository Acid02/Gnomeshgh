<template>
	<div class="card-content">
		<div class="menu">
			<h3 class="menu-label">标签</h3>
			<div class="field">
				<div class="control">
					<router-link :to="{name:'Labellist',params:{name:'12312'}}" class="tags">
						<span class="tag">Hexo</span>
						<span class="tag is-grey-lightest">4</span>
					</router-link>
				</div>
			   <div class="control">
				   <router-link :to="{name:'Labellist',params:{name:'12312'}}" class="tags">
					   <span class="tag">{{$route.params.name}}</span>
					   <span class="tag is-grey-lightest">1</span>
					</router-link>
			   </div>
			   <div class="control"><a href="" class="tags"><span class="tag">lorem1</span><span class="tag is-grey-lightest">2</span></a></div>
			   <div class="control"><a href="" class="tags"><span class="tag">lorem1</span><span class="tag is-grey-lightest">3</span></a></div>
			   <div class="control"><a href="" class="tags"><span class="tag">lorem1</span><span class="tag is-grey-lightest">4</span></a></div>
			   <div class="control"><a href="" class="tags"><span class="tag">lorem1</span><span class="tag is-grey-lightest">5</span></a></div>
			   <div class="control"><a href="" class="tags"><span class="tag">lorem1</span><span class="tag is-grey-lightest">6</span></a></div>
			   <div class="control"><a href="" class="tags"><span class="tag">lorem1</span><span class="tag is-grey-lightest">7</span></a></div>
			   <div class="control"><a href="" class="tags"><span class="tag">lorem1</span><span class="tag is-grey-lightest">8</span></a></div>
			   <div class="control"><a href="" class="tags"><span class="tag">lorem1</span><span class="tag is-grey-lightest">9</span></a></div>
			   <div class="control"><a href="" class="tags"><span class="tag">lorem1</span><span class="tag is-grey-lightest">10</span></a></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Label",
	}
</script>

<style scoped>
	.card-content{
		background-color: var(--bgcolor);
	}
	.menu-label{
		color: #7a7a7a;
		font-size: 12px;
		margin-bottom: 10.5px;
	}
	.control{
		margin: 0 10.5px 10.5px 0;
	}
	.field{
		display: flex;
		flex-grow: 1;
		flex-wrap: wrap;
	}
	.tags{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		text-decoration: none;
		color: #4A4A4A;
		font-size: 12px;
		border-radius: 4px;
		overflow: hidden;
	}
	.tag{
		padding: 0 7.875px;
		background-color: #f5f5f5;
		height: 21px;
		line-height: 1.9;
	}
	.is-grey-lightest{
		background-color: #ededed;
	}
</style>
