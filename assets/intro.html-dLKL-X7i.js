import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as o,b as p}from"./app-CAUHKgZ0.js";const e={};function l(t,s){return n(),o("div",null,s[0]||(s[0]=[p(`<p>面向对象编程——Object Oriented Programming，简称 OOP，是一种程序设计思想。OOP 把对象作为程序的基本单元，一个对象包含了数据和操作数据的函数。</p><p>面向过程的程序设计把计算机程序视为一系列的命令集合，即一组函数的顺序执行。为了简化程序设计，面向过程把函数继续切分为子函数，即把大块函数通过切割成小块函数来降低系统的复杂度。</p><p>而面向对象的程序设计把计算机程序视为一组对象的集合，而每个对象都可以接收其他对象发过来的消息，并处理这些消息，计算机程序的执行就是一系列消息在各个对象之间传递。</p><p>在 Python 中，所有数据类型都可以视为对象，当然也可以自定义对象。自定义的对象数据类型就是面向对象中的类 (Class) 的概念。</p><p>我们以一个例子来说明面向过程和面向对象在程序流程上的不同之处。</p><p>假设我们要处理学生的成绩表，为了表示一个学生的成绩，面向过程的程序可以用一个 dict 表示:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">std1 </span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;"> {</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">name</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Michael</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">score</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 98</span><span style="color:#ECEFF4;"> }</span></span>
<span class="line"><span style="color:#D8DEE9FF;">std2 </span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;"> {</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">name</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Bob</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">score</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 81</span><span style="color:#ECEFF4;"> }</span></span></code></pre></div><p>而处理学生成绩可以通过函数实现，比如打印学生的成绩:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> print_score</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">std</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#88C0D0;">    print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#EBCB8B;">%s</span><span style="color:#A3BE8C;">: </span><span style="color:#EBCB8B;">%s</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;"> %</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9FF;">std</span><span style="color:#ECEFF4;">[</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">name</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">],</span><span style="color:#D8DEE9FF;"> std</span><span style="color:#ECEFF4;">[</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">score</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">]))</span></span></code></pre></div><p>如果采用面向对象的程序设计思想，我们首选思考的不是程序的执行流程，而是 <code>Student</code> 这种数据类型应该被视为一个对象，这个对象拥有 <code>name</code> 和 <code>score</code> 这两个属性 (Property) 。如果要打印一个学生的成绩，首先必须创建出这个学生对应的对象，然后，给对象发一个 <code>print_score</code> 消息，让对象自己把自己的数据打印出来。</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">class</span><span style="color:#8FBCBB;"> Student</span><span style="color:#ECEFF4;">(</span><span style="color:#88C0D0;">object</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">    def</span><span style="color:#88C0D0;"> __init__</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">self</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> name</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> score</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#81A1C1;">        self</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">name </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> name</span></span>
<span class="line"><span style="color:#81A1C1;">        self</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">score </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> score</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">    def</span><span style="color:#88C0D0;"> print_score</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">self</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#88C0D0;">        print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#EBCB8B;">%s</span><span style="color:#A3BE8C;">: </span><span style="color:#EBCB8B;">%s</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;"> %</span><span style="color:#ECEFF4;"> (</span><span style="color:#81A1C1;">self</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">name</span><span style="color:#ECEFF4;">,</span><span style="color:#81A1C1;"> self</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">score</span><span style="color:#ECEFF4;">))</span></span></code></pre></div><p>给对象发消息实际上就是调用对象对应的关联函数，我们称之为对象的方法 (Method) 。面向对象的程序写出来就像这样:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">bart </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> Student</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Bart Simpson</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 59</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">lisa </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> Student</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Lisa Simpson</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 87</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">bart</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">print_score</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">lisa</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">print_score</span><span style="color:#ECEFF4;">()</span></span></code></pre></div><p>面向对象的设计思想是从自然界中来的，因为在自然界中，类 (Class) 和实例 (Instance) 的概念是很自然的。Class 是一种抽象概念，比如我们定义的 Class——Student，是指学生这个概念，而实例 (Instance) 则是一个个具体的 Student，比如，<code>Bart Simpson</code> 和 <code>Lisa Simpson</code> 是两个具体的 Student。</p><p>所以，面向对象的设计思想是抽象出 Class，根据 Class 创建 Instance。</p><p>面向对象的抽象程度又比函数要高，因为一个 Class 既包含数据，又包含操作数据的方法。</p>`,16)]))}const E=a(e,[["render",l],["__file","intro.html.vue"]]),y=JSON.parse('{"path":"/code/language/python/oop/intro.html","title":"面向对象编程","lang":"zh-CN","frontmatter":{"title":"面向对象编程","icon":"info","date":"2021-03-28T00:00:00.000Z","category":"Python","description":"面向对象编程——Object Oriented Programming，简称 OOP，是一种程序设计思想。OOP 把对象作为程序的基本单元，一个对象包含了数据和操作数据的函数。 面向过程的程序设计把计算机程序视为一系列的命令集合，即一组函数的顺序执行。为了简化程序设计，面向过程把函数继续切分为子函数，即把大块函数通过切割成小块函数来降低系统的复杂度。 ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/python/oop/intro.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"面向对象编程"}],["meta",{"property":"og:description","content":"面向对象编程——Object Oriented Programming，简称 OOP，是一种程序设计思想。OOP 把对象作为程序的基本单元，一个对象包含了数据和操作数据的函数。 面向过程的程序设计把计算机程序视为一系列的命令集合，即一组函数的顺序执行。为了简化程序设计，面向过程把函数继续切分为子函数，即把大块函数通过切割成小块函数来降低系统的复杂度。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:published_time","content":"2021-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面向对象编程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":2.45,"words":734},"filePathRelative":"code/language/python/oop/intro.md","localizedDate":"2021年3月28日","excerpt":"","autoDesc":true}');export{E as comp,y as data};
