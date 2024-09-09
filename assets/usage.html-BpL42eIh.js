import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,d as l,e as o,b as p}from"./app-CAUHKgZ0.js";const t={};function c(r,s){return a(),e("div",null,[s[0]||(s[0]=l("p",null,"Python 本身就内置了很多非常有用的模块，只要安装完毕，这些模块就可以立刻使用。",-1)),o(" more "),s[1]||(s[1]=p(`<p>我们以内建的 sys 模块为例，编写一个 hello 的模块:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/usr/bin/env python3</span></span>
<span class="line"><span style="color:#616E88;"># -*- coding: utf-8 -*-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> a test module </span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">__author__ </span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Ocean</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> sys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> test</span><span style="color:#ECEFF4;">():</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    args </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> sys</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">argv</span></span>
<span class="line"><span style="color:#81A1C1;">    if</span><span style="color:#88C0D0;"> len</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">args</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">==</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#88C0D0;">        print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Hello, world!</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#81A1C1;">    elif</span><span style="color:#88C0D0;"> len</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">args</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">==</span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#88C0D0;">        print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Hello, </span><span style="color:#EBCB8B;">%s</span><span style="color:#A3BE8C;">!</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;"> %</span><span style="color:#D8DEE9FF;"> args</span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">])</span></span>
<span class="line"><span style="color:#81A1C1;">    else</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#88C0D0;">        print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Too many arguments!</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> __name__</span><span style="color:#81A1C1;">==</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">__main__</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#88C0D0;">    test</span><span style="color:#ECEFF4;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第 1 行和第 2 行是标准注释，第 1 行注释可以让这个 <code>hello.py</code> 文件直接在 <code>Unix/Linux/Mac</code> 上运行，第 2 行注释表示 <code>.py</code> 文件本身使用标准 UTF-8 编码；</p><p>第 4 行是一个字符串，表示模块的文档注释，任何模块代码的第一个字符串都被视为模块的文档注释；</p><p>第 6 行使用 <code>__author__</code> 变量把作者写进去，这样当您公开源代码后别人就可以瞻仰您的大名；</p><p>以上就是 Python 模块的标准文件模板，当然也可以全部删掉不写，但是，按标准办事肯定没错。</p><p>后面开始就是真正的代码部分。</p><p>您可能注意到了，使用 <code>sys</code> 模块的第一步，就是导入该模块:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> sys</span></span></code></pre></div><p>导入 sys 模块后，我们就有了变量 sys 指向该模块，利用 sys 这个变量，就可以访问 sys 模块的所有功能。</p><p>sys 模块有一个 <code>argv</code> 变量，用 list 存储了命令行的所有参数。<code>argv</code> 至少有一个元素，因为第一个参数永远是该.py 文件的名称，例如:</p><p>运行 <code>python3 hello.py</code> 获得的 <code>sys.argv</code> 就是 <code>[&#39;hello.py&#39;]</code>；</p><p>运行 <code>python3 hello.py Ocean</code> 获得的 <code>sys.argv</code> 就是 <code>[&#39;hello.py&#39;, &#39;Ocean&#39;]</code>。</p><p>最后，注意到这两行代码:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> __name__</span><span style="color:#81A1C1;">==</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">__main__</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#88C0D0;">    test</span><span style="color:#ECEFF4;">()</span></span></code></pre></div><p>当我们在命令行运行 hello 模块文件时，Python 解释器把一个特殊变量 <code>__name__</code> 置为 <code>__main__</code>，而如果在其他地方导入该 hello 模块时，if 判断将失败，因此，这种 if 测试可以让一个模块通过命令行运行时执行一些额外的代码，最常见的就是运行测试。</p><p>我们可以用命令行运行 hello.py 看看效果:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> python3</span><span style="color:#A3BE8C;"> hello.py</span></span>
<span class="line"><span style="color:#88C0D0;">Hello,</span><span style="color:#A3BE8C;"> world!</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> python</span><span style="color:#A3BE8C;"> hello.py</span><span style="color:#A3BE8C;"> Michael</span></span>
<span class="line"><span style="color:#88C0D0;">Hello,</span><span style="color:#A3BE8C;"> Michael!</span></span></code></pre></div><p>如果启动 Python 交互环境，再导入 hello 模块:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> python3</span></span>
<span class="line"><span style="color:#88C0D0;">Python</span><span style="color:#B48EAD;"> 3.4.3</span><span style="color:#D8DEE9FF;"> (v3.4.3:9b73f1c3e601, </span><span style="color:#A3BE8C;">Feb</span><span style="color:#B48EAD;"> 23</span><span style="color:#A3BE8C;"> 2015,</span><span style="color:#A3BE8C;"> 02:52:03</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">GCC </span><span style="color:#B48EAD;">4.2.1</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">Apple</span><span style="color:#D8DEE9;"> Inc</span><span style="color:#D8DEE9FF;">. </span><span style="color:#D8DEE9;">build</span><span style="color:#B48EAD;"> 5666</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">dot</span><span style="color:#B48EAD;"> 3</span><span style="color:#ECEFF4;">)]</span><span style="color:#D8DEE9FF;"> on darwin</span></span>
<span class="line"><span style="color:#88C0D0;">Type</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">help</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">copyright</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">credits</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;"> or</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">license</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;"> for</span><span style="color:#A3BE8C;"> more</span><span style="color:#A3BE8C;"> information.</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&gt;&gt;&gt; </span><span style="color:#88C0D0;">import</span><span style="color:#A3BE8C;"> hello</span></span>
<span class="line"><span style="color:#D8DEE9FF;">&gt;&gt;&gt;</span></span></code></pre></div><p>导入时，没有打印 <code>Hello, word!</code>，因为没有执行 <code>test()</code> 函数。</p><p>调用 <code>hello.test()</code> 时，才能打印出 <code>Hello, word!</code> :</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">&gt;&gt;&gt; </span><span style="color:#88C0D0;">hello.test</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#88C0D0;">Hello,</span><span style="color:#A3BE8C;"> world!</span></span></code></pre></div><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域"><span>作用域</span></a></h2><p>在一个模块中，我们可能会定义很多函数和变量，但有的函数和变量我们希望给别人使用，有的函数和变量我们希望仅仅在模块内部使用。在 Python 中，是通过_前缀来实现的。</p><p>正常的函数和变量名是公开的 (public) ，可以被直接引用，比如: <code>abc</code>，<code>x123</code>，<code>PI</code> 等；</p><p>类似 <code>__xxx__</code> 这样的变量是特殊变量，可以被直接引用，但是有特殊用途，比如上面的 <code>__author__</code>，<code>__name__</code> 就是特殊变量，hello 模块定义的文档注释也可以用特殊变量 <code>__doc__</code> 访问，我们自己的变量一般不要用这种变量名；</p><p>类似 <code>_xxx</code> 和 <code>__xxx</code> 这样的函数或变量就是非公开的 (private) ，不应该被直接引用，比如 <code>_abc</code>，<code>__abc</code> 等；</p><p>之所以我们说，private 函数和变量“不应该”被直接引用，而不是“不能”被直接引用，是因为 Python 并没有一种方法可以完全限制访问 private 函数或变量，但是，从编程习惯上不应该引用 private 函数或变量。</p><p>private 函数或变量不应该被别人引用，那它们有什么用呢？请看例子:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> _private_1</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">name</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Hello, </span><span style="color:#EBCB8B;">%s</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;"> %</span><span style="color:#D8DEE9FF;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> _private_2</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">name</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Hi, </span><span style="color:#EBCB8B;">%s</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;"> %</span><span style="color:#D8DEE9FF;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> greeting</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">name</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#81A1C1;">    if</span><span style="color:#88C0D0;"> len</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">name</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#B48EAD;"> 3</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#81A1C1;">        return</span><span style="color:#88C0D0;"> _private_1</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">name</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#81A1C1;">    else</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#81A1C1;">        return</span><span style="color:#88C0D0;"> _private_2</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">name</span><span style="color:#ECEFF4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在模块里公开 <code>greeting()</code> 函数，而把内部逻辑用 private 函数隐藏起来了，这样，调用 <code>greeting()</code> 函数不用关心内部的 private 函数细节，这也是一种非常有用的代码封装和抽象的方法，即:</p><p>外部不需要引用的函数全部定义成 private，只有外部需要引用的函数才定义为 public。</p>`,33))])}const y=n(t,[["render",c],["__file","usage.html.vue"]]),E=JSON.parse('{"path":"/code/language/python/module/usage.html","title":"使用模块","lang":"zh-CN","frontmatter":{"title":"使用模块","icon":"config","author":"廖雪峰","date":"2021-03-27T00:00:00.000Z","category":"Python","description":"Python 本身就内置了很多非常有用的模块，只要安装完毕，这些模块就可以立刻使用。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/python/module/usage.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"使用模块"}],["meta",{"property":"og:description","content":"Python 本身就内置了很多非常有用的模块，只要安装完毕，这些模块就可以立刻使用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2021-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用模块\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"作用域","slug":"作用域","link":"#作用域","children":[]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":3.6,"words":1079},"filePathRelative":"code/language/python/module/usage.md","localizedDate":"2021年3月27日","excerpt":"<p>Python 本身就内置了很多非常有用的模块，只要安装完毕，这些模块就可以立刻使用。</p>\\n","autoDesc":true}');export{y as comp,E as data};
