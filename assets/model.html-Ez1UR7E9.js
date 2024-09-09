import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as l,b as n}from"./app-CAUHKgZ0.js";const o={};function p(t,s){return e(),l("div",null,s[0]||(s[0]=[n(`<blockquote><p>基础库 2.9.3 开始支持</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>此部分在初步学习小程序的时候直接略过即可。</p></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>在 WXML 中，普通的属性的绑定是单向的。例如:</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;input</span><span style="color:#8FBCBB;"> value</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{value}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><p>如果使用 <code>this.setData({ value: &#39;leaf&#39; })</code> 来更新 value ，<code>this.data.value</code> 和输入框的中显示的值都会被更新为 <code>leaf</code> ；但如果用户修改了输入框里的值，却不会同时改变 <code>this.data.value</code> 。</p><p>如果需要在用户输入的同时改变 <code>this.data.value</code> ，需要借助简易双向绑定机制。此时，可以在对应项目之前加入 <code>model:</code> 前缀:</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;input</span><span style="color:#8FBCBB;"> model</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">value</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{value}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><p>这样，如果输入框的值被改变了， <code>this.data.value</code> 也会同时改变。同时， WXML 中所有绑定了 value 的位置也会被一同更新， 数据监听器 也会被正常触发。</p><blockquote><p><a href="https://developers.weixin.qq.com/s/8jXvobmV7vcj" target="_blank" rel="noopener noreferrer">在开发者工具中预览效果</a></p></blockquote><h2 id="限制" tabindex="-1"><a class="header-anchor" href="#限制"><span>限制</span></a></h2><p>用于双向绑定的表达式有如下限制:</p><ol><li><p>只能是一个单一字段的绑定，如</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;input</span><span style="color:#8FBCBB;"> model</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">value</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">值为 {{value}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;input</span><span style="color:#8FBCBB;"> model</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">value</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{ a + b }}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><p>都是非法的；</p></li><li><p>目前，尚不能 <code>data</code> 路径，如</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;input</span><span style="color:#8FBCBB;"> model</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">value</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{ a.b }}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><p>这样的表达式目前暂不支持。</p></li></ol><h2 id="在自定义组件中使用" tabindex="-1"><a class="header-anchor" href="#在自定义组件中使用"><span>在自定义组件中使用</span></a></h2><h3 id="传递双向绑定" tabindex="-1"><a class="header-anchor" href="#传递双向绑定"><span>传递双向绑定</span></a></h3><p>双向绑定同样可以使用在自定义组件上。</p><p>如下的自定义组件:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// custom-component.js</span></span>
<span class="line"><span style="color:#88C0D0;">Component</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  properties</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    myValue</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> String</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">&lt;!-- custom-component.wxml --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;input</span><span style="color:#8FBCBB;"> model</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">value</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{myValue}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><p>这个自定义组件将自身的 <code>myValue</code> 属性双向绑定到了组件内输入框的 <code>value</code> 属性上。这样，如果页面这样使用这个组件:</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;custom-component</span><span style="color:#8FBCBB;"> model</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">my-value</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{pageValue}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><p>当输入框的值变更时，自定义组件的 <code>myValue</code> 属性会同时变更，这样，页面的 <code>this.data.pageValue</code> 也会同时变更，页面 WXML 中所有绑定了 <code>pageValue</code> 的位置也会被一同更新。</p><h3 id="触发双向绑定更新" tabindex="-1"><a class="header-anchor" href="#触发双向绑定更新"><span>触发双向绑定更新</span></a></h3><p>自定义组件还可以自己触发双向绑定更新，做法就是: 使用 <code>setData</code> 设置自身的属性。例如:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// custom-component.js</span></span>
<span class="line"><span style="color:#88C0D0;">Component</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  properties</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    myValue</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> String</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  methods</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    update</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">      // 更新 myValue</span></span>
<span class="line"><span style="color:#81A1C1;">      this</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setData</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">        myValue</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">leaf</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">      }</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果页面这样使用这个组件:</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;custom-component</span><span style="color:#8FBCBB;"> model</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">my-value</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{pageValue}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><p>当组件使用 <code>setData</code> 更新 <code>myValue</code> 时，页面的 <code>this.data.pageValue</code> 也会同时变更，页面 WXML 中所有绑定了 <code>pageValue</code> 的位置也会被一同更新。</p>`,28)]))}const i=a(o,[["render",p],["__file","model.html.vue"]]),d=JSON.parse(`{"path":"/code/mini-app/guide/view/model.html","title":"简易双向绑定","lang":"zh-CN","frontmatter":{"date":"2020-12-18T00:00:00.000Z","title":"简易双向绑定","icon":"async","category":"小程序","description":"基础库 2.9.3 开始支持 提示 此部分在初步学习小程序的时候直接略过即可。 语法 在 WXML 中，普通的属性的绑定是单向的。例如: 如果使用 this.setData({ value: 'leaf' }) 来更新 value ，this.data.value 和输入框的中显示的值都会被更新为 leaf ；但如果用户修改了输入框里的值，却不会同时改...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/view/model.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"简易双向绑定"}],["meta",{"property":"og:description","content":"基础库 2.9.3 开始支持 提示 此部分在初步学习小程序的时候直接略过即可。 语法 在 WXML 中，普通的属性的绑定是单向的。例如: 如果使用 this.setData({ value: 'leaf' }) 来更新 value ，this.data.value 和输入框的中显示的值都会被更新为 leaf ；但如果用户修改了输入框里的值，却不会同时改..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:published_time","content":"2020-12-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简易双向绑定\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"限制","slug":"限制","link":"#限制","children":[]},{"level":2,"title":"在自定义组件中使用","slug":"在自定义组件中使用","link":"#在自定义组件中使用","children":[{"level":3,"title":"传递双向绑定","slug":"传递双向绑定","link":"#传递双向绑定","children":[]},{"level":3,"title":"触发双向绑定更新","slug":"触发双向绑定更新","link":"#触发双向绑定更新","children":[]}]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":1.99,"words":596},"filePathRelative":"code/mini-app/guide/view/model.md","localizedDate":"2020年12月18日","excerpt":"","autoDesc":true}`);export{i as comp,d as data};
