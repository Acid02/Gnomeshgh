<template>
	<div>
		<div style="margin-bottom: 16px">
			<a-button type="primary" :disabled="!hasSelected" :loading="loading" @click="start">
				Reload
			</a-button>
			<span style="margin-left: 8px">
				<template v-if="hasSelected">
					{{ `Selected ${selectedRowKeys.length} items` }}
				</template>

			</span>
		</div>
		<a-table :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }" :columns="columns"
		 :data-source="data" :loading='loadings'
		 bordered>
			<template slot="action" slot-scope="text, record">
				<div style="display: flex;justify-content: space-between;align-items: center;">
					<a-popconfirm v-if="data.length" title="确定删除嘛?" ok-text="是" cancel-text="否" @confirm="() => onDelete(record.key)">
						<a-button type="danger" ghost>
							删除
						</a-button>
					</a-popconfirm>
					<a-button type="primary" ghost style='margin-left: 10px;'>
						修改
					</a-button>
				</div>

			</template>
		</a-table>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				data: [{
					key: 1,
					name: `Edward King ${1}`,
					title: 123123,
					date: new Date().getTime(),
					parent: 'css',
				}],
				columns: [{
						title: '序号',
						dataIndex: 'key',
					},
					{
						title: '作者',
						dataIndex: 'name',
					},
					{
						title: '标题',
						dataIndex: 'title',
					},
					{
						title: '时间',
						dataIndex: 'date',
					},
					{
						title: '类型',
						dataIndex: 'parent',
					},
					{
						title: '功能',
						key: 'action',
						scopedSlots: {
							customRender: 'action'
						},
						width: 160,
					},

				],
				selectedRowKeys: [], // Check here to configure the default column
				loading: false,
				loadings: false,
			};
		},
		computed: {
			hasSelected() {
				return this.selectedRowKeys.length > 0;
			},
		},
		methods: {
			start() {
				this.loading = true;
				// ajax request after empty completing
				setTimeout(() => {
					this.loading = false;
					this.selectedRowKeys = [];
				}, 1000);
			},
			onSelectChange(selectedRowKeys) {
				console.log('selectedRowKeys changed: ', selectedRowKeys);
				this.selectedRowKeys = selectedRowKeys;
			},
			onDelete(key) {
				const dataSource = [...this.data];
				this.data = dataSource.filter(item => item.key !== key);
			},
		},
	};
</script>
