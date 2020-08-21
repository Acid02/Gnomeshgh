<template>
	<div class="card-content">
		<div class="menu">
			<h3 class="menu-label">分类</h3>
			<ul class="menu-list">
				<li>
					<router-link :to="{name:'Classifylist',params:{'name':'ACG'}}" class="level">
						<span class="level-start">
							 <span class="level-item">ACG</span>
						</span>
						 <span class="level-end">
							 <span class="level-item tag">2</span>
						</span>
					</router-link>
				</li>
				<li>
					<a class="level" href="">
						<span class="level-start">
							 <span class="level-item">学习笔记</span>
						</span>
						 <span class="level-end">
							 <span class="level-item tag">2</span>
						</span>
					</a>
				</li>
				<li>
					<a class="level" href="">
						<span class="level-start">
							 <span class="level-item">ACG</span>
						</span>
						 <span class="level-end">
							 <span class="level-item tag">2</span>
						</span>
					</a>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Classify'
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
	.menu-list{
		line-height: 1.25;
	}

	.level{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 7px 10.5px;
	}
	.level:hover{
		background-color: #F5F5F5;
	}
	.level-start{
		font-size: 14px;
		font-size: normal;
		font-weight: 400;
	}
	.level-end{
		padding: 0 7.875px;
		background-color: #f5f5f5;
		height: 21px;
		line-height: 1.9;
		font-size: 12px;
		border-radius: 4px;
	}
</style>
