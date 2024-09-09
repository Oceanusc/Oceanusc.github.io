import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as e,d as n,f as o,e as t,b as p}from"./app-CAUHKgZ0.js";const r="/assets/terminal-global-settings-CJoBR5Hw.png",c="/assets/terminal-profiles-CKshLlMN.png",i="/assets/terminal-actions-CHM9jlV0.png",F={};function E(d,s){return l(),e("div",null,[s[0]||(s[0]=n("p",null,"配置文件代表着您可以在 Windows Terminal 中配置的不同的命令行环境。默认情况下，每个配置文件使用不同的命令行可执行程序，但是您可以根据自己的喜好，创建任意数量的使用同一可执行程序的配置文件。每个配置文件可以有自己的定制项以帮助您区分它们，并可以自由定制。",-1)),s[1]||(s[1]=n("p",null,[o("可以使用快捷键 "),n("code",null,"Ctrl + Shift + *"),o(" 来打开对应的配置文件，可使用 "),n("code",null,"Ctrl + ,"),o(" 打开 settings.json 文件，来进行个性化调整和默认设置更改等设置。")],-1)),t(" more "),s[2]||(s[2]=p('<div class="hint-container tip"><p class="hint-container-title">默认设置</p><p>您可以通过按住 Alt 键并点击下拉菜单中的 Settings 按钮打开 defaults.json。该文件由 Terminal 自动生成，展示了 Windows Terminal 所有默认设置及其值。更改此文件是无效的。</p></div><p>settings.json 文件分为四个主要部分:</p><ol><li>全局设置对象，它位于 JSON 文件的顶部。全局设置将影响整个应用程序。</li><li>配置文件设置，由 <code>profiles</code> 对象控制。负责控制每个配置文件。</li><li>配色方案，由 <code>schemes</code> 数组控制。</li><li>自定义操作，由 <code>actions</code> 数组控制</li></ol><h2 id="全局设置" tabindex="-1"><a class="header-anchor" href="#全局设置"><span>全局设置</span></a></h2><p>全局设置会将影响整个终端窗口。</p><p>关于详细的配置项，请见 <a href="https://aka.ms/terminal-global-settings" target="_blank" rel="noopener noreferrer">全局设置</a>。</p><figure><img src="'+r+'" alt="全局设置" tabindex="0" loading="lazy"><figcaption>全局设置</figcaption></figure><h3 id="默认配置文件" tabindex="-1"><a class="header-anchor" href="#默认配置文件"><span>默认配置文件</span></a></h3><p>默认配置文件为 Windows PowerShell。您可以通过在 settings.json 文件中将 <code>defaultProfile</code> 设置为首选配置文件的名称或 GUID 来更改默认配置文件。</p><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">defaultProfile</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">PowerShell</span><span style="color:#ECEFF4;">&quot;</span></span></code></pre></div><h2 id="配置文件设置" tabindex="-1"><a class="header-anchor" href="#配置文件设置"><span>配置文件设置</span></a></h2><p><code>profiles</code> 对象描述配置文件。它分为两个部分: <code>defaults</code> 和 <code>list</code>。</p><ul><li><p><code>defaults</code> 对象中的配置文件会应用于列表中的所有项目。</p></li><li><p><code>list</code> 包含代表配置文件的每个配置文件对象，这些是出现在 Windows Terminal 下拉菜单中的项目。应用于 <code>list</code> 中各个配置文件的设置会覆盖 <code>defaults</code> 部分中应用的设置。</p></li></ul><p>关于详细的配置项，请见 <a href="https://aka.ms/terminal-profile-settings" target="_blank" rel="noopener noreferrer">配置文件设置</a>。</p><figure><img src="'+c+`" alt="配置文件设置" tabindex="0" loading="lazy"><figcaption>配置文件设置</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><p>您可以在 <code>defaults</code> 中设置 <code>fontFace</code> 控制终端的字体。</p></li><li><p>您可以在 Powershell 配置文件中添加 <code>commandline</code> 为 <code>&lt;PowerShell 地址&gt; -nologo</code> 来去除 powershell 启动时的 logo 显示。(默认地址为: <code>C:/Program Files/PowerShell/7/pwsh.exe</code>)</p></li><li><p>您可以通过设置 <code>backgroundImage</code> 自定义背景图片，通过 <code>backgroundImageOpacity</code> 自定义背景透明度，通过 <code>useAcrylic</code> 开启或关闭毛玻璃效果。</p></li></ul></div><h3 id="新增配置文件" tabindex="-1"><a class="header-anchor" href="#新增配置文件"><span>新增配置文件</span></a></h3><p>Windows Terminal 会自动为 PowerShell 和 WSL 分发版创建配置文件。</p><p>您也可以手动添加新的配置文件: 只需生成一个新的 <code>guid</code>，提供一个 <code>name</code>，并为 <code>commandline</code> 属性提供可执行程序。</p><div class="hint-container info"><p class="hint-container-title">WSL</p><p>您可以通过 <a href="https://www.microsoft.com/zh-cn/p/ubuntu-2004-lts/9n6svws3rx71#activetab=pivot:overviewtab" target="_blank" rel="noopener noreferrer">Microsoft 应用商店</a> 安装 Ubuntu。之后便可以在 terminal 上运行 Ubuntu WSL 环境。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>您不能从动态生成的配置文件中复制 <code>source</code> 属性，否则 Windows Terminal 会忽略此配置文件。您必须使用 <code>commandline</code> 替换 <code>source</code> 并提供可执行程序，以便复制一个动态生成的配置文件。</p></div><h2 id="配色方案" tabindex="-1"><a class="header-anchor" href="#配色方案"><span>配色方案</span></a></h2><p>您可以在 <code>schemes</code> 数组中配置自定义配色方案。它们是使用以下格式写入的:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Campbell</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">cursorColor</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#FFFFFF</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">selectionBackground</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#FFFFFF</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">background</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#0C0C0C</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">foreground</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#CCCCCC</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">black</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#0C0C0C</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">blue</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#0037DA</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">cyan</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#3A96DD</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">green</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#13A10E</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">purple</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#881798</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">red</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#C50F1F</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">white</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#CCCCCC</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">yellow</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#C19C00</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">brightBlack</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#767676</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">brightBlue</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#3B78FF</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">brightCyan</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#61D6D6</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">brightGreen</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#16C60C</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">brightPurple</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#B4009E</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">brightRed</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#E74856</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">brightWhite</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#F2F2F2</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">brightYellow</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">#F9F1A5</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于详细的配置项，请见 <a href="https://aka.ms/terminal-color-schemes" target="_blank" rel="noopener noreferrer">配置文件设置</a>。</p><h3 id="自带的配色方案" tabindex="-1"><a class="header-anchor" href="#自带的配色方案"><span>自带的配色方案</span></a></h3><p>Windows Terminal 在 defaults.json 文件中包含了一些配色方案。如果要在一个命令行配置文件中设置配色方案，请添加 <code>colorScheme</code> 属性，并将配色方案的 <code>name</code> 作为值。</p><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">colorScheme</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">COLOR SCHEME NAME</span><span style="color:#ECEFF4;">&quot;</span></span></code></pre></div><p>查看各配色方案效果，请见 <a href="https://aka.ms/terminal-color-schemes#included-color-schemes" target="_blank" rel="noopener noreferrer">包含的配色方案</a>。</p><h3 id="自定义配色方案" tabindex="-1"><a class="header-anchor" href="#自定义配色方案"><span>自定义配色方案</span></a></h3><p>下面提供几个主题色工具:</p><ul><li><a href="https://terminal.sexy/" target="_blank" rel="noopener noreferrer">terminal.sexy</a></li><li><a href="https://windowsterminalthemes.dev/" target="_blank" rel="noopener noreferrer">Windows Terminal Themes</a></li><li><a href="https://terminalsplash.com/" target="_blank" rel="noopener noreferrer">TerminalSplash</a>，</li></ul><h2 id="自定义操作" tabindex="-1"><a class="header-anchor" href="#自定义操作"><span>自定义操作</span></a></h2><p>您可以在 Windows 终端中创建自定义操作，以控制与终端的交互方式。这些操作将自动添加到命令面板。</p><p>关于详细的配置项，请见 <a href="https://aka.ms/terminal-keybindings" target="_blank" rel="noopener noreferrer">自定义操作设置</a>。</p><figure><img src="`+i+`" alt="自定义操作" tabindex="0" loading="lazy"><figcaption>自定义操作</figcaption></figure><p>自定义操作可以设置为以下格式:</p><ul><li><p>无参数命令</p><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#8FBCBB;">command</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">命令名称</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#8FBCBB;">keys</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">快捷键</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;"> }</span></span></code></pre></div><details class="hint-container details"><summary>例子</summary><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#8FBCBB;">command</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">closeWindow</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#8FBCBB;">keys</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">alt+f4</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;"> }</span></span></code></pre></div></details></li><li><p>有参数命令</p><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">command</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#8FBCBB;">action</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">commandName</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#8FBCBB;">argument</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">value</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;"> },</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">keys</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">modifiers+key</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><details class="hint-container details"><summary>例子</summary><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#8FBCBB;">command</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#8FBCBB;">action</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">newTab</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#8FBCBB;">index</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 0</span><span style="color:#ECEFF4;"> },</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#8FBCBB;">keys</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">ctrl+shift+1</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;"> }</span></span></code></pre></div></details></li></ul>`,38))])}const u=a(F,[["render",E],["__file","settings.html.vue"]]),m=JSON.parse('{"path":"/software/tool/terminal/settings.html","title":"自定义设置","lang":"zh-CN","frontmatter":{"title":"自定义设置","icon":"config","date":"2021-01-27T00:00:00.000Z","description":"配置文件代表着您可以在 Windows Terminal 中配置的不同的命令行环境。默认情况下，每个配置文件使用不同的命令行可执行程序，但是您可以根据自己的喜好，创建任意数量的使用同一可执行程序的配置文件。每个配置文件可以有自己的定制项以帮助您区分它们，并可以自由定制。 可以使用快捷键 Ctrl + Shift + * 来打开对应的配置文件，可使用 C...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/software/tool/terminal/settings.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"自定义设置"}],["meta",{"property":"og:description","content":"配置文件代表着您可以在 Windows Terminal 中配置的不同的命令行环境。默认情况下，每个配置文件使用不同的命令行可执行程序，但是您可以根据自己的喜好，创建任意数量的使用同一可执行程序的配置文件。每个配置文件可以有自己的定制项以帮助您区分它们，并可以自由定制。 可以使用快捷键 Ctrl + Shift + * 来打开对应的配置文件，可使用 C..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:published_time","content":"2021-01-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义设置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"全局设置","slug":"全局设置","link":"#全局设置","children":[{"level":3,"title":"默认配置文件","slug":"默认配置文件","link":"#默认配置文件","children":[]}]},{"level":2,"title":"配置文件设置","slug":"配置文件设置","link":"#配置文件设置","children":[{"level":3,"title":"新增配置文件","slug":"新增配置文件","link":"#新增配置文件","children":[]}]},{"level":2,"title":"配色方案","slug":"配色方案","link":"#配色方案","children":[{"level":3,"title":"自带的配色方案","slug":"自带的配色方案","link":"#自带的配色方案","children":[]},{"level":3,"title":"自定义配色方案","slug":"自定义配色方案","link":"#自定义配色方案","children":[]}]},{"level":2,"title":"自定义操作","slug":"自定义操作","link":"#自定义操作","children":[]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":3.86,"words":1158},"filePathRelative":"software/tool/terminal/settings.md","localizedDate":"2021年1月27日","excerpt":"<p>配置文件代表着您可以在 Windows Terminal 中配置的不同的命令行环境。默认情况下，每个配置文件使用不同的命令行可执行程序，但是您可以根据自己的喜好，创建任意数量的使用同一可执行程序的配置文件。每个配置文件可以有自己的定制项以帮助您区分它们，并可以自由定制。</p>\\n<p>可以使用快捷键 <code>Ctrl + Shift + *</code> 来打开对应的配置文件，可使用 <code>Ctrl + ,</code> 打开 settings.json 文件，来进行个性化调整和默认设置更改等设置。</p>\\n","autoDesc":true}');export{u as comp,m as data};
