import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as i,c as r,d as s,e as d,b as o,a as e,w as t,f as l}from"./app-CAUHKgZ0.js";const y={};function m(v,n){const a=c("CodeDemo");return i(),r("div",null,[n[3]||(n[3]=s("p",null,"HTML 不仅能够定义网页的单独部分 (例如“段落”或“图片”)，还可以使用块级元素 (例如“标题栏”、“导航菜单”、“主内容列”) 来定义网站中的复合区域。本文将探讨如何规划基本的网站结构，并根据规划的结构来编写 HTML。",-1)),d(" more "),n[4]||(n[4]=o(`<h2 id="文档的基本组成部分" tabindex="-1"><a class="header-anchor" href="#文档的基本组成部分"><span>文档的基本组成部分</span></a></h2><p>网页的外观多种多样，但是除了全屏视频或游戏，或艺术作品页面，或只是结构不当的页面以外，都倾向于使用类似的标准组件:</p><h3 id="页眉" tabindex="-1"><a class="header-anchor" href="#页眉"><span>页眉</span></a></h3><p>通常横跨于整个页面顶部有一个大标题或一个 LOGO。这是网站的主要一般信息，通常存在于所有网页。</p><h3 id="导航栏" tabindex="-1"><a class="header-anchor" href="#导航栏"><span>导航栏</span></a></h3><p>指向网站各个主要区段的超链接。通常用菜单按钮、链接或标签页表示。类似于标题栏，导航栏通常应在所有网页之间保持一致，否则会让用户感到疑惑，甚至无所适从。许多 web 设计人员认为导航栏是标题栏的一部分，而不是独立的组件，但这并非绝对，两者独立可以提供更好的无障碍访问特性，因为屏幕阅读器可以更清晰地分辨二者。</p><h3 id="主内容" tabindex="-1"><a class="header-anchor" href="#主内容"><span>主内容</span></a></h3><p>中心的大部分区域是当前网页大多数的独有内容，例如视频、文章、地图、新闻等。这些内容是网站的一部分，且会因页面而异。</p><h3 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏"><span>侧边栏</span></a></h3><p>一些外围信息、链接、引用、广告等。通常与主内容相关(例如一个新闻页面上，侧边栏可能包含作者信息或相关文章链接)，还可能存在其他的重复元素，如辅助导航系统。</p><h3 id="页脚" tabindex="-1"><a class="header-anchor" href="#页脚"><span>页脚</span></a></h3><p>横跨页面底部的狭长区域。和标题一样，页脚是放置公共信息(比如版权声明或联系方式)的，一般使用较小字体，且通常为次要内容。还可以通过提供快速访问链接来进行 SEO。</p><h2 id="用于构建内容的-html" tabindex="-1"><a class="header-anchor" href="#用于构建内容的-html"><span>用于构建内容的 HTML</span></a></h2><p>视觉效果并不是一切。我们可以修改最重要内容(例如导航菜单和相关链接)的颜色、字体大小来吸引用户的注意，但是这对视障人士是无效的，“粉红色”和“大字体”对他们并不奏效。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>注: 全球色盲患者比例为 4%，换句话说，每 12 名男性就有一位色盲，每 200 名女性就有一位色盲。全盲和视障人士约占世界人口(约 70 亿)的 13%(2015 年 全球约有 9.4 亿人口存在视力问题)。</p></div><p>HTML 代码中可根据功能来为区段添加标记。可使用元素来无歧义地表示上文所讲的内容区段，屏幕阅读器等辅助技术可以识别这些元素，并帮助执行“找到主导航 “或”找到主内容“等任务。参见前文所讲的 页面中元素结构和语义不佳所带来的后果。</p><p>为了实现语义化标记，HTML 提供了明确这些区段的专用标签，例如:</p><ul><li><code>&lt;header&gt;</code>: 页眉。</li><li><code>&lt;nav&gt;</code>: 导航栏。</li><li><code>&lt;main&gt;</code>: 主内容。主内容中还可以有各种子内容区段，可用 <code>&lt;article&gt;</code>、<code>&lt;section&gt;</code> 和 <code>&lt;div&gt;</code> 等元素表示。</li><li><code>&lt;aside&gt;</code>: 侧边栏，经常嵌套在 <code>&lt;main&gt;</code> 中。</li><li><code>&lt;footer&gt;</code>: 页脚。</li></ul><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;!doctype</span><span style="color:#8FBCBB;"> html</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;meta</span><span style="color:#8FBCBB;"> charset</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">utf-8</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;title&gt;</span><span style="color:#D8DEE9FF;">二次元俱乐部</span><span style="color:#81A1C1;">&lt;/title&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;link</span></span>
<span class="line"><span style="color:#8FBCBB;">      href</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#8FBCBB;">      rel</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">stylesheet</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">    /&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;link</span></span>
<span class="line"><span style="color:#8FBCBB;">      href</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#8FBCBB;">      rel</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">stylesheet</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">    /&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;link</span><span style="color:#8FBCBB;"> href</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">style.css</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> rel</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">stylesheet</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;/head&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;header&gt;</span></span>
<span class="line"><span style="color:#616E88;">      &lt;!-- 本站所有网页的统一主标题 --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">      &lt;h1&gt;</span><span style="color:#D8DEE9FF;">聆听电子天籁之音</span><span style="color:#81A1C1;">&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;/header&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">    &lt;nav&gt;</span></span>
<span class="line"><span style="color:#616E88;">      &lt;!-- 本站统一的导航栏 --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">      &lt;ul&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">        &lt;li&gt;&lt;a</span><span style="color:#8FBCBB;"> href</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">主页</span><span style="color:#81A1C1;">&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#616E88;">        &lt;!-- 共n个导航栏项目，省略…… --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">      &lt;/ul&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">      &lt;form&gt;</span></span>
<span class="line"><span style="color:#616E88;">        &lt;!-- 搜索栏是站点内导航的一个非线性的方式。--&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">        &lt;input</span><span style="color:#8FBCBB;"> type</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">search</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> name</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">q</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> placeholder</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">要搜索的内容</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">        &lt;input</span><span style="color:#8FBCBB;"> type</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">submit</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> value</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">搜索</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">      &lt;/form&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;/nav&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">    &lt;main&gt;</span></span>
<span class="line"><span style="color:#616E88;">      &lt;!-- 网页主体内容 --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">      &lt;article&gt;</span></span>
<span class="line"><span style="color:#616E88;">        &lt;!-- 此处包含一个 article(一篇文章)，内容略…… --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">      &lt;/article&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">      &lt;aside&gt;</span></span>
<span class="line"><span style="color:#616E88;">        &lt;!-- 侧边栏在主内容右侧 --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">        &lt;h2&gt;</span><span style="color:#D8DEE9FF;">相关链接</span><span style="color:#81A1C1;">&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">        &lt;ul&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">          &lt;li&gt;&lt;a</span><span style="color:#8FBCBB;"> href</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">这是一个超链接</span><span style="color:#81A1C1;">&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#616E88;">          &lt;!-- 侧边栏有n个超链接，略略略…… --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">      &lt;/aside&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;/main&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">    &lt;footer&gt;</span></span>
<span class="line"><span style="color:#616E88;">      &lt;!-- 本站所有网页的统一页脚 --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">      &lt;p&gt;</span><span style="color:#D8DEE9FF;">© 2050 某某保留所有权利</span><span style="color:#81A1C1;">&lt;/p&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;/footer&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html-布局元素细节" tabindex="-1"><a class="header-anchor" href="#html-布局元素细节"><span>HTML 布局元素细节</span></a></h2><p>理解所有 HTML 区段元素具体含义是很有益处的，以下列出了常见元素:</p><ul><li><p><code>&lt;main&gt;</code></p><p>存放每个页面独有的内容。每个页面上只能用一次 <code>&lt;main&gt;</code>，且直接位于 <code>&lt;body&gt;</code> 中。最好不要把它嵌套进其它元素。</p></li><li><p><code>&lt;article</code>&gt;</p><p>一篇文章，与页面其它部分无关(比如一篇博文)。</p></li><li><p><code>&lt;section&gt;</code></p><p>与 <code>&lt;article&gt;</code> 类似，但 <code>&lt;section&gt;</code> 更适用于组织页面使其按功能 (比如迷您地图、一组文章标题和摘要) 分块。</p><p>一般的最佳用法是以标题作为开头。也可以把一篇 <code>&lt;article&gt;</code> 分成若干部分并分别置于不同的 <code>&lt;section&gt;</code> 中，也可以把一个区段 <code>&lt;section&gt;</code> 分成若干部分并分别置于不同的 <code>&lt;article&gt;</code> 中，取决于上下文。</p></li><li><p><code>&lt;aside&gt;</code> 包含一些间接信息(术语条目、作者简介、相关链接，等等)。</p></li><li><p><code>&lt;header&gt;</code> 是简介形式的内容。如果它是 <code>&lt;body&gt;</code> 的子元素，那么就是网站的全局页眉。如果它是 <code>&lt;article&gt;</code> 或 <code>&lt;section&gt;</code> 的子元素，那么它是这些部分特有的页眉(此 <code>&lt;header&gt;</code> 非彼 标题)。</p></li><li><p><code>&lt;nav&gt;</code> 包含页面主导航功能。其中不应包含二级链接等内容。</p></li><li><p><code>&lt;footer&gt;</code> 包含了页面的页脚部分。</p></li></ul><h3 id="无语义元素" tabindex="-1"><a class="header-anchor" href="#无语义元素"><span>无语义元素</span></a></h3><p>有时您会发现，对于一些要组织的项目或要包装的内容，现有的语义元素均不能很好对应。有时候您可能只想将一组元素作为一个单独的实体来修饰来响应单一的用 CSS 或 JavaScript。为了应对这种情况，HTML 提供了 <code>&lt;div&gt;</code> 和 <code>&lt;span&gt;</code> 元素。应配合使用 class 属性提供一些标签，使这些元素能易于查询。</p><p><code>&lt;span&gt;</code> 是一个内联的 (inline) 无语义元素，最好只用于无法找到更好的语义元素来包含内容时，或者不想增加特定的含义时。</p>`,26)),e(a,{id:"code-demo-152",type:"normal",title:"%E6%97%A0%E8%AF%AD%E4%B9%89%E5%85%83%E7%B4%A0%20span",code:"eJw1j8lqwlAYRl/lcvetdCtpXqTpQlqhBY1ishNBxZhcpyCI13mjYBTEiPP8MPLfYeUrqIjr7+McThL/mdEIDmIlrmo6QtA+8koR6l04UWmNpFWAwVDmyfVQgo4Hdok1PfSBeHbL6IqRMrR74PjCHsN6xls55pwlXdzPYkPEOgcdXyx9cbYl9cDtX9JZxYiH9IcIoZ9IyDA+NRz+/TdjiTc9ZoY1/JzUL36oi1OVkS2be0HEJgNw9sLpgevzzBQsArsauA3Wot9K4IVU3zVdCTw6cOoG2G53Wg=="},{default:t(()=>n[0]||(n[0]=[s("div",{class:"language-html","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"<p>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  国王喝得酩酊大醉，在凌晨 1 点时才回到自己的房间，踉跄地走过门口。"),s("span",{style:{color:"#81A1C1"}},"<span")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8FBCBB"}},"    class"),s("span",{style:{color:"#ECEFF4"}},"="),s("span",{style:{color:"#ECEFF4"}},'"'),s("span",{style:{color:"#A3BE8C"}},"editor-note"),s("span",{style:{color:"#ECEFF4"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    >"),s("span",{style:{color:"#D8DEE9FF"}},"[编辑批注: 此刻舞台灯光应变暗]"),s("span",{style:{color:"#81A1C1"}},"</span")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"  >"),s("span",{style:{color:"#D8DEE9FF"}},".")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"</p>")])])])],-1),s("p",null,"这里，“编辑批注”仅仅是对舞台剧导演提供额外指引；没有具体语义。对于视力正常的用户，CSS 应将批注内容与主内容稍微隔开一些。",-1)])),_:1}),n[5]||(n[5]=o(`<p><code>&lt;div&gt;</code> 是一个块级无语义元素，应仅用于找不到更好的块级元素时，或者不想增加特定的意义时。例如，一个电子商务网站页面上有一个一直显示的购物车组件。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#8FBCBB;"> class</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">shopping-cart</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;h2&gt;</span><span style="color:#D8DEE9FF;">购物车</span><span style="color:#81A1C1;">&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;ul&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;li&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">      &lt;p&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">        &lt;a</span><span style="color:#8FBCBB;"> href</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;&quot;</span><span style="color:#81A1C1;">&gt;&lt;strong&gt;</span><span style="color:#D8DEE9FF;">银耳环</span><span style="color:#81A1C1;">&lt;/strong&gt;&lt;/a</span></span>
<span class="line"><span style="color:#81A1C1;">        &gt;</span><span style="color:#D8DEE9FF;">: $99.95.</span></span>
<span class="line"><span style="color:#81A1C1;">      &lt;/p&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">      &lt;img</span><span style="color:#8FBCBB;"> src</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">../products/3333-0985/</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> alt</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Silver earrings</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;/li&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;li&gt;</span><span style="color:#D8DEE9FF;">...</span><span style="color:#81A1C1;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;p&gt;</span><span style="color:#D8DEE9FF;">售价: $237.89</span><span style="color:#81A1C1;">&lt;/p&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里不应使用 <code>&lt;aside&gt;</code>，因为它和主内容并没有必要的联系(您想在任何地方都能看到它)。甚至不能用 <code>&lt;section&gt;</code> ，因为它也不是页面上主内容的一部分。所以在这种情况下就应使用 <code>&lt;div&gt;</code>，为满足无障碍使用特征，还应为购物车的标题设置一个可读标签。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>&lt;div&gt;</code> 非常便利但容易被滥用。由于它们没有语义值，会使 HTML 代码变得混乱。要小心使用，只有在没有更好的语义方案时才选择它，而且要尽可能少用， 否则文档的语义化升级和维护工作会非常困难。</p></div><h3 id="换行与水平分割线" tabindex="-1"><a class="header-anchor" href="#换行与水平分割线"><span>换行与水平分割线</span></a></h3><p><code>&lt;br&gt;</code> 可在段落中进行换行；<code>&lt;br&gt;</code> 是唯一能够生成多个短行结构(例如邮寄地址或诗歌)的元素。比如:</p>`,6)),e(a,{id:"code-demo-176",type:"normal",title:"%E6%8D%A2%E8%A1%8C",code:"eJyrVsooyc1RslKyKbCLyVNQeLK772ln77M5nU92rHqya9fT/tVPN/S/XD3DJqlIQR+qYtqL9Vuets1U8Ajx9VF41jL/xfLOZ3Mani7di6RobxtQHVDR81ktT3Yvfr6g8fnuyc/mtbxYv/bJTqDZDU9nL3q+eT6KqRDVzxa0P1+778WGxic75z9rb3qyo/fJrrbHDU0xeTb6ICcq1QIAO5xkiQ=="},{default:t(()=>n[1]||(n[1]=[s("div",{class:"language-html","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"<p>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  从前有个人叫小高"),s("span",{style:{color:"#81A1C1"}},"<br"),s("span",{style:{color:"#81A1C1"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  他说写 HTML 感觉最好"),s("span",{style:{color:"#81A1C1"}},"<br"),s("span",{style:{color:"#81A1C1"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  但他写的代码结构语义一团糟"),s("span",{style:{color:"#81A1C1"}},"<br"),s("span",{style:{color:"#81A1C1"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  他写的标签谁也懂不了。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"</p>")])])])],-1)])),_:1}),n[6]||(n[6]=s("p",null,[s("code",null,"<hr>"),l(" 元素在文档中生成一条水平分割线，表示文本中主题的变化(例如话题或场景的改变)。一般就是一条水平的直线。例如:")],-1)),e(a,{id:"code-demo-182",type:"normal",title:"%E6%B0%B4%E5%B9%B3%E5%88%86%E5%89%B2%E7%BA%BF",code:"eJxlUktu2lAU3UrKBjKPoq4kC8igjaqqs6qSbX7GYIghCgnhl4DJD2KSktQxGPbSvvv8POoWeq4fjSp1BDzuvef7NXf45eOH3F5u/9P7g6OdHaoPZM9Xm3M6Oab8tTwLRHgni7a0gqRToO4Ij78MSyxP1bWpLmvKKFLLIM/5vaqRuxCvA7ro0yav4qksNFKztcdXfxpd2b6iiSVnYxUsMCvCk9R/kdYNoERoyOklrlLJFStPtofJeMU/J5aq+mLpUsUVcVeaL1hkas2mCmbp1ZCMJs0fafMsIoCbqem+02g9zewfeBFW9AQYJiePAGbCjTsIlLYnQldWWiKKRFQCMA5AiwTqqiHWrrZChE56O822bJqXpHcGo+RlnmbH5FfwLzPOJql7g0m8sBvHedyk8hA2Ylf28lBOxWLq+5g/ONrfZd/3Dz/v7PLnNgR3AZdSa0ST0+RpzaoLj+TF5JaT24hxdEpapDViA0dNFnGxhg7ZM94W9RcqR4nfp/pS60N6zBGLkZfcB2m5xpPNaVI5J7ucxhtm2mlL8+Y/H6GEXhcwLm0vad1WD084JitV+fDMqS4d2fZlv5sUXlTQAyN13hGrITBZjXbnxxNawH89jHEB7jP4vKQmJsxK/RmGOfa4TuMFUCCOsQoZKdtD4CzXcaTbF3FjWztIz4JER99S5MfuQF3dc1mf5zCMh1eFZLjAJPeouqa4tU0UCb3W9XBWhZI2VZNBVfGSVfWOmmDb4UyCDmQCl5zvyqihtuQMEDlWsvtnIqzCcmk3cJOv2Q3drb+p5779AWDCWyE="},{default:t(()=>n[2]||(n[2]=[s("div",{class:"language-html line-numbers-mode","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"<p>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  原来这唐僧是个慈悯的圣僧。他见行者哀告，却也回心转意道:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  “既如此说，且饶您这一次。再休无礼。如若仍前作恶，这咒语颠倒就念二十遍!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  ”行者道:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  “三十遍也由您，只是我不打人了。”却才伏侍唐僧上马，又将摘来桃子奉上。唐僧在马上也吃了几个，权且充饥。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"</p>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"<hr"),s("span",{style:{color:"#81A1C1"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"<p>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  却说那妖精，脱命升空。原来行者那一棒不曾打杀妖精，妖精出神去了。他在那云端里，咬牙切齿，暗恨行者道:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"  “几年只闻得讲他手段，今日果然话不虚传。那唐僧已此不认得我，将要吃饭。若低头闻一闻儿，我就一把捞住，却不是我的人了。不期被他走来，弄破我这勾当，又几乎被他打了一棒。若饶了这个和尚，诚然是劳而无功也。我还下去戏他一戏。”")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"</p>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1})])}const E=p(y,[["render",m],["__file","layout.html.vue"]]),F=JSON.parse('{"path":"/code/website/html/intro/layout.html","title":"网站布局","lang":"zh-CN","frontmatter":{"title":"网站布局","icon":"layout","date":"2023-09-02T00:00:00.000Z","category":"HTML","order":11,"next":"../../css/","description":"HTML 不仅能够定义网页的单独部分 (例如“段落”或“图片”)，还可以使用块级元素 (例如“标题栏”、“导航菜单”、“主内容列”) 来定义网站中的复合区域。本文将探讨如何规划基本的网站结构，并根据规划的结构来编写 HTML。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/website/html/intro/layout.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"网站布局"}],["meta",{"property":"og:description","content":"HTML 不仅能够定义网页的单独部分 (例如“段落”或“图片”)，还可以使用块级元素 (例如“标题栏”、“导航菜单”、“主内容列”) 来定义网站中的复合区域。本文将探讨如何规划基本的网站结构，并根据规划的结构来编写 HTML。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:published_time","content":"2023-09-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网站布局\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"文档的基本组成部分","slug":"文档的基本组成部分","link":"#文档的基本组成部分","children":[{"level":3,"title":"页眉","slug":"页眉","link":"#页眉","children":[]},{"level":3,"title":"导航栏","slug":"导航栏","link":"#导航栏","children":[]},{"level":3,"title":"主内容","slug":"主内容","link":"#主内容","children":[]},{"level":3,"title":"侧边栏","slug":"侧边栏","link":"#侧边栏","children":[]},{"level":3,"title":"页脚","slug":"页脚","link":"#页脚","children":[]}]},{"level":2,"title":"用于构建内容的 HTML","slug":"用于构建内容的-html","link":"#用于构建内容的-html","children":[{"level":3,"title":"案例","slug":"案例","link":"#案例","children":[]}]},{"level":2,"title":"HTML 布局元素细节","slug":"html-布局元素细节","link":"#html-布局元素细节","children":[{"level":3,"title":"无语义元素","slug":"无语义元素","link":"#无语义元素","children":[]},{"level":3,"title":"换行与水平分割线","slug":"换行与水平分割线","link":"#换行与水平分割线","children":[]}]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":7.95,"words":2384},"filePathRelative":"code/website/html/intro/layout.md","localizedDate":"2023年9月2日","excerpt":"<p>HTML 不仅能够定义网页的单独部分 (例如“段落”或“图片”)，还可以使用块级元素 (例如“标题栏”、“导航菜单”、“主内容列”) 来定义网站中的复合区域。本文将探讨如何规划基本的网站结构，并根据规划的结构来编写 HTML。</p>\\n","autoDesc":true}');export{E as comp,F as data};
