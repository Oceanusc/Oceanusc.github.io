import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as l,b as n}from"./app-CAUHKgZ0.js";const o={};function t(p,s){return a(),l("div",null,s[0]||(s[0]=[n(`<h1 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向"><span>重定向</span></a></h1><p>重定向指的是将命令行输出写入指定位置。</p><ul><li><code>cmd1 | cmd2</code>: Pipe; take standard output of cmd1 as standard input to cmd2.</li><li><code>&gt; file</code>: Direct standard output to file.</li><li><code>&lt; file</code>: Take standard input from file.</li><li><code>&gt;&gt; file</code>: Direct standard output to file; append to file if it already exists.</li><li><code>&gt;| file</code>: Force standard output to file even if noclobber is set.</li><li><code>n&gt;| file</code>: Force output to file from file descriptor n even if noclobber is set.</li><li><code>&lt;&gt; file</code>: Use file as both standard input and standard output.</li><li><code>n&lt;&gt; file</code>: Use file as both input and output for file descriptor n.</li><li><code>&lt;&lt; label</code>: Here-document; see text.</li><li><code>n &gt; file</code>: Direct file descriptor n to file.</li><li><code>n &lt; file</code>: Take file descriptor n from file.</li><li><code>n &gt;&gt; file</code>: Direct file descriptor n to file; append to file if it already exists.</li><li><code>n&gt;&amp;</code>: Duplicate standard output to file descriptor n.</li><li><code>n&lt;&amp;</code>: Duplicate standard input from file descriptor n.</li><li><code>n&gt;&amp;m</code>: File descriptor  n is made to be a copy of the output file descriptor.</li><li><code>n&lt;&amp;m</code>: File descriptor  n is made to be a copy of the input file descriptor.</li><li><code>&amp;&gt;file</code>: Directs standard output and standard error to file.</li><li><code>&lt;&amp;-</code>: Close the standard input.</li><li><code>&gt;&amp;-</code>: Close the standard output.</li><li><code>n&gt;&amp;-</code>: Close the output from file descriptor  n.</li><li><code>n&lt;&amp;-</code>: Close the input from file descriptor  n.</li><li><code>n&gt;&amp;word</code>: If  n is not specified, the standard output (file descriptor 1) is used. If the digits in word do not specify a file descriptor open for output, a redirection error occurs. As a special case, if n is omitted, and word does not expand to one or more digits, the standard output and standard error are redirected as described previously.</li><li><code>n&lt;&amp;word</code>: If word expands to one or more digits, the file descriptor denoted by  n is made to be a copy of that file descriptor. If the digits in word do not specify a file descriptor open for input, a redirection error occurs. If word evaluates to -, file descriptor n is closed. If n is not specified, the standard input (file descriptor 0) is used.</li><li><code>n&gt;&amp;digit-</code>: Moves the file descriptor digit to file descriptor  n, or the standard output (file descriptor 1) if n is not specified.</li><li><code>n&lt;&amp;digit-</code>: Moves the file descriptor digit to file descriptor  n, or the standard input (file descriptor 0) if n is not specified. digit is closed after being duplicated to n.</li></ul><p><code>&gt;</code> 用来将标准输出重定向到指定文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">ls</span><span style="color:#A3BE8C;"> -l</span><span style="color:#A3BE8C;"> /usr/bin</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#A3BE8C;"> ls-output.txt</span></span></code></pre></div><p>如果重定向后的指定文件已经存在，就会被覆盖，不会有任何提示。</p><p>如果命令没有任何输出，那么重定向之后，得到的是一个长度为 <code>0</code> 的文件。因此，<code>&gt;</code> 具有创建新文件或改写现存文件、将其改为长度 <code>0</code> 的作用。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> ls-output.txt</span></span></code></pre></div><p><code>&gt;&gt;</code> 用来将标准输出重定向追加到指定文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">ls</span><span style="color:#A3BE8C;"> -l</span><span style="color:#A3BE8C;"> /usr/bin</span><span style="color:#81A1C1;"> &gt;&gt;</span><span style="color:#A3BE8C;"> ls-output.txt</span></span></code></pre></div><p><code>2&gt;</code> 用来将标准错误重定向到指定文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">ls</span><span style="color:#A3BE8C;"> -l</span><span style="color:#A3BE8C;"> /bin/usr</span><span style="color:#81A1C1;"> 2&gt;</span><span style="color:#A3BE8C;"> ls-error.txt</span></span></code></pre></div><p>标准输出和标准错误，可以重定向到同一个文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> ls</span><span style="color:#A3BE8C;"> -l</span><span style="color:#A3BE8C;"> /bin/usr</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#A3BE8C;"> ls-output.txt</span><span style="color:#81A1C1;"> 2&gt;&amp;1</span></span>
<span class="line"><span style="color:#616E88;"># 或者</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> ls</span><span style="color:#A3BE8C;"> -l</span><span style="color:#A3BE8C;"> /bin/usr</span><span style="color:#ECEFF4;"> &amp;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> ls-output.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 追加到同一个文件</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> ls</span><span style="color:#A3BE8C;"> -l</span><span style="color:#A3BE8C;"> /bin/usr</span><span style="color:#ECEFF4;"> &amp;</span><span style="color:#81A1C1;">&gt;&gt;</span><span style="color:#D8DEE9FF;"> ls-output.txt</span></span></code></pre></div><p>如果不希望输出错误信息，可以将它重定向到一个特殊文件<code>/dev/null</code>。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">ls</span><span style="color:#A3BE8C;"> -l</span><span style="color:#A3BE8C;"> /bin/usr</span><span style="color:#81A1C1;"> 2&gt;</span><span style="color:#A3BE8C;"> /dev/null</span></span></code></pre></div><p><code>|</code> 用于将一个命令的标准输出，重定向到另一个命令的标准输入。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">ls</span><span style="color:#A3BE8C;"> -l</span><span style="color:#A3BE8C;"> /usr/bin</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> less</span></span></code></pre></div><p>不要将<code>&gt;</code> 与 <code>|</code> 混淆。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">ls</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#A3BE8C;"> less</span></span></code></pre></div><p>上面命令会在当前目录，生成一个名为 <code>less</code> 的文本文件。</p><p>下面是标准错误重定向的一个例子。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">invalid_input</span><span style="color:#ECEFF4;"> ()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Invalid input &#39;</span><span style="color:#D8DEE9;">$REPLY</span><span style="color:#A3BE8C;">&#39;</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> &gt;&amp;2</span></span>
<span class="line"><span style="color:#88C0D0;">    exit</span><span style="color:#B48EAD;"> 1</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#88C0D0;">read</span><span style="color:#A3BE8C;"> -p</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Enter a single item &gt; </span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">[[</span><span style="color:#81A1C1;"> -z</span><span style="color:#D8DEE9;"> $REPLY</span><span style="color:#ECEFF4;"> ]]</span><span style="color:#ECEFF4;"> &amp;&amp;</span><span style="color:#88C0D0;"> invalid_input</span></span></code></pre></div><h2 id="tee" tabindex="-1"><a class="header-anchor" href="#tee"><span>tee</span></a></h2><p><code>tee</code> 命令用于同时将标准输出重定向到文件，以及另一个命令的标准输入。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">ls</span><span style="color:#A3BE8C;"> /usr/bin</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> tee</span><span style="color:#A3BE8C;"> ls.txt</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> grep</span><span style="color:#A3BE8C;"> zip</span></span></code></pre></div><h2 id="命令替换" tabindex="-1"><a class="header-anchor" href="#命令替换"><span>命令替换</span></a></h2><p>命令替换(command substitution)指的是将一个命令的输出，替换进入另一个命令。<code>$(command)</code> 表示命令替换，另一种写法是使用反引号。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> echo</span><span style="color:#ECEFF4;"> $(</span><span style="color:#88C0D0;">ls</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#616E88;"># 或者</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> echo</span><span style="color:#ECEFF4;"> \`</span><span style="color:#88C0D0;">ls</span><span style="color:#ECEFF4;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> ls</span><span style="color:#A3BE8C;"> -l</span><span style="color:#ECEFF4;"> $(</span><span style="color:#88C0D0;">which</span><span style="color:#A3BE8C;"> cp</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#616E88;"># 或者</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> ls</span><span style="color:#A3BE8C;"> -l</span><span style="color:#ECEFF4;"> \`</span><span style="color:#88C0D0;">which</span><span style="color:#A3BE8C;"> cp</span><span style="color:#ECEFF4;">\`</span></span></code></pre></div><h2 id="basename" tabindex="-1"><a class="header-anchor" href="#basename"><span>basename</span></a></h2><p><code>basename</code> 命令清除 一个路径名的开头部分，只留下一个文件的基本名称。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"><span style="color:#616E88;"># file_info: simple file information program</span></span>
<span class="line"><span style="color:#D8DEE9;">PROGNAME</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">$(</span><span style="color:#88C0D0;">basename</span><span style="color:#D8DEE9;"> $0</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#81A1C1;">if</span><span style="color:#ECEFF4;"> [[</span><span style="color:#81A1C1;"> -e</span><span style="color:#D8DEE9;"> $1</span><span style="color:#ECEFF4;"> ]]</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> then</span></span>
<span class="line"><span style="color:#88C0D0;">    echo</span><span style="color:#A3BE8C;"> -e</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">\\nFile Type:</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">    file</span><span style="color:#D8DEE9;"> $1</span></span>
<span class="line"><span style="color:#88C0D0;">    echo</span><span style="color:#A3BE8C;"> -e</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">\\nFile Status:</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">    stat</span><span style="color:#D8DEE9;"> $1</span></span>
<span class="line"><span style="color:#81A1C1;">else</span></span>
<span class="line"><span style="color:#88C0D0;">    echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$PROGNAME</span><span style="color:#A3BE8C;">: usage: </span><span style="color:#D8DEE9;">$PROGNAME</span><span style="color:#A3BE8C;"> file</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> &gt;&amp;2</span></span>
<span class="line"><span style="color:#88C0D0;">    exit</span><span style="color:#B48EAD;"> 1</span></span>
<span class="line"><span style="color:#81A1C1;">fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32)]))}const r=e(o,[["render",t],["__file","redirection.html.vue"]]),d=JSON.parse('{"path":"/linux/bash/archives/redirection.html","title":"重定向","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"重定向 重定向指的是将命令行输出写入指定位置。 cmd1 | cmd2: Pipe; take standard output of cmd1 as standard input to cmd2. > file: Direct standard output to file. < file: Take standard input from file....","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/redirection.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"重定向"}],["meta",{"property":"og:description","content":"重定向 重定向指的是将命令行输出写入指定位置。 cmd1 | cmd2: Pipe; take standard output of cmd1 as standard input to cmd2. > file: Direct standard output to file. < file: Take standard input from file...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"重定向\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"tee","slug":"tee","link":"#tee","children":[]},{"level":2,"title":"命令替换","slug":"命令替换","link":"#命令替换","children":[]},{"level":2,"title":"basename","slug":"basename","link":"#basename","children":[]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":3.02,"words":906},"filePathRelative":"linux/bash/archives/redirection.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{r as comp,d as data};
