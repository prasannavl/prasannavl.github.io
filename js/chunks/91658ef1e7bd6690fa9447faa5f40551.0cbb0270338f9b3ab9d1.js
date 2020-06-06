webpackJsonp(["91658ef1e7bd6690fa9447faa5f40551"],{"./src/components/Article.jsx":function(a,b,c){"use strict";function d(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var h=c("./node_modules/react/index.js"),i=c.n(h),j=c("./src/components/Head.jsx"),k=c("./node_modules/date-fns/format/index.js"),l=c.n(k),m=c("./src/modules/prism.worker.js"),n=c.n(m),o=c("./node_modules/classnames/index.js"),p=c.n(o),q=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},r=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),s=function(a){function b(a){e(this,b);var c=f(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={code:null},c.workerState=null,c.workerTask=null,c.worker=null,c}return g(b,a),r(b,[{key:"highlight",value:function(a){var b=this,c=a.children,d=a.lang;if(d){c=this.trimChildString(c);var e=this.workerTask=this.worker.highlight({code:c.toString(),lang:d}).then(function(a){e===b.workerTask&&b.setState({code:a})}).catch(function(a){return console.log(a)})}}},{key:"componentWillMount",value:function(){window.highlightWorkerState||(window.highlightWorkerState={worker:new n.a,ref:0}),this.workerState=window.highlightWorkerState,this.workerState.ref++,this.worker=this.workerState.worker,this.highlight(this.props)}},{key:"componentDidUpdate",value:function(a){this.props!=a&&this.highlight(a)}},{key:"componentWillUnmount",value:function(){this.workerState.ref--,0===this.workerState.ref&&(this.worker.terminate(),window.highlightWorkerState=null),this.workerTask=null,this.workerState=null,this.worker=null}},{key:"trimChildString",value:function(a){return"string"==typeof a&&a.startsWith("\n")?a.trim():a}},{key:"render",value:function(){var a=this.props,b=a.children,c=a.lang,e=a.className,f=d(a,["children","lang","className"]);b=this.state.code?this.state.code:this.trimChildString(b);var g=-1===b.indexOf("\n"),i=p()(e,{"single-line":g}),j=void 0;return j=i?{className:i}:{},Object(h.createElement)("pre",q({},f,j),Object(h.createElement)("code",{dangerouslySetInnerHTML:{__html:b}}))}}]),b}(i.a.Component),t=c("./src/components/Link.jsx");c.d(b,"a",function(){return u}),c.d(b,"b",function(){return s}),c.d(b,"c",function(){return t.a}),c.d(b,!1,function(){});var u=function(a){var b=a.title,c=a.date,d=a.modifiedDate,e=a.image,f=a.type,g=a.children,i=a.note,k="Prasanna Loganathar",m=a.description||(i?"Prasanna's personal notes on ":"Prasanna's blog article published on ")+new Date(c).toUTCString(),n=window.location.pathname.startsWith("/drafts");return Object(h.createElement)("article",null,Object(h.createElement)(j.b,null,b),Object(h.createElement)(j.c,{title:b,description:m,image:e}),Object(h.createElement)(j.a,{title:b,description:m,image:e,url:window.location.href,type:f||"article",author:k,time:c,modifiedTime:d}),Object(h.createElement)("header",{className:"mb-4"},Object(h.createElement)("h1",{className:"title",rel:"title"},b),Object(h.createElement)("p",{className:"d-none",rel:"author"},k),Object(h.createElement)("p",{className:"small text-muted",rel:"date"},Object(h.createElement)("time",{dateTime:c},l()(new Date(c),"dddd, Do MMM YYYY")))),n&&Object(h.createElement)("p",{className:"note-red"},"This is a ",Object(h.createElement)("strong",null,"draft")," - a work in progress. It's not yet meant for public consumption till it's published."),a.note&&Object(h.createElement)("p",{className:"note"},"This item is marked as a ",Object(h.createElement)("code",null,"note"),". ",Object(h.createElement)("em",null,"Notes")," are my personal archive of mostly tiny bits of information that serve as reference. It ",Object(h.createElement)("strong",null,"may or may not")," be accurate. ",Object(h.createElement)("strong",null,"You have been warned"),"."),g)}},"./src/modules/prism.worker.js":function(a,b,c){var d=c("./node_modules/workerize-loader/dist/rpc-wrapper.js"),e=["highlight"];a.exports=function(){var a=new Worker(c.p+"js/workers/main.f7818a85dcc0292261c3.worker.js",{name:"js/workers/[id].[chunkhash].worker.js"});return d(a,e),a}},"./src/posts/2016/10/introducing-winapi-the-evolution.jsx":function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),c.d(b,"meta",function(){return g});var d=c("./node_modules/react/index.js"),e=c.n(d),f=c("./src/components/Article.jsx"),g={title:"Introducing WinApi: The Evolution",date:"2016-10-22T13:51:30.195Z",tags:["windows","dotnet"],featured:!0,description:"Article on WinApi - Part 1"};b["default"]=function(){return Object(d.createElement)(f.a,g,Object(d.createElement)("p",null,Object(d.createElement)("b",null,"GitHub: "),Object(d.createElement)("a",{href:"https://github.com/prasannavl/WinApi"},"WinApi")),Object(d.createElement)("p",null,"The Windows API is over two decades old - yet one of the most used APIs that has stood the test of time. In today's short lived software world, you don't see a lot of user mode public APIs that stay the same for even a short time. But even a program that was written 20 years ago (assuming only the official and documented APIs by Microsoft were used) will run spot-on as intended, with almost no changes - That's quite cool if you think about it. You can't say that even about some of the oldest user mode UNIX APIs. It's a testimony to the well-design architecture and the amount of work Microsoft put into compatibility while modernizing everything both underneath, and above it, while keeping the core user mode APIs exactly the same."),Object(d.createElement)("h2",null,"The good old C-lang way"),Object(d.createElement)("p",null,"A ",Object(d.createElement)("code",null,"Hello World")," of Windows, in C today, would resemble something like this below."),Object(d.createElement)(f.b,{lang:"c",children:"\n#define UNICODE\n#define _UNICODE\n#define WIN32_LEAN_AND_MEAN\n\n#include <windows.h>\n#include <iostream>\n\nint WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance,\n        PWSTR pCmdLine, int nCmdShow);\nLRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam,\n        LPARAM lParam);\n\nint wmain()\n{\n    wWinMain(nullptr, nullptr, nullptr, 0);\n}\n\nint WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, \n    PWSTR pCmdLine, int nCmdShow)\n{\n    WNDCLASSEX wc = { 0 };\n    wc.hInstance = hInstance;\n    wc.lpszClassName = L\"MainWindow\";\n    wc.cbSize = sizeof(WNDCLASSEX);\n    wc.hIcon = LoadIcon(nullptr, IDI_APPLICATION);\n    wc.hCursor = LoadCursor(nullptr, IDC_ARROW);\n    wc.style = CS_HREDRAW | CS_VREDRAW;\n    wc.lpfnWndProc = WindowProc;\n    auto regRes = RegisterClassEx(&wc);\n    if (!regRes)\n    {\n        std::cerr << \"window registration failed\" << std::endl;\n        return regRes;\n    }\n    auto hwnd = CreateWindowEx(0, wc.lpszClassName, L\"Hello\", \n        WS_OVERLAPPEDWINDOW, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT,\n        CW_USEDEFAULT, nullptr, nullptr, hInstance, nullptr);\n    if (hwnd == nullptr)\n    {\n        std::cerr << \"window couldn't be created\" << std::endl;\n        return -1;\n    }\n\n    ShowWindow(hwnd, SW_SHOWNORMAL);\n\n    MSG msg = {};\n    while (GetMessage(&msg, nullptr, 0, 0))\n    {\n        TranslateMessage(&msg);\n        DispatchMessage(&msg);\n    }\n    return 0;\n}\n\nLRESULT HandleDestroy(HWND hWnd)\n{\n    PostQuitMessage(0);\n    return 0;\n}\n\nLRESULT HandlePaint(HWND hwnd)\n{\n    PAINTSTRUCT ps;\n    auto hdc = BeginPaint(hwnd, &ps);\n    FillRect(hdc, &ps.rcPaint, (HBRUSH)(COLOR_WINDOW));\n    EndPaint(hwnd, &ps);\n    return 0;\n}\n\nLRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam)\n{\n    switch (uMsg)\n    {\n    case WM_ERASEBKGND:\n        return 1;\n    case WM_DESTROY:\n        return HandleDestroy(hwnd);\n    case WM_PAINT:\n        return HandlePaint(hwnd);\n    }\n    return DefWindowProc(hwnd, uMsg, wParam, lParam);\n}\n        "}),Object(d.createElement)("p",null,"Unfortunately, about half the programmers I meet today never use this kind of code, and even less knew exactly what each codepath did underneath - They were simply never accustomed to writing low-level code. While the above is not assembly, it may still show some age. However, it's still the most performant and the most reliable way to run software on the Windows ecosystem. While frameworks on top it - MFC, WinForms, WPF, and the more modern Windows Runtime all provide great convenience, its the raw APIs that you end up dipping into inevitably in more than just a few scenarios. Until Windows Runtime came along, ATL/WTL has been the most fantastic of all - Not because it provides some unmatched great feature, but because it stays closest to bare metal, and yet managed to provide a very clever way of writing code, productively and with high-efficiency. It essentially translates almost exactly into code similar to the above right before compilation."),Object(d.createElement)("h2",null,"The C++ way"),Object(d.createElement)("p",null,"So, here's how the same piece of code in ATL/WTL today, with modern C++:"),Object(d.createElement)(f.b,{lang:"cpp",children:"\n#define UNICODE\n#define _UNICODE\n#define WIN32_LEAN_AND_MEAN\n#include <windows.h>\n\n#include <wrl.h>\n#include <atlbase.h>\n#include <atlapp.h>\n#include <atlwin.h>\n#include <atlmisc.h>\n#include <atlcrack.h>\n\nclass CAppWindow : public CWindowImpl<CAppWindow, CWindow, CFrameWinTraits>\n{\nprivate:\n    BEGIN_MSG_MAP(CAppWindow)\n        MSG_WM_DESTROY(OnDestroy)\n        MSG_WM_PAINT(OnPaint)\n        MSG_WM_ERASEBKGND(OnEraseBkgnd)\n    END_MSG_MAP()\n\npublic:\n    DECLARE_WND_CLASS_EX(nullptr, 0, -1)\n    int Run();\n\nprotected:\n    void OnDestroy();\n    LRESULT OnEraseBkgnd(HDC hdc);\n    void OnPaint(HDC hdc);\n};\n\nint CAppWindow::Run()\n{\n    auto hwnd = Create(0, 0, L\"Hello\");\n    ShowWindow(SW_SHOWNORMAL);\n    MSG msg;\n    BOOL result;\n    while (result = GetMessage(&msg, 0, 0, 0))\n    {\n        if (result == -1)\n            return GetLastError();\n        TranslateMessage(&msg);\n        DispatchMessage(&msg);\n    }\n    return 0;\n}\n\nvoid CAppWindow::OnDestroy()\n{\n    PostQuitMessage(0);\n}\n\nLRESULT CAppWindow::OnEraseBkgnd(HDC hdc)\n{\n    SetMsgHandled(true);\n    return 1;\n}\n\nvoid CAppWindow::OnPaint(HDC hdc)\n{\n    PAINTSTRUCT ps;\n    BeginPaint(&ps);\n    FillRect(hdc, &ps.rcPaint, (HBRUSH)COLOR_WINDOW);\n    EndPaint(&ps);\n    SetMsgHandled(true);\n}\n\nint wWinMain(HINSTANCE hInstance, HINSTANCE, LPWSTR, int)\n{\n    CAppWindow win;\n    return win.Run();\n}\n    "}),Object(d.createElement)("p",null,"Far better. However, it does show its age. Nonetheless, its as good as it gets when you want to stick to C/C++, and is also the approach I'd recommend today for native applications, unless you switch over to the more modern Windows Runtime."),Object(d.createElement)("h2",null,"What has changed today"),Object(d.createElement)("p",null,"In modern software, some of the most overlooked pieces of technology are the compilers, JIT, code analyzers and optimizers. They are not what they were 10 years ago, or what people tend to learn in schools, not even the most advanced courses in the best of schools have today's architecture. With technologies like ",Object(d.createElement)("code",null,"LLVM"),", ",Object(d.createElement)("code",null,"Roslyn"),", ",Object(d.createElement)("code",null,"RyuJIT")," - They're fundamentally very different and far more advanced than most imagine. Its practically the Batman of modern computing - The most appropriate way to describe would be this quote from the ",Object(d.createElement)("em",null,"Dark Knight"),":"),Object(d.createElement)("blockquote",{className:"blockquote note"},"The silent guardian, a watchful protector.",Object(d.createElement)("footer",{className:"blockquote-footer"},Object(d.createElement)("cite",null,"The Dark Knight"))),Object(d.createElement)("p",null,"Not just figuratively, but they are quite literally the guardians and protectors of memory safety. They are what created the world as it is today, with people across the globe being able to create great things even with no knowledge of the core APIs underneath (That's both advantageous, and disastrous. I'd say its ",Object(d.createElement)("code",null,"one of the reasons why a majority of the softwares are still so inconsistent with questionable reliability, and even worse - making unreliability the socially acceptable norm"),"). On the other hand, it has given an opportunity for a great many number of inventions, since it lowered the learning curve exponentially - which would have been cumbersome otherwise and restricted high-grade software to an elite few."),Object(d.createElement)("p",null,"When many of these were designed a few years ago, it was generally found to be pleasant that the these abstractions hid away everything underneath. But the fact is, it diverged the application ecosystem into many forked paths, each with its own learning curve, complications, and deviations. Windows APIs got older, less used directly."),Object(d.createElement)("h2",null,"Enter the CLR, ",Object(d.createElement)("span",null,"C#")),Object(d.createElement)("p",null,"It should be obvious now that the CLR is like Batman in the managed Windows world. The CLR is the one protecting you from shooting yourself in your feet. But there's a very astutue change, that most other managed languages like Java, Python or Javascript was never designed to do - You can tell the CLR - ",Object(d.createElement)("code",null,"Hey, I know what I'm doing - If I shoot my self in the feet, I'm doing it for a reason"),". With the so called ",Object(d.createElement)("code",null,"unsafe")," context, the CLR steps completely out of the way, trusting you implicitly. Pointer arithmetic, reinterpretation casts, you can do it all. Sometimes, even Bruce Wayne needs to be taught he is not always right. It allows you to play Alfred, and to make very personal choices for the Bat."),Object(d.createElement)("p",null,"With the CLR, came WinForms - Microsoft's recommended way of accessing the Windows API with the CLR. If you take a peek into the history, WinForms was designed with one great purpose - To make the Windows API cool again. It was to use the CLR to provide a very neat way of writing code where the memory is (almost) entirely managed by the CLR. However, there were also decisions made, to abstract things much further than just memory, and create another ecosystem that have no resemblance to the native layers underneath - And it was a great decision to do so, at that time. While Java is just a historic footnote to the .NET community today, with C# on CLR far exceeding the productivity and efficiency of the Java ecosystem, it still probably owes its thanks to Java in its initial stages, where it picked up those traits."),Object(d.createElement)("p",null,"And soon, the above code, looked something like this:"),Object(d.createElement)(f.b,{lang:"csharp",children:"\ninternal static class Program\n{\n    [STAThread]\n    static void Main()\n    {\n        Application.EnableVisualStyles();\n        Application.SetCompatibleTextRenderingDefault(false);\n        Application.Run(new MainWindow());\n    }\n}\n\npublic partial class MainWindow : Form\n{\n    public MainWindow()\n    {\n        InitializeComponent();\n    }\n}\n    "}),Object(d.createElement)("p",null,"Looks much nicer. But lets get the fact that this is not C++ out of the way first - in most scenarios the advanced capabilities really aren't required and you can always use C++ when you really need and simply PInvoke even though ",Object(d.createElement)("code",null,"a C# idiomatic high-performance solution almost always exists as well - with techniques like memory pooling, structs, and stackalloc"),". Because, when you realize you need such optimizations especially memory pooling, chances are C/C++ would benefit with memory pooling as well. And ",Object(d.createElement)("strong",null,"once you start efficiently pooling memory and reducing the GC pressure, the performance differences between the two languages start to disappear for the most part"),". That aside, there are still some inherent problems."),Object(d.createElement)("p",null,"Even though it used all the native layers, ",Object(d.createElement)("code",null,"it provided no way to use any of them directly without going through the abstractions")," - which actually makes a lot of sense since you want new APIs to be built on the abstractions, not the layers below. But fast-forward a decade later - and its not exactly as appealing as it once was. While most of the abstractions make sense, the inability to access the native layers without a whole bunch of redundant PInvoke isn't."),Object(d.createElement)("p",null,"This also comes with the GC tax - ",Object(d.createElement)("code",null,"Every message sent to a Windows Message Loop, ends up adding pressure to GC"),". While much of this is very well optimized today, and practically a non-issue - for high-performance scenarios like games, and high-frame rate AV, it does come into significance."),Object(d.createElement)("p",null,"However, the most important problem - ",Object(d.createElement)("code",null,"it deviates from the raw Windows API"),". For example, it introduces concepts like ",Object(d.createElement)("code",null,"ControlStyles"),", which changes the behavior which in many occasions is completely different from how the raw Windows API handles it. There are many circumstances where the default behavior changes, even though subtle and small - ",Object(d.createElement)("code",null,"it adds up, and now you have to learn a whole new API and understand its quirks"),". It also uses GDI+, which is not always required, when you either just want the GDI for simple optimized tasks, or you use DirectX. And its adds quite a few hefty system images as dependencies."),Object(d.createElement)("h2",null,"Enter WinApi"),Object(d.createElement)("p",null,"Apart from WinForms, there's really no other idiomatic way to access the Windows API from C#. That's quite disconcerting if you don't want to pay the prices mentioned above. Well, there's WPF - but that's a parallel framework, which is built off Direct2D and Direct3D technologies, instead of GDI plus that WinForms relies on. It doesn't really concern itself with the Windows API."),Object(d.createElement)("p",null,"What if you'd like to combine, GDI, DirectX, and GDI plus. There's no clean way to do this in .NET. But a more practical requirement, is you want to control the underlying graphics technology, and use a framework like Cario, Skia or raw DirectX."),Object(d.createElement)("p",null,"All of this brought me to this - ",Object(d.createElement)("strong",null,"We need a clean, stable way to access the Windows API from .NET.")," And along the way, I also decided to solve the above mentioned issues with WinForms."),Object(d.createElement)("p",null,"And that brings us to ",Object(d.createElement)("code",null,"WinApi")," which ultimately lets you do this below, while solving all of the problems above:"),Object(d.createElement)(f.b,{lang:"csharp",children:"\nstatic int Main(string[] args)\n{\n    using (var win = Window.Create(text: \"Hello\"))\n    {\n        win.Show();\n        return new EventLoop().Run(win);\n    }\n}\n    "}),Object(d.createElement)("p",null,"I'll discuss more about how it solves the problems, and how to use it in the next article."))}}});