<template>
  <div class="tinymce-editor">
    <editor id="tinymce" v-model="myValue" :init="init" @onClick="onClick" />
 </div>
</template>

<script>
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import 'tinymce/themes/silver/theme';
import 'tinymce/icons/default/icons.min.js';
import 'tinymce/plugins/image';
import 'tinymce/plugins/media';// 插入视频插件
import 'tinymce/plugins/table';// 插入表格插件
import 'tinymce/plugins/lists';// 列表插件
import 'tinymce/plugins/wordcount';// 字数统计插件
import 'tinymce/plugins/textcolor'; //文本颜色插件
import 'tinymce/plugins/fullscreen'; //全屏
import 'tinymce/plugins/help'; // 帮助
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/print'; //打印
import 'tinymce/plugins/preview'; // 预览
import 'tinymce/plugins/hr'; // 水平线
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/spellchecker';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/fullpage';
import 'tinymce/plugins/toc';
import "tinymce/icons/default/icons";
import "tinymce/themes/silver";
import "tinymce/plugins/image";
import "tinymce/plugins/media";
import "tinymce/plugins/table";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/code";
import "tinymce/plugins/link";
import "tinymce/plugins/advlist";
import "tinymce/plugins/codesample";
import "tinymce/plugins/textpattern";
import "tinymce/plugins/autolink";
import "tinymce/plugins/directionality";
import "tinymce/plugins/template";
import "tinymce/plugins/imagetools";
import "tinymce/plugins/autoresize";
export default {
    name:'tinymceEditor',
    components: { Editor },
    props: {
        value: {
            type: String,
            default: ''
        },
        // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
        // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
        baseUrl: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        plugins: {
            type: [String, Array],
            default: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons'
        },
        toolbar: {
            type: [String, Array],
            default: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat'
        },
        branding: false
    },
    data() {
        return {
            //初始化配置
            init: {
                language_url: '/static/langs/zh_CN.js',
                language: 'zh_CN',
                skin_url: '/static/skins/ui/oxide', // skin路径
                height: 300, // 编辑器高度
                branding: false, // 是否禁用“Powered by TinyMCE”
                menubar: true, // 顶部菜单栏显示
                plugins: this.plugins,
                toolbar: this.toolbar,
                //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
                images_upload_handler: (blobInfo, success) => {
                    const img = 'data:image/jpeg;base64,' + blobInfo.base64();
                     success(img);
                 }
            },
            myValue: this.value
        };
    },
    mounted() {
        tinymce.init({});
    },
    methods: {
    //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    //需要什么事件可以自己增加
        onClick(e) {
            this.$emit('onClick', e, tinymce);
        },
        //可以添加一些自己的自定义事件，如清空内容
        clear() {
            this.myValue = '';
        }
    },
    watch: {
        value(newValue) {
            this.myValue = newValue;
        },
        myValue(newValue) {
            this.$emit('input', newValue);
        }
    }
};
</script>