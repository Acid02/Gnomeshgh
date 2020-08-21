<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="name" label="标题" prop="name">
      <a-input
	  placeholder="标题"
        v-model="form.name"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item label="类型" prop="region">
      <a-select v-model="form.region" placeholder="类型">
      <a-select-option :value="item" v-for="(item,index) in type" :key="index">
        {{item}}
      </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="时间" required prop="date1">
      <a-date-picker 
	  :locale='locale'
        v-model="form.date1"
        show-time
        type="date"
        placeholder="时间"
        style="width: 100%;"
      />
    </a-form-model-item>
   <!-- <a-form-model-item label="Instant delivery" prop="delivery">
      <a-switch v-model="form.delivery" />
    </a-form-model-item> -->
    <!-- <a-form-model-item label="Activity type" prop="type">
      <a-checkbox-group v-model="form.type">
        <a-checkbox value="1" name="type">
          Online
        </a-checkbox>
        <a-checkbox value="2" name="type">
          Promotion
        </a-checkbox>
        <a-checkbox value="3" name="type">
          Offline
        </a-checkbox>
      </a-checkbox-group>
    </a-form-model-item> -->
    <!-- <a-form-model-item label="Resources" prop="resource">
      <a-radio-group v-model="form.resource">
        <a-radio value="1">
          Sponsor
        </a-radio>
        <a-radio value="2">
          Venue
        </a-radio>
      </a-radio-group>
    </a-form-model-item> -->
    <a-form-model-item label="描述" prop="desc">
      <a-input v-model="form.desc" type="textarea" placeholder="描述"/>
    </a-form-model-item>
	 <a-form-model-item label="内容" prop="content">
	<Tinymce v-model="form.content" @onClick="onClick"></Tinymce>
	</a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        Create
      </a-button>
      <a-button style="margin-left: 10px;" @click="resetForm">
        Reset
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
	
<script>
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';

// 这个组件需要lesss
import Tinymce from '@/components/tinymce'
export default {
  components:{Tinymce},
  data() {
    return {
		locale,
	  type:['CSS','JavaScript'],
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '1',
      form: {
        name: '',
        region: undefined,
        date1: undefined,
		content:'',
        // delivery: false,
        // type: [],
        // resource: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 1, max: 10, message: '长度不能超过10位哦', trigger: 'blur' },
        ],
        region: [{ required: true, message: '请选择一个类型', trigger: 'change' }],
        date1: [{ required: true, message: '请选择一个日期', trigger: 'change' }],
        // type: [
        //   {
        //     type: 'array',
        //     required: true,
        //     message: 'Please select at least one activity type',
        //     trigger: 'change',
        //   },
        // ],
        // resource: [
        //   { required: true, message: 'Please select activity resource', trigger: 'change' },
        // ],
        desc: [{ required: true, message: '请添加描述', trigger: 'blur' }],
		content: [{ required: true, message: '请添加内容', trigger: 'blur' }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    onClick () {}
  },
};
</script>

<style>
</style>
