<template>
	<div id="tags">
		<div class="column">
			<div class="card carss">
				<div class="card-image">
					<a class="image" href="#">
						<img class="thumbnail" width="100%" src="https://pic.imgdb.cn/item/5eeee82d14195aa594119942.jpg" alt="置顶 · 迷路帖 · 2020夏">
					</a>
				</div>
				<article class="card-content" role="article">
					<div class="article-meta">
						<div class="level-left">
							<time class="level-item" datetime="2020-02-03T11:53:56.000Z" title="2020-02-03T11:53:56.000Z">
								6个月前
							</time>
							<span class="level-item">6 分钟 读完 (大约 827 个字)</span>
						</div>
					</div>
					<h1 class="title">
						<a class="link-muted" href="#">
							置顶 · 迷路帖 · 2020夏
						</a>
					</h1>
					<div class="content">
						<!-- <p>123123</p> -->
						<pre><code>关于本站内容的导览请看这里ฅ'ω'ฅ </code></pre>
					</div>
					<router-link :to="{name:'details'}" class="article-more">
						阅读更多
					</router-link>
				</article>
			</div>
            <div class="card carss">
            	<div class="card-image">
            		<a class="image" href="#">
            			<img class="thumbnail" width="100%" src="https://pic.imgdb.cn/item/5eeee82d14195aa594119942.jpg" alt="置顶 · 迷路帖 · 2020夏">
            		</a>
            	</div>
            	<article class="card-content" role="article">
            		<div class="article-meta">
            			<div class="level-left">
            				<time class="level-item" datetime="2020-02-03T11:53:56.000Z" title="2020-02-03T11:53:56.000Z">
            					6个月前
            				</time>
            				<span class="level-item">6 分钟 读完 (大约 827 个字)</span>
            			</div>
            		</div>
            		<h1 class="title">
            			<a class="link-muted" href="#">
            				置顶 · 迷路帖 · 2020夏
            			</a>
            		</h1>
            		<div class="content">
            			<p>123123</p>
            		</div>
            		<a class="article-more" href="">
            			阅读更多
            		</a>
            	</article>
            </div>
			<div class="card carss">
				<div class="card-image">
					<a class="image" href="#">
						<img class="thumbnail" width="100%" src="https://pic.imgdb.cn/item/5eeee82d14195aa594119942.jpg" alt="置顶 · 迷路帖 · 2020夏">
					</a>
				</div>
				<article class="card-content" role="article">
					<div class="article-meta">
						<div class="level-left">
							<time class="level-item" datetime="2020-02-03T11:53:56.000Z" title="2020-02-03T11:53:56.000Z">
								6个月前
							</time>
							<span class="level-item">6 分钟 读完 (大约 827 个字)</span>
						</div>
					</div>
					<h1 class="title">
						<a class="link-muted" href="#">
							置顶 · 迷路帖 · 2020夏
						</a>
					</h1>
					<div class="content">
						<p>123123</p>
					</div>
					<a class="article-more" href="">
						阅读更多
					</a>
				</article>
			</div>
			<nav class="pagination" role="navigation" aria-label="pagination">
				<div class="pagination-previous">
					<a href="">上一页</a>
				</div>
				<div class="pagination-next">
					<a href="">下一页</a>
				</div>
				<ul class="pagination-list">
					<li><a class="pagination-link is-current" href="">1</a></li>
					<li><a class="pagination-link" href="">2</a></li>
					<li><a class="pagination-link" href="">3</a></li>
					<li><a class="pagination-link" href="">4</a></li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Tags",
	}
</script>

<style scoped>
.column{
	width: 100%;
	/* margin: 10%; */
}
.card{
    border-radius: var(--radius);
	overflow: hidden;
	opacity: 0;
	transform: scale(0.6);
	width: 100%;
	margin-top: calc(var(--margin) / 2);
	box-shadow: var(--shadow);
	transition: opacity 250ms 250ms ease, transform 300ms 250ms ease;
}
.carss{
	opacity: 1;
	transform: scale(1);
	transition: opacity 0.3s ease-out 0s, transform 0.3s ease-out 0s;
	transform-origin: center top;
}
.thumbnail{
	vertical-align: middle;
}
.card:first-child{
	margin-top: 0;
}
.card-content{
	padding: 21px;
	box-sizing: border-box;
	background-color: var(--bgcolor);
	border-radius: 0;
}
.level-left{
	color: #7a7a7a;
	font-size: 12px;
	margin-bottom: 7px;
}
.level-item{
	margin-right: 10.5px;
}
.link-muted{
	font-size: 28px;
	font-weight: 400;
	text-decoration: none;
	color: #000000;
}
.title{
	margin-bottom: 21px;
}
.link-muted:hover{
	color: #6C5CE7;
}
.content{
	margin-bottom: 21px;
}
.content>pre{
	padding: 16.3px 19.6px;
	background-color: #f5f5f5;
	color: #4a4a4a;
	overflow-x: auto;
}
.content>p{
	margin-bottom: 21px;
	color: #4a4a4a;
	font-size: 15.4px;
}
.article-more{
	display: inline-flex;
	align-items: center;
	color: #4a4a4a;
	font-size: 12px;
	font-weight: 400;
	padding:3.4625px 11.9px;
	box-sizing: border-box;
	line-height: 18px;
	background-color: #f5f5f5;
	text-decoration: none;
}
.article-more:hover{
	background-color: #EEEEEE;
}
.pagination{
	margin: 21px auto;
}
.pagination,.pagination-list{
	display: flex;
	align-items: center;
}
.pagination-next{
	order: 3;
}
.pagination-list{
	order: 2;
	justify-content: center;
	flex-wrap: wrap;
	flex-grow: 1;
	flex-shrink: 1;
}
.pagination-previous{
	order: 1;
}
.pagination-link,.pagination-next,.pagination-previous{
	padding: 6px 10.5px;
	box-sizing: border-box;
	margin: 3.5px;
	background-color: #fff;
	box-shadow: 0 4px 10px rgba(0,0,0,0.05), 0 0 1px rgba(0,0,0,0.1);
	border-radius: 4px;
	line-height: 21px;
	font-size: 14px;
	font-weight: 400;
	text-align: center;
}
.pagination a{
	color: #363636;
	text-decoration: none;
}
.is-current{
	color: #fff !important;
	background: #6C5CE7;
}
@media screen and (max-width: 768px) {
	.pagination {
		flex-wrap: wrap;
		margin: 6.5px;
	}
	.pagination-list{
		width: 100%;
		order: 1;
		line-height: 2.5;
	}
	.pagination-previous{
		order: 2;
	}
	.pagination-previous,.pagination-next{
		flex: 1;
		text-align: center;
		/* margin-top: 21px; */
	}
	.card{
		margin: 10px 0;
	}
}
</style>
