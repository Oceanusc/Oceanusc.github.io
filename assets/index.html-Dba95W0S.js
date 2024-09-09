import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as F,d as n,e as E,b as l,f as a,a as o,w as p}from"./app-CAUHKgZ0.js";const d={},y={id:"索引配置",tabindex:"-1"},C={class:"header-anchor",href:"#索引配置"};function u(m,s){const e=t("RouteLink"),r=t("Badge");return c(),F("div",null,[s[7]||(s[7]=n("p",null,"小程序使用 JSON 文件来描述自身的配置，小程序的配置主要分为全局配置、页面配置两种。",-1)),s[8]||(s[8]=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"为了补充全局配置、页面配置的缺失，小程序配置还包括项目配置与 sitemap 配置。")],-1)),E(" more "),s[9]||(s[9]=l(`<h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置"><span>全局配置</span></a></h2><p>小程序根目录下的 <code>app.json</code> 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置 tabBar 等。</p><p>以下是一个包含了部分常用配置选项的 <code>app.json</code>:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">pages</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">pages/index/index</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">pages/logs/index</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">],</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">window</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#8FBCBB;">navigationBarTitleText</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Demo</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">tabBar</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#8FBCBB;">list</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> [</span></span>
<span class="line"><span style="color:#ECEFF4;">      {</span></span>
<span class="line"><span style="color:#ECEFF4;">        &quot;</span><span style="color:#8FBCBB;">pagePath</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">pages/index/index</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">        &quot;</span><span style="color:#8FBCBB;">text</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">首页</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">      },</span></span>
<span class="line"><span style="color:#ECEFF4;">      {</span></span>
<span class="line"><span style="color:#ECEFF4;">        &quot;</span><span style="color:#8FBCBB;">pagePath</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">pages/logs/logs</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">        &quot;</span><span style="color:#8FBCBB;">text</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">日志</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">      }</span></span>
<span class="line"><span style="color:#ECEFF4;">    ]</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">networkTimeout</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#8FBCBB;">request</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 10000</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#8FBCBB;">downloadFile</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 10000</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">debug</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> true</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">navigateToMiniProgramAppIdList</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">wxe5f52902cf4de896</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),n("p",null,[s[1]||(s[1]=a("更多详情请见 ")),o(e,{to:"/code/mini-app/guide/config/app-config.html"},{default:p(()=>s[0]||(s[0]=[a("全局配置文档")])),_:1})]),s[10]||(s[10]=l(`<h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置"><span>页面配置</span></a></h2><p>每一个小程序页面也可以使用同名 <code>.json</code> 文件来对本页面的窗口表现进行配置，页面中配置项会覆盖 <code>app.json</code> 的 <code>window</code> 中相同的配置项。</p><p>例如:</p><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">navigationBarBackgroundColor</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#ffffff</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">navigationBarTextStyle</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">black</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">navigationBarTitleText</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">微信接口功能演示</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">backgroundColor</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#eeeeee</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">backgroundTextStyle</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">light</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div>`,4)),n("p",null,[s[3]||(s[3]=a("更多详情请见 ")),o(e,{to:"/code/mini-app/guide/config/page-config.html"},{default:p(()=>s[2]||(s[2]=[a("页面配置文档")])),_:1})]),n("h2",y,[n("a",C,[n("span",null,[s[4]||(s[4]=a("索引配置 ")),o(r,{text:"初学无需阅读",type:"grey"})])])]),s[11]||(s[11]=l('<p>微信现已开放小程序内搜索，开发者可以通过 sitemap.json 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 <code>user-agent</code>: <code>mpcrawler</code> 及场景值 <code>1129</code>。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。</p><h3 id="具体配置说明" tabindex="-1"><a class="header-anchor" href="#具体配置说明"><span>具体配置说明</span></a></h3><ol><li>页面收录设置: 可对整个小程序的索引进行关闭，小程序管理后台-设置-基本设置-页面收录设置</li><li>sitemap 配置: 可对特定页面的索引进行关闭</li></ol><h3 id="sitemap-配置" tabindex="-1"><a class="header-anchor" href="#sitemap-配置"><span>sitemap 配置</span></a></h3><p>小程序根目录下的 sitemap.json 文件用来配置小程序及其页面是否允许被微信索引。</p>',5)),n("p",null,[s[6]||(s[6]=a("完整配置项说明请参考 ")),o(e,{to:"/code/mini-app/guide/config/sitemap-config.html"},{default:p(()=>s[5]||(s[5]=[a("sitemap 配置")])),_:1})])])}const g=i(d,[["render",u],["__file","index.html.vue"]]),q=JSON.parse('{"path":"/code/mini-app/guide/config/","title":"配置","lang":"zh-CN","frontmatter":{"date":"2022-01-07T00:00:00.000Z","title":"配置","icon":"config","category":"小程序","description":"小程序使用 JSON 文件来描述自身的配置，小程序的配置主要分为全局配置、页面配置两种。 提示 为了补充全局配置、页面配置的缺失，小程序配置还包括项目配置与 sitemap 配置。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/config/"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"配置"}],["meta",{"property":"og:description","content":"小程序使用 JSON 文件来描述自身的配置，小程序的配置主要分为全局配置、页面配置两种。 提示 为了补充全局配置、页面配置的缺失，小程序配置还包括项目配置与 sitemap 配置。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:published_time","content":"2022-01-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"全局配置","slug":"全局配置","link":"#全局配置","children":[]},{"level":2,"title":"页面配置","slug":"页面配置","link":"#页面配置","children":[]},{"level":2,"title":"索引配置","slug":"索引配置","link":"#索引配置","children":[{"level":3,"title":"具体配置说明","slug":"具体配置说明","link":"#具体配置说明","children":[]},{"level":3,"title":"sitemap 配置","slug":"sitemap-配置","link":"#sitemap-配置","children":[]}]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":1.99,"words":596},"filePathRelative":"code/mini-app/guide/config/README.md","localizedDate":"2022年1月7日","excerpt":"<p>小程序使用 JSON 文件来描述自身的配置，小程序的配置主要分为全局配置、页面配置两种。</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>为了补充全局配置、页面配置的缺失，小程序配置还包括项目配置与 sitemap 配置。</p>\\n</div>\\n","autoDesc":true}');export{g as comp,q as data};
