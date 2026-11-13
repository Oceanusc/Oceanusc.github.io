const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.no-plugins-9Q0DF8Hr.js","assets/app-58ZVI_t0.js","assets/runtime-core.esm-bundler-BpINN5is.js","assets/client-D35DHML1.js","assets/preload-helper-Czpn1I53.js","assets/dist-9mZ0N9zs.js","assets/dist-DcvPq6HY.js"])))=>i.map(i=>d[i]);
import{C as e,E as t,G as n,R as r,S as i,c as a,f as o,h as s,l as c,o as l,s as u,vt as d}from"./runtime-core.esm-bundler-BpINN5is.js";import{t as f}from"./preload-helper-Czpn1I53.js";import{_ as p,g as m}from"./app-58ZVI_t0.js";import{t as h}from"./plugin-vue_export-helper-BDNMzG2s.js";import{t as g}from"./browser-DTBzDqLd.js";var _=[`aria-busy`],v={class:`lab-toolbar`},y=[`disabled`],b=[`disabled`],x={class:`lab-field`},S=[`disabled`],C={class:`lab-toolbar`},w=[`disabled`],T=[`disabled`],E=[`disabled`],D=[`disabled`],O=[`disabled`],k=[`disabled`],A=[`disabled`],j={key:0,class:`lab-error`,role:`alert`},M={key:1,class:`lab-help`},N={class:`lab-preview`},P={class:`lab-status`,role:`status`},F=h(s({__name:`MindmapLab`,setup(s){let h={git:`# Git 知识地图
## 日常提交
- git status：查看状态
- git add：暂存改动
- git commit：记录版本
## 分支协作
- git switch：切换分支
- git merge：合并分支
- git rebase：整理提交
## 远程同步
- git fetch：获取更新
- git pull：拉取并整合
- git push：推送提交
## 找回改动
- git log：浏览历史
- git reflog：查找操作记录
- git restore：恢复文件`,linux:`# Linux 运维路线
## 文件与目录
- pwd / ls / cd
- cp / mv / mkdir
- find / rg
## 权限与用户
- chmod / chown
- sudo
## 服务与进程
- ps / top
- systemctl
- journalctl
## 网络排查
- ip / ss
- ping / curl
## 部署
- SSH
- Nginx
- Docker`,blog:`# 博客内容地图
## 代码笔记
- JavaScript 与 TypeScript
- Vue 与前端开发
- Linux 与后端运维
## 工具分享
- 开发工具
- 运维工具
- AI 本地部署
## 软件教程
- VS Code
- Git
## 互动实验室
- Markdown 导图
- CSS 图案
- 图片取色`},F=n(`git`),I=n(h.git),L=n(``),R=n(),z=n(!1),B=n(!1),V=n(``),H=n(``),U=l(()=>B.value&&I.value.trim()!==L.value),W,G,K,q=0,J=!1;function Y(){W?.setOptions({duration:K?.matches?0:180})}async function X(){if(z.value||J)return;V.value=``;let e=I.value.trim();if(!e){V.value=`请先输入 Markdown 标题或列表，也可以载入一个示例。`;return}if(e.length>12e3||e.split(`
`).length>250){V.value=`请将内容控制在 12,000 字符、250 行以内，较长笔记建议拆分为多个主题。`;return}z.value=!0,H.value=`正在生成导图…`;try{let[{Transformer:t},{Markmap:n},{default:r}]=await Promise.all([f(()=>import(`./index.no-plugins-9Q0DF8Hr.js`),__vite__mapDeps([0,1,2,3,4,5])),f(()=>import(`./dist-DcvPq6HY.js`),__vite__mapDeps([6,5])),f(()=>import(`./purify.es-DHPJxOTj.js`),[])]);if(J||!R.value)return;let i=new t;i.md.set({html:!1}),i.md.disable(`image`);let{root:a}=i.transform(e),o=[a],s=0;for(;o.length;){let e=o.pop();if(++s>300)throw Error(`too-many-nodes`);e.content=r.sanitize(e.content,{ALLOWED_TAGS:[`p`,`br`,`strong`,`em`,`code`,`del`,`s`,`sub`,`sup`,`mark`],ALLOWED_ATTR:[]}),o.push(...e.children??[])}W||=n.create(R.value,{duration:K?.matches?0:180,maxWidth:240,initialExpandLevel:2,scrollForPan:!0});let c=W;if(await c.setData(a),J||(await c.fit(),J))return;B.value=!0,L.value=e,H.value=`已生成 ${s} 个节点。`}catch(e){if(J)return;V.value=e instanceof Error&&e.message===`too-many-nodes`?`节点过多，请拆分为 300 个节点以内的导图。`:`导图生成失败，请检查内容或网络连接后重试。`,H.value=``}finally{J||(z.value=!1)}}async function Z(e){if(!(!W||z.value))try{e===`fit`?await W.fit():await W.rescale(e===`in`?1.25:.8)}catch{J||(V.value=`视图调整失败，请重新生成导图。`)}}function Q(){I.value=h[F.value],X()}async function $(e){if(!W?.state.data||z.value)return;z.value=!0;let t=W;try{let n=t.state.data,r=[n];for(;r.length;){let t=r.pop();t.payload={...t.payload,fold:e||t===n?0:1},r.push(...t.children??[])}if(await t.renderData(),J)return;await t.fit(),J||(H.value=e?`已展开全部节点。`:`已收起到一级分支。`)}catch{J||(V.value=`展开状态调整失败，请重新生成导图。`)}finally{J||(z.value=!1)}}function ee(){if(!(!R.value||!W))try{let e=R.value.cloneNode(!0),t=e.querySelector(`g`),{x1:n,x2:r,y1:i,y2:a}=W.state.rect,o=Math.ceil(r-n+64),s=Math.ceil(a-i+64);e.setAttribute(`xmlns`,`http://www.w3.org/2000/svg`),e.setAttribute(`width`,String(o)),e.setAttribute(`height`,String(s)),e.setAttribute(`viewBox`,`${n-32} ${i-32} ${o} ${s}`),e.setAttribute(`style`,`background:white;--markmap-text-color:#293342;--markmap-code-bg:#f0f0f0;--markmap-code-color:#333;--markmap-circle-open-bg:white`),t?.removeAttribute(`transform`),g(new XMLSerializer().serializeToString(e),`mindmap.svg`,`image/svg+xml;charset=utf-8`),H.value=`已导出当前展开的节点，可在浏览器中打开 SVG。`}catch{V.value=`导出失败，请重新生成导图后再试。`}}return e(()=>{K=window.matchMedia(`(prefers-reduced-motion: reduce)`),K.addEventListener(`change`,Y),G=new ResizeObserver(()=>{cancelAnimationFrame(q),q=requestAnimationFrame(()=>{B.value&&Z(`fit`)})}),R.value&&G.observe(R.value),X()}),i(()=>{J=!0,G?.disconnect(),cancelAnimationFrame(q),K?.removeEventListener(`change`,Y),W?.destroy()}),(e,n)=>(t(),c(`section`,{class:`lab lab-panel`,"aria-label":`Markdown 导图工具`,"aria-busy":z.value},[u(`div`,v,[u(`label`,null,[n[8]||=o(`示例 `,-1),r(u(`select`,{"onUpdate:modelValue":n[0]||=e=>F.value=e,disabled:z.value},[...n[7]||=[u(`option`,{value:`git`},`Git 知识地图`,-1),u(`option`,{value:`linux`},`Linux 运维路线`,-1),u(`option`,{value:`blog`},`博客内容地图`,-1)]],8,y),[[m,F.value]])]),u(`button`,{type:`button`,disabled:z.value,onClick:Q},`载入示例`,8,b)]),u(`label`,x,[n[9]||=o(`Markdown 大纲 `,-1),r(u(`textarea`,{"onUpdate:modelValue":n[1]||=e=>I.value=e,disabled:z.value,maxlength:`12000`,spellcheck:`false`,"aria-describedby":`mindmap-help`},null,8,S),[[p,I.value]])]),n[10]||=u(`p`,{id:`mindmap-help`,class:`lab-help`},`使用 # 标题、## 子标题和 - 列表组织知识。最多 12,000 字符、250 行；修改后点击生成。`,-1),u(`div`,C,[u(`button`,{type:`button`,class:`lab-primary`,disabled:z.value,onClick:X},d(z.value?`生成中…`:`生成导图`),9,w),u(`button`,{type:`button`,disabled:!B.value||z.value,onClick:n[2]||=e=>Z(`fit`)},`适应画布`,8,T),u(`button`,{type:`button`,disabled:!B.value||z.value,onClick:n[3]||=e=>Z(`in`)},`放大`,8,E),u(`button`,{type:`button`,disabled:!B.value||z.value,onClick:n[4]||=e=>Z(`out`)},`缩小`,8,D),u(`button`,{type:`button`,disabled:!B.value||z.value,onClick:n[5]||=e=>$(!0)},`全部展开`,8,O),u(`button`,{type:`button`,disabled:!B.value||z.value,onClick:n[6]||=e=>$(!1)},`收起分支`,8,k),u(`button`,{type:`button`,disabled:!B.value||z.value,onClick:ee},`下载 SVG`,8,A)]),V.value?(t(),c(`p`,j,d(V.value),1)):a(`v-if`,!0),U.value?(t(),c(`p`,M,`文字已修改，画布仍显示上次生成的内容。`)):a(`v-if`,!0),u(`div`,N,[(t(),c(`svg`,{ref_key:`svg`,ref:R,class:`lab-map`,role:`img`,"aria-label":`Markdown 思维导图，文字内容见上方大纲`},null,512))]),u(`p`,P,d(H.value),1),n[11]||=u(`p`,{class:`lab-help`},`点击分支圆点可折叠或展开；可拖动画布，也可使用上方按钮缩放。SVG 导出保留当前展开状态。`,-1)],8,_))}}),[[`__scopeId`,`data-v-328114da`]]);export{F as default};