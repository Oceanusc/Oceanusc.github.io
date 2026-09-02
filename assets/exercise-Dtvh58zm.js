import{c as e,i as t,n,r,t as i}from"./app-6WXUe7u0.js";import{t as a}from"./plugin-vue_export-helper-BDNMzG2s.js";var o=JSON.parse(`{"path":"/code/language/js/guide/exercise.html","title":"实战","lang":"zh-CN","frontmatter":{"title":"实战","icon":"exercise","date":"2023-09-18T00:00:00.000Z","category":"JavaScript","tag":["快速上手"],"description":"在初步进入 JavaScript 的世界后，实战是十分重要的。本章是一些经典的案例，可以进行总结与测试。","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"实战\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-09T07:11:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"oceanusc\\",\\"url\\":\\"https://daiding.site\\"}]}"],["meta",{"property":"og:url","content":"https://daiding.site/code/language/js/guide/exercise.html"}],["meta",{"property":"og:site_name","content":"oceanusc"}],["meta",{"property":"og:title","content":"实战"}],["meta",{"property":"og:description","content":"在初步进入 JavaScript 的世界后，实战是十分重要的。本章是一些经典的案例，可以进行总结与测试。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-09T07:11:46.000Z"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2023-09-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-09T07:11:46.000Z"}]]},"git":{"createdTime":1725772185000,"updatedTime":1725865906000,"contributors":[{"name":"Oceanusc","username":"Oceanusc","email":"che4ac@163.com","commits":2,"url":"https://github.com/Oceanusc"}]},"readingTime":{"minutes":9.1,"words":2731},"filePathRelative":"code/language/js/guide/exercise.md","excerpt":"<p>在初步进入 JavaScript 的世界后，实战是十分重要的。本章是一些经典的案例，可以进行总结与测试。</p>\\n","autoDesc":true}`),s={name:`exercise.md`};function c(a,o,s,c,l,u){return e(),r(`div`,null,[o[0]||=i(`p`,null,`在初步进入 JavaScript 的世界后，实战是十分重要的。本章是一些经典的案例，可以进行总结与测试。`,-1),n(` more `),o[1]||=t(`<h2 id="成年判断" tabindex="-1"><a class="header-anchor" href="#成年判断"><span>成年判断</span></a></h2><p>请给出一个函数 <code>isAdult</code>。该函数接受一个数字参数，值为年龄，返回一个布尔值，为对应年龄是否成年。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-js"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isAdult</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// false</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isAdult</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// true</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isAdult</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案解析<a href="%E7%AD%94%E6%A1%88">^成年判断</a>。</p><pre><code>这道题的逻辑是: 如果 \`age &gt;=18\` 返回 \`true\`，反之返回 \`false\`。

逻辑图如下:

\`\`\`flow
st=&gt;start: 开始执行函数
getage=&gt;inputoutput: 获得 age
adult=&gt;condition: age &gt; 18?
true=&gt;inputoutput: return true
false=&gt;inputoutput: return false
end=&gt;end: 结束

st-&gt;getage-&gt;adult
adult(yes)-&gt;true-&gt;end
adult(no)-&gt;false-&gt;end

\`\`\`

最简单的想法肯定是使用 if 条件判断，把上面的流程图写下来:

\`\`\`js
const isAdult = function (age) {
  if (age &gt;= 18) return true;
  else return false;
};
\`\`\`

果然，它正常工作了:grin:。开心的您准备去交差。

突然，您想起了文档上有这么一句话:flushed::


:::center

JavaScript 引擎遇到 \`return\` 语句，就直接返回 \`return\` 后面的那个表达式的值，

后面即使还有语句，也不会得到执行。

:::

:::right

[文档地址](../function/declare.md#return)

:::

于是乎，您去掉了 \`else\`:open_mouth:

\`\`\`js
const isAdult = function (age) {
  if (age &gt;= 18) return true;

  return false;
};
\`\`\`

接着，懒惰的您想起了箭头函数

\`\`\`js
const functionName = (arg1, arg2, ...) =&gt; value;
\`\`\`


:::right

的写法。决定投个懒:smirk:

:::

\`\`\`js
const isAdult = (age) =&gt; {
  if (age &gt;= 18) return true;

  return false;
};
\`\`\`

成了! 现在函数更简洁了，但是这还不够。

您又想起了条件表达式就是布尔值， 也就是说 \`age &gt;= 18\` 本身就是一个布尔值。:wink:

现在当它是 \`true\` 就 \`return true\`，是 \`false\` 就 \`return false\` 看起来就变成了一个愚蠢的主意:expressionless:，于是乎您又改写了一下:

\`\`\`js
const isAdult = (age) =&gt; {
  return age &gt;= 18;
};
\`\`\`

这不就变成了只有一条语句的箭头函数了么? 我们当然可以直接返回它!:laughing:

\`\`\`js
const isAdult = (age) =&gt; age &gt;= 18;
\`\`\`

最后，是时候去掉那个愚蠢的括号了!

\`\`\`js
const isAdult = age =&gt; age &gt;= 18;
\`\`\`

恭喜您，您已经得到了最简形式! :satisfied:
</code></pre><h2 id="买书" tabindex="-1"><a class="header-anchor" href="#买书"><span>买书</span></a></h2><p>请给出一个函数 <code>bookPrice</code>。该函数接受两个数字参数，第一个是书的价格，第二个是书的单价。作为一个精明的老板，您决定:</p><ul><li>买 10 本以下，不打折</li><li>满 10 本，打九折</li><li>满 20 本，打八折</li><li><s>不给钱就打骨折😒</s></li></ul><p>该函数返回您要让他付的钱。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-js"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bookPrice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 100</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bookPrice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 129.6</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bookPrice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 144</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案解析<a href="%E7%AD%94%E6%A1%88">^买书</a>。</p><pre><code>判断顾客买书的个数。

如果 \`ammount &lt; 10\` 不打折，\`10 &lt;= ammount &lt; 20\` 打九折，\`ammount &gt; 20\` 打八折

同时 $\\text{顾客最终付款} = \\text{书的个数} × \\text{书的价格} × \\text{打折力度}$

很简单，只是需要用多次 if 判断，我们把它逻辑图描述如下:

\`\`\`flow
st=&gt;start: 开始执行函数
percent=&gt;operation: 声明打折力度 percent
result=&gt;operation: 声明最终价格 result
get=&gt;inputoutput: 获得 price, ammount
func1=&gt;condition: ammount &lt; 10?
p1=&gt;operation: percent = 1
func2=&gt;condition: 10 &lt;= ammount &lt; 20?
p0.9=&gt;operation: percent = 0.9
func3=&gt;condition: ammount &gt; 20?
p0.8=&gt;operation: percent = 0.8
cal=&gt;operation: result = price × ammount × percent
return=&gt;inputoutput: 返回 result
end=&gt;end: 结束

st-&gt;percent-&gt;get-&gt;func1
func1(yes,right)-&gt;p1-&gt;cal
func1(no)-&gt;func2
func2(yes,right)-&gt;p0.9-&gt;cal
func2(no)-&gt;func3
func3(yes,right)-&gt;p0.8-&gt;cal
cal-&gt;return-&gt;end
\`\`\`

照着写，您得到了:

\`\`\`js
const bookPrice = (price, ammount) =&gt; {
  let percent;
  let result;

  if (ammount &lt; 10) percent = 1;
  else if (10 &lt;= ammount &amp;&amp; ammount &lt;= 20) percent = 0.9;
  else if (ammount &gt;= 20) percent = 0.8;

  result = price * ammount * percent;

  return result;
};
\`\`\`

与此同时，您发现您的 if 逻辑判断有重复，当第 6 行执行的时候， \`ammount\` 已经不可能小于 10 了，否则它会执行第 5 行。最后一个判断也是没有必要的

您还发现，如果直接返回 \`price * ammount * percent\` 就无需声明 \`result\`。

您想了想，重新画了流程图:

\`\`\`flow
st=&gt;start: 开始执行函数
percent=&gt;operation: 声明打折力度 percent
get=&gt;inputoutput: 获得 price, ammount
func1=&gt;condition: ammount &lt; 10?
p1=&gt;operation: percent = 1
func2=&gt;condition: ammount &lt; 20?
p0.9=&gt;operation: percent = 0.9
p0.8=&gt;operation: percent = 0.8
return=&gt;inputoutput: 返回 price × ammount × percent
end=&gt;end: 结束

st-&gt;percent-&gt;get-&gt;func1
func1(yes,right)-&gt;p1-&gt;return
func1(no)-&gt;func2
func2(yes,right)-&gt;p0.9-&gt;return
func2(no)-&gt;p0.8-&gt;return
return-&gt;end
\`\`\`

对应的函数为:

\`\`\`js
const bookPrice = (price, ammount) =&gt; {
  let percent;

  if (ammount &lt; 10) percent = 1;
  else if (ammount &lt;= 20) percent = 0.9;
  else percent = 0.8;

  return price * ammount * percent;
};
\`\`\`

接着您突发奇想，突然不想声明 \`percent\` 了，您又改了流程图:

\`\`\`flow
st=&gt;start: 开始执行函数
get=&gt;inputoutput: 获得 price, ammount
func1=&gt;condition: ammount &lt; 10?
func2=&gt;condition: ammount &lt; 20?
return1=&gt;inputoutput: price × ammount × 1
return2=&gt;inputoutput: price × ammount × 0.9
return3=&gt;inputoutput: price × ammount × 0.8
end=&gt;end: 结束

st-&gt;get-&gt;func1
func1(yes,right)-&gt;return1-&gt;end
func1(no)-&gt;func2
func2(yes,right)-&gt;return2-&gt;end
func2(no)-&gt;return3-&gt;end
\`\`\`

您得到了:

\`\`\`js
const bookPrice = (price, ammount) =&gt; {
  if (ammount &lt; 10) return price * ammount;
  else if (ammount &lt;= 20) return price * ammount * 0.9;

  return price * ammount * 0.8;
};
\`\`\`

您突然响起了 oceanusc 说过的单行代码挑战，结合[三元运算符](./condition.md#三元运算符)，您又一次压缩了代码:

\`\`\`js
const bookPrice = (price, ammount) =&gt;
  ammount &lt; 10
    ? price * ammount
    : ammount &lt;= 20
    ? price * ammount * 0.9
    : price * ammount * 0.8;
\`\`\`

结合运算符顺序，您去掉了没用的括号，并将它写在一行:

\`\`\`js
const bookPrice = (price, ammount) =&gt;
  ammount &lt; 10
    ? price * ammount
    : ammount &lt;= 20
    ? price * ammount * 0.9
    : price * ammount * 0.8;
\`\`\`

它太长了，为什么不把公共的 \`price * ammount\` 提取出来呢?

\`\`\`js
const bookPrice = (price, ammount) =&gt;
  price * ammount * (ammount &lt; 10 ? 1 : ammount &lt;= 20 ? 0.9 : 0.8);
\`\`\`

我们也可以用更简洁的参数把它变得更短:

\`\`\`js
const bookPrice = (p, a) =&gt; p * a * (a &lt; 10 ? 1 : a &lt;= 20 ? 0.9 : 0.8);
\`\`\`
</code></pre><h2 id="数组中特定元素出现次数" tabindex="-1"><a class="header-anchor" href="#数组中特定元素出现次数"><span>数组中特定元素出现次数</span></a></h2><p>请给出一个函数 <code>getTimes</code>。该函数有两个参数，第一个参数是一个未知长度的装满数字的数组，第二个参数是一个数字。函数返回这个数字在数组中出现的次数。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-js"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getTimes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">([</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getTimes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">([</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getTimes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">([</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案解析<a href="%E7%AD%94%E6%A1%88">^数组中特定元素出现次数答案</a>。</p><pre><code>我们最简单的想法就是将想要统计 element 与数组的每一个 x 进行比较，如果匹配默默的记一个数，当全部比较完成后返回这个数。

用流程图就是:

\`\`\`flow
st=&gt;start: 开始执行函数
get=&gt;inputoutput: 获得 arr, element
letcount=&gt;operation: 声明出现次数 count = 0
getfirst=&gt;operation: 循环数组，得到第一个元素 x
equal=&gt;condition: element === x?
addcount=&gt;operation: count = count + 1
equal=&gt;condition: element === x?
islast=&gt;condition: x 是数组的最后一个元素么?
movex=&gt;operation: 让 x 成为下一个元素
return=&gt;inputoutput: 返回 count
end=&gt;end: 结束

st-&gt;get-&gt;letcount-&gt;getfirst-&gt;equal
equal(yes)-&gt;addcount-&gt;islast
equal(no)-&gt;islast
islast(yes)-&gt;return-&gt;end
islast(no)-&gt;movex(top)-&gt;equal
\`\`\`

接下来，我们就要细化了。我们希望循环数组，从第一个元素 \`arr[0]\` 到 最后一个元素。

回忆一下，如果数组有 $x$ 个元素，那么数组的索引值是 $0$ 到 $x - 1$。所以最后一个元素是 \`arr[arr.length - 1]\`。

我们只需要创建一个变量 i，让它从 0 循环到 \`arr.length - 1\` 即可，这样我们就可以在每次循环中通过访问 \`arr[i]\` 来依次访问数组的每一个元素了。

所以新的流程图是:

\`\`\`flow
st=&gt;start: 开始执行函数
get=&gt;inputoutput: 获得 arr, element
letcount=&gt;operation: 声明出现次数 count = 0
leti=&gt;operation: 声明循环变量 i = 0
equal=&gt;condition: element === arr[i]?
addcount=&gt;operation: count = count + 1
equal=&gt;condition: element === x?
islast=&gt;condition: i &lt;= arr.length - 1?
movex=&gt;operation: i = i + 1
return=&gt;inputoutput: 返回 count
end=&gt;end: 结束

st-&gt;get-&gt;letcount-&gt;leti-&gt;equal
equal(yes,left)-&gt;addcount-&gt;islast
equal(no)-&gt;islast
islast(yes)-&gt;return-&gt;end
islast(no)-&gt;movex(top)-&gt;equal
\`\`\`

\`\`\`js
const getTimes = (arr, element) =&gt; {
  let count = 0;
  let i = 0;

  while (i &lt;= arr.length - 1) {
    if (element === arr[i]) count = count + 1;
    i = i + 1;
  }

  return count;
};
\`\`\`

您想起了自加自减运算符，同时您发现由于 i 是整数，\`i &lt;= arr.length - 1\` 和 \`i &lt; arr.length\` 等价，于是您做了一些改动:

\`\`\`js
const getTimes = (arr, element) =&gt; {
  let count = 0;
  let i = 0;

  while (i &lt; arr.length) {
    if (element === arr[i]) count += 1;
    i += 1;
  }

  return count;
};
\`\`\`

经验告诉您，用 for 循环体将循环变量的处理写在一起更好一些:

\`\`\`js
const getTimes = (arr, element) =&gt; {
  let count = 0;

  for (let i = 0; i &lt;= arr.length; i++) if (element === arr[i]) count++;

  return count;
};
\`\`\`

单行挑战:

\`\`\`js
const getTimes = (a, e, c = 0) =&gt;
  a.length === 0 ? c : getTimes(a, e, c + Number(a.pop() === e));
\`\`\`

\`\`\`js
const getTimes = (a, e, c = 0) =&gt;
  a.length === 0 ? c : getTimes(a, e, c + (a.pop() === e ? 1 : 0));
\`\`\`

思路:

\`\`\`flow
start=&gt;start: 开始执行函数
get=&gt;inputoutput: 获得 arr, element, count(默认为 0)
equal=&gt;condition: 数组长度是 0?
return=&gt;inputoutput: 返回 count
operate=&gt;operation: 传入第一个参数为 arr
传入第二个参数为 element
传入第三个参数为 count + Number(a.pop() === e))
(这还会同时把 arr 的最后一个元素删掉)
returnfunc=&gt;subroutine: 将新的参数传入本函数并返回这个函数
end=&gt;end: 结束

start-&gt;get-&gt;equal
equal(yes)-&gt;return-&gt;end
equal(no)-&gt;operate-&gt;returnfunc(left)
\`\`\`

或

\`\`\`js
const getTimes = (a, e, c = 0, p = 0) =&gt;
  p === a.length ? c : getTimes(a, e, c + (a[p] === e ? 1 : 0), p + 1);
\`\`\`

\`\`\`js
const getTimes = (a, e, c = 0, p = 0) =&gt;
  p === a.length ? c : getTimes(a, e, c + Number(a[p] === e), p + 1);
\`\`\`

思路:

\`\`\`flow
start=&gt;start: 开始执行函数
get=&gt;inputoutput: 获得 arr, element, count(默认为 0),position(默认为 0)
equal=&gt;condition: position === arr.length?
return=&gt;inputoutput: 返回 count
operate=&gt;operation: 传入第一个参数为 arr
传入第二个参数为 element
传入第三个参数为 count + (a[p] === e ? 1 : 0)
传入第四个参数为 position + 1
returnfunc=&gt;subroutine: 将新的参数传入本函数并返回这个函数
end=&gt;end: 结束

start-&gt;get-&gt;equal
equal(yes)-&gt;return-&gt;end
equal(no)-&gt;operate-&gt;returnfunc(left)
\`\`\`
</code></pre><h2 id="小九九" tabindex="-1"><a class="header-anchor" href="#小九九"><span>小九九</span></a></h2><p>请给出一个函数 <code>nineNine</code>。该函数通过遍历返回一个小九九，该小九九不重复。</p><blockquote><p>即一一得一，一二得二，二二得四，一三得三，二三得六...</p></blockquote><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-js"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nineNine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// [&#39;1 × 1 = 1&#39;, &#39;1 × 2 = 2&#39;,&#39;2 × 2 = 4&#39;,&#39;1 × 3 = 3&#39;, ...,&#39;9 × 9 = 81&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>答案解析<a href="%E7%AD%94%E6%A1%88">^小九九</a>。</p><pre><code>思路:

这个函数显然要用两层循环，设置第一个变量从 $1$ 到 $9$ 循环，在这个循环之中让第二个变量从 $1$ 到 \`第一个变量\` 循环。然后在每次循环中向数组新增一项对应的字符串。

流程图:

\`\`\`flow
start=&gt;start: 开始执行函数
operate=&gt;operation: let arr = [];
let i = 1;
initj=&gt;operation: let j = 1;
push=&gt;operation: 向数组输入小九九
arr.push(\`\${i} × \${j} = \${i * j}\`);
ji=&gt;condition: j &lt;= i?
plusj=&gt;operation: j++
i9=&gt;condition: i &lt;= 9?
plusi=&gt;operation: i++
return=&gt;inputoutput: 返回 arr
end=&gt;end: 结束

start-&gt;operate-&gt;initj-&gt;push-&gt;ji
ji(yes,right)-&gt;plusj(top)-&gt;push
ji(no)-&gt;i9
i9(yes)-&gt;plusi(left)-&gt;initj
i9(no)-&gt;return-&gt;end
\`\`\`

所以很容易就可以写出:

\`\`\`js
const nineNine = () =&gt; {
  const arr = [];

  for (let i = 1; i &lt;= 9; i++)
    for (let j = 1; j &lt;= i; j++) arr.push(\`\${i} × \${j} = \${i * j}\`);

  return arr;
};
\`\`\`
</code></pre><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展"><span>扩展</span></a></h2><p>请给出一个函数 <code>pickNumber</code>。该函数返回传入字符串中的所有数字。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-js"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pickNumber</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;zhangbowang&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pickNumber</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;z1han2g&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// &#39;12&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pickNumber</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1234&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// &#39;1234&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案解析<a href="%E7%AD%94%E6%A1%88">^扩展</a>。</p><pre><code>这道题真的很简单，就是把[数组中特定元素出现次数](#数组中特定元素出现次数)中判断元素相等的表达式换成判断是否是数字就可以了。所以答案在此省略。
</code></pre>`,28)])}var l=a(s,[[`render`,c]]);export{o as _pageData,l as default};