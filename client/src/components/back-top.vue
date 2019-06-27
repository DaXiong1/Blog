
<template>
    <div class="sideIcon">
        <i class="iconfont" @click="goToTop">&#xe635;</i>
    </div>
</template>

<script>
export default {
  name: 'back-top',
  data () {
    return {
      el: null
    };
  },
  mounted () {
      this.el = document.querySelector('.articleBox')
  },
  methods: {
    goToTop: function () {
      this.scrollToTop()
    },
    scrollToTop () {
        let timer = setInterval(() => {
            let dtop = document.documentElement.scrollTop;
            let speed = Math.floor(-dtop/10);
            document.documentElement.scrollTop = dtop + speed;
            if(dtop==0){              
                clearInterval(timer);
            }
        },30)
    }
  }
};
</script>
