import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,b as n}from"./app-CAUHKgZ0.js";const l={};function p(t,s){return a(),e("div",null,s[0]||(s[0]=[n(`<p>我们从一个简单的例子开始。</p><p>将以下代码复制到 <code>hello.ts</code> 中:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> sayHello</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">person</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;"> string</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Hello, </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> +</span><span style="color:#D8DEE9;"> person</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9;"> user</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Tom</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">sayHello</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">user</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>然后执行</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">tsc</span><span style="color:#A3BE8C;"> hello.ts</span></span></code></pre></div><p>这时候会生成一个编译好的文件 <code>hello.js</code>:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> sayHello</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">person</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Hello, </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> +</span><span style="color:#D8DEE9;"> person</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9;"> user</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Tom</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">sayHello</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">user</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>TypeScript 中，使用 <code>:</code> 指定变量的类型，<code>:</code> 的前后有没有空格都可以。</p><p>上述例子中，我们用 <code>:</code> 指定 <code>person</code> 参数类型为 <code>string</code>。但是编译为 js 之后，并没有什么检查的代码被插入进来。</p><p><strong>TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。</strong></p><blockquote><p><code>let</code> 是 ES6 中的关键字，和 <code>var</code> 类似，用于定义一个局部变量，可以参阅 <a href="http://es6.ruanyifeng.com/#docs/let" target="_blank" rel="noopener noreferrer">let 和 const 命令</a>。</p></blockquote><p>下面尝试把这段代码编译一下:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> sayHello</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">person</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;"> string</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Hello, </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> +</span><span style="color:#D8DEE9;"> person</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9;"> user</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 2</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">sayHello</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">user</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>编辑器中会提示错误，编译的时候也会出错:</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">index.ts(6,22</span><span style="color:#D8DEE9FF;">): error TS2345: Argument of type </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">number[]</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> is not assignable to parameter of type </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">string</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">.</span></span></code></pre></div><p>但是还是生成了 js 文件:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> sayHello</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">person</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Hello, </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> +</span><span style="color:#D8DEE9;"> person</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9;"> user</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 2</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">sayHello</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">user</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p><strong>TypeScript 编译的时候即使报错了，还是会生成编译结果</strong>，我们仍然可以使用这个编译之后的文件。</p><p>如果要在报错的时候终止 js 文件的生成，可以在 <code>tsconfig.json</code> 中配置 <code>noEmitOnError</code> 即可。关于 <code>tsconfig.json</code>，请参阅<a href="http://www.typescriptlang.org/docs/handbook/tsconfig-json.html" target="_blank" rel="noopener noreferrer">官方手册</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html" target="_blank" rel="noopener noreferrer">中文版</a>)。</p>`,19)]))}const y=o(l,[["render",p],["__file","hello-typescript.html.vue"]]),i=JSON.parse('{"path":"/code/language/typescript/intro/hello-typescript.html","title":"Hello TypeScript","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"Hello TypeScript","icon":"creative","category":"TypeScript","tag":["快速上手"],"description":"我们从一个简单的例子开始。 将以下代码复制到 hello.ts 中: 然后执行 这时候会生成一个编译好的文件 hello.js: TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。 上述例子中，我们用 : 指定 person 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。 TypeScr...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/typescript/intro/hello-typescript.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"Hello TypeScript"}],["meta",{"property":"og:description","content":"我们从一个简单的例子开始。 将以下代码复制到 hello.ts 中: 然后执行 这时候会生成一个编译好的文件 hello.js: TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。 上述例子中，我们用 : 指定 person 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。 TypeScr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hello TypeScript\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":1.27,"words":382},"filePathRelative":"code/language/typescript/intro/hello-typescript.md","localizedDate":"2020年5月4日","excerpt":"","autoDesc":true}');export{y as comp,i as data};
