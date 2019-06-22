<template>
    <div class="app_main app_main_about">
        <div class="layout">
            <Nav :type="1"></Nav>
            <div class="me">
                <div class="content">
                    <p>我是大熊弋</p>
                    <p>前端码农</p>
                    <p>利物浦死忠</p>
                    <p>工作之余看球、看书</p>
                    <p>偶尔写点东西</p>
                    <div class="small_p">
                        <p>世界冰冷而残酷</p><p>没有人知道我们从哪里来 到哪里去</p><p>我们必须深怀谦卑</p><p>我们必须看到宁静之美</p><p>我们必须隐忍地生活，这样命运之神才不会注目我们</p><p>让我们去寻求淳朴、善良者的爱吧</p><p>他们的无知比我们的知识更可贵</p><p>让我们保持沉默，满足于我们小小的角落</p><p>像他们一样平静温顺吧</p><p>这才是生活的智慧</p>
                    </div>
                </div>
                <div class="aboutme">
                    <img class="logo" src="../../static/images/logo.jpeg"/>
                    <p class="big">大熊弋<i style="margin: 0 10px 0 50px;" class="iconfont">&#xe615;</i>深圳</p>
                    <p class="big"><i class="iconfont">&#xe604;</i>毕业于吉林大学 信息工程</p>
                    <p class="big"><i class="iconfont">&#xe621;</i>https://github.com/DaXiong1</p>
                    <p class="big"><i class="iconfont">&#xe60a;</i>https://github.com/DaXiong1</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Nav from './nav';

export default {
  name: 'about',
  data () {
      return {}
  },
  mounted () {
  },
  methods: {
  },
  components: {
    Nav: Nav
  }
};
</script>
<style slot-scope>
.app_main::before {
    background-image: url(http://pthq9vz1y.bkt.clouddn.com/main_bg.jpg);
    background-size: cover;
}
.app_main_about::before {
    filter: blur(2px)!important;
}
</style>
