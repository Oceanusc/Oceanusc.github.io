import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as o,d as t,f as n,e as l,b as p}from"./app-CAUHKgZ0.js";const r={};function c(d,e){return s(),o("div",null,[e[0]||(e[0]=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"提示"),t("p",null,[t("code",null,"page.ts"),n(" 用于小程序页面渲染。")])],-1)),l(" more "),e[1]||(e[1]=p(`<h2 id="插件的引入" tabindex="-1"><a class="header-anchor" href="#插件的引入"><span>插件的引入</span></a></h2><p>首先在 <code>ts</code> 文件头部引入 <code>page</code> 与 <code>@mptool/enhance</code>。</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#ECEFF4;"> {</span><span style="color:#D8DEE9;"> $Page</span><span style="color:#ECEFF4;"> }</span><span style="color:#81A1C1;"> from</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">\`@mptool/enhance</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#ECEFF4;"> {</span><span style="color:#D8DEE9;"> xxx</span><span style="color:#ECEFF4;"> }</span><span style="color:#81A1C1;"> from</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">path/to/page/ts</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span></code></pre></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><h3 id="resolvepage" tabindex="-1"><a class="header-anchor" href="#resolvepage"><span>resolvePage()</span></a></h3><p><code>(option: PageQuery, page?: PageData, setGlobal = true) =&gt; PageData | null</code></p><p><strong>简介:</strong></p><ul><li><p>性质: 同步函数</p></li><li><p>描述: 预处理 <code>page</code> 数据写入全局数据</p></li><li><p>用法: 在页面 <code>onNavigate</code> 时调用，</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>option</td><td>页面跳转参数</td></tr><tr><td>page</td><td>页面数据</td></tr><tr><td>setGlobal</td><td>是否将处理后的数据写入到全局数据中</td></tr></tbody></table></li><li><p>返回: 处理后的 page 配置</p></li></ul><p><strong>案例:</strong></p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">  onNavigate</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">option</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">    resolvePage</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">option</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span></code></pre></div><h3 id="setpage" tabindex="-1"><a class="header-anchor" href="#setpage"><span>setPage()</span></a></h3><p><code>({ option, ctx, handle }: SetPageOption, page?: ComponentData[] | undefined, preload?: boolean) =&gt; void</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 设置本地界面数据，如果传入 <code>page</code> 参数，则根据 <code>handle</code> 的值决定是否在 <code>setData</code> 前处理 <code>page</code>。</p><p>如果没有传入 <code>page</code>，则使用 <code>PageOption.data.page</code>。之后根据 <code>preload</code> 的值决定是否对页面链接进行预加载。</p></li><li><p>用法: 在页面 <code>onLoad</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>object</td><td>配置对象</td></tr><tr><td>page</td><td>页面数据</td></tr><tr><td>preload [default:true]</td><td>是否预加载子页面</td></tr></tbody></table><p><code>object</code> 参数:</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>option</td><td>页面传参</td></tr><tr><td>ctx</td><td>页面指针</td></tr><tr><td>handle [default:false]</td><td>页面是否已经被处理</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">  onLoad</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">option</span><span style="color:#D8DEE9FF;">: </span><span style="color:#D8DEE9;">any</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">    setPage</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9;"> option</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> ctx</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;"> }</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span></code></pre></div><h3 id="setonlinepage" tabindex="-1"><a class="header-anchor" href="#setonlinepage"><span>setOnlinePage()</span></a></h3><p><code>(option: PageOption, ctx: PageInstanceWithPage, preload = true) =&gt; void</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 设置在线界面数据</p></li><li><p>用法: 在页面 <code>onLoad</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>option</td><td>页面跳转参数</td></tr><tr><td>ctx</td><td>页面指针</td></tr><tr><td>preload [default:true]</td><td>是否预加载子页面</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">  onLoad</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">res</span><span style="color:#D8DEE9FF;">: </span><span style="color:#D8DEE9;">any</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">    setOnlinePage</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">,</span><span style="color:#81A1C1;"> this</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span></code></pre></div><h3 id="popnotice" tabindex="-1"><a class="header-anchor" href="#popnotice"><span>popNotice()</span></a></h3><p><code>(id: string) =&gt; void</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 弹出通知</p></li><li><p>用法: 在页面 <code>onLoad</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>当前界面的标识符</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">  onLoad</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9;"> id</span><span style="color:#ECEFF4;"> }</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">    popNotice</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">id</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span></code></pre></div><h3 id="getcolor" tabindex="-1"><a class="header-anchor" href="#getcolor"><span>getColor()</span></a></h3><p><code>(grey?: boolean) =&gt; Colors</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 获得页面背景相关颜色</p></li><li><p>用法: 在页面 <code>onShow</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>grey [default:false]</td><td>页面是否为灰色背景</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">  onShow</span><span style="color:#D8DEE9FF;">() </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#81A1C1;">    this</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setData</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9;">      color</span><span style="color:#ECEFF4;">:</span><span style="color:#88C0D0;"> getColor</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">data</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">page</span><span style="color:#D8DEE9FF;">[</span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">grey</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">    }</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span></code></pre></div>`,34))])}const E=a(r,[["render",c],["__file","page.html.vue"]]),y=JSON.parse('{"path":"/code/mini-app/framework/page.html","title":"Page 插件","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"Page 插件","icon":"page","category":"小程序","description":"提示 page.ts 用于小程序页面渲染。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/framework/page.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"Page 插件"}],["meta",{"property":"og:description","content":"提示 page.ts 用于小程序页面渲染。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Page 插件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"插件的引入","slug":"插件的引入","link":"#插件的引入","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[{"level":3,"title":"resolvePage()","slug":"resolvepage","link":"#resolvepage","children":[]},{"level":3,"title":"setPage()","slug":"setpage","link":"#setpage","children":[]},{"level":3,"title":"setOnlinePage()","slug":"setonlinepage","link":"#setonlinepage","children":[]},{"level":3,"title":"popNotice()","slug":"popnotice","link":"#popnotice","children":[]},{"level":3,"title":"getColor()","slug":"getcolor","link":"#getcolor","children":[]}]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":1.6,"words":479},"filePathRelative":"code/mini-app/framework/page.md","localizedDate":"2020年10月9日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p><code>page.ts</code> 用于小程序页面渲染。</p>\\n</div>\\n","autoDesc":true}');export{E as comp,y as data};
