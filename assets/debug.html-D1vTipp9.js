import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as c,c as t,d as n,e as r,b as l,f as a,a as i,w as E}from"./app-CAUHKgZ0.js";const d={};function y(C,s){const o=e("RouteLink");return c(),t("div",null,[s[5]||(s[5]=n("p",null,"本章介绍如何对 Shell 脚本除错。",-1)),r(" more "),s[6]||(s[6]=l(`<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2><p>编写 Shell 脚本的时候，一定要考虑到命令失败的情况，否则很容易出错。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#! /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">dir_name</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">/path/not/exist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">cd</span><span style="color:#D8DEE9;"> $dir_name</span></span>
<span class="line"><span style="color:#88C0D0;">rm</span><span style="color:#81A1C1;"> *</span></span></code></pre></div><p>上面脚本中，如果目录 <code>$dir_name</code> 不存在，<code>cd $dir_name</code> 命令就会执行失败。这时，就不会改变当前目录，脚本会继续执行下去，导致 <code>rm *</code> 命令删光当前目录的文件。</p><p>如果改成下面的样子，也会有问题。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">cd</span><span style="color:#D8DEE9;"> $dir_name</span><span style="color:#ECEFF4;"> &amp;&amp;</span><span style="color:#88C0D0;"> rm</span><span style="color:#81A1C1;"> *</span></span></code></pre></div><p>上面脚本中，只有 <code>cd $dir_name</code> 执行成功，才会执行 <code>rm *</code>。但是，如果变量 <code>$dir_name</code> 为空，<code>cd</code> 就会进入用户主目录，从而删光用户主目录的文件。</p><p>下面的写法才是正确的。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">[[</span><span style="color:#81A1C1;"> -d</span><span style="color:#D8DEE9;"> $dir_name</span><span style="color:#ECEFF4;"> ]]</span><span style="color:#ECEFF4;"> &amp;&amp;</span><span style="color:#88C0D0;"> cd</span><span style="color:#D8DEE9;"> $dir_name</span><span style="color:#ECEFF4;"> &amp;&amp;</span><span style="color:#88C0D0;"> rm</span><span style="color:#81A1C1;"> *</span></span></code></pre></div><p>上面代码中，先判断目录 <code>$dir_name</code> 是否存在，然后才执行其他操作。</p><p>如果不放心删除什么文件，可以先打印出来看一下。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">[[</span><span style="color:#81A1C1;"> -d</span><span style="color:#D8DEE9;"> $dir_name</span><span style="color:#ECEFF4;"> ]]</span><span style="color:#ECEFF4;"> &amp;&amp;</span><span style="color:#88C0D0;"> cd</span><span style="color:#D8DEE9;"> $dir_name</span><span style="color:#ECEFF4;"> &amp;&amp;</span><span style="color:#88C0D0;"> echo</span><span style="color:#A3BE8C;"> rm</span><span style="color:#81A1C1;"> *</span></span></code></pre></div><p>上面命令中，<code>echo rm *</code> 不会删除文件，只会打印出来要删除的文件。</p><h2 id="bash-的-x-参数" tabindex="-1"><a class="header-anchor" href="#bash-的-x-参数"><span><code>bash</code> 的 <code>-x</code> 参数</span></a></h2><p><code>bash</code> 的 <code>-x</code> 参数可以在执行每一行命令之前，打印该命令。这样就不用自己输出执行的命令，一旦出错，比较容易追查。</p><p>下面是一个脚本 <code>script.sh</code>。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># script.sh</span></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#A3BE8C;"> hello</span><span style="color:#A3BE8C;"> world</span></span></code></pre></div><p>加上 <code>-x</code> 参数，执行每条命令之前，都会显示该命令。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> bash</span><span style="color:#A3BE8C;"> -x</span><span style="color:#A3BE8C;"> script.sh</span></span>
<span class="line"><span style="color:#88C0D0;">+</span><span style="color:#A3BE8C;"> echo</span><span style="color:#A3BE8C;"> hello</span><span style="color:#A3BE8C;"> world</span></span>
<span class="line"><span style="color:#88C0D0;">hello</span><span style="color:#A3BE8C;"> world</span></span></code></pre></div><p>上面例子中，行首为 <code>+</code> 的行，显示该行是所要执行的命令，下一行才是该命令的执行结果。</p><p>下面再看一个 <code>-x</code> 写在脚本内部的例子。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#! /bin/bash -x</span></span>
<span class="line"><span style="color:#616E88;"># trouble: script to demonstrate common errors</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">number</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">1</span></span>
<span class="line"><span style="color:#81A1C1;">if</span><span style="color:#ECEFF4;"> [</span><span style="color:#D8DEE9;"> $number</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;"> ]</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> then</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Number is equal to 1.</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">else</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Number is not equal to 1.</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">fi</span></span></code></pre></div><p>上面的脚本执行之后，会输出每一行命令。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> trouble</span></span>
<span class="line"><span style="color:#88C0D0;">+</span><span style="color:#A3BE8C;"> number=</span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#88C0D0;">+</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">[</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#B48EAD;"> 1</span><span style="color:#A3BE8C;"> =</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">]</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#88C0D0;">+</span><span style="color:#A3BE8C;"> echo</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Number is equal to 1.</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#88C0D0;">Number</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> equal</span><span style="color:#A3BE8C;"> to</span><span style="color:#A3BE8C;"> 1.</span></span></code></pre></div><p>输出的命令之前的 <code>+</code> 号，是由系统变量 <code>PS4</code> 决定，可以修改这个变量。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> export</span><span style="color:#A3BE8C;"> PS4=</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">$LINENO + </span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> trouble</span></span>
<span class="line"><span style="color:#88C0D0;">5</span><span style="color:#A3BE8C;"> +</span><span style="color:#A3BE8C;"> number=</span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#88C0D0;">7</span><span style="color:#A3BE8C;"> +</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">[</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#B48EAD;"> 1</span><span style="color:#A3BE8C;"> =</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">]</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#88C0D0;">8</span><span style="color:#A3BE8C;"> +</span><span style="color:#A3BE8C;"> echo</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Number is equal to 1.</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#88C0D0;">Number</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> equal</span><span style="color:#A3BE8C;"> to</span><span style="color:#A3BE8C;"> 1.</span></span></code></pre></div>`,26)),n("p",null,[s[1]||(s[1]=a("另外，")),s[2]||(s[2]=n("code",null,"set",-1)),s[3]||(s[3]=a(" 命令也可以设置 Shell 的行为参数，有利于脚本除错，详见 ")),i(o,{to:"/linux/bash/set.html"},{default:E(()=>s[0]||(s[0]=[a("set 命令")])),_:1}),s[4]||(s[4]=a(" 一章。"))]),s[7]||(s[7]=l(`<h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h2><p>有一些环境变量常用于除错。</p><h3 id="lineno" tabindex="-1"><a class="header-anchor" href="#lineno"><span>LINENO</span></a></h3><p>变量 <code>LINENO</code> 返回它在脚本里面的行号。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">This is line </span><span style="color:#D8DEE9;">$LINENO</span><span style="color:#ECEFF4;">&quot;</span></span></code></pre></div><p>执行上面的脚本 <code>test.sh</code>，<code>$LINENO</code> 会返回 <code>3</code>。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> ./test.sh</span></span>
<span class="line"><span style="color:#88C0D0;">This</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> line</span><span style="color:#B48EAD;"> 3</span></span></code></pre></div><h3 id="funcname" tabindex="-1"><a class="header-anchor" href="#funcname"><span>FUNCNAME</span></a></h3><p>变量 <code>FUNCNAME</code> 返回一个数组，内容是当前的函数调用堆栈。该数组的 0 号成员是当前调用的函数，1 号成员是调用当前函数的函数，以此类推。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> func1</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func1: FUNCNAME0 is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">FUNCNAME</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">0</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func1: FUNCNAME1 is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">FUNCNAME</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">1</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func1: FUNCNAME2 is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">FUNCNAME</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">2</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  func2</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> func2</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func2: FUNCNAME0 is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">FUNCNAME</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">0</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func2: FUNCNAME1 is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">FUNCNAME</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">1</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func2: FUNCNAME2 is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">FUNCNAME</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">2</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">func1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面的脚本 <code>test.sh</code>，结果如下。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> ./test.sh</span></span>
<span class="line"><span style="color:#88C0D0;">func1:</span><span style="color:#A3BE8C;"> FUNCNAME0</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> func1</span></span>
<span class="line"><span style="color:#88C0D0;">func1:</span><span style="color:#A3BE8C;"> FUNCNAME1</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> main</span></span>
<span class="line"><span style="color:#88C0D0;">func1:</span><span style="color:#A3BE8C;"> FUNCNAME2</span><span style="color:#A3BE8C;"> is</span></span>
<span class="line"><span style="color:#88C0D0;">func2:</span><span style="color:#A3BE8C;"> FUNCNAME0</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> func2</span></span>
<span class="line"><span style="color:#88C0D0;">func2:</span><span style="color:#A3BE8C;"> FUNCNAME1</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> func1</span></span>
<span class="line"><span style="color:#88C0D0;">func2:</span><span style="color:#A3BE8C;"> FUNCNAME2</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> main</span></span></code></pre></div><p>上面例子中，执行 <code>func1</code> 时，变量 <code>FUNCNAME</code> 的 0 号成员是 <code>func1</code>，1 号成员是调用 <code>func1</code> 的主脚本 <code>main</code>。执行 <code>func2</code> 时，变量 <code>FUNCNAME</code> 的 0 号成员是 <code>func2</code>，1 号成员是调用 <code>func2</code> 的 <code>func1</code>。</p><h3 id="bash-source" tabindex="-1"><a class="header-anchor" href="#bash-source"><span>BASH_SOURCE</span></a></h3><p>变量 <code>BASH_SOURCE</code> 返回一个数组，内容是当前的脚本调用堆栈。该数组的 0 号成员是当前执行的脚本，1 号成员是调用当前脚本的脚本，以此类推，跟变量 <code>FUNCNAME</code> 是一一对应关系。</p><p>下面有两个子脚本 <code>lib1.sh</code> 和 <code>lib2.sh</code>。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># lib1.sh</span></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> func1</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func1: BASH_SOURCE0 is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">BASH_SOURCE</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">0</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func1: BASH_SOURCE1 is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">BASH_SOURCE</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">1</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func1: BASH_SOURCE2 is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">BASH_SOURCE</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">2</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  func2</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># lib2.sh</span></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> func2</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func2: BASH_SOURCE0 is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">BASH_SOURCE</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">0</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func2: BASH_SOURCE1 is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">BASH_SOURCE</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">1</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func2: BASH_SOURCE2 is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">BASH_SOURCE</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">2</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><p>然后，主脚本 <code>main.sh</code> 调用上面两个子脚本。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"><span style="color:#616E88;"># main.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">source</span><span style="color:#A3BE8C;"> lib1.sh</span></span>
<span class="line"><span style="color:#88C0D0;">source</span><span style="color:#A3BE8C;"> lib2.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">func1</span></span></code></pre></div><p>执行主脚本 <code>main.sh</code>，会得到下面的结果。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> ./main.sh</span></span>
<span class="line"><span style="color:#88C0D0;">func1:</span><span style="color:#A3BE8C;"> BASH_SOURCE0</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> lib1.sh</span></span>
<span class="line"><span style="color:#88C0D0;">func1:</span><span style="color:#A3BE8C;"> BASH_SOURCE1</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> ./main.sh</span></span>
<span class="line"><span style="color:#88C0D0;">func1:</span><span style="color:#A3BE8C;"> BASH_SOURCE2</span><span style="color:#A3BE8C;"> is</span></span>
<span class="line"><span style="color:#88C0D0;">func2:</span><span style="color:#A3BE8C;"> BASH_SOURCE0</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> lib2.sh</span></span>
<span class="line"><span style="color:#88C0D0;">func2:</span><span style="color:#A3BE8C;"> BASH_SOURCE1</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> lib1.sh</span></span>
<span class="line"><span style="color:#88C0D0;">func2:</span><span style="color:#A3BE8C;"> BASH_SOURCE2</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> ./main.sh</span></span></code></pre></div><p>上面例子中，执行函数 <code>func1</code> 时，变量 <code>BASH_SOURCE</code> 的 0 号成员是 <code>func1</code> 所在的脚本 <code>lib1.sh</code>，1 号成员是主脚本 <code>main.sh</code>；执行函数 <code>func2</code> 时，变量 <code>BASH_SOURCE</code> 的 0 号成员是 <code>func2</code> 所在的脚本 <code>lib2.sh</code>，1 号成员是调用 <code>func2</code> 的脚本 <code>lib1.sh</code>。</p><h3 id="bash-lineno" tabindex="-1"><a class="header-anchor" href="#bash-lineno"><span>BASH_LINENO</span></a></h3><p>变量 <code>BASH_LINENO</code> 返回一个数组，内容是每一轮调用对应的行号。<code>\${BASH_LINENO[$i]}</code> 跟 <code>\${FUNCNAME[$i]}</code> 是一一对应关系，表示 <code>\${FUNCNAME[$i]}</code> 在调用它的脚本文件 <code>\${BASH_SOURCE[$i+1]}</code> 里面的行号。</p><p>下面有两个子脚本 <code>lib1.sh</code> 和 <code>lib2.sh</code>。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># lib1.sh</span></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> func1</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func1: BASH_LINENO is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">BASH_LINENO</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">0</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func1: FUNCNAME is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">FUNCNAME</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">0</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func1: BASH_SOURCE is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">BASH_SOURCE</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">1</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">  func2</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># lib2.sh</span></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> func2</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func2: BASH_LINENO is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">BASH_LINENO</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">0</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func2: FUNCNAME is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">FUNCNAME</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">0</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">func2: BASH_SOURCE is </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">BASH_SOURCE</span><span style="color:#ECEFF4;">[</span><span style="color:#A3BE8C;">1</span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><p>然后，主脚本 <code>main.sh</code> 调用上面两个子脚本。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"><span style="color:#616E88;"># main.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">source</span><span style="color:#A3BE8C;"> lib1.sh</span></span>
<span class="line"><span style="color:#88C0D0;">source</span><span style="color:#A3BE8C;"> lib2.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">func1</span></span></code></pre></div><p>执行主脚本 <code>main.sh</code>，会得到下面的结果。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> ./main.sh</span></span>
<span class="line"><span style="color:#88C0D0;">func1:</span><span style="color:#A3BE8C;"> BASH_LINENO</span><span style="color:#A3BE8C;"> is</span><span style="color:#B48EAD;"> 7</span></span>
<span class="line"><span style="color:#88C0D0;">func1:</span><span style="color:#A3BE8C;"> FUNCNAME</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> func1</span></span>
<span class="line"><span style="color:#88C0D0;">func1:</span><span style="color:#A3BE8C;"> BASH_SOURCE</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> main.sh</span></span>
<span class="line"><span style="color:#88C0D0;">func2:</span><span style="color:#A3BE8C;"> BASH_LINENO</span><span style="color:#A3BE8C;"> is</span><span style="color:#B48EAD;"> 8</span></span>
<span class="line"><span style="color:#88C0D0;">func2:</span><span style="color:#A3BE8C;"> FUNCNAME</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> func2</span></span>
<span class="line"><span style="color:#88C0D0;">func2:</span><span style="color:#A3BE8C;"> BASH_SOURCE</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> lib1.sh</span></span></code></pre></div><p>上面例子中，函数 <code>func1</code> 是在 <code>main.sh</code> 的第 7 行调用，函数 <code>func2</code> 是在 <code>lib1.sh</code> 的第 8 行调用的。</p>`,33))])}const F=p(d,[["render",y],["__file","debug.html.vue"]]),u=JSON.parse('{"path":"/linux/bash/debug.html","title":"脚本除错","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"脚本除错","icon":"debug","author":"阮一峰","category":"Linux","tag":["Bash"],"copyright":"本教程采用<a href=\\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">知识共享 署名-相同方式共享 3.0协议</a>","description":"本章介绍如何对 Shell 脚本除错。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/debug.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"脚本除错"}],["meta",{"property":"og:description","content":"本章介绍如何对 Shell 脚本除错。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"脚本除错\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"常见错误","slug":"常见错误","link":"#常见错误","children":[]},{"level":2,"title":"bash 的 -x 参数","slug":"bash-的-x-参数","link":"#bash-的-x-参数","children":[]},{"level":2,"title":"环境变量","slug":"环境变量","link":"#环境变量","children":[{"level":3,"title":"LINENO","slug":"lineno","link":"#lineno","children":[]},{"level":3,"title":"FUNCNAME","slug":"funcname","link":"#funcname","children":[]},{"level":3,"title":"BASH_SOURCE","slug":"bash-source","link":"#bash-source","children":[]},{"level":3,"title":"BASH_LINENO","slug":"bash-lineno","link":"#bash-lineno","children":[]}]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":4.39,"words":1318},"filePathRelative":"linux/bash/debug.md","localizedDate":"2020年5月4日","excerpt":"<p>本章介绍如何对 Shell 脚本除错。</p>\\n","autoDesc":true}');export{F as comp,u as data};
