import{c as e,i as t,r as n}from"./app-D8ltYGww.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/linux/ubuntu/manage.html","title":"管理工具","lang":"zh-CN","frontmatter":{"icon":"tool","date":"2023-11-21T00:00:00.000Z","category":"Linux","description":"管理工具 apt-get apt-get 命令默认的源在国内访问很慢，可以考虑换源。 获取软件包更新: 更新软件包: 其他命令^order Snap 已经预装。 在中国大陆不建议使用 Snap","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"管理工具\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"oceanusc\\",\\"url\\":\\"https://daiding.site\\"}]}"],["meta",{"property":"og:url","content":"https://daiding.site/linux/ubuntu/manage.html"}],["meta",{"property":"og:site_name","content":"oceanusc"}],["meta",{"property":"og:title","content":"管理工具"}],["meta",{"property":"og:description","content":"管理工具 apt-get apt-get 命令默认的源在国内访问很慢，可以考虑换源。 获取软件包更新: 更新软件包: 其他命令^order Snap 已经预装。 在中国大陆不建议使用 Snap"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:published_time","content":"2023-11-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}]]},"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Oceanusc","username":"Oceanusc","email":"che4ac@163.com","commits":1,"url":"https://github.com/Oceanusc"}]},"readingTime":{"minutes":1.15,"words":344},"filePathRelative":"linux/ubuntu/manage.md","excerpt":"","autoDesc":true}`),a={name:`manage.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="管理工具" tabindex="-1"><a class="header-anchor" href="#管理工具"><span>管理工具</span></a></h1><h2 id="apt-get" tabindex="-1"><a class="header-anchor" href="#apt-get"><span>apt-get</span></a></h2><p><code>apt-get</code> 命令默认的源在国内访问很慢，可以考虑换源。</p><ul><li><p>获取软件包更新:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>更新软件包:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>其他命令<a href="%E5%85%B6%E4%BB%96%E5%91%BD%E4%BB%A4">^order</a></p></li></ul><pre><code>\`\`\`bash
apt-cache search # ------(package 搜索包)

apt-cache show #------(package 获取包的相关信息，如说明、大小、版本等)

sudo apt-get install # ------(package 安装包)sudo apt-get install # -----(package - - reinstall 重新安装包)

sudo apt-get -f install # -----(强制安装?#&quot;-f = --fix-missing&quot;当是修复安装吧...)

sudo apt-get remove #-----(package 删除包)

sudo apt-get remove - - purge # ------(package 删除包，包括删除配置文件等)

sudo apt-get autoremove --purge # ----(package 删除包及其依赖的软件包+配置文件等(只对6.10有效，强烈推荐))

sudo apt-get update #------更新源

sudo apt-get upgrade #------更新已安装的包

sudo apt-get dist-upgrade # ---------升级系统

sudo apt-get dselect-upgrade #------使用 dselect 升级

apt-cache depends #-------(package 了解使用依赖)

apt-cache rdepends # ------(package 了解某个具体的依赖?#当是查看该包被哪些包依赖吧...)

sudo apt-get build-dep # ------(package 安装相关的编译环境)

apt-get source #------(package 下载该包的源代码)

sudo apt-get clean &amp;&amp; sudo apt-get autoclean # --------清理下载文件的存档 &amp;&amp; 只清理过时的包

sudo apt-get check #-------检查是否有损坏的依赖
\`\`\`
</code></pre><h2 id="snap" tabindex="-1"><a class="header-anchor" href="#snap"><span>Snap</span></a></h2><p>已经预装。</p><p>在中国大陆不建议使用 Snap</p>`,8)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};