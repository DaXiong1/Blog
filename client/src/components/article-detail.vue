<template>
  <div>
    <section>
      <div class="markdown articleDetailBox">
        <div class="title">
          <h1>这个是标题哦</h1>
        </div>
        <div>cnncibfcbficb</div>
      </div>
      <div class="info articleDetailBox">
        <p>本文于&nbsp;2019/05/18 下午&nbsp;发布，当前已被围观&nbsp;1100&nbsp;次</p>
        <p>
          标签：
          <a href="/article" class="tagLink nuxt-link-active">dcdc</a>
        </p>
        <p>作者：大熊弋</p>
        <p>链接：https://xxx</p>
        <p>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
      </div>
      <div class="arcMata articleDetailBox" style="background: transparent">
        <div class="arcMataInfo">
          <div class="like">
            <i class="iconfont" v-if="true" style="color: #51ce23">&#xe63b;</i>
            <i class="iconfont" v-else>&#xe65c;</i>
            <span>100</span>人喜欢
          </div>
          <div class="view">
            <span>100</span>条评论
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
