import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as l,d as e,e as p,b as i}from"./app-CAUHKgZ0.js";const o={};function c(t,s){return a(),l("div",null,[s[0]||(s[0]=e("p",null,"本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。",-1)),p(" more "),s[1]||(s[1]=i(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于 Centos 仍然是用 GitV1，本教程使用 Ubuntu 20.04 进行教学。</p></div><h2 id="服务器" tabindex="-1"><a class="header-anchor" href="#服务器"><span>服务器</span></a></h2><p>为了能供自动部署到服务器，我们需要让服务器的网站目录成为一个 Git 仓库，这样我们可以在 GitHub Actions 中，通过向服务器对应 GitHub 仓库推送网站内容，使服务器网站获得自动更新。下面是服务器侧的部署配置</p><h3 id="添加账户" tabindex="-1"><a class="header-anchor" href="#添加账户"><span>添加账户</span></a></h3><p>为了安全，首先需要使用命令创建 Git 用户，为了安全请务必设置密码。</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">sudo</span><span style="color:#A3BE8C;"> adduser</span><span style="color:#A3BE8C;"> git</span></span></code></pre></div><p>之后，查看部署目录所在组，git 用户添加到组中。</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">usermod</span><span style="color:#A3BE8C;"> -a</span><span style="color:#A3BE8C;"> -G</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#A3BE8C;">目录所在</span><span style="color:#D8DEE9FF;">组</span><span style="color:#81A1C1;">&gt;</span><span style="color:#A3BE8C;"> git</span></span></code></pre></div><p>然后将部署目录的权限设置为 <code>775</code>，即允许同组访问。这样 git 就有权限访问部署目录。</p><h3 id="添加权限" tabindex="-1"><a class="header-anchor" href="#添加权限"><span>添加权限</span></a></h3><p>创建 <code>~/.ssh/</code> 文件夹，生成 <code>authorized_keys</code> 文件，并设置其权限为 <code>600</code>。</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">mkdir</span><span style="color:#A3BE8C;"> -p</span><span style="color:#A3BE8C;"> ~/.ssh/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">touch</span><span style="color:#A3BE8C;"> ~/.ssh/authorized_keys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">chmod</span><span style="color:#B48EAD;"> 600</span><span style="color:#A3BE8C;"> ~/.ssh/authorized_keys</span></span></code></pre></div><p>之后将需要赋予权限的用户公钥依次粘贴至该文件，这样相关用户即可以使用对应私钥，向服务器相关仓库推送代码。</p><h3 id="创建仓库" tabindex="-1"><a class="header-anchor" href="#创建仓库"><span>创建仓库</span></a></h3><p>回到 <code>/home/git/</code>，创建所需的文件夹:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">cd</span><span style="color:#A3BE8C;"> ~</span></span>
<span class="line"><span style="color:#88C0D0;">mkdir</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#A3BE8C;">仓库</span><span style="color:#D8DEE9FF;">名</span><span style="color:#81A1C1;">&gt;</span></span></code></pre></div><p>进入文件夹，使用</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">git</span><span style="color:#A3BE8C;"> init</span><span style="color:#A3BE8C;"> --separate-git-dir=.</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#A3BE8C;">部署位</span><span style="color:#D8DEE9FF;">置</span><span style="color:#81A1C1;">&gt;</span></span></code></pre></div><p>这会将 git 库保持在 <code>/home/git/&lt;仓库名&gt;</code> 下，同时将工作区设置到部署文件夹中。</p><p>接下来执行:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">git</span><span style="color:#A3BE8C;"> config</span><span style="color:#A3BE8C;"> receive.denyCurrentBranch</span><span style="color:#A3BE8C;"> ignore</span></span>
<span class="line"><span style="color:#88C0D0;">git</span><span style="color:#A3BE8C;"> config</span><span style="color:#A3BE8C;"> --global</span><span style="color:#A3BE8C;"> --add</span><span style="color:#A3BE8C;"> safe.directory</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#A3BE8C;">部署文件</span><span style="color:#D8DEE9FF;">夹</span><span style="color:#81A1C1;">&gt;</span></span></code></pre></div><div class="hint-container note"><p class="hint-container-title">注</p><p>Git 默认拒绝外部对当前分支的推送操作，因为这可能会覆盖或变更工作区文件。所以我们需要显式通知 Git 不要拒绝当前分支的推送操作。</p><p>另外在新版本 Git 中，考虑到安全因素，Git 会在检出时检测项目文件夹是否属于其他组成员，如果检测到会默认拒绝相关操作以防止其他用于获取到本不应该获取到的代码信息。因为部署文件夹的所有者通常不会是 git，所以我们需要标记对应的部署文件夹“安全”。</p></div><h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions"><span>GitHub Actions</span></a></h2><p>在 GitHub 一侧，我们需要通过 GitHub Action，在新代码推送时自动构建网站，并部署到 GitHub 的 gh-pages 分支。之后，GitHub Action 将该分支的变动推送服务器的对应仓库，完成网站的自动部署。</p><p>之后只需要使用 GitHub Action 通过 Git 推送到 <code>git@&lt;domain&gt;:&lt;部署目录&gt; gh-pages</code> 即可。</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># 自动部署的名称</span></span>
<span class="line"><span style="color:#8FBCBB;">name</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> GitHub pages deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 自动部署的条件</span></span>
<span class="line"><span style="color:#81A1C1;">on</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#8FBCBB;">  push</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#8FBCBB;">    branches</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#ECEFF4;">      -</span><span style="color:#A3BE8C;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8FBCBB;">jobs</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#616E88;">  # 构建网站并部署到 GitHub Pages</span></span>
<span class="line"><span style="color:#8FBCBB;">  deploy-gh-pages</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#616E88;">    # 运行环境</span></span>
<span class="line"><span style="color:#8FBCBB;">    runs-on</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">    # 步骤</span></span>
<span class="line"><span style="color:#8FBCBB;">    steps</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#616E88;">      # 第一步: 下载源码</span></span>
<span class="line"><span style="color:#ECEFF4;">      -</span><span style="color:#8FBCBB;"> name</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> Checkout</span></span>
<span class="line"><span style="color:#616E88;">        # action 配置详见 https://github.com/actions/checkout</span></span>
<span class="line"><span style="color:#8FBCBB;">        uses</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> actions/checkout@v4</span></span>
<span class="line"><span style="color:#8FBCBB;">        with</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#616E88;">          # 如果本项目包含了子模块 (git submodules)，需要将此项设置为 true</span></span>
<span class="line"><span style="color:#616E88;">          # submodules: true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">          # 这是获取历史 commit 的深度，默认为 1，即只拉取最后一个 commit</span></span>
<span class="line"><span style="color:#616E88;">          # 这样可以加快拉取速度</span></span>
<span class="line"><span style="color:#616E88;">          #</span></span>
<span class="line"><span style="color:#616E88;">          # 如果项目使用 VuePress，为了正确通过 Git 历史提交记录生成页面的最后更新时间</span></span>
<span class="line"><span style="color:#616E88;">          # 需要设置为 0 以拉取完整的 git 历史提交</span></span>
<span class="line"><span style="color:#616E88;">          # fetch-depth: 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">          # 如果子模块包含私有仓库，需要设置 ssh key 或 token 以保证拥有拉取相应仓库的权限</span></span>
<span class="line"><span style="color:#616E88;">          # 您可以将 ssh-key 设置为 github 绑定公钥对应的私钥</span></span>
<span class="line"><span style="color:#616E88;">          # 也可以新建一个具有相关仓库访问权限的 github token</span></span>
<span class="line"><span style="color:#616E88;">          # token:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">      # 缓存 node_modules 以避免重复安装</span></span>
<span class="line"><span style="color:#ECEFF4;">      -</span><span style="color:#8FBCBB;"> uses</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> actions/cache@v3</span></span>
<span class="line"><span style="color:#8FBCBB;">        id</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> node-modules</span></span>
<span class="line"><span style="color:#8FBCBB;">        with</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#616E88;">          # 需要缓存的路径</span></span>
<span class="line"><span style="color:#8FBCBB;">          path</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> node_modules/</span></span>
<span class="line"><span style="color:#616E88;">          # 缓存的 key</span></span>
<span class="line"><span style="color:#8FBCBB;">          key</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> \${{ runner.os }}-node-modules-\${{ hashFiles(&#39;yarn.lock&#39;) }}</span></span>
<span class="line"><span style="color:#616E88;">          # 恢复 key</span></span>
<span class="line"><span style="color:#8FBCBB;">          restore-keys</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> |</span></span>
<span class="line"><span style="color:#A3BE8C;">            \${{ runner.os }}-node-modules-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">      # 安装依赖</span></span>
<span class="line"><span style="color:#ECEFF4;">      -</span><span style="color:#8FBCBB;"> name</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> Install Deps</span></span>
<span class="line"><span style="color:#616E88;">        # 只有没有命中缓存才会执行</span></span>
<span class="line"><span style="color:#8FBCBB;">        if</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> steps.node-modules.outputs.cache-hit != &#39;true&#39;</span></span>
<span class="line"><span style="color:#616E88;">        # 严格按照 yarn.lock 安装依赖</span></span>
<span class="line"><span style="color:#8FBCBB;">        run</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> yarn install --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">      # 构建项目</span></span>
<span class="line"><span style="color:#ECEFF4;">      -</span><span style="color:#8FBCBB;"> name</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> Build</span></span>
<span class="line"><span style="color:#616E88;">        # 项目的构建命令</span></span>
<span class="line"><span style="color:#8FBCBB;">        run</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> yarn run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">      # 第四步，部署</span></span>
<span class="line"><span style="color:#ECEFF4;">      -</span><span style="color:#8FBCBB;"> name</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> Deploy</span></span>
<span class="line"><span style="color:#616E88;">        # action 配置详见 https://github.com/JamesIves/github-pages-deploy-action</span></span>
<span class="line"><span style="color:#8FBCBB;">        uses</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="color:#8FBCBB;">        with</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#616E88;">          # 部署到的分支</span></span>
<span class="line"><span style="color:#8FBCBB;">          branch</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> gh-pages</span></span>
<span class="line"><span style="color:#616E88;">          # 需要部署的文件夹</span></span>
<span class="line"><span style="color:#8FBCBB;">          folder</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">  # 部署到服务器</span></span>
<span class="line"><span style="color:#8FBCBB;">  deploy-server</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#8FBCBB;">    runs-on</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> ubuntu-latest</span></span>
<span class="line"><span style="color:#616E88;">    # 确保在部署到 GitHub Pages 之后执行</span></span>
<span class="line"><span style="color:#8FBCBB;">    needs</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> deploy-gh-pages</span></span>
<span class="line"><span style="color:#8FBCBB;">    steps</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#616E88;">      # 检出网站代码</span></span>
<span class="line"><span style="color:#ECEFF4;">      -</span><span style="color:#8FBCBB;"> name</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> Checkout</span></span>
<span class="line"><span style="color:#8FBCBB;">        uses</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> actions/checkout@v4</span></span>
<span class="line"><span style="color:#8FBCBB;">        with</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#616E88;">          # 检出 gh-pages 分支</span></span>
<span class="line"><span style="color:#8FBCBB;">          ref</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> gh-pages</span></span>
<span class="line"><span style="color:#616E88;">          # 获取全部的历史提交</span></span>
<span class="line"><span style="color:#8FBCBB;">          fetch-depth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">      # 配置环境</span></span>
<span class="line"><span style="color:#ECEFF4;">      -</span><span style="color:#8FBCBB;"> name</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> Configuration environment</span></span>
<span class="line"><span style="color:#616E88;">        # 写入私钥、配置 Git 用户名，写入服务器地址</span></span>
<span class="line"><span style="color:#616E88;">        # 您需要自行将服务器的私钥写入 secrets 的 SSH_PRIVATE_KEY</span></span>
<span class="line"><span style="color:#8FBCBB;">        run</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> |</span></span>
<span class="line"><span style="color:#A3BE8C;">          mkdir -p ~/.ssh/</span></span>
<span class="line"><span style="color:#A3BE8C;">          echo &quot;\${{ secrets.SSH_PRIVATE_KEY }}&quot; &gt; ~/.ssh/id_rsa</span></span>
<span class="line"><span style="color:#A3BE8C;">          chmod 600 ~/.ssh/id_rsa</span></span>
<span class="line"><span style="color:#A3BE8C;">          ssh-keyscan &lt;your domain&gt; &gt;&gt; ~/.ssh/known_hosts</span></span>
<span class="line"><span style="color:#A3BE8C;">          git config --global user.name &#39;Your Name&#39;</span></span>
<span class="line"><span style="color:#A3BE8C;">          git config --global user.email &#39;You email&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">      # 部署到服务器</span></span>
<span class="line"><span style="color:#ECEFF4;">      -</span><span style="color:#8FBCBB;"> name</span><span style="color:#ECEFF4;">:</span><span style="color:#A3BE8C;"> Deploy</span></span>
<span class="line"><span style="color:#616E88;">        # 使用 Git 将网站代码强制推送到远程的网站目录</span></span>
<span class="line"><span style="color:#616E88;">        # 并使用 SSH 连接服务器进入网站目录手动切换到最新提交</span></span>
<span class="line"><span style="color:#8FBCBB;">        run</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> |</span></span>
<span class="line"><span style="color:#A3BE8C;">          git push -f git@&lt;your domain&gt;:&lt;deploy dir&gt; gh-pages</span></span>
<span class="line"><span style="color:#A3BE8C;">          ssh git@&lt;your domain&gt; &quot;cd &lt;deploy dir&gt; &amp;&amp; git reset --hard HEAD&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26))])}const y=n(o,[["render",c],["__file","deploy.html.vue"]]),v=JSON.parse('{"path":"/code/github/deploy.html","title":"自动部署","lang":"zh-CN","frontmatter":{"date":"2021-01-18T00:00:00.000Z","title":"自动部署","icon":"network","category":"GitHub","tag":["Git","deploy"],"order":8,"description":"本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/github/deploy.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"自动部署"}],["meta",{"property":"og:description","content":"本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"deploy"}],["meta",{"property":"article:published_time","content":"2021-01-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自动部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"服务器","slug":"服务器","link":"#服务器","children":[{"level":3,"title":"添加账户","slug":"添加账户","link":"#添加账户","children":[]},{"level":3,"title":"添加权限","slug":"添加权限","link":"#添加权限","children":[]},{"level":3,"title":"创建仓库","slug":"创建仓库","link":"#创建仓库","children":[]}]},{"level":2,"title":"GitHub Actions","slug":"github-actions","link":"#github-actions","children":[]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":4.21,"words":1263},"filePathRelative":"code/github/deploy.md","localizedDate":"2021年1月18日","excerpt":"<p>本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。</p>\\n","autoDesc":true}');export{y as comp,v as data};
