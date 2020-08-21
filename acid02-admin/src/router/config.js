export default  {
    routes:[
		// {
		// 	path:'',//标签
		// 	name:'Login',
		// 	component: ()=> import('@/views/login'),
		// },
		{
			path:'',//标签
			name:'Home',
			component: ()=> import('@/views/home'),
			children:[
				{
					path:'',
					name:'User',
					component: ()=> import('@/components/user'),
					meta:{
						keys:1
					}
				},
				{
					path:'articlelist',
					name:'articlelist',
					component: ()=> import('@/components/articlelist'),
					meta:{
						keys:2
					}
				},
				{
					path:'compile',
					name:'compile',
					component: ()=> import('@/components/compile'),
					meta:{
						keys:3
					}
				}
			]
		},
	],
}