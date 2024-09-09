import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as y,c as d,d as s,e as E,a as i,w as n,f as l,b as r}from"./app-CAUHKgZ0.js";const F={};function C(v,e){const o=c("CodeTabs");return y(),d("div",null,[e[25]||(e[25]=s("p",null,"在本课中，您将向 MainActivity 添加一些代码，以便在用户点按 Send 按钮时启动一个显示消息的新 activity。",-1)),E(" more "),e[26]||(e[26]=s("h2",{id:"响应-send-按钮",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#响应-send-按钮"},[s("span",null,"响应“Send”按钮")])],-1)),e[27]||(e[27]=s("p",null,"您可按照以下步骤，向 MainActivity 类添加一个在用户点按 Send 按钮时调用的方法：",-1)),s("ol",null,[s("li",null,[e[4]||(e[4]=s("p",null,"在 app > java > com.example.myfirstapp > MainActivity 文件中，添加以下 sendMessage() 方法桩：",-1)),i(o,{id:"15",data:[{id:"Kotlin"},{id:"Java"}],"tab-id":"android"},{title0:n(({value:t,isActive:a})=>e[0]||(e[0]=[l("Kotlin")])),title1:n(({value:t,isActive:a})=>e[1]||(e[1]=[l("Java")])),tab0:n(({value:t,isActive:a})=>e[2]||(e[2]=[s("div",{class:"language-kotlin line-numbers-mode","data-highlighter":"shiki","data-ext":"kotlin","data-title":"kotlin",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"class"),s("span",{style:{color:"#8FBCBB"}}," MainActivity"),s("span",{style:{color:"#D8DEE9FF"}}," : AppCompatActivity() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    override"),s("span",{style:{color:"#81A1C1"}}," fun"),s("span",{style:{color:"#88C0D0"}}," onCreate"),s("span",{style:{color:"#D8DEE9FF"}},"(savedInstanceState: Bundle?) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"        super"),s("span",{style:{color:"#D8DEE9FF"}},"."),s("span",{style:{color:"#88C0D0"}},"onCreate"),s("span",{style:{color:"#D8DEE9FF"}},"(savedInstanceState)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88C0D0"}},"        setContentView"),s("span",{style:{color:"#D8DEE9FF"}},"(R.layout.activity_main)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#616E88"}},"    /** Called when the user taps the Send button */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    fun"),s("span",{style:{color:"#88C0D0"}}," sendMessage"),s("span",{style:{color:"#D8DEE9FF"}},"(view: View) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#616E88"}},"        // Do something in response to button")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:n(({value:t,isActive:a})=>e[3]||(e[3]=[s("div",{class:"language-java line-numbers-mode","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"public"),s("span",{style:{color:"#81A1C1"}}," class"),s("span",{style:{color:"#8FBCBB"}}," MainActivity"),s("span",{style:{color:"#81A1C1"}}," extends"),s("span",{style:{color:"#8FBCBB","font-weight":"bold"}}," AppCompatActivity"),s("span",{style:{color:"#ECEFF4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ECEFF4"}},"    @"),s("span",{style:{color:"#D08770"}},"Override")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    protected"),s("span",{style:{color:"#81A1C1"}}," void"),s("span",{style:{color:"#88C0D0"}}," onCreate"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#8FBCBB"}},"Bundle"),s("span",{style:{color:"#D8DEE9"}}," savedInstanceState"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#ECEFF4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"        super"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#88C0D0"}},"onCreate"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#D8DEE9FF"}},"savedInstanceState"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88C0D0"}},"        setContentView"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#D8DEE9"}},"R"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#D8DEE9"}},"layout"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#D8DEE9"}},"activity_main"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ECEFF4"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#616E88"}},"    /** Called when the user taps the Send button */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    public"),s("span",{style:{color:"#81A1C1"}}," void"),s("span",{style:{color:"#88C0D0"}}," sendMessage"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#8FBCBB"}},"View"),s("span",{style:{color:"#D8DEE9"}}," view"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#ECEFF4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#616E88"}},"        // Do something in response to button")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ECEFF4"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ECEFF4"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),e[5]||(e[5]=s("p",null,[l("您可能会看到一条错误，因为 Android Studio 无法解析用作方法参数的 View 类。若要清除错误，请点击 View 声明，将光标置于其上，然后按 "),s("code",null,"Alt + Enter"),l("（在 Mac 上则按 "),s("code",null,"Option + Enter"),l("）进行快速修复。如果出现一个菜单，请选择 Import class。")],-1))]),e[6]||(e[6]=r("<li><p>返回到 activity_main.xml 文件，并从该按钮调用此方法:</p><ol><li>选择布局编辑器中的相应按钮。</li><li>在 Attributes 窗口中，找到 onClick 属性，并从其下拉列表中选择 <code>sendMessage [MainActivity]</code>。</li></ol><p>现在，当用户点按该按钮时，系统将调用 <code>sendMessage()</code> 方法。</p><p>请注意此方法中提供的详细信息。系统需要这些信息来识别此方法是否与 android:onClick 属性兼容。具体来说，此方法具有以下特性：</p><ol><li>公开。</li><li>返回值为空，或在 Kotlin 中为隐式 Unit。</li><li>View 是唯一的参数。这是您在第 1 步结束时点击的 View 对象。</li></ol></li><li><p>接下来，填写此方法，以读取文本字段的内容，并将该文本传递给另一个 activity。</p></li>",2))]),e[28]||(e[28]=s("h2",{id:"构建一个-intent",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#构建一个-intent"},[s("span",null,"构建一个 intent")])],-1)),e[29]||(e[29]=s("p",null,[s("code",null,"Intent"),l(" 是在相互独立的组件（如两个 activity）之间提供运行时绑定功能的对象。Intent 表示应用执行某项操作的意图。您可以使用 intent 执行多种任务，但在本课中，您的 intent 将用于启动另一个 activity。")],-1)),e[30]||(e[30]=s("p",null,"在 MainActivity 中，添加 EXTRA_MESSAGE 常量和 sendMessage() 代码，如下所示：",-1)),i(o,{id:"82",data:[{id:"Kotlin"},{id:"Java"}],"tab-id":"android"},{title0:n(({value:t,isActive:a})=>e[7]||(e[7]=[l("Kotlin")])),title1:n(({value:t,isActive:a})=>e[8]||(e[8]=[l("Java")])),tab0:n(({value:t,isActive:a})=>e[9]||(e[9]=[s("div",{class:"language-kotlin line-numbers-mode","data-highlighter":"shiki","data-ext":"kotlin","data-title":"kotlin",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"const"),s("span",{style:{color:"#81A1C1"}}," val"),s("span",{style:{color:"#D8DEE9FF"}}," EXTRA_MESSAGE "),s("span",{style:{color:"#81A1C1"}},"="),s("span",{style:{color:"#A3BE8C"}},' "com.example.myfirstapp.MESSAGE"')]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"class"),s("span",{style:{color:"#8FBCBB"}}," MainActivity"),s("span",{style:{color:"#D8DEE9FF"}}," : AppCompatActivity() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    override"),s("span",{style:{color:"#81A1C1"}}," fun"),s("span",{style:{color:"#88C0D0"}}," onCreate"),s("span",{style:{color:"#D8DEE9FF"}},"(savedInstanceState: Bundle?) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"        super"),s("span",{style:{color:"#D8DEE9FF"}},"."),s("span",{style:{color:"#88C0D0"}},"onCreate"),s("span",{style:{color:"#D8DEE9FF"}},"(savedInstanceState)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88C0D0"}},"        setContentView"),s("span",{style:{color:"#D8DEE9FF"}},"(R.layout.activity_main)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#616E88"}},"    /** Called when the user taps the Send button */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    fun"),s("span",{style:{color:"#88C0D0"}}," sendMessage"),s("span",{style:{color:"#D8DEE9FF"}},"(view: View) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"        val"),s("span",{style:{color:"#D8DEE9FF"}}," editText "),s("span",{style:{color:"#81A1C1"}},"="),s("span",{style:{color:"#88C0D0"}}," findViewById"),s("span",{style:{color:"#D8DEE9FF"}},"<EditText>(R.id.editTextTextPersonName)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"        val"),s("span",{style:{color:"#D8DEE9FF"}}," message "),s("span",{style:{color:"#81A1C1"}},"="),s("span",{style:{color:"#D8DEE9FF"}}," editText.text."),s("span",{style:{color:"#88C0D0"}},"toString"),s("span",{style:{color:"#D8DEE9FF"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"        val"),s("span",{style:{color:"#D8DEE9FF"}}," intent "),s("span",{style:{color:"#81A1C1"}},"="),s("span",{style:{color:"#88C0D0"}}," Intent"),s("span",{style:{color:"#D8DEE9FF"}},"("),s("span",{style:{color:"#81A1C1"}},"this"),s("span",{style:{color:"#D8DEE9FF"}},", DisplayMessageActivity::"),s("span",{style:{color:"#88C0D0"}},"class"),s("span",{style:{color:"#D8DEE9FF"}},".java)."),s("span",{style:{color:"#88C0D0"}},"apply"),s("span",{style:{color:"#D8DEE9FF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88C0D0"}},"            putExtra"),s("span",{style:{color:"#D8DEE9FF"}},"(EXTRA_MESSAGE, message)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88C0D0"}},"        startActivity"),s("span",{style:{color:"#D8DEE9FF"}},"(intent)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:n(({value:t,isActive:a})=>e[10]||(e[10]=[s("div",{class:"language-java line-numbers-mode","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"public"),s("span",{style:{color:"#81A1C1"}}," class"),s("span",{style:{color:"#8FBCBB"}}," MainActivity"),s("span",{style:{color:"#81A1C1"}}," extends"),s("span",{style:{color:"#8FBCBB","font-weight":"bold"}}," AppCompatActivity"),s("span",{style:{color:"#ECEFF4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    public"),s("span",{style:{color:"#81A1C1"}}," static"),s("span",{style:{color:"#81A1C1"}}," final"),s("span",{style:{color:"#8FBCBB"}}," String"),s("span",{style:{color:"#D8DEE9"}}," EXTRA_MESSAGE"),s("span",{style:{color:"#81A1C1"}}," ="),s("span",{style:{color:"#ECEFF4"}},' "'),s("span",{style:{color:"#A3BE8C"}},"com.example.myfirstapp.MESSAGE"),s("span",{style:{color:"#ECEFF4"}},'"'),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ECEFF4"}},"    @"),s("span",{style:{color:"#D08770"}},"Override")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    protected"),s("span",{style:{color:"#81A1C1"}}," void"),s("span",{style:{color:"#88C0D0"}}," onCreate"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#8FBCBB"}},"Bundle"),s("span",{style:{color:"#D8DEE9"}}," savedInstanceState"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#ECEFF4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"        super"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#88C0D0"}},"onCreate"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#D8DEE9FF"}},"savedInstanceState"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88C0D0"}},"        setContentView"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#D8DEE9"}},"R"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#D8DEE9"}},"layout"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#D8DEE9"}},"activity_main"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ECEFF4"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#616E88"}},"    /** Called when the user taps the Send button */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    public"),s("span",{style:{color:"#81A1C1"}}," void"),s("span",{style:{color:"#88C0D0"}}," sendMessage"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#8FBCBB"}},"View"),s("span",{style:{color:"#D8DEE9"}}," view"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#ECEFF4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8FBCBB"}},"        Intent"),s("span",{style:{color:"#D8DEE9"}}," intent"),s("span",{style:{color:"#81A1C1"}}," ="),s("span",{style:{color:"#81A1C1"}}," new"),s("span",{style:{color:"#88C0D0"}}," Intent"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#81A1C1"}},"this"),s("span",{style:{color:"#ECEFF4"}},","),s("span",{style:{color:"#D8DEE9"}}," DisplayMessageActivity"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#D8DEE9"}},"class"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8FBCBB"}},"        EditText"),s("span",{style:{color:"#D8DEE9"}}," editText"),s("span",{style:{color:"#81A1C1"}}," ="),s("span",{style:{color:"#ECEFF4"}}," ("),s("span",{style:{color:"#D8DEE9FF"}},"EditText"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#88C0D0"}}," findViewById"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#D8DEE9"}},"R"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#D8DEE9"}},"id"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#D8DEE9"}},"editTextTextPersonName"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8FBCBB"}},"        String"),s("span",{style:{color:"#D8DEE9"}}," message"),s("span",{style:{color:"#81A1C1"}}," ="),s("span",{style:{color:"#D8DEE9"}}," editText"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#88C0D0"}},"getText"),s("span",{style:{color:"#ECEFF4"}},"()."),s("span",{style:{color:"#88C0D0"}},"toString"),s("span",{style:{color:"#ECEFF4"}},"()"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9"}},"        intent"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#88C0D0"}},"putExtra"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#D8DEE9FF"}},"EXTRA_MESSAGE"),s("span",{style:{color:"#ECEFF4"}},","),s("span",{style:{color:"#D8DEE9FF"}}," message"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88C0D0"}},"        startActivity"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#D8DEE9FF"}},"intent"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ECEFF4"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ECEFF4"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),e[31]||(e[31]=s("p",null,"预计 Android Studio 会再次遇到 Cannot resolve symbol 错误。如需清除这些错误，请按 Alt+Enter（在 Mac 上则按 Option+Return）。您最后应导入以下内容：",-1)),i(o,{id:"93",data:[{id:"Kotlin"},{id:"Java"}],"tab-id":"android"},{title0:n(({value:t,isActive:a})=>e[11]||(e[11]=[l("Kotlin")])),title1:n(({value:t,isActive:a})=>e[12]||(e[12]=[l("Java")])),tab0:n(({value:t,isActive:a})=>e[13]||(e[13]=[s("div",{class:"language-kotlin","data-highlighter":"shiki","data-ext":"kotlin","data-title":"kotlin",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#D8DEE9FF"}}," androidx.appcompat.app.AppCompatActivity")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#D8DEE9FF"}}," android.content.Intent")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#D8DEE9FF"}}," android.os.Bundle")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#D8DEE9FF"}}," android.view.View")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#D8DEE9FF"}}," android.widget.EditText")])])])],-1)])),tab1:n(({value:t,isActive:a})=>e[14]||(e[14]=[s("div",{class:"language-java","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#8FBCBB"}}," androidx"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"appcompat"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"app"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"AppCompatActivity"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#8FBCBB"}}," android"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"content"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"Intent"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#8FBCBB"}}," android"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"os"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"Bundle"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#8FBCBB"}}," android"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"view"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"View"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#8FBCBB"}}," android"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"widget"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"EditText"),s("span",{style:{color:"#81A1C1"}},";")])])])],-1)])),_:1}),e[32]||(e[32]=r('<p>DisplayMessageActivity 仍有错误，但没有关系。您将在下一部分中修复该错误。</p><p>sendMessage() 将发生以下情况：</p><ul><li><p>Intent 构造函数会获取两个参数：Context 和 Class。</p><p>首先使用 Context 参数，因为 Activity 类是 Context 的子类。</p><p>在本例中，系统将 Intent, 传递到的应用组件的 Class 参数是要启动的 activity。</p></li><li><p>putExtra() 方法将 EditText 的值添加到 intent。Intent 能够以称为“extra”的键值对形式携带数据类型。</p><p>您的键是一个公共常量 EXTRA_MESSAGE，因为下一个 activity 将使用该键检索文本值。为 intent extra 定义键时，最好使用应用的软件包名称作为前缀。这样可以确保这些键是独一无二的，这在您的应用需要与其他应用进行交互时会很重要。</p></li><li><p>startActivity() 方法将启动一个由 Intent 指定的 DisplayMessageActivity 实例。接下来，您需要创建该类。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>导航架构组件允许您使用导航编辑器将一个 activity 与另一个 activity 相关联。建立这种关联后，您可以利用 API 在用户触发关联的操作（例如，用户点击某个按钮时）时启动第二个 activity。如需了解详情，请参阅导航。</p></div><h2 id="创建第二个-activity" tabindex="-1"><a class="header-anchor" href="#创建第二个-activity"><span>创建第二个 activity</span></a></h2><p>若要创建第二个 activity，请按以下步骤操作：</p><ol><li>在 Project 窗口中，右键点击 app 文件夹，然后依次选择 New &gt; Activity &gt; Empty Activity。</li><li>在 Configure Activity 窗口中，输入“DisplayMessageActivity”作为 Activity Name。将所有其他属性保留为默认设置，然后点击 Finish。</li></ol><p>Android Studio 会自动执行下列三项操作：</p><ol><li>创建 DisplayMessageActivity 文件。</li><li>创建 DisplayMessageActivity 文件对应的布局文件 activity_display_message.xml。</li><li>在 AndroidManifest.xml 中添加所需的 <code>&lt;activity&gt;</code> 元素。</li></ol><p>如果您运行应用并点按第一个 activity 上的按钮，将启动第二个 activity，但它为空。这是因为第二个 activity 使用模板提供的空布局。</p><h2 id="添加文本视图" tabindex="-1"><a class="header-anchor" href="#添加文本视图"><span>添加文本视图</span></a></h2><p>新 activity 包含一个空白布局文件。请按以下步骤操作，在显示消息的位置添加一个文本视图：</p><ol><li>打开 app &gt; res &gt; layout &gt; activity_display_message.xml 文件。</li><li>点击工具栏中的 Enable Autoconnection to Parent 。系统将启用 Autoconnect。参见图 1。</li><li>在 Palette 面板中，点击 Text，将 TextView 拖动到布局中，然后将其放置在靠近布局顶部中心的位置，使其贴靠到出现的垂直线上。Autoconnect 将添加左侧和右侧约束条件，以便将该视图放置在水平中心位置。</li><li>再创建一个从文本视图顶部到布局顶部的约束条件，使该视图如图 1 中所示。</li></ol><p>或者，您可以对文本样式进行一些调整，方法是在 Attributes 窗口的 Common Attributes 面板中展开 textAppearance，然后更改 textSize 和 textColor 等属性。</p><h2 id="显示消息" tabindex="-1"><a class="header-anchor" href="#显示消息"><span>显示消息</span></a></h2><p>在此步骤中，您将修改第二个 activity 以显示第一个 activity 传递的消息。</p>',16)),s("ol",null,[s("li",null,[e[19]||(e[19]=s("p",null,[l("在 DisplayMessageActivity 中，将以下代码添加到 "),s("code",null,"onCreate()"),l(" 方法中：")],-1)),i(o,{id:"221",data:[{id:"Kotlin"},{id:"Java"}],"tab-id":"android"},{title0:n(({value:t,isActive:a})=>e[15]||(e[15]=[l("Kotlin")])),title1:n(({value:t,isActive:a})=>e[16]||(e[16]=[l("Java")])),tab0:n(({value:t,isActive:a})=>e[17]||(e[17]=[s("div",{class:"language-kotlin line-numbers-mode","data-highlighter":"shiki","data-ext":"kotlin","data-title":"kotlin",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"override"),s("span",{style:{color:"#81A1C1"}}," fun"),s("span",{style:{color:"#88C0D0"}}," onCreate"),s("span",{style:{color:"#D8DEE9FF"}},"(savedInstanceState: Bundle?) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    super"),s("span",{style:{color:"#D8DEE9FF"}},"."),s("span",{style:{color:"#88C0D0"}},"onCreate"),s("span",{style:{color:"#D8DEE9FF"}},"(savedInstanceState)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88C0D0"}},"    setContentView"),s("span",{style:{color:"#D8DEE9FF"}},"(R.layout.activity_display_message)")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#616E88"}},"    // Get the Intent that started this activity and extract the string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    val"),s("span",{style:{color:"#D8DEE9FF"}}," message "),s("span",{style:{color:"#81A1C1"}},"="),s("span",{style:{color:"#D8DEE9FF"}}," intent."),s("span",{style:{color:"#88C0D0"}},"getStringExtra"),s("span",{style:{color:"#D8DEE9FF"}},"(EXTRA_MESSAGE)")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#616E88"}},"    // Capture the layout's TextView and set the string as its text")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    val"),s("span",{style:{color:"#D8DEE9FF"}}," textView "),s("span",{style:{color:"#81A1C1"}},"="),s("span",{style:{color:"#88C0D0"}}," findViewById"),s("span",{style:{color:"#D8DEE9FF"}},"<TextView>(R.id.textView)."),s("span",{style:{color:"#88C0D0"}},"apply"),s("span",{style:{color:"#D8DEE9FF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"        text "),s("span",{style:{color:"#81A1C1"}},"="),s("span",{style:{color:"#D8DEE9FF"}}," message")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9FF"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:n(({value:t,isActive:a})=>e[18]||(e[18]=[s("div",{class:"language-java line-numbers-mode","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ECEFF4"}},"@"),s("span",{style:{color:"#D08770"}},"Override")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"protected"),s("span",{style:{color:"#81A1C1"}}," void"),s("span",{style:{color:"#88C0D0"}}," onCreate"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#8FBCBB"}},"Bundle"),s("span",{style:{color:"#D8DEE9FF"}}," savedInstanceState"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#ECEFF4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"    super"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#88C0D0"}},"onCreate"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#D8DEE9FF"}},"savedInstanceState"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88C0D0"}},"    setContentView"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#D8DEE9"}},"R"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#D8DEE9"}},"layout"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#D8DEE9"}},"activity_display_message"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#616E88"}},"    // Get the Intent that started this activity and extract the string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8FBCBB"}},"    Intent"),s("span",{style:{color:"#D8DEE9"}}," intent"),s("span",{style:{color:"#81A1C1"}}," ="),s("span",{style:{color:"#88C0D0"}}," getIntent"),s("span",{style:{color:"#ECEFF4"}},"()"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8FBCBB"}},"    String"),s("span",{style:{color:"#D8DEE9"}}," message"),s("span",{style:{color:"#81A1C1"}}," ="),s("span",{style:{color:"#D8DEE9"}}," intent"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#88C0D0"}},"getStringExtra"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#D8DEE9"}},"MainActivity"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#D8DEE9"}},"EXTRA_MESSAGE"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#616E88"}},"    // Capture the layout's TextView and set the string as its text")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8FBCBB"}},"    TextView"),s("span",{style:{color:"#D8DEE9"}}," textView"),s("span",{style:{color:"#81A1C1"}}," ="),s("span",{style:{color:"#88C0D0"}}," findViewById"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#D8DEE9"}},"R"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#D8DEE9"}},"id"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#D8DEE9"}},"textView"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D8DEE9"}},"    textView"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#88C0D0"}},"setText"),s("span",{style:{color:"#ECEFF4"}},"("),s("span",{style:{color:"#D8DEE9FF"}},"message"),s("span",{style:{color:"#ECEFF4"}},")"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ECEFF4"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1})]),s("li",null,[e[24]||(e[24]=s("p",null,[l("按 "),s("code",null,"Alt + Enter"),l("（在 Mac 上则按 "),s("code",null,"Option + Return"),l("）导入其他所需的类：")],-1)),i(o,{id:"234",data:[{id:"Kotlin"},{id:"Java"}],"tab-id":"android"},{title0:n(({value:t,isActive:a})=>e[20]||(e[20]=[l("Kotlin")])),title1:n(({value:t,isActive:a})=>e[21]||(e[21]=[l("Java")])),tab0:n(({value:t,isActive:a})=>e[22]||(e[22]=[s("div",{class:"language-kotlin","data-highlighter":"shiki","data-ext":"kotlin","data-title":"kotlin",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#D8DEE9FF"}}," androidx.appcompat.app.AppCompatActivity")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#D8DEE9FF"}}," android.content.Intent")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#D8DEE9FF"}}," android.os.Bundle")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#D8DEE9FF"}}," android.widget.TextView")])])])],-1)])),tab1:n(({value:t,isActive:a})=>e[23]||(e[23]=[s("div",{class:"language-java","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[s("pre",{class:"shiki nord vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#8FBCBB"}}," androidx"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"appcompat"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"app"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"AppCompatActivity"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#8FBCBB"}}," android"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"content"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"Intent"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#8FBCBB"}}," android"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"os"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"Bundle"),s("span",{style:{color:"#81A1C1"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#81A1C1"}},"import"),s("span",{style:{color:"#8FBCBB"}}," android"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"widget"),s("span",{style:{color:"#ECEFF4"}},"."),s("span",{style:{color:"#8FBCBB"}},"TextView"),s("span",{style:{color:"#81A1C1"}},";")])])])],-1)])),_:1})])]),e[33]||(e[33]=r(`<h2 id="添加向上导航功能" tabindex="-1"><a class="header-anchor" href="#添加向上导航功能"><span>添加向上导航功能</span></a></h2><p>在您的应用中，不是主入口点的每个屏幕（所有不是主屏幕的屏幕）都必须提供导航功能，以便将用户引导至应用层次结构中的逻辑父级屏幕。为此，请在应用栏中添加向上按钮。</p><p>若要添加向上按钮，您需要在 <code>AndroidManifest.xml</code> 文件中声明哪个 activity 是逻辑父级。打开 app &gt; manifests &gt; AndroidManifest.xml 文件，找到 DisplayMessageActivity 的 <code>&lt;activity&gt;</code> 标记，然后将其替换为以下代码：</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;activity</span><span style="color:#8FBCBB;"> android</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">name</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">.DisplayMessageActivity</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#8FBCBB;">          android</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">parentActivityName</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">.MainActivity</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#616E88;">    &lt;!-- The meta-data tag is required if you support API level 15 and lower --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;meta-data</span></span>
<span class="line"><span style="color:#8FBCBB;">        android</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">name</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">android.support.PARENT_ACTIVITY</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#8FBCBB;">        android</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">value</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">.MainActivity</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/activity&gt;</span></span></code></pre></div><p>Android 系统现在会自动向应用栏添加向上按钮。</p><h2 id="运行应用" tabindex="-1"><a class="header-anchor" href="#运行应用"><span>运行应用</span></a></h2><p>点击工具栏中的 Apply Changes 以运行应用。当应用打开后，在文本字段中输入一条消息，点按 Send 即会看到该消息显示在第二个 activity 中。</p>`,7))])}const m=p(F,[["render",C],["__file","activity.html.vue"]]),A=JSON.parse('{"path":"/code/android/get-started/activity.html","title":"启动另一个 activity","lang":"zh-CN","frontmatter":{"title":"启动另一个 activity","icon":"info","date":"2022-04-01T00:00:00.000Z","category":["Android","快速上手"],"tag":["快速上手"],"description":"在本课中，您将向 MainActivity 添加一些代码，以便在用户点按 Send 按钮时启动一个显示消息的新 activity。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/android/get-started/activity.html"}],["meta",{"property":"og:site_name","content":"Ocean"}],["meta",{"property":"og:title","content":"启动另一个 activity"}],["meta",{"property":"og:description","content":"在本课中，您将向 MainActivity 添加一些代码，以便在用户点按 Send 按钮时启动一个显示消息的新 activity。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"Ocean"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2022-04-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"启动另一个 activity\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ocean\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Ocean Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Ocean JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Ocean RSS Feed"}]]},"headers":[{"level":2,"title":"响应“Send”按钮","slug":"响应-send-按钮","link":"#响应-send-按钮","children":[]},{"level":2,"title":"构建一个 intent","slug":"构建一个-intent","link":"#构建一个-intent","children":[]},{"level":2,"title":"创建第二个 activity","slug":"创建第二个-activity","link":"#创建第二个-activity","children":[]},{"level":2,"title":"添加文本视图","slug":"添加文本视图","link":"#添加文本视图","children":[]},{"level":2,"title":"显示消息","slug":"显示消息","link":"#显示消息","children":[]},{"level":2,"title":"添加向上导航功能","slug":"添加向上导航功能","link":"#添加向上导航功能","children":[]},{"level":2,"title":"运行应用","slug":"运行应用","link":"#运行应用","children":[]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":6.25,"words":1875},"filePathRelative":"code/android/get-started/activity.md","localizedDate":"2022年4月1日","excerpt":"<p>在本课中，您将向 MainActivity 添加一些代码，以便在用户点按 Send 按钮时启动一个显示消息的新 activity。</p>\\n","autoDesc":true}');export{m as comp,A as data};
