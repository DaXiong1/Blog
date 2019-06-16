<template>
  <header class="header navDown">
    <section class="box header-content">
      <nav>
        <a
          v-for="(item,index) in navs"
          :key="index"
          :href="item.href"
          :class="{active: index == type}"
        >{{item.title}}</a>
      </nav>
      <!-- <div class="searchBox">
        <div class="search" :style="showSearch ? {paddingLeft: '5px'} : {paddingLeft: '0'}">
          <div class="text" :class="showSearch ? 'showText' : 'hiddenText'">
            <input type="text" placeholder="你心所想...">
          </div>
          <div class="searchIcon">
            <i class="iconfont" @click="toShowSearch" v-if="!showSearch">&#xe603;</i>
            <i class="iconfont rightIcon" @click="tohiddenSearch" v-else>&#xe640;</i>
          </div>
        </div>
      </div> -->
    </section>
  </header>
</template>
<script>
export default {
  name: 'nav',
  props: ['type'],
  data () {
    return {
      showSearch: false,
      articleId: '',
      navs: [{ href: '/', title: '文章' }, { href: '/about', title: '关于作者' }]
    };
  },
  methods: {
    toShowSearch: function () {
      this.showSearch = true;
    },
    tohiddenSearch: function () {
      this.showSearch = false;
    }
  }
};
</script>
