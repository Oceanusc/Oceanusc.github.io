import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,e as p,b as a,d as e,f as n}from"./app-CAUHKgZ0.js";const r={};function i(c,s){return t(),o("div",null,[p(" more "),s[0]||(s[0]=a('<h2 id="优缺点比较" tabindex="-1"><a class="header-anchor" href="#优缺点比较"><span>优缺点比较</span></a></h2><table><thead><tr><th></th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>小程序</td><td>小程序底层由微信框架驱动，每个界面是单独的 JS 文件，页面切换以及全局生命周期丰富完善。小程序具有相当完备的 API。</td><td>小程序是由 JSCore 驱动逻辑层，视图层采用 Webview，故没有 DOM 节点的概念，只有渲染出的虚拟节点，所以无法动态删除或添加节点，无法使用一切 DOM 相关 API。小程序组件生命周期不够强大。小程序的 Webview 渲染存在一定的性能问题。小程序视图层与逻辑层通过 Jsbridge 连接，数据传输及渲染有延时。</td></tr><tr><td>vue</td><td>Vue 的实质是动态监测并托管 DOM 节点。由于 Vue 是网页开发，拥有 DOM 树，可以使用 DOM 相关 API。Vue 组件拥有更全面的生命周期，同时可以动态渲染组件。Vue 的组件传递数据方式默认为单向绑定</td><td>由于 Vue 的组件本质是监测 DOM 树，故其组件只能有一个根节点。同时 Vue 的界面路由依赖于 History API，其界面切换周期与逻辑不够强大。</td></tr></tbody></table><h2 id="代码区别" tabindex="-1"><a class="header-anchor" href="#代码区别"><span>代码区别</span></a></h2><p>小程序与 Vue 在代码写法上极其相似，但稍有不同。</p><h3 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定"><span>数据绑定</span></a></h3><h4 id="小程序数据绑定" tabindex="-1"><a class="header-anchor" href="#小程序数据绑定"><span>小程序数据绑定</span></a></h4><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view</span><span style="color:#8FBCBB;"> class</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">text1 {{a}} {{b?:&#39;b为真&#39;:&#39;b为假&#39;}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">{{text}}</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span></code></pre></div>',7)),s[1]||(s[1]=e("div",null,[e("p",null,[n("小程序在所有内容上都使用 Muscle 语法 ("),e("code",{"v-pre":""},"{{Javascript表达式}}"),n(") 的写法。")])],-1)),s[2]||(s[2]=a(`<h4 id="vue-数据绑定" tabindex="-1"><a class="header-anchor" href="#vue-数据绑定"><span>Vue 数据绑定</span></a></h4><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#8FBCBB;"> class</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">text1</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> :class</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">a+&#39; &#39;+ b?:&#39;b为真&#39;:&#39;b为假&#39;</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">{{text}}</span><span style="color:#81A1C1;">&lt;/div&gt;</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Vue 在标签名属性用 <code>v-bind:prop=&quot;Javascript表达式&quot;</code> 的写法、其简写为 <code>:prop=&quot;&quot;</code>，在标签内容处使用 Muscle 语法。</p></div><h3 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染"><span>条件渲染</span></a></h3><h4 id="小程序条件渲染" tabindex="-1"><a class="header-anchor" href="#小程序条件渲染"><span>小程序条件渲染</span></a></h4><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view</span><span style="color:#8FBCBB;"> wx</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">if</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{condition1}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">板块只有 condition1 为 true 时才会渲染</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">&lt;block</span><span style="color:#8FBCBB;"> wx</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">if</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{condition2}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;view&gt;</span><span style="color:#D8DEE9FF;">内容1</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;view&gt;</span><span style="color:#D8DEE9FF;">内容2</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;view&gt;</span><span style="color:#D8DEE9FF;">内容3</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;view&gt;</span><span style="color:#D8DEE9FF;">内容4</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;/view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;view&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    这是一个拥有很多兄弟标签的代码块.</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    虚拟标签 block 会把其当作一个整体用作条件渲染。</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;/view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/block&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>更多详情请见 <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/conditional.html" target="_blank" rel="noopener noreferrer">小程序条件渲染文档</a></p></div><h4 id="vue-条件渲染" tabindex="-1"><a class="header-anchor" href="#vue-条件渲染"><span>Vue 条件渲染</span></a></h4><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#8FBCBB;"> v-if</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">condition</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">板块只有 condition 为 true 时才会渲染</span><span style="color:#81A1C1;">&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#8FBCBB;"> v-if</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{condition2}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;div&gt;</span><span style="color:#D8DEE9FF;">内容1</span><span style="color:#81A1C1;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;div&gt;</span><span style="color:#D8DEE9FF;">内容2</span><span style="color:#81A1C1;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;div&gt;</span><span style="color:#D8DEE9FF;">内容3</span><span style="color:#81A1C1;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;div&gt;</span><span style="color:#D8DEE9FF;">内容4</span><span style="color:#81A1C1;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    Vue 没有相关虚拟标签，且只能监听一个标签。所以只能建立一个没有样式的 div</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    标签将多个并列标签抱起来。这样 Vue 就会因监听最外层 div</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    会把其当作一个整体用作条件渲染。</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>更多相关请见 <a href="https://cn.vuejs.org/v2/guide/#%E6%9D%A1%E4%BB%B6%E4%B8%8E%E5%BE%AA%E7%8E%AF" target="_blank" rel="noopener noreferrer">Vue 条件渲染文档</a></p></div><h3 id="循环渲染" tabindex="-1"><a class="header-anchor" href="#循环渲染"><span>循环渲染</span></a></h3><h4 id="小程序循环渲染" tabindex="-1"><a class="header-anchor" href="#小程序循环渲染"><span>小程序循环渲染</span></a></h4><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view</span><span style="color:#8FBCBB;"> wx</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">for</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{array}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> wx</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">for-item</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">element</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> wx</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">for-index</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">index</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  {{index}} is {{element}}</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/view&gt;</span></span></code></pre></div><p>实际渲染结果为:</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;view&gt;</span><span style="color:#D8DEE9FF;">1</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;view&gt;</span><span style="color:#D8DEE9FF;">2</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;view&gt;</span><span style="color:#D8DEE9FF;">3</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;view&gt;</span><span style="color:#D8DEE9FF;">4</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;view&gt;</span><span style="color:#D8DEE9FF;">5</span><span style="color:#81A1C1;">&lt;/view&gt;</span></span></code></pre></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>更多详情请见 <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/list.html" target="_blank" rel="noopener noreferrer">小程序循环渲染文档</a></p></div><h4 id="vue-循环渲染" tabindex="-1"><a class="header-anchor" href="#vue-循环渲染"><span>Vue 循环渲染</span></a></h4><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;div</span><span style="color:#8FBCBB;"> v-for</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">(element,index) in array</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">       {{index}} is {{ element }}</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;/ol&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/div&gt;</span></span></code></pre></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>更多相关请见 <a href="https://cn.vuejs.org/v2/guide/#%E6%9D%A1%E4%BB%B6%E4%B8%8E%E5%BE%AA%E7%8E%AF" target="_blank" rel="noopener noreferrer">Vue 循环渲染文档</a></p></div><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h2><h3 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期"><span>页面生命周期</span></a></h3><h4 id="小程序生命周期" tabindex="-1"><a class="header-anchor" href="#小程序生命周期"><span>小程序生命周期</span></a></h4><figure><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png" alt="小程序页面生命周期" tabindex="0" loading="lazy"><figcaption>小程序页面生命周期</figcaption></figure><h4 id="vue-页面生命周期" tabindex="-1"><a class="header-anchor" href="#vue-页面生命周期"><span>Vue 页面生命周期</span></a></h4><p><a href="https://router.vuejs.org/guide/advanced/navigation-guards.html" target="_blank" rel="noopener noreferrer">Vue 页面生命周期</a></p><h3 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期"><span>组件生命周期</span></a></h3><h4 id="小程序组件生命周期" tabindex="-1"><a class="header-anchor" href="#小程序组件生命周期"><span>小程序组件生命周期</span></a></h4><p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html" target="_blank" rel="noopener noreferrer">小程序组件生命周期</a></p><h4 id="vue-组件生命周期" tabindex="-1"><a class="header-anchor" href="#vue-组件生命周期"><span>Vue 组件生命周期</span></a></h4><p><a href="https://cn.vuejs.org/guide/essentials/lifecycle.html" target="_blank" rel="noopener noreferrer">Vue 组件生命周期</a></p>`,30))])}const v=l(r,[["render",i],["__file","compare.html.vue"]]),y=JSON.parse('{"path":"/code/vue/compare.html","title":"Vue 与小程序的异同","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"Vue 与小程序的异同","icon":"compare","category":"Vue","tag":["Vue","小程序","对比"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/vue/compare.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"Vue 与小程序的异同"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"小程序"}],["meta",{"property":"article:tag","content":"对比"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue 与小程序的异同\\",\\"image\\":[\\"https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"优缺点比较","slug":"优缺点比较","link":"#优缺点比较","children":[]},{"level":2,"title":"代码区别","slug":"代码区别","link":"#代码区别","children":[{"level":3,"title":"数据绑定","slug":"数据绑定","link":"#数据绑定","children":[]},{"level":3,"title":"条件渲染","slug":"条件渲染","link":"#条件渲染","children":[]},{"level":3,"title":"循环渲染","slug":"循环渲染","link":"#循环渲染","children":[]}]},{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[{"level":3,"title":"页面生命周期","slug":"页面生命周期","link":"#页面生命周期","children":[]},{"level":3,"title":"组件生命周期","slug":"组件生命周期","link":"#组件生命周期","children":[]}]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":3.11,"words":932},"filePathRelative":"code/vue/compare.md","localizedDate":"2020年5月4日","excerpt":""}');export{v as comp,y as data};
