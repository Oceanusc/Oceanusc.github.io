import{g as F,o as n,c as o,b as t,d as a,t as E,f as p}from"./app-CAUHKgZ0.js";import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";const r='<span style="color: red">This should be red.</span>',C=F({__name:"template.html",setup(l,{expose:u}){u();const s={rawHtml:r};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function i(l,u,s,e,d,B){return n(),o("div",null,[u[1]||(u[1]=t(`<p>Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。</p><p>在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。</p><p>如果你对虚拟 DOM 的概念比较熟悉，并且偏好直接使用 JavaScript，你也可以结合可选的 JSX 支持直接手写渲染函数而不采用模板。但请注意，这将不会享受到和模板同等级别的编译时优化。</p><h2 id="文本插值" tabindex="-1"><a class="header-anchor" href="#文本插值"><span>文本插值</span></a></h2><p>最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;span&gt;</span><span style="color:#D8DEE9FF;">Message: {{ msg }}</span><span style="color:#81A1C1;">&lt;/span&gt;</span></span></code></pre></div><p>双大括号标签会被替换为相应组件实例中 <code>msg</code> 属性的值。同时每次 <code>msg</code> 属性更改时它也会同步更新。</p><h2 id="原始-html" tabindex="-1"><a class="header-anchor" href="#原始-html"><span>原始 HTML</span></a></h2><p>双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，你需要使用 <code>v-html</code> 指令：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;p&gt;</span><span style="color:#D8DEE9FF;">Using text interpolation: {{ rawHtml }}</span><span style="color:#81A1C1;">&lt;/p&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;p&gt;</span><span style="color:#D8DEE9FF;">Using v-html directive: &lt;span v-html=&quot;rawHtml&quot;&gt;&lt;/span&gt;&lt;/p&gt;</span></span></code></pre></div>`,10)),a("p",null,"Using text interpolation: "+E(e.rawHtml)),a("p",null,[u[0]||(u[0]=p("Using v-html directive: ")),a("span",{innerHTML:e.rawHtml})]),u[2]||(u[2]=t(`<p>这里我们遇到了一个新的概念。这里看到的 <code>v-html</code> attribute 被称为一个指令。指令由 <code>v-</code> 作为前缀，表明它们是一些由 Vue 提供的特殊 attribute，你可能已经猜到了，它们将为渲染的 DOM 应用特殊的响应式行为。这里我们做的事情简单来说就是：在当前组件实例上，将此元素的 innerHTML 与 <code>rawHtml</code> 属性保持同步。</p><p><code>span</code> 的内容将会被替换为 <code>rawHtml</code> 属性的值，插值为纯 HTML——数据绑定将会被忽略。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>你不能使用 <code>v-html</code> 来拼接组合模板，因为 Vue 不是一个基于字符串的模板引擎。在使用 Vue 时，应当使用组件作为 UI 重用和组合的基本单元。</p></div><div class="hint-container warning"><p class="hint-container-title">安全警告</p><p>在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞。请仅在内容安全可信时再使用 <code>v-html</code>，并且永远不要使用用户提供的 HTML 内容。</p></div><h2 id="attribute-绑定" tabindex="-1"><a class="header-anchor" href="#attribute-绑定"><span>Attribute 绑定</span></a></h2><p>双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 <code>v-bind</code> 指令：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#8FBCBB;"> v-bind</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">dynamicId</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/div&gt;</span></span></code></pre></div><p><code>v-bind</code> 指令指示 Vue 将元素的 <code>id</code> attribute 与组件的 <code>dynamicId</code> 属性保持一致。如果绑定的值是 <code>null</code> 或者 <code>undefined</code>，那么该 attribute 将会从渲染的元素上移除。</p><h3 id="简写" tabindex="-1"><a class="header-anchor" href="#简写"><span>简写</span></a></h3><p>因为 <code>v-bind</code> 非常常用，我们提供了特定的简写语法：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#ECEFF4;"> :</span><span style="color:#8FBCBB;">id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">dynamicId</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/div&gt;</span></span></code></pre></div><p>开头为 <code>:</code> 的 attribute 可能和一般的 HTML attribute 看起来不太一样，但它的确是合法的 attribute 名称字符，并且所有支持 Vue 的浏览器都能正确解析它。此外，他们不会出现在最终渲染的 DOM 中。简写语法是可选的，但相信在你了解了它更多的用处后，你应该会更喜欢它。</p><p>接下来的指引中，我们都将在示例中使用简写语法，因为这是在实际开发中更常见的用法。</p><h3 id="布尔型-attribute" tabindex="-1"><a class="header-anchor" href="#布尔型-attribute"><span>布尔型 Attribute</span></a></h3><p>布尔型 attribute 依据 true / false 值来决定 attribute 是否应该存在于该元素上。disabled 就是最常见的例子之一。</p><p><code>v-bind</code> 在这种场景下的行为略有不同：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;button</span><span style="color:#ECEFF4;"> :</span><span style="color:#8FBCBB;">disabled</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">isButtonDisabled</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">Button</span><span style="color:#81A1C1;">&lt;/button&gt;</span></span></code></pre></div><p>当 <code>isButtonDisabled</code> 为真值或一个空字符串 (即 <code>&lt;button disabled=&quot;&quot;&gt;</code>) 时，元素会包含这个 <code>disabled</code> attribute。而当其为其他假值时 attribute 将被忽略。</p><h3 id="动态绑定多个值" tabindex="-1"><a class="header-anchor" href="#动态绑定多个值"><span>动态绑定多个值</span></a></h3><p>如果你有像这样的一个包含多个 attribute 的 JavaScript 对象：</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> objectOfAttrs</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  id</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">container</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  class</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">wrapper</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>通过不带参数的 <code>v-bind</code>，你可以将它们绑定到单个元素上：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#8FBCBB;"> v-bind</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">objectOfAttrs</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/div&gt;</span></span></code></pre></div><h2 id="使用-javascript-表达式" tabindex="-1"><a class="header-anchor" href="#使用-javascript-表达式"><span>使用 JavaScript 表达式</span></a></h2><p>至此，我们仅在模板中绑定了一些简单的属性名。但是 Vue 实际上在所有的数据绑定中都支持完整的 JavaScript 表达式：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">{{ number + 1 }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">{{ ok ? &quot;YES&quot; : &quot;NO&quot; }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">{{ message.split(&quot;&quot;).reverse().join(&quot;&quot;) }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#ECEFF4;"> :</span><span style="color:#8FBCBB;">id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;\`</span><span style="color:#A3BE8C;">list-</span><span style="color:#ECEFF4;">\${</span><span style="color:#D8DEE9;">id</span><span style="color:#ECEFF4;">}\`&quot;</span><span style="color:#81A1C1;">&gt;&lt;/div&gt;</span></span></code></pre></div><p>这些表达式都会被作为 JavaScript ，以当前组件实例为作用域解析执行。</p><p>在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：</p><ul><li>在文本插值中 (双大括号)</li><li>在任何 Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值中</li></ul><h3 id="仅支持表达式" tabindex="-1"><a class="header-anchor" href="#仅支持表达式"><span>仅支持表达式</span></a></h3><p>每个绑定仅支持单一表达式，也就是一段能够被求值的 JavaScript 代码。一个简单的判断方法是是否可以合法地写在 return 后面。</p><p>因此，下面的例子都是无效的：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">&lt;!-- 这是一个语句，而非表达式 --&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">{{ var a = 1 }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">&lt;!-- 条件控制也不支持，请使用三元表达式 --&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">{{ if (ok) { return message } }}</span></span></code></pre></div><h3 id="调用函数" tabindex="-1"><a class="header-anchor" href="#调用函数"><span>调用函数</span></a></h3><p>可以在绑定的表达式中使用一个组件暴露的方法：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;span</span><span style="color:#ECEFF4;"> :</span><span style="color:#8FBCBB;">title</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#88C0D0;">toTitleDate</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">date</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">{{ formatDate(date) }}</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/span&gt;</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>绑定在表达式中的方法在组件每次更新时都会被重新调用，因此不应该产生任何副作用，比如改变数据或触发异步操作。</p></div><h3 id="受限的全局访问" tabindex="-1"><a class="header-anchor" href="#受限的全局访问"><span>受限的全局访问</span></a></h3><p>模板中的表达式将被沙盒化，仅能够访问到有限的全局对象列表。该列表中会暴露常用的内置全局对象，比如 <code>Math</code> 和 <code>Date</code>。</p><p>没有显式包含在列表中的全局对象将不能在模板内表达式中访问，例如用户附加在 window 上的属性。然而，你也可以自行在 <code>app.config.globalProperties</code> 上显式地添加它们，供所有的 Vue 表达式使用。</p><h2 id="指令-directives" tabindex="-1"><a class="header-anchor" href="#指令-directives"><span>指令 Directives</span></a></h2><p>指令是带有 <code>v-</code> 前缀的特殊 attribute。Vue 提供了许多内置指令，包括上面我们所介绍的 <code>v-bind</code> 和 <code>v-html</code>。</p><p>指令 attribute 的期望值为一个 JavaScript 表达式 (除了少数几个例外，即之后要讨论到的 <code>v-for</code>、<code>v-on</code> 和 <code>v-slot</code>)。一个指令的任务是在其表达式的值变化时响应式地更新 DOM。以 <code>v-if</code> 为例：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;p</span><span style="color:#81A1C1;"> v-if</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">seen</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">Now you see me</span><span style="color:#81A1C1;">&lt;/p&gt;</span></span></code></pre></div><p>这里，v-if 指令会基于表达式 seen 的值的真假来移除/插入该 <code>&lt;p&gt;</code> 元素。</p><h3 id="参数-arguments" tabindex="-1"><a class="header-anchor" href="#参数-arguments"><span>参数 Arguments</span></a></h3><p>某些指令会需要一个“参数”，在指令名后通过一个冒号隔开做标识。例如用 <code>v-bind</code> 指令来响应式地更新一个 HTML attribute：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;a</span><span style="color:#8FBCBB;"> v-bind</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">href</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">url</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> ... </span><span style="color:#81A1C1;">&lt;/a&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">&lt;!-- 简写 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">&lt;a</span><span style="color:#ECEFF4;"> :</span><span style="color:#8FBCBB;">href</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">url</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> ... </span><span style="color:#81A1C1;">&lt;/a&gt;</span></span></code></pre></div><p>这里 href 就是一个参数，它告诉 <code>v-bind</code> 指令将表达式 url 的值绑定到元素的 <code>href</code> attribute 上。在简写中，参数前的一切 (例如 <code>v-bind:</code>) 都会被缩略为一个 <code>:</code> 字符。</p><p>另一个例子是 <code>v-on</code> 指令，它将监听 DOM 事件：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;a</span><span style="color:#8FBCBB;"> v-on</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">click</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">doSomething</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> ... </span><span style="color:#81A1C1;">&lt;/a&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">&lt;!-- 简写 --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;a</span><span style="color:#ECEFF4;"> @</span><span style="color:#8FBCBB;">click</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">doSomething</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> ... </span><span style="color:#81A1C1;">&lt;/a&gt;</span></span></code></pre></div><p>这里的参数是要监听的事件名称：<code>click</code>。<code>v-on</code> 有一个相应的缩写，即 <code>@</code> 字符。</p><h3 id="动态参数" tabindex="-1"><a class="header-anchor" href="#动态参数"><span>动态参数</span></a></h3><p>同样在指令参数上也可以使用一个 JavaScript 表达式，需要包含在一对方括号内：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">&lt;!--</span></span>
<span class="line"><span style="color:#616E88;">注意，参数表达式有一些约束，</span></span>
<span class="line"><span style="color:#616E88;">参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释</span></span>
<span class="line"><span style="color:#616E88;">--&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;a</span><span style="color:#8FBCBB;"> v-bind</span><span style="color:#ECEFF4;">:[</span><span style="color:#D8DEE9;">attributeName</span><span style="color:#ECEFF4;">]=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">url</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> ... </span><span style="color:#81A1C1;">&lt;/a&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">&lt;!-- 简写 --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;a</span><span style="color:#ECEFF4;"> :[</span><span style="color:#D8DEE9;">attributeName</span><span style="color:#ECEFF4;">]=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">url</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> ... </span><span style="color:#81A1C1;">&lt;/a&gt;</span></span></code></pre></div><p>这里的 <code>attributeName</code> 会作为一个 JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数。举例来说，如果你的组件实例有一个数据属性 <code>attributeName</code>，其值为 <code>&quot;href&quot;</code>，那么这个绑定就等价于 <code>v-bind:href</code>。</p><p>相似地，你还可以将一个函数绑定到动态的事件名称上：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;a</span><span style="color:#8FBCBB;"> v-on</span><span style="color:#ECEFF4;">:[</span><span style="color:#D8DEE9;">eventName</span><span style="color:#ECEFF4;">]=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">doSomething</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> ... </span><span style="color:#81A1C1;">&lt;/a&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">&lt;!-- 简写 --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;a</span><span style="color:#ECEFF4;"> @[</span><span style="color:#D8DEE9;">eventName</span><span style="color:#ECEFF4;">]=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">doSomething</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/a&gt;</span></span></code></pre></div><p>在此示例中，当 <code>eventName</code> 的值是 <code>&quot;focus&quot;</code> 时，<code>v-on:[eventName]</code> 就等价于 <code>v-on:focus</code>。</p><h3 id="动态参数值的限制" tabindex="-1"><a class="header-anchor" href="#动态参数值的限制"><span>动态参数值的限制</span></a></h3><p>动态参数中表达式的值应当是一个字符串，或者是 null。特殊值 null 意为显式移除该绑定。其他非字符串的值会触发警告。</p><h3 id="动态参数语法的限制" tabindex="-1"><a class="header-anchor" href="#动态参数语法的限制"><span>动态参数语法的限制</span></a></h3><p>动态参数表达式因为某些字符的缘故有一些语法限制，比如空格和引号，在 HTML attribute 名称中都是不合法的。例如下面的示例：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">&lt;!-- 这会触发一个编译器警告 --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;a</span><span style="color:#ECEFF4;"> :[</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">foo</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;"> +</span><span style="color:#D8DEE9;"> bar</span><span style="color:#ECEFF4;">]=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">value</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> ... </span><span style="color:#81A1C1;">&lt;/a&gt;</span></span></code></pre></div><p>如果你需要传入一个复杂的动态参数，我们推荐使用计算属性替换复杂的表达式，也是 Vue 最基础的概念之一。</p><p>当使用 DOM 内嵌模板 (直接写在 HTML 文件里的模板) 时，我们需要避免在名称中使用大写字母，因为浏览器会强制将其转换为小写：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;a</span><span style="color:#ECEFF4;"> :[</span><span style="color:#D8DEE9;">someAttr</span><span style="color:#ECEFF4;">]=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">value</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> ... </span><span style="color:#81A1C1;">&lt;/a&gt;</span></span></code></pre></div><p>上面的例子将会在 DOM 内嵌模板中被转换为 <code>:[someattr]</code>。如果你的组件拥有 “someAttr” 属性而非 “someattr”，这段代码将不会工作。单文件组件内的模板不受此限制。</p><h3 id="修饰符-modifiers" tabindex="-1"><a class="header-anchor" href="#修饰符-modifiers"><span>修饰符 Modifiers</span></a></h3><p>修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。例如 <code>.prevent</code> 修饰符会告知 <code>v-on</code> 指令对触发的事件调用 <code>event.preventDefault()</code>：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;form</span><span style="color:#ECEFF4;"> @</span><span style="color:#8FBCBB;">submit</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">prevent</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">onSubmit</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">...</span><span style="color:#81A1C1;">&lt;/form&gt;</span></span></code></pre></div>`,71))])}const y=c(C,[["render",i],["__file","template.html.vue"]]),h=JSON.parse('{"path":"/code/vue/core/template.html","title":"模板语法","lang":"zh-CN","frontmatter":{"date":"2023-02-26T00:00:00.000Z","title":"模板语法","icon":"object","order":4,"description":"Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。 在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/vue/core/template.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"模板语法"}],["meta",{"property":"og:description","content":"Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。 在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:published_time","content":"2023-02-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模板语法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"文本插值","slug":"文本插值","link":"#文本插值","children":[]},{"level":2,"title":"原始 HTML","slug":"原始-html","link":"#原始-html","children":[]},{"level":2,"title":"Attribute 绑定","slug":"attribute-绑定","link":"#attribute-绑定","children":[{"level":3,"title":"简写","slug":"简写","link":"#简写","children":[]},{"level":3,"title":"布尔型 Attribute","slug":"布尔型-attribute","link":"#布尔型-attribute","children":[]},{"level":3,"title":"动态绑定多个值","slug":"动态绑定多个值","link":"#动态绑定多个值","children":[]}]},{"level":2,"title":"使用 JavaScript 表达式","slug":"使用-javascript-表达式","link":"#使用-javascript-表达式","children":[{"level":3,"title":"仅支持表达式","slug":"仅支持表达式","link":"#仅支持表达式","children":[]},{"level":3,"title":"调用函数","slug":"调用函数","link":"#调用函数","children":[]},{"level":3,"title":"受限的全局访问","slug":"受限的全局访问","link":"#受限的全局访问","children":[]}]},{"level":2,"title":"指令 Directives","slug":"指令-directives","link":"#指令-directives","children":[{"level":3,"title":"参数 Arguments","slug":"参数-arguments","link":"#参数-arguments","children":[]},{"level":3,"title":"动态参数","slug":"动态参数","link":"#动态参数","children":[]},{"level":3,"title":"动态参数值的限制","slug":"动态参数值的限制","link":"#动态参数值的限制","children":[]},{"level":3,"title":"动态参数语法的限制","slug":"动态参数语法的限制","link":"#动态参数语法的限制","children":[]},{"level":3,"title":"修饰符 Modifiers","slug":"修饰符-modifiers","link":"#修饰符-modifiers","children":[]}]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":8.02,"words":2407},"filePathRelative":"code/vue/core/template.md","localizedDate":"2023年2月26日","excerpt":"","autoDesc":true}');export{y as comp,h as data};
