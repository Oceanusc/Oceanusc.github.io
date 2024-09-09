import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as o,d as a,f as n,e as p,b as t}from"./app-CAUHKgZ0.js";const c={};function r(d,s){return l(),o("div",null,[s[0]||(s[0]=a("p",null,"在上面的章节中我们看到了 JavaScript 的对象模型是基于原型实现的，特点是简单，缺点是理解起来比传统的类－实例模型要困难，最大的缺点是继承的实现需要编写大量代码，并且需要正确实现原型链。",-1)),s[1]||(s[1]=a("p",null,"有没有更简单的写法? 有!",-1)),s[2]||(s[2]=a("p",null,[n("新的关键字 "),a("code",null,"class"),n(" 从 ES6 开始正式被引入到 JavaScript 中。"),a("code",null,"class"),n(" 的目的就是让定义类更简单。")],-1)),p(" more "),s[3]||(s[3]=t(`<p>我们先回顾用函数实现 <code>Student</code> 的方法:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> Student</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">name</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> name</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8FBCBB;">Student</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">prototype</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">hello</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> function</span><span style="color:#ECEFF4;"> ()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  alert</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">\`</span><span style="color:#A3BE8C;">Hello, </span><span style="color:#81A1C1;">\${</span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#81A1C1;">}</span><span style="color:#A3BE8C;">!</span><span style="color:#ECEFF4;">\`</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>如果用新的 <code>class</code> 关键字来编写 <code>Student</code>，可以这样写:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">class</span><span style="color:#8FBCBB;"> Student</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  constructor</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">name</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> name</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">  hello</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    alert</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">\`</span><span style="color:#A3BE8C;">Hello, </span><span style="color:#81A1C1;">\${</span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#81A1C1;">}</span><span style="color:#A3BE8C;">!</span><span style="color:#ECEFF4;">\`</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><p>比较一下就可以发现，<code>class</code> 的定义包含了构造函数 <code>constructor</code> 和定义在原型对象上的函数 <code>hello()</code> (注意没有 <code>function</code> 关键字)，这样就避免了 <code>Student.prototype.hello = function () {...}</code> 这样分散的代码。</p><p>最后，创建一个 <code>Student</code> 对象代码和前面章节完全一样:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> xiaoming</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Student</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">小明</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">xiaoming</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">hello</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>用 <code>class</code> 定义对象的另一个巨大的好处是继承更方便了。想一想我们从 <code>Student</code> 派生一个 <code>PrimaryStudent</code> 需要编写的代码量。现在，原型继承的中间对象，原型对象的构造函数等等都不需要考虑了，直接通过 <code>extends</code> 来实现:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">class</span><span style="color:#8FBCBB;"> PrimaryStudent</span><span style="color:#81A1C1;"> extends</span><span style="color:#8FBCBB;font-weight:bold;"> Student</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  constructor</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">name</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> grade</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    super</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">name</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 记得用super调用父类的构造方法!</span></span>
<span class="line"><span style="color:#81A1C1;">    this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">grade</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> grade</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">  myGrade</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    alert</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">\`</span><span style="color:#A3BE8C;">I am at grade </span><span style="color:#81A1C1;">\${</span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">grade</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">\`</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 <code>PrimaryStudent</code> 的定义也是 <code>class</code> 关键字实现的，而 <code>extends</code> 则表示原型链对象来自 <code>Student</code>。子类的构造函数可能会与父类不太相同，例如，<code>PrimaryStudent</code> 需要 <code>name</code> 和 <code>grade</code> 两个参数，并且需要通过 <code>super(name)</code> 来调用父类的构造函数，否则父类的 <code>name</code> 属性无法正常初始化。</p><p><code>PrimaryStudent</code> 已经自动获得了父类 <code>Student</code> 的 <code>hello</code> 方法，我们又在子类中定义了新的 <code>myGrade</code> 方法。</p><p>ES6 引入的 <code>class</code> 和原有的 JavaScript 原型继承有什么区别呢? 实际上它们没有任何区别，<code>class</code> 的作用就是让 JavaScript 引擎去实现原来需要我们自己编写的原型链代码。简而言之，用 <code>class</code> 的好处就是极大地简化了原型链代码。</p>`,12))])}const E=e(c,[["render",r],["__file","class.html.vue"]]),F=JSON.parse('{"path":"/code/language/js/object/class.html","title":"class 继承","lang":"zh-CN","frontmatter":{"title":"class 继承","icon":"class","date":"2023-10-10T00:00:00.000Z","category":"JavaScript","description":"在上面的章节中我们看到了 JavaScript 的对象模型是基于原型实现的，特点是简单，缺点是理解起来比传统的类－实例模型要困难，最大的缺点是继承的实现需要编写大量代码，并且需要正确实现原型链。 有没有更简单的写法? 有! 新的关键字 class 从 ES6 开始正式被引入到 JavaScript 中。class 的目的就是让定义类更简单。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/js/object/class.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"class 继承"}],["meta",{"property":"og:description","content":"在上面的章节中我们看到了 JavaScript 的对象模型是基于原型实现的，特点是简单，缺点是理解起来比传统的类－实例模型要困难，最大的缺点是继承的实现需要编写大量代码，并且需要正确实现原型链。 有没有更简单的写法? 有! 新的关键字 class 从 ES6 开始正式被引入到 JavaScript 中。class 的目的就是让定义类更简单。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:published_time","content":"2023-10-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"class 继承\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":1.96,"words":588},"filePathRelative":"code/language/js/object/class.md","localizedDate":"2023年10月10日","excerpt":"<p>在上面的章节中我们看到了 JavaScript 的对象模型是基于原型实现的，特点是简单，缺点是理解起来比传统的类－实例模型要困难，最大的缺点是继承的实现需要编写大量代码，并且需要正确实现原型链。</p>\\n<p>有没有更简单的写法? 有!</p>\\n<p>新的关键字 <code>class</code> 从 ES6 开始正式被引入到 JavaScript 中。<code>class</code> 的目的就是让定义类更简单。</p>\\n","autoDesc":true}');export{E as comp,F as data};
