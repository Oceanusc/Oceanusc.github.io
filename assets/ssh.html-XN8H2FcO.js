import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,b as l}from"./app-CAUHKgZ0.js";const o={};function n(r,e){return t(),a("div",null,e[0]||(e[0]=[l('<h2 id="使用密码登录" tabindex="-1"><a class="header-anchor" href="#使用密码登录"><span>使用密码登录</span></a></h2><ol><li><p>执行以下命令，连接 Linux 云服务器。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">ssh</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#A3BE8C;">usernam</span><span style="color:#D8DEE9FF;">e</span><span style="color:#81A1C1;">&gt;</span><span style="color:#A3BE8C;">@</span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">hostname</span><span style="color:#A3BE8C;"> or</span><span style="color:#A3BE8C;"> IP</span><span style="color:#A3BE8C;"> addres</span><span style="color:#D8DEE9FF;">s</span><span style="color:#81A1C1;">&gt;</span></span></code></pre></div><ul><li>username 即为前提条件中获得的默认帐号。</li><li>hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。</li></ul></li><li><p>输入已获取的密码，按 Enter，即可完成登录。</p></li></ol><h2 id="使用密钥登录" tabindex="-1"><a class="header-anchor" href="#使用密钥登录"><span>使用密钥登录</span></a></h2><ol><li><p>执行以下命令，赋予私钥文件仅本人可读权限。</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">chmod</span><span style="color:#B48EAD;"> 400</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#A3BE8C;">下载的与云服务器关联的私钥的绝对路</span><span style="color:#D8DEE9FF;">径</span><span style="color:#81A1C1;">&gt;</span></span></code></pre></div></li><li><p>执行以下命令，进行远程登录。</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">ssh</span><span style="color:#A3BE8C;"> -i</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#A3BE8C;">下载的与云服务器关联的私钥的绝对路</span><span style="color:#D8DEE9FF;">径</span><span style="color:#81A1C1;">&gt;</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#A3BE8C;">usernam</span><span style="color:#D8DEE9FF;">e</span><span style="color:#81A1C1;">&gt;</span><span style="color:#A3BE8C;">@</span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">hostname</span><span style="color:#A3BE8C;"> or</span><span style="color:#A3BE8C;"> IP</span><span style="color:#A3BE8C;"> addres</span><span style="color:#D8DEE9FF;">s</span><span style="color:#81A1C1;">&gt;</span></span></code></pre></div><ul><li>username 即为前提条件中获得的默认帐号。</li><li>hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。</li></ul><p>例如，执行 <code>ssh -i &quot;id_rsa&quot; ubuntu@123.206.113.227</code> 命令，远程登录 Linux 云服务器。</p></li></ol><h2 id="断开链接" tabindex="-1"><a class="header-anchor" href="#断开链接"><span>断开链接</span></a></h2><p><code>Ctrl + D</code> 或 输入 <code>logout</code>.</p>',6)]))}const i=s(o,[["render",n],["__file","ssh.html.vue"]]),d=JSON.parse('{"path":"/linux/ssh.html","title":"ssh","lang":"zh-CN","frontmatter":{"title":"ssh","icon":"mount","date":"2023-11-23T00:00:00.000Z","category":"基础","description":"使用密码登录 执行以下命令，连接 Linux 云服务器。 username 即为前提条件中获得的默认帐号。 hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。 输入已获取的密码，按 Enter，即可完成登录。 使用密钥登录 执行以下命令，赋予私钥文件仅本人可读权限。 执行以下命令，进行远程登录。 usern...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/ssh.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"ssh"}],["meta",{"property":"og:description","content":"使用密码登录 执行以下命令，连接 Linux 云服务器。 username 即为前提条件中获得的默认帐号。 hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。 输入已获取的密码，按 Enter，即可完成登录。 使用密钥登录 执行以下命令，赋予私钥文件仅本人可读权限。 执行以下命令，进行远程登录。 usern..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:published_time","content":"2023-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ssh\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"使用密码登录","slug":"使用密码登录","link":"#使用密码登录","children":[]},{"level":2,"title":"使用密钥登录","slug":"使用密钥登录","link":"#使用密钥登录","children":[]},{"level":2,"title":"断开链接","slug":"断开链接","link":"#断开链接","children":[]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":0.8,"words":241},"filePathRelative":"linux/ssh.md","localizedDate":"2023年11月23日","excerpt":"","autoDesc":true}');export{i as comp,d as data};
