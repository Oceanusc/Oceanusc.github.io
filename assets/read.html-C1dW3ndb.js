import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,b as o}from"./app-CAUHKgZ0.js";const l={};function p(c,s){return n(),e("div",null,s[0]||(s[0]=[o(`<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><p>有时，脚本需要在执行过程中，由用户提供一部分数据，这时可以使用 <code>read</code> 命令。它将用户的输入存入一个变量，方便后面的代码使用。用户按下回车键，就表示输入结束。</p><p><code>read</code> 命令的格式如下。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">read</span><span style="color:#D8DEE9FF;"> [-options] </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">variable...</span><span style="color:#ECEFF4;">]</span></span></code></pre></div><p>上面语法中，<code>options</code> 是参数选项，<code>variable</code> 是用来保存输入数值的一个或多个变量名。如果没有提供变量名，环境变量 <code>REPLY</code> 会包含用户输入的一整行数据。</p><p>下面是一个例子 <code>demo.sh</code>。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#A3BE8C;"> -n</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">输入一些文本 &gt; </span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">read</span><span style="color:#A3BE8C;"> text</span></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">您的输入: </span><span style="color:#D8DEE9;">$text</span><span style="color:#ECEFF4;">&quot;</span></span></code></pre></div><p>上面例子中，先显示一行提示文本，然后会等待用户输入文本。用户输入的文本，存入变量 <code>text</code>，在下一行显示出来。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> bash</span><span style="color:#A3BE8C;"> demo.sh</span></span>
<span class="line"><span style="color:#88C0D0;">输入一些文本</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#A3BE8C;"> 您好，世界</span></span>
<span class="line"><span style="color:#88C0D0;">您的输入:</span><span style="color:#A3BE8C;"> 您好，世界</span></span></code></pre></div><p><code>read</code> 可以接受用户输入的多个值。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#A3BE8C;"> Please,</span><span style="color:#A3BE8C;"> enter</span><span style="color:#A3BE8C;"> your</span><span style="color:#A3BE8C;"> firstname</span><span style="color:#A3BE8C;"> and</span><span style="color:#A3BE8C;"> lastname</span></span>
<span class="line"><span style="color:#88C0D0;">read</span><span style="color:#A3BE8C;"> FN</span><span style="color:#A3BE8C;"> LN</span></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Hi! </span><span style="color:#D8DEE9;">$LN</span><span style="color:#A3BE8C;">, </span><span style="color:#D8DEE9;">$FN</span><span style="color:#A3BE8C;"> !</span><span style="color:#ECEFF4;">&quot;</span></span></code></pre></div><p>上面例子中，<code>read</code> 根据用户的输入，同时为两个变量赋值。</p><p>如果用户的输入项少于 <code>read</code> 命令给出的变量数目，那么额外的变量值为空。如果用户的输入项多于定义的变量，那么多余的输入项会包含到最后一个变量中。</p><p>如果 <code>read</code> 命令之后没有定义变量名，那么环境变量 <code>REPLY</code> 会包含所有的输入。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"><span style="color:#616E88;"># read-single: read multiple values into default variable</span></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#A3BE8C;"> -n</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Enter one or more values &gt; </span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">read</span></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">REPLY = &#39;</span><span style="color:#D8DEE9;">$REPLY</span><span style="color:#A3BE8C;">&#39;</span><span style="color:#ECEFF4;">&quot;</span></span></code></pre></div><p>上面脚本的运行结果如下。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> read-single</span></span>
<span class="line"><span style="color:#88C0D0;">Enter</span><span style="color:#A3BE8C;"> one</span><span style="color:#A3BE8C;"> or</span><span style="color:#A3BE8C;"> more</span><span style="color:#A3BE8C;"> values</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#A3BE8C;"> a</span><span style="color:#A3BE8C;"> b</span><span style="color:#A3BE8C;"> c</span><span style="color:#A3BE8C;"> d</span></span>
<span class="line"><span style="color:#88C0D0;">REPLY</span><span style="color:#A3BE8C;"> =</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">a b c d</span><span style="color:#ECEFF4;">&#39;</span></span></code></pre></div><p><code>read</code> 命令除了读取键盘输入，可以用来读取文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">while</span><span style="color:#88C0D0;"> read</span><span style="color:#A3BE8C;"> myline</span></span>
<span class="line"><span style="color:#81A1C1;">do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$myline</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">done</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#D8DEE9;"> $filename</span></span></code></pre></div><p>上面的例子通过 <code>read</code> 命令，读取一个文件的内容。<code>done</code> 命令后面的定向符 <code>&lt;</code>，将文件导向 <code>read</code> 命令，每次读取一行，存入变量 <code>myline</code>，直到文件读取完毕。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p><code>read</code> 命令的参数如下。</p><ol><li><p><strong><code>-t</code> 参数</strong></p><p><code>read</code> 命令的 <code>-t</code> 参数，设置了超时的秒数。如果超过了指定时间，用户仍然没有输入，脚本将放弃等待，继续向下执行。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#A3BE8C;"> -n</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">输入一些文本 &gt; </span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">if</span><span style="color:#88C0D0;"> read</span><span style="color:#A3BE8C;"> -t</span><span style="color:#B48EAD;"> 3</span><span style="color:#A3BE8C;"> response</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> then</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">用户已经输入了</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">else</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">用户没有输入</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">fi</span></span></code></pre></div><p>上面例子中，输入命令会等待 3 秒，如果用户超过这个时间没有输入，这个命令就会执行失败。<code>if</code> 根据命令的返回值，转入 <code>else</code> 代码块，继续往下执行。</p><p>环境变量 <code>TMOUT</code> 也可以起到同样作用，指定 <code>read</code> 命令等待用户输入的时间(单位为秒)。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">TMOUT</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">3</span></span>
<span class="line"><span style="color:#88C0D0;">read</span><span style="color:#A3BE8C;"> response</span></span></code></pre></div><p>上面例子也是等待 3 秒，如果用户还没有输入，就会超时。</p></li><li><p><strong><code>-p</code> 参数</strong></p><p><code>-p</code> 参数指定用户输入的提示信息。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">read</span><span style="color:#A3BE8C;"> -p</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Enter one or more values &gt; </span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">REPLY = &#39;</span><span style="color:#D8DEE9;">$REPLY</span><span style="color:#A3BE8C;">&#39;</span><span style="color:#ECEFF4;">&quot;</span></span></code></pre></div><p>上面例子中，先显示 <code>Enter one or more values &gt;</code>，再接受用户的输入。</p></li><li><p><strong><code>-a</code> 参数</strong></p><p><code>-a</code> 参数把用户的输入赋值给一个数组，从零号位置开始。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> read</span><span style="color:#A3BE8C;"> -a</span><span style="color:#A3BE8C;"> people</span></span>
<span class="line"><span style="color:#88C0D0;">alice</span><span style="color:#A3BE8C;"> duchess</span><span style="color:#A3BE8C;"> dodo</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> echo</span><span style="color:#81A1C1;"> \${</span><span style="color:#D8DEE9;">people</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">2</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span></span>
<span class="line"><span style="color:#88C0D0;">dodo</span></span></code></pre></div><p>上面例子中，用户输入被赋值给一个数组 <code>people</code>，这个数组的 2 号成员就是 <code>dodo</code>。</p></li><li><p><strong><code>-n</code> 参数</strong></p><p><code>-n</code> 参数指定只读取若干个字符作为变量值，而不是整行读取。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> read</span><span style="color:#A3BE8C;"> -n</span><span style="color:#B48EAD;"> 3</span><span style="color:#A3BE8C;"> letter</span></span>
<span class="line"><span style="color:#88C0D0;">abcdefghij</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> echo</span><span style="color:#D8DEE9;"> $letter</span></span>
<span class="line"><span style="color:#88C0D0;">abc</span></span></code></pre></div><p>上面例子中，变量 <code>letter</code> 只包含 3 个字母。</p></li><li><p><strong>-e 参数</strong></p><p><code>-e</code> 参数允许用户输入的时候，使用 <code>readline</code> 库提供的快捷键，比如自动补全。具体的快捷键可以参阅《行操作》一章。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#A3BE8C;"> Please</span><span style="color:#A3BE8C;"> input</span><span style="color:#A3BE8C;"> the</span><span style="color:#A3BE8C;"> path</span><span style="color:#A3BE8C;"> to</span><span style="color:#A3BE8C;"> the</span><span style="color:#A3BE8C;"> file:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">read</span><span style="color:#A3BE8C;"> -e</span><span style="color:#A3BE8C;"> fileName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#D8DEE9;"> $fileName</span></span></code></pre></div><p>上面例子中，<code>read</code> 命令接受用户输入的文件名。这时，用户可能想使用 Tab 键的文件名“自动补全”功能，但是 <code>read</code> 命令的输入默认不支持 <code>readline</code> 库的功能。<code>-e</code> 参数就可以允许用户使用自动补全。</p></li><li><p><strong>其他参数</strong></p><ul><li><code>-d delimiter</code>: 定义字符串 <code>delimiter</code> 的第一个字符作为用户输入的结束，而不是一个换行符。</li><li><code>-r</code>: raw 模式，表示不把用户输入的反斜杠字符解释为转义字符。</li><li><code>-s</code>: 使得用户的输入不显示在屏幕上，这常常用于输入密码或保密信息。</li><li><code>-u fd</code>: 使用文件描述符 <code>fd</code> 作为输入。</li></ul></li></ol><h2 id="ifs-变量" tabindex="-1"><a class="header-anchor" href="#ifs-变量"><span>IFS 变量</span></a></h2><p><code>read</code> 命令读取的值，默认是以空格分隔。可以通过自定义环境变量 <code>IFS</code>(内部字段分隔符，Internal Field Separator 的缩写)，修改分隔标志。</p><p><code>IFS</code> 的默认值是空格、Tab 符号、换行符号，通常取第一个(即空格)。</p><p>如果把 <code>IFS</code> 定义成冒号(<code>:</code>)或分号(<code>;</code>)，就可以分隔以这两个符号分隔的值，这对读取文件很有用。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"><span style="color:#616E88;"># read-ifs: read fields from a file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">FILE</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">/etc/passwd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">read</span><span style="color:#A3BE8C;"> -p</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Enter a username &gt; </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;"> user_name</span></span>
<span class="line"><span style="color:#D8DEE9;">file_info</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&quot;$(</span><span style="color:#88C0D0;">grep</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">^</span><span style="color:#D8DEE9;">$user_name</span><span style="color:#A3BE8C;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;"> $FILE</span><span style="color:#ECEFF4;">)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">if</span><span style="color:#ECEFF4;"> [</span><span style="color:#81A1C1;"> -n</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$file_info</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;"> ]</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> then</span></span>
<span class="line"><span style="color:#D8DEE9;">  IFS</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#88C0D0;"> read</span><span style="color:#A3BE8C;"> user</span><span style="color:#A3BE8C;"> pw</span><span style="color:#A3BE8C;"> uid</span><span style="color:#A3BE8C;"> gid</span><span style="color:#A3BE8C;"> name</span><span style="color:#A3BE8C;"> home</span><span style="color:#A3BE8C;"> shell</span><span style="color:#81A1C1;"> &lt;&lt;&lt;</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$file_info</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">User = &#39;</span><span style="color:#D8DEE9;">$user</span><span style="color:#A3BE8C;">&#39;</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">UID = &#39;</span><span style="color:#D8DEE9;">$uid</span><span style="color:#A3BE8C;">&#39;</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">GID = &#39;</span><span style="color:#D8DEE9;">$gid</span><span style="color:#A3BE8C;">&#39;</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Full Name = &#39;</span><span style="color:#D8DEE9;">$name</span><span style="color:#A3BE8C;">&#39;</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Home Dir. = &#39;</span><span style="color:#D8DEE9;">$home</span><span style="color:#A3BE8C;">&#39;</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Shell = &#39;</span><span style="color:#D8DEE9;">$shell</span><span style="color:#A3BE8C;">&#39;</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">else</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">No such user &#39;</span><span style="color:#D8DEE9;">$user_name</span><span style="color:#A3BE8C;">&#39;</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> &gt;&amp;2</span></span>
<span class="line"><span style="color:#88C0D0;">  exit</span><span style="color:#B48EAD;"> 1</span></span>
<span class="line"><span style="color:#81A1C1;">fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code>IFS</code> 设为冒号，然后用来分解 <code>/etc/passwd</code> 文件的一行。<code>IFS</code> 的赋值命令和 <code>read</code> 命令写在一行，这样的话，<code>IFS</code> 的改变仅对后面的命令生效，该命令执行后 <code>IFS</code> 会自动恢复原来的值。如果不写在一行，就要采用下面的写法。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">OLD_IFS</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">$IFS</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#D8DEE9;">IFS</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">:</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">read</span><span style="color:#A3BE8C;"> user</span><span style="color:#A3BE8C;"> pw</span><span style="color:#A3BE8C;"> uid</span><span style="color:#A3BE8C;"> gid</span><span style="color:#A3BE8C;"> name</span><span style="color:#A3BE8C;"> home</span><span style="color:#A3BE8C;"> shell</span><span style="color:#81A1C1;"> &lt;&lt;&lt;</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$file_info</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#D8DEE9;">IFS</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">$OLD_IFS</span><span style="color:#ECEFF4;">&quot;</span></span></code></pre></div><p>另外，上面例子中，<code>&lt;&lt;&lt;</code> 是 Here 字符串，用于将变量值转为标准输入，因为 <code>read</code> 命令只能解析标准输入。</p><p>如果 <code>IFS</code> 设为空字符串，就等同于将整行读入一个变量。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"><span style="color:#D8DEE9;">input</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">/path/to/txt/file</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">while</span><span style="color:#D8DEE9;"> IFS</span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> read</span><span style="color:#A3BE8C;"> -r</span><span style="color:#A3BE8C;"> line</span></span>
<span class="line"><span style="color:#81A1C1;">do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$line</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">done</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$input</span><span style="color:#ECEFF4;">&quot;</span></span></code></pre></div><p>上面的命令可以逐行读取文件，每一行存入变量 <code>line</code>，打印出来以后再读取下一行。</p>`,34)]))}const d=a(l,[["render",p],["__file","read.html.vue"]]),i=JSON.parse('{"path":"/linux/bash/read.html","title":"read 命令","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"read 命令","icon":"read","author":"阮一峰","category":"Linux","tag":["Bash"],"copyright":"本教程采用<a href=\\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">知识共享 署名-相同方式共享 3.0协议</a>","description":"用法 有时，脚本需要在执行过程中，由用户提供一部分数据，这时可以使用 read 命令。它将用户的输入存入一个变量，方便后面的代码使用。用户按下回车键，就表示输入结束。 read 命令的格式如下。 上面语法中，options 是参数选项，variable 是用来保存输入数值的一个或多个变量名。如果没有提供变量名，环境变量 REPLY 会包含用户输入的一整...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/read.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"read 命令"}],["meta",{"property":"og:description","content":"用法 有时，脚本需要在执行过程中，由用户提供一部分数据，这时可以使用 read 命令。它将用户的输入存入一个变量，方便后面的代码使用。用户按下回车键，就表示输入结束。 read 命令的格式如下。 上面语法中，options 是参数选项，variable 是用来保存输入数值的一个或多个变量名。如果没有提供变量名，环境变量 REPLY 会包含用户输入的一整..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"read 命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"IFS 变量","slug":"ifs-变量","link":"#ifs-变量","children":[]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":5.19,"words":1557},"filePathRelative":"linux/bash/read.md","localizedDate":"2020年5月4日","excerpt":"","autoDesc":true}');export{d as comp,i as data};
