import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as a,b as e}from"./app-CAUHKgZ0.js";const n={};function t(p,s){return o(),a("div",null,s[0]||(s[0]=[e(`<h1 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h1><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><p>变量是计算机系统用于保存可变值的数据类型，我们可以直接通过变量名称来提取到对应的变量值。在 Linux 系统中，环境变量是用来定义系统运行环境的一些参数，比如每个用户不同的家目录 (HOME)、邮件存放位置 (MAIL)等。 值得一提的是，Linux 系统中环境变量的名称一般都是大写的，这是一种约定俗成的规范。</p><p>我们可以使用 env 命令来查看到 Linux 系统中所有的环境变量，执行命令如下:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> env</span></span>
<span class="line"><span style="color:#D8DEE9FF;">ORBIT_SOCKETDIR=/tmp/orbit-root</span></span>
<span class="line"><span style="color:#D8DEE9FF;">HOSTNAME=livecd.centos</span></span>
<span class="line"><span style="color:#D8DEE9FF;">GIO_LAUNCHED_DESKTOP_FILE_PID=2065</span></span>
<span class="line"><span style="color:#D8DEE9FF;">TERM=xterm</span></span>
<span class="line"><span style="color:#D8DEE9FF;">SHELL=/bin/bash</span></span>
<span class="line"><span style="color:#D8DEE9FF;">......</span></span></code></pre></div><p>Linux 系统能够正常运行并且为用户提供服务，需要数百个环境变量来协同工作，但是，我们没有必要逐一学习每个变量。常见变量见下表:</p><table><thead><tr><th>环境变量名称</th><th>作用</th></tr></thead><tbody><tr><td>HOME</td><td>用户的主目录(也称家目录)</td></tr><tr><td>SHELL</td><td>用户使用的 Shell 解释器名称</td></tr><tr><td>PATH</td><td>定义命令行解释器搜索用户执行命令的路径</td></tr><tr><td>EDITOR</td><td>用户默认的文本解释器</td></tr><tr><td>RANDOM</td><td>生成一个随机数字</td></tr><tr><td>LANG</td><td>系统语言、语系名称</td></tr><tr><td>HISTSIZE</td><td>输出的历史命令记录条数</td></tr><tr><td>HISTFILESIZE</td><td>保存的历史命令记录条数</td></tr><tr><td>PS1</td><td>Bash 解释器的提示符</td></tr><tr><td>MAIL</td><td>邮件保存路径</td></tr></tbody></table><p>Linux 作为一个多用户多任务的操作系统，能够为每个用户提供独立的、合适的工作运行环境，因此，一个相同的环境变量会因为用户身份的不同而具有不同的值。</p><p>例如，使用下述命令来查看 <code>HOME</code> 变量在不同用户身份下都有哪些值:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> echo </span><span style="color:#D8DEE9;">$HOME</span></span>
<span class="line"><span style="color:#D8DEE9FF;">/root</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> su - user1  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">--切换到 user1 用户身份</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[user1@localhost ~]</span><span style="color:#ECEFF4;">$</span><span style="color:#D8DEE9FF;"> echo </span><span style="color:#D8DEE9;">$HOME</span></span>
<span class="line"><span style="color:#D8DEE9FF;">/home/user1</span></span></code></pre></div><p>这里的 <code>su</code> 命令可以临时切换用户身份，此命令的具体用法会在后续章节做详细介绍。</p><p>其实，环境变量是由固定的变量名与用户或系统设置的变量值两部分组成的，我们完全可以自行创建环境变量来满足工作需求。例如，设置一个名称为 <code>WORKDIR</code> 的环境变量，方便用户更轻松地进入一个层次较深的目录，执行命令如下:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> mkdir /home/work1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9;"> WORKDIR</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">/home/work1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> cd </span><span style="color:#D8DEE9;">$WORKDIR</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[root@localhost work1]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> pwd</span></span>
<span class="line"><span style="color:#D8DEE9FF;">/home/work1</span></span></code></pre></div><p>但是，这样的环境变量不具有全局性，作用范围也有限，默认情况下不能被其他用户使用。如果工作需要，可以使用 <code>export</code> 命令将其提升为全局环境变量，这样其他用户就可以使用它了:</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">[root@localhost work1]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> su user1  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">-- 切换到 user1，发现无法使用 WORKDIR 自定义变量</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[user1@localhost ~]</span><span style="color:#ECEFF4;">$</span><span style="color:#D8DEE9FF;"> cd </span><span style="color:#D8DEE9;">$WORKDIR</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[user1@localhost ~]</span><span style="color:#ECEFF4;">$</span><span style="color:#D8DEE9FF;"> echo </span><span style="color:#D8DEE9;">$WORKDIR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">[user1@localhost ~]</span><span style="color:#ECEFF4;">$</span><span style="color:#D8DEE9FF;"> exit </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;">--退出user1身份</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[root@localhost work1]</span><span style="color:#ECEFF4;">#</span><span style="color:#81A1C1;"> export</span><span style="color:#D8DEE9;"> WORKDIR</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[root@localhost work1]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> su user1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[user1@localhost ~]</span><span style="color:#ECEFF4;">$</span><span style="color:#D8DEE9FF;"> cd </span><span style="color:#D8DEE9;">$WORKDIR</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[user1@localhost work1]</span><span style="color:#ECEFF4;">$</span><span style="color:#D8DEE9FF;"> pwd</span></span>
<span class="line"><span style="color:#D8DEE9FF;">/home/work1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path"><span>path</span></a></h2><p>在讲解 PATH 环境变量之前，首先介绍一下 <code>which</code> 命令，它用于查找某个命令所在的绝对路径。例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> which rm</span></span>
<span class="line"><span style="color:#D8DEE9FF;">/bin/rm</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> which rmdir</span></span>
<span class="line"><span style="color:#D8DEE9FF;">/bin/rmdir</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> which ls</span></span>
<span class="line"><span style="color:#D8DEE9FF;">alias ls=&#39;ls --color=auto&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        /bin/ls</span></span></code></pre></div><p>注意，<code>ls</code> 是一个相对特殊的命令，它使用 alias 命令做了别名，也就是说，我们常用的 <code>ls</code> 实际上执行的是 <code>ls --color=auto</code>。</p><p>通过使用 <code>which</code> 命令，可以查找各个外部命令(和 Shell 内置命令相对)所在的绝对路径。学到这里，读者是否有这样一个疑问，为什么前面在使用 <code>rm</code>、<code>rmdir</code>、<code>ls</code> 等命令时，无论当前位于哪个目录，都可以直接使用，而无需指明命令的执行文件所在的位置 (绝对路径) 呢? 其实，这是 PATH 环境变量在起作用。</p><p>首先，执行如下命令:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> echo </span><span style="color:#D8DEE9;">$PATH</span></span>
<span class="line"><span style="color:#D8DEE9FF;">/usr/local/sbin:/usr/sbin:/sbin:/usr/local/bin:/usr/bin:/bin:/root/bin</span></span></code></pre></div><p>这里的 <code>echo</code> 命令用来输出 PATH 环境变量的值(这里的 <code>$</code> 是 PATH 的前缀符号)，PATH 环境变量的内容是由一堆目录组成的，各目录之间用冒号 <code>:</code> 隔开。当执行某个命令时，Linux 会依照 PATH 中包含的目录依次搜寻该命令的可执行文件，一旦找到，即正常执行；反之，则提示无法找到该命令。 如果在 PATH 包含的目录中，有多个目录都包含某命令的可执行文件，那么会执行先搜索到的可执行文件。</p><p>从执行结果中可以看到，<code>/bin</code> 目录已经包含在 PATH 环境变量中，因此在使用类似 <code>rm</code>、<code>rmdir</code>、<code>ls</code> 等命令时，即便直接使用其命令名，Linux 也可以找到该命令。</p><p>为了印证以上观点，下面举个反例，如果我们将 <code>ls</code> 命令移动到 <code>/root</code> 目录下，由于 PATH 环境变量中没有包含此目录，所有当直接使用 <code>ls</code> 命令名执行时，Linux 将无法找到此命令的可执行文件，并提示 <code>No such file or directory</code>，示例命令如下:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> mv /bin/ls /root</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> ls</span></span>
<span class="line"><span style="color:#D8DEE9FF;">bash: /bin/ls: No such file or directory</span></span></code></pre></div><p>此时，如果仍想使用 <code>ls</code> 命令，有 2 种方法，一种是直接将 <code>/root</code> 添加到 PATH 环境变量中，例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9;"> PATH</span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9;">$PATH</span><span style="color:#A3BE8C;">:/root</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> echo </span><span style="color:#D8DEE9;">$PATH</span></span>
<span class="line"><span style="color:#D8DEE9FF;">/usr/local/sbin:/usr/sbin:/usr/local/bin:/usr/bin:/bin:/root/bin:/root</span></span>
<span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> ls</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Desktop    Downloads    Music    post-install     Public    Videos</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Documents  ls           Pictures post-install.org Templates</span></span></code></pre></div><p>注意，这种方式只是临时有效，一旦退出下次再登陆的时候，<code>$PATH</code> 就恢复成了默认值。</p><p>另一种方法是以绝对路径的方式使用此命令，例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> /root/ls</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Desktop    Downloads    Music    post-install     Public    Videos</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Documents  ls           Pictures post-install.org Templates</span></span></code></pre></div><p>为了不影响系统的正常使用，强烈建议大家将移动后的 <code>ls</code> 文件还原，命令如下:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">[root@localhost ~]</span><span style="color:#ECEFF4;">#</span><span style="color:#D8DEE9FF;"> mv /root/ls /bin</span></span></code></pre></div>`,33)]))}const i=l(n,[["render",t],["__file","path.html.vue"]]),d=JSON.parse('{"path":"/linux/command/path.html","title":"环境变量","lang":"zh-CN","frontmatter":{"icon":"shell","date":"2023-11-20T00:00:00.000Z","category":"Linux","description":"环境变量 变量 变量是计算机系统用于保存可变值的数据类型，我们可以直接通过变量名称来提取到对应的变量值。在 Linux 系统中，环境变量是用来定义系统运行环境的一些参数，比如每个用户不同的家目录 (HOME)、邮件存放位置 (MAIL)等。 值得一提的是，Linux 系统中环境变量的名称一般都是大写的，这是一种约定俗成的规范。 我们可以使用 env 命...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/command/path.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"环境变量"}],["meta",{"property":"og:description","content":"环境变量 变量 变量是计算机系统用于保存可变值的数据类型，我们可以直接通过变量名称来提取到对应的变量值。在 Linux 系统中，环境变量是用来定义系统运行环境的一些参数，比如每个用户不同的家目录 (HOME)、邮件存放位置 (MAIL)等。 值得一提的是，Linux 系统中环境变量的名称一般都是大写的，这是一种约定俗成的规范。 我们可以使用 env 命..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:published_time","content":"2023-11-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"环境变量\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"path","slug":"path","link":"#path","children":[]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":4.81,"words":1444},"filePathRelative":"linux/command/path.md","localizedDate":"2023年11月20日","excerpt":"","autoDesc":true}');export{i as comp,d as data};
