export default  {
    routes:[
        {
            path: '/',
            name: 'Home',
            component: ()=> import('@/views/Home'),
			children:[
				{
					path:'',
					name:'Tags',
					component: ()=> import('@/components/Tags')
				},
				{
					path:'Classify',//分类
					name:'Classify',
					component: ()=> import('@/components/Classify'),
				},
				{
		        	path:'/Classify/:name',
		        	name:'Classifylist',
		        	component: ()=> import('@/components/Tags'),
		        	meta:{
		        		BreadName:'分类',
		        		BreadUrl:'Classify'
		        	}
		        },
				{
					path:'Label',//标签
					name:'Label',
					component: ()=> import('@/components/Label'),
				},
				{
					path:'/Label/:name',
					name:'Labellist',
					component: ()=> import('@/components/Tags'),
					meta:{
						BreadName:'标签',
						BreadUrl:'Label'
					}
				}
			],
        },
		{
			path:'/details',
			name:'details',
			component: ()=> import('@/views/details'),
		},
        {
            path:'*',
            component: ()=> import('@/components/NotFound')
        }
    ],
    mode:"history",
    // fallback:false   //强行history路由
}