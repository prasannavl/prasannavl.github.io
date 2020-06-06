webpackJsonp(["329a8f2cd144f9e2abc99bab9b4125be"],{"./src/components/Article.jsx":function(a,b,c){"use strict";function d(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var h=c("./node_modules/react/index.js"),i=c.n(h),j=c("./src/components/Head.jsx"),k=c("./node_modules/date-fns/format/index.js"),l=c.n(k),m=c("./src/modules/prism.worker.js"),n=c.n(m),o=c("./node_modules/classnames/index.js"),p=c.n(o),q=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},r=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),s=function(a){function b(a){e(this,b);var c=f(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={code:null},c.workerState=null,c.workerTask=null,c.worker=null,c}return g(b,a),r(b,[{key:"highlight",value:function(a){var b=this,c=a.children,d=a.lang;if(d){c=this.trimChildString(c);var e=this.workerTask=this.worker.highlight({code:c.toString(),lang:d}).then(function(a){e===b.workerTask&&b.setState({code:a})}).catch(function(a){return console.log(a)})}}},{key:"componentWillMount",value:function(){window.highlightWorkerState||(window.highlightWorkerState={worker:new n.a,ref:0}),this.workerState=window.highlightWorkerState,this.workerState.ref++,this.worker=this.workerState.worker,this.highlight(this.props)}},{key:"componentDidUpdate",value:function(a){this.props!=a&&this.highlight(a)}},{key:"componentWillUnmount",value:function(){this.workerState.ref--,0===this.workerState.ref&&(this.worker.terminate(),window.highlightWorkerState=null),this.workerTask=null,this.workerState=null,this.worker=null}},{key:"trimChildString",value:function(a){return"string"==typeof a&&a.startsWith("\n")?a.trim():a}},{key:"render",value:function(){var a=this.props,b=a.children,c=a.lang,e=a.className,f=d(a,["children","lang","className"]);b=this.state.code?this.state.code:this.trimChildString(b);var g=-1===b.indexOf("\n"),i=p()(e,{"single-line":g}),j=void 0;return j=i?{className:i}:{},Object(h.createElement)("pre",q({},f,j),Object(h.createElement)("code",{dangerouslySetInnerHTML:{__html:b}}))}}]),b}(i.a.Component),t=c("./src/components/Link.jsx");c.d(b,"a",function(){return u}),c.d(b,"b",function(){return s}),c.d(b,"c",function(){return t.a}),c.d(b,!1,function(){});var u=function(a){var b=a.title,c=a.date,d=a.modifiedDate,e=a.image,f=a.type,g=a.children,i=a.note,k="Prasanna Loganathar",m=a.description||(i?"Prasanna's personal notes on ":"Prasanna's blog article published on ")+new Date(c).toUTCString(),n=window.location.pathname.startsWith("/drafts");return Object(h.createElement)("article",null,Object(h.createElement)(j.b,null,b),Object(h.createElement)(j.c,{title:b,description:m,image:e}),Object(h.createElement)(j.a,{title:b,description:m,image:e,url:window.location.href,type:f||"article",author:k,time:c,modifiedTime:d}),Object(h.createElement)("header",{className:"mb-4"},Object(h.createElement)("h1",{className:"title",rel:"title"},b),Object(h.createElement)("p",{className:"d-none",rel:"author"},k),Object(h.createElement)("p",{className:"small text-muted",rel:"date"},Object(h.createElement)("time",{dateTime:c},l()(new Date(c),"dddd, Do MMM YYYY")))),n&&Object(h.createElement)("p",{className:"note-red"},"This is a ",Object(h.createElement)("strong",null,"draft")," - a work in progress. It's not yet meant for public consumption till it's published."),a.note&&Object(h.createElement)("p",{className:"note"},"This item is marked as a ",Object(h.createElement)("code",null,"note"),". ",Object(h.createElement)("em",null,"Notes")," are my personal archive of mostly tiny bits of information that serve as reference. It ",Object(h.createElement)("strong",null,"may or may not")," be accurate. ",Object(h.createElement)("strong",null,"You have been warned"),"."),g)}},"./src/modules/prism.worker.js":function(a,b,c){var d=c("./node_modules/workerize-loader/dist/rpc-wrapper.js"),e=["highlight"];a.exports=function(){var a=new Worker(c.p+"js/workers/main.f7818a85dcc0292261c3.worker.js",{name:"js/workers/[id].[chunkhash].worker.js"});return d(a,e),a}},"./src/posts/2016/10/data/gc-comp-winapi-stat-clr.jpg":function(a,b,c){a.exports=c.p+"img/gc-comp-winapi-stat-clr.119845beaf2888c6bc2476ca66df1a7b.jpg"},"./src/posts/2016/10/data/gc-comp-winapi-stat.jpg":function(a,b,c){a.exports=c.p+"img/gc-comp-winapi-stat.25b2a2eae796d80298493032dab24f68.jpg"},"./src/posts/2016/10/data/gc-comp-winapi.jpg":function(a,b,c){a.exports=c.p+"img/gc-comp-winapi.a630ff65a957d67c35f4546654477ca7.jpg"},"./src/posts/2016/10/data/gc-comp-winforms-stat-clr.jpg":function(a,b,c){a.exports=c.p+"img/gc-comp-winforms-stat-clr.3d3dcdcb7c05cb4279b8a793659027db.jpg"},"./src/posts/2016/10/data/gc-comp-winforms-stat.jpg":function(a,b,c){a.exports=c.p+"img/gc-comp-winforms-stat.daf3a7be5841a8936f077b3b0c3d3aa8.jpg"},"./src/posts/2016/10/data/gc-comp-winforms.jpg":function(a,b,c){a.exports=c.p+"img/gc-comp-winforms.b783a4608bc703fa84e0f7958fa0ff94.jpg"},"./src/posts/2016/10/introducing-winapi-comparing-gc-pressure-and-performance-with-winforms.jsx":function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),c.d(b,"meta",function(){return g});var d=c("./node_modules/react/index.js"),e=c.n(d),f=c("./src/components/Article.jsx"),g={title:"Introducing WinApi: Comparing GC pressure and performance with WinForms",date:"2016-10-29T04:44:36.874Z",tags:["dotnet","windows","perf"],featured:!0,description:"Article on WinApi - Part 4"};b["default"]=function(){return Object(d.createElement)(f.a,g,Object(d.createElement)("p",null,Object(d.createElement)("b",null,"GitHub: "),Object(d.createElement)("a",{href:"https://github.com/prasannavl/WinApi"},"WinApi")),Object(d.createElement)("div",null,Object(d.createElement)("section",{className:"note"},Object(d.createElement)("h4",{className:"mt-2"},"TL;DR - Performance stats"),Object(d.createElement)("ul",{className:"list-unstyled list-dashed m-0"},Object(d.createElement)("li",null,"Direct message loop performance: ",Object(d.createElement)("strong",null,"20-35% faster"),"."),Object(d.createElement)("li",null,"Heap allocation: ",Object(d.createElement)("strong",null,"0MB vs. roughly, 0.75GB")," / 100k messages."),Object(d.createElement)("li",null,"Memory page faults (Soft): ",Object(d.createElement)("strong",null,"0.005%")," - A mere ",Object(d.createElement)("strong",null,"5k vs. roughly 1 million")," faults/100k messages).")))),Object(d.createElement)("p",null,Object(d.createElement)("a",{href:"https://github.com/prasannavl/WinApi"},"WinApi's")," primary objective is to provide access to the native layers of the Windows API from the CLR. However, even on first look it should be clear that the ",Object(d.createElement)("code",null,"WinApi.Windows")," namespace infringes on the ",Object(d.createElement)("code",null,"WinForms")," territory, even though its a tiny sub-fraction of the size of WinForms. Over the years WinForms has been well optimized to be ",Object(d.createElement)("strong",null,"decent")," - It's not the most efficient beast, but for common programs, it probably takes up less than 2-5% percent of your application's time that it doesn't matter on modern hardware - or so is the general line of thought. However, what one cannot refute is that it never was the same as say, ",Object(d.createElement)("code",null,"ATL/WTL")," in C++ or direct Win32 programming to be able to handle message loop heavy applications, or high-performance games."),Object(d.createElement)("h2",null,"The WinApi.Windows advantage"),Object(d.createElement)("ul",null,Object(d.createElement)("li",null,"The ",Object(d.createElement)("strong",null,"assembly code generated by the JIT is directly comparable")," to ",Object(d.createElement)("code",null,"ATL/WTL")," or a Win32 application written by hand."),Object(d.createElement)("li",null,"The message loop is completely ",Object(d.createElement)("strong",null,"GC-allocation free"),"."),Object(d.createElement)("li",null,"You have ",Object(d.createElement)("strong",null,"complete control over how messages are processed"),". You can entirely short-circuit, or manually extend connection points into the message loop logic."),Object(d.createElement)("li",null,"It's the perfect replacement for WinForms when you want to handle the GUI logic your own way - has no inherent GUI subclassing and drawing functionality - You're free to use any kind of external GUI logic, and drawing library powered by ",Object(d.createElement)("code",null,"DirectX")," (like WPF and WinRT XAML), ",Object(d.createElement)("code",null,"Cairo"),", ",Object(d.createElement)("code",null,"Skia")," or even the defacto ",Object(d.createElement)("code",null,"System.Drawing")," that uses ",Object(d.createElement)("code",null,"GdiPlus")," underneath.")),Object(d.createElement)("h2",null,"Performance analysis"),Object(d.createElement)("h3",null,"Setting the stage"),Object(d.createElement)("p",null,"Measuring GUI performance, is in general very tricky. Instead, I'm going to skip over the traditional benchmarking models, and do a little trick for a very quick and practically accurate analysis."),Object(d.createElement)("p",null,"The reason I'm doing this, is not just to do a really quick estimate, but traditional models will be unfair to ",Object(d.createElement)("code",null,"WinForms"),". Why? Because, ",Object(d.createElement)("code",null,"WinApi.Windows")," is a very efficient and light-weight wrapper. And it has no GC allocations during the message loop. So, a hefty framework like WinForms is always going to lose in micro-performance tests, and the results will be misleading."),Object(d.createElement)("p",null,"Rather, what I'm going to do, is to open up a simple window and give it a ton of messages to chew. But the idea is that these messages have to go through the entire process loop, but not generate additional calls to other areas such as the graphics API for example, since that would end up benchmarking the 2D, and 3D libraries."),Object(d.createElement)("p",null,"What's the simplest way to do this? Well, ",Object(d.createElement)("code",null,"resize the window"),"! Win32 sends off ",Object(d.createElement)("code",null,"WM_POSITIONCHANGING"),", ",Object(d.createElement)("code",null,"WM_POSITIONCHANGED"),", which in turn generates ",Object(d.createElement)("code",null,"WM_SIZE"),", ",Object(d.createElement)("code",null,"WM_MOVE")," by the ",Object(d.createElement)("code",null,"DefWindowProc")," as you resize. This also ends up generating ",Object(d.createElement)("code",null,"WM_NCPAINT")," and ",Object(d.createElement)("code",null,"WM_PAINT")," messages as long as the ",Object(d.createElement)("code",null,"CS_REDRAW")," styles are set. Perfect - except for the painting part. I do want ",Object(d.createElement)("code",null,"WM_PAINT")," being generated since its one of the high-frequency messages, but I just don't want any of graphics API calls."),Object(d.createElement)("p",{className:"note"},Object(d.createElement)("strong",null,"The key here is that, we don't care too much about how quickly the program runs to completion.")),Object(d.createElement)("p",null,"Wait. What? Isn't that the whole point of this? - Not at all. Why? Because, no developer in the right mind would make a program that just goes on resizing itself and call it a useful piece of software. It's way too simple to emulate the conditions of a real-life program to provide any useful timing comparisons. However, the interesting part is that since we trigger the whole layout-paint cycle, we can indeed collect useful information on how the memory allocations take place, memory faults, garbage collections, and a few more - which in turns translates to very significant performance aspects in real-life programs."),Object(d.createElement)("code",null,"The trick is to use this otherwise useless program to give us useful data that's practically applicable."),Object(d.createElement)("p",{className:"note"},Object(d.createElement)("strong",null,"Note:")," Most of the allocations for a program that's as simple as this will likely end up in ",Object(d.createElement)("code",null,"Generation-0"),", which will ",Object(d.createElement)("code",null,"commonly mislead many developers to think its okay"),". Gen-0 is after-all the most efficient, isn't it? However, in most practical scenarios ",Object(d.createElement)("code",null,"they get bumped up the generations since a lot of them survive the entire course of the event"),", and havoc with fragmentation starts to show earlier than most would expect. Large objects are a whole another story which ",Object(d.createElement)("strong",null,"almost")," never gets defragmented during the course of the program."),Object(d.createElement)("h3",null,"The high-level test program"),Object(d.createElement)("ul",null,Object(d.createElement)("li",null,"Create a simple window with nothing but 2 labels that are auto-stretched to the entire window."),Object(d.createElement)("li",null,"The controls should always react to changes, resizing itself and triggering the whole layout-paint cycle, but never painting anything other than its default background until the very end."),Object(d.createElement)("li",null,"Create one new thread, and keep triggering resize as fast as it can process the messages!"),Object(d.createElement)("li",null,"Stop. Measure. Repeat.")),Object(d.createElement)("p",null,"I'm going to set the thread to send off ",Object(d.createElement)("code",null,"100,000")," resize messages, and then stop. 100k may be on the high-side for simple application, but not uncommon for high-performance realtime applications."),Object(d.createElement)("p",{className:"note"},Object(d.createElement)("strong",null,"Note:")," This is likely to vary quite a bit depending on the background CPU usage. This particular type of program will also be heavily affected by dynamic CPU clocks, since it may well complete in it's quantum slice, and wait on the next message, ",Object(d.createElement)("strong",null,"which in turns will affect CPU sleep states"),". So, its important to use ",Object(d.createElement)("code",null,"High-performance mode, or a constant CPU clocking speed"),". However, the rest is okay, since we don't care too much about how quickly it just finishes."),Object(d.createElement)("h3",null,"The WinForms program"),Object(d.createElement)(f.b,{lang:"csharp",children:"\npublic partial class Form1 : Form\n{\n    public Form1()\n    {\n        InitializeComponent();\n    }\n\n    private int m_times;\n    private bool m_done;\n    private DateTime m_startTime;\n    private DateTime m_endTime;\n    private const int Iterations = 100000;\n    private Task m_task;\n\n    protected override void OnLoad(EventArgs e)\n    {\n        base.OnLoad(e);\n        var r = new Random();\n\n        m_task = Task.Run(() =>\n        {\n            while (m_times < Iterations)\n            {\n                m_times++;\n                this.SetBounds(50, 50, 1200 - r.Next(0, 1100), 900 - r.Next(0, 800));\n            }\n            m_endTime = DateTime.Now;\n            m_done = true;\n            this.SetBounds(50, 50, 700, 500);\n        });\n        m_startTime = DateTime.Now;\n    }\n\n    protected override void OnSizeChanged(EventArgs e)\n    {\n        base.OnSizeChanged(e);\n\n        // Paint only after everything's done to show\n        // the result.\n        if (!m_done) return;\n\n        var str = $\"\\r\\n{DateTime.Now}: No. of changes done: {m_times}\";\n        textBox1.Text = str;\n\n        var sb = new StringBuilder();\n\n        sb.AppendLine($\"Start Time: {m_startTime}\");\n        sb.AppendLine($\"End Time: {m_endTime}\");\n        sb.AppendLine();\n\n        if (m_endTime != DateTime.MinValue)\n            sb.AppendLine($\"Total Time: {m_endTime - m_startTime}\");\n        textBox2.Text = sb.ToString();\n    }\n}\n        "}),Object(d.createElement)("p",null,"That's it. Very simple! Now, lets run it and wait until it ends."),Object(d.createElement)("p",null,Object(d.createElement)("img",{className:"img-fluid",src:c("./src/posts/2016/10/data/gc-comp-winforms.jpg"),alt:"[Image]"})),Object(d.createElement)("p",null,"So, on my ",Object(d.createElement)("code",null,"i7")," machine, it took about ",Object(d.createElement)("code",null,"4 minutes and 34 seconds"),".",Object(d.createElement)("br",null),"Okay, now, let's look at the more interesting data."),Object(d.createElement)("p",null,Object(d.createElement)("img",{className:"img-fluid",src:c("./src/posts/2016/10/data/gc-comp-winforms-stat-clr.jpg"),alt:"[Image]"})),Object(d.createElement)("p",null,"The key data, that's of interest are:"),Object(d.createElement)("div",{className:"note"},Object(d.createElement)("ul",{className:"list-unstyled list-dashed m-0"},Object(d.createElement)("li",null,"Gen 0 Collections: ",Object(d.createElement)("strong",null,"370")),Object(d.createElement)("li",null,"Gen 1 Collections: ",Object(d.createElement)("strong",null,"186")),Object(d.createElement)("li",null,"Finalization Survivors: ",Object(d.createElement)("strong",null,"1279")),Object(d.createElement)("li",null,"Total Bytes Allocated: ",Object(d.createElement)("strong",null,"749.18MB")))),Object(d.createElement)("p",null,"Yikes! That's a lot of allocations. Now, 186 Gen-1 is no small task. Infact, even if we ignore the fact that its Gen-1, and total all of them as Gen-0, its ",Object(d.createElement)("code",null,"370+186=556")," collections. That's ",Object(d.createElement)("strong",null,"one GC collection every 180 messages!"),". And so, ",Object(d.createElement)("strong",null,"totally it allocates three-quarters of a gigabyte of memory for nothing, but just to process the messages")," - Add your application logic on top of that - not just for allocations, but also for GCs and more importantly, more of those from Gen 0 could very well have been promoted to Gen 1."),Object(d.createElement)("p",null,"Clearly, that's a lot of stuff that's going on. Let's just look at a little more data."),Object(d.createElement)("p",null,Object(d.createElement)("img",{className:"img-fluid",src:c("./src/posts/2016/10/data/gc-comp-winforms-stat.jpg"),alt:"[Image]"})),Object(d.createElement)("div",{className:"note"},Object(d.createElement)("ul",{className:"list-unstyled list-dashed m-0"},Object(d.createElement)("li",null,"Cycles: ",Object(d.createElement)("strong",null,"514,070,543,274")),Object(d.createElement)("li",null,"Kernel time: ",Object(d.createElement)("strong",null,"2m:48s")),Object(d.createElement)("li",null,"User time: ",Object(d.createElement)("strong",null,"0m:46s")),Object(d.createElement)("li",null,"Total time: ",Object(d.createElement)("strong",null,"3m:34s")),Object(d.createElement)("li",null,"Page faults: ",Object(d.createElement)("strong",null,"1,119,365")))),Object(d.createElement)("p",null,"Note that while the ",Object(d.createElement)("code",null,"page faults")," here is just the soft faults, it still means certain CPU caches will have to invalidated a lot more. We'll just leave it here. That's sufficient information for making a rough estimate. Let's move on."),Object(d.createElement)("h3",null,"The WinApi.Windows program"),Object(d.createElement)("p",null,"Now the same thing with WinApi,"),Object(d.createElement)(f.b,{lang:"csharp",children:"\nclass Program\n{\n    static int Main(string[] args)\n    {\n        ApplicationHelpers.SetupDefaultExceptionHandlers();\n        try\n        {\n            var factory = WindowFactory.Create();\n            using (var win = factory.CreateWindow(() => new MainWindow(),\n                \"Hello\", constructionParams: \n                    new FrameWindowConstructionParams()))\n            {\n                win.Show();\n                return new EventLoop().Run(win);\n            }\n        }\n        catch (Exception ex) {\n            ApplicationHelpers.ShowCriticalError(ex);\n        }\n        return 0;\n    }\n\n    public sealed class MainWindow : EventedWindowCore\n    {\n        private const int Iterations = 100000;\n\n        private readonly HorizontalStretchLayout m_layout = \n                new HorizontalStretchLayout();\n        private bool m_done;\n        private DateTime m_endTime;\n        private DateTime m_startTime;\n        private Task m_task;\n        private StaticBox m_textBox1;\n        private NativeWindow m_textBox2;\n        private int m_times;\n\n        protected override void OnCreate(ref CreateWindowPacket packet)\n        {\n\n            this.m_textBox1 = StaticBox.Create(hParent: this.Handle,\n                styles: WindowStyles.WS_CHILD | WindowStyles.WS_VISIBLE, \n                exStyles: 0);\n\n            // You can use this to create the static box like this as well. \n            // But there's rarely any performance benefit in doing so, and\n            // this doesn't have a WindowProc that's connected.\n            this.m_textBox2 = WindowFactory.CreateExternalWindow(\"static\",\n                hParent: this.Handle,\n                styles: WindowStyles.WS_CHILD | WindowStyles.WS_VISIBLE,\n                exStyles: 0);\n\n            this.m_layout.ClientArea = this.GetClientRect();\n            this.m_layout.Margin = new Rectangle(10, 10, 10, 10);\n            this.m_layout.Children.Add(this.m_textBox1);\n            this.m_layout.Children.Add(this.m_textBox2);\n            this.m_layout.PerformLayout();\n\n            var r = new Random();\n\n            this.m_task = Task.Run(() =>\n            {\n                while (this.m_times < Iterations)\n                {\n                    this.m_times++;\n                    this.SetPosition(50, 50,\n                        1200 - r.Next(0, 1100),\n                        900 - r.Next(0, 800));\n                }\n                this.m_endTime = DateTime.Now;\n                this.m_done = true;\n                this.SetPosition(50, 50, 700, 500);\n            });\n            this.m_startTime = DateTime.Now;\n            base.OnCreate(ref packet);\n        }\n\n        protected override void OnSize(ref SizePacket packet)\n        {\n            var size = packet.Size;\n            this.m_layout.SetSize(ref size);\n\n            base.OnSize(ref packet);\n\n            if (!this.m_done) return;\n\n            var str = $\"\\r\\n{DateTime.Now}: No. of changes done: {this.m_times}\";\n            this.m_textBox1.SetText(str);\n\n            var sb = new StringBuilder();\n\n            sb.AppendLine($\"Start Time: {this.m_startTime}\");\n            sb.AppendLine($\"End Time: {this.m_endTime}\");\n            sb.AppendLine();\n\n            if (this.m_endTime != DateTime.MinValue) \n                sb.AppendLine($\"Total Time: {this.m_endTime - this.m_startTime}\");\n            this.m_textBox2.SetText(sb.ToString());\n        }\n    }\n}\n"}),Object(d.createElement)("p",null,"There we go. It does exactly what the WinForms application does. Now, lets run this and see the results."),Object(d.createElement)("p",null,Object(d.createElement)("img",{className:"img-fluid",src:c("./src/posts/2016/10/data/gc-comp-winapi.jpg"),alt:"[Image]"})),Object(d.createElement)("p",null,"It took about ",Object(d.createElement)("code",null,"3 minutes and 16 seconds"),". That's ",Object(d.createElement)("strong",null,"over a minute faster!"),". ",Object(d.createElement)("br",null),"So, something clearly is more efficient. But why? Let's take a look at the memory stats."),Object(d.createElement)("p",null,Object(d.createElement)("img",{className:"img-fluid",src:c("./src/posts/2016/10/data/gc-comp-winapi-stat-clr.jpg"),alt:"[Image]"})),Object(d.createElement)("div",{className:"note"},Object(d.createElement)("ul",{className:"list-unstyled list-dashed m-0"},Object(d.createElement)("li",null,"Gen 0 Collections: ",Object(d.createElement)("strong",null,"0")),Object(d.createElement)("li",null,"Gen 1 Collections: ",Object(d.createElement)("strong",null,"0")),Object(d.createElement)("li",null,"Finalization Survivors: ",Object(d.createElement)("strong",null,"0")),Object(d.createElement)("li",null,"Total Bytes Allocated: ",Object(d.createElement)("strong",null,"0")))),Object(d.createElement)("p",null,"What!? To be candid, this is quite misleading, though its ",Object(d.createElement)("em",null,"kinda")," true. I use the excellent ",Object(d.createElement)("code",null,"Process Hacker")," to collect the details of the CLR. However, the way this works is that, its needs to do a GC in order to get these statistics. But what happened here, is that a GC never took place. 100k message loops, but not even a single GC has happened!. That's really cool. Now we're barking up the C/C++ tree, and in style :)"),Object(d.createElement)("p",null,"Let's look at the other bits of data."),Object(d.createElement)("p",null,Object(d.createElement)("img",{className:"img-fluid",src:c("./src/posts/2016/10/data/gc-comp-winapi-stat.jpg"),alt:"[Image]"})),Object(d.createElement)("div",{className:"note"},Object(d.createElement)("ul",{className:"list-unstyled list-dashed m-0"},Object(d.createElement)("li",null,"Cycles: ",Object(d.createElement)("strong",null,"328,556,899,144")),Object(d.createElement)("li",null,"Kernel time: ",Object(d.createElement)("strong",null,"1m:58s")),Object(d.createElement)("li",null,"User time: ",Object(d.createElement)("strong",null,"0m:15s")),Object(d.createElement)("li",null,"Total time: ",Object(d.createElement)("strong",null,"2m:14s")),Object(d.createElement)("li",null,"Page faults: ",Object(d.createElement)("strong",null,"5494")))),Object(d.createElement)("p",null,"Here most of the stuff, including the ",Object(d.createElement)("code",null,"Cycles")," doesn't interest us much, since we already know that from the timing. While these aren't very accurate (since there could have been a small difference when the application has been running beyond the life time of the test), it isn't in anyway going to skew our results. Evidently, WinApi has been highly efficient. But why? Look at the ",Object(d.createElement)("code",null,"Page faults"),". Its a mere 5.5k as opposed to the 1 million 120 thousand that happened with windows forms. That should give a clue. By using the stack for almost everything, leaving the GC entirely for your application, ",Object(d.createElement)("code",null,"WinApi takes the C#/.NET Win32 desktop applications right into the C++ performance arena"),"."),Object(d.createElement)("h2",null,"What WinApi.Windows doesn't do"),Object(d.createElement)("p",null,"While you can do everything right on top WinApi, you'll have to do the layout, and control subclassing all by yourself. Actually, that's only major feature set that's missing from ",Object(d.createElement)("code",null,"WinApi"),", that WinForms can do."),Object(d.createElement)("p",null,"Providing a set of base interfaces, and base classes, even in parity with WinForms's ",Object(d.createElement)("code",null,"IControl")," shouldn't be too time consuming. However, the reason I haven't written them is I have no intent to even try to provide a replacement for ",Object(d.createElement)("code",null,"WinForms"),", which already does what its designed to do quite well. My intent with this project is not a GUI library, but rather a lean, light and efficient native interop layer."),Object(d.createElement)("p",null,"If you want to build your own modern toolkit with technologies like ",Object(d.createElement)("code",null,"Direct2D"),", ",Object(d.createElement)("code",null,"Skia"),", etc, this should serve as the perfect foundation on Windows, and a low level way to interact with the OS."),Object(d.createElement)("p",null,Object(d.createElement)("code",null,"WinApi.Windows.Controls")," provides some basic controls like ",Object(d.createElement)("code",null,"Button"),", ",Object(d.createElement)("code",null,"Edit")," and ",Object(d.createElement)("code",null,"Static")," - but its more of a sample library on how to write GDI based controls at this stage, than an actual usable library. Today, we tend to build using the more modern libraries like ",Object(d.createElement)("code",null,"Direct2D")," and ",Object(d.createElement)("code",null,"Skia")," (WPF, and Windows Runtime XAML for example, both sit on top of DirectX) - not the aged GDI."))}}});