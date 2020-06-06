webpackJsonp(["9c342dd06dc4856b348f078fbbe72434"],{"./src/components/Article.jsx":function(a,b,c){"use strict";function d(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var h=c("./node_modules/react/index.js"),i=c.n(h),j=c("./src/components/Head.jsx"),k=c("./node_modules/date-fns/format/index.js"),l=c.n(k),m=c("./src/modules/prism.worker.js"),n=c.n(m),o=c("./node_modules/classnames/index.js"),p=c.n(o),q=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},r=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),s=function(a){function b(a){e(this,b);var c=f(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.state={code:null},c.workerState=null,c.workerTask=null,c.worker=null,c}return g(b,a),r(b,[{key:"highlight",value:function(a){var b=this,c=a.children,d=a.lang;if(d){c=this.trimChildString(c);var e=this.workerTask=this.worker.highlight({code:c.toString(),lang:d}).then(function(a){e===b.workerTask&&b.setState({code:a})}).catch(function(a){return console.log(a)})}}},{key:"componentWillMount",value:function(){window.highlightWorkerState||(window.highlightWorkerState={worker:new n.a,ref:0}),this.workerState=window.highlightWorkerState,this.workerState.ref++,this.worker=this.workerState.worker,this.highlight(this.props)}},{key:"componentDidUpdate",value:function(a){this.props!=a&&this.highlight(a)}},{key:"componentWillUnmount",value:function(){this.workerState.ref--,0===this.workerState.ref&&(this.worker.terminate(),window.highlightWorkerState=null),this.workerTask=null,this.workerState=null,this.worker=null}},{key:"trimChildString",value:function(a){return"string"==typeof a&&a.startsWith("\n")?a.trim():a}},{key:"render",value:function(){var a=this.props,b=a.children,c=a.lang,e=a.className,f=d(a,["children","lang","className"]);b=this.state.code?this.state.code:this.trimChildString(b);var g=-1===b.indexOf("\n"),i=p()(e,{"single-line":g}),j=void 0;return j=i?{className:i}:{},Object(h.createElement)("pre",q({},f,j),Object(h.createElement)("code",{dangerouslySetInnerHTML:{__html:b}}))}}]),b}(i.a.Component),t=c("./src/components/Link.jsx");c.d(b,"a",function(){return u}),c.d(b,"b",function(){return s}),c.d(b,"c",function(){return t.a}),c.d(b,!1,function(){});var u=function(a){var b=a.title,c=a.date,d=a.modifiedDate,e=a.image,f=a.type,g=a.children,i=a.note,k="Prasanna Loganathar",m=a.description||(i?"Prasanna's personal notes on ":"Prasanna's blog article published on ")+new Date(c).toUTCString(),n=window.location.pathname.startsWith("/drafts");return Object(h.createElement)("article",null,Object(h.createElement)(j.b,null,b),Object(h.createElement)(j.c,{title:b,description:m,image:e}),Object(h.createElement)(j.a,{title:b,description:m,image:e,url:window.location.href,type:f||"article",author:k,time:c,modifiedTime:d}),Object(h.createElement)("header",{className:"mb-4"},Object(h.createElement)("h1",{className:"title",rel:"title"},b),Object(h.createElement)("p",{className:"d-none",rel:"author"},k),Object(h.createElement)("p",{className:"small text-muted",rel:"date"},Object(h.createElement)("time",{dateTime:c},l()(new Date(c),"dddd, Do MMM YYYY")))),n&&Object(h.createElement)("p",{className:"note-red"},"This is a ",Object(h.createElement)("strong",null,"draft")," - a work in progress. It's not yet meant for public consumption till it's published."),a.note&&Object(h.createElement)("p",{className:"note"},"This item is marked as a ",Object(h.createElement)("code",null,"note"),". ",Object(h.createElement)("em",null,"Notes")," are my personal archive of mostly tiny bits of information that serve as reference. It ",Object(h.createElement)("strong",null,"may or may not")," be accurate. ",Object(h.createElement)("strong",null,"You have been warned"),"."),g)}},"./src/modules/prism.worker.js":function(a,b,c){var d=c("./node_modules/workerize-loader/dist/rpc-wrapper.js"),e=["highlight"];a.exports=function(){var a=new Worker(c.p+"js/workers/main.f7818a85dcc0292261c3.worker.js",{name:"js/workers/[id].[chunkhash].worker.js"});return d(a,e),a}},"./src/posts/2016/10/introducing-winapi-basics.jsx":function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),c.d(b,"meta",function(){return g});var d=c("./node_modules/react/index.js"),e=c.n(d),f=c("./src/components/Article.jsx"),g={title:"Introducing WinApi: Basics",date:"2016-10-22T14:01:11.533Z",tags:["dotnet","windows"],featured:!0,description:"Article on WinApi - Part 2"};b["default"]=function(){return Object(d.createElement)(f.a,g,Object(d.createElement)("p",null,Object(d.createElement)("b",null,"GitHub: "),Object(d.createElement)("a",{href:"https://github.com/prasannavl/WinApi"},"WinApi")),Object(d.createElement)("p",null,"In the previous article ",Object(d.createElement)(f.c,{to:"/2016/10/introducing-winapi-the-evolution/"},"here"),", I discussed the evolution of programs that use the Windows API with C/C++ and C# snippets, and it ultimately ended out with this C# snippet:"),Object(d.createElement)(f.b,{lang:"csharp",children:"\nstatic int Main(string[] args)\n{\n    using (var win = Window.Create(text: \"Hello\"))\n    {\n        win.Show();\n        return new EventLoop().Run(win);\n    }\n}\n        "}),Object(d.createElement)("p",null,"Yup. That's fully functional code that works. Just add references to ",Object(d.createElement)("code",null,"WinApi"),", and ",Object(d.createElement)("code",null,"WinApi.Controls")," which are both ",Object(d.createElement)("code",null,"less than 150kb")," combined, and it'll do what its excepted to do. However, before I get into samples that look nifty, let's look at a precise translation of the C/C++ program in the previous article, without the use of the ",Object(d.createElement)("code",null,"Window")," abstraction that ",Object(d.createElement)("code",null,"WinApi")," provides in the helper namespace ",Object(d.createElement)("code",null,"WinApi.Windows"),"."),Object(d.createElement)("p",null,"A very raw program that uses the Windows API would look like this:"),Object(d.createElement)(f.b,{lang:"csharp",children:"\nusing System;\nusing System.Runtime.InteropServices;\nusing WinApi.Gdi32;\nusing WinApi.Kernel32;\nusing WinApi.User32;\n\nnamespace Sample.Win32\n{\n    internal class Program\n    {\n        static int Main(string[] args)\n        {\n            var instanceHandle = Kernel32Methods.GetModuleHandle(IntPtr.Zero);\n\n            var wc = new WindowClassEx\n            {\n                Size = (uint) Marshal.SizeOf<WindowClassEx>(),\n                ClassName = \"MainWindow\",\n                CursorHandle = User32Helpers.LoadCursor(IntPtr.Zero, SystemCursor.IDC_ARROW),\n                IconHandle = User32Helpers.LoadIcon(IntPtr.Zero, SystemIcon.IDI_APPLICATION),\n                Styles = WindowClassStyles.CS_HREDRAW | WindowClassStyles.CS_VREDRAW,\n                BackgroundBrushHandle = new IntPtr((int) StockObject.WHITE_BRUSH),\n                WindowProc = WindowProc,\n                InstanceHandle = instanceHandle\n            };\n\n            var resReg = User32Methods.RegisterClassEx(ref wc);\n            if (resReg == 0)\n            {\n                Console.Error.WriteLine(\"registration failed\");\n                return -1;\n            }\n\n            var hwnd = User32Methods.CreateWindowEx(WindowExStyles.WS_EX_APPWINDOW,\n                wc.ClassName, \"Hello\", WindowStyles.WS_OVERLAPPEDWINDOW,\n                (int) CreateWindowFlags.CW_USEDEFAULT, (int) CreateWindowFlags.CW_USEDEFAULT,\n                (int) CreateWindowFlags.CW_USEDEFAULT, (int) CreateWindowFlags.CW_USEDEFAULT,\n                IntPtr.Zero, IntPtr.Zero, instanceHandle, IntPtr.Zero);\n\n            if (hwnd == IntPtr.Zero)\n            {\n                Console.Error.WriteLine(\"window creation failed\");\n                return -1;\n            }\n\n            User32Methods.ShowWindow(hwnd, ShowWindowCommands.SW_SHOWNORMAL);\n            User32Methods.UpdateWindow(hwnd);\n\n            Message msg;\n            int res;\n            while ((res = User32Methods.GetMessage(out msg, IntPtr.Zero, 0, 0)) != 0)\n            {\n                User32Methods.TranslateMessage(ref msg);\n                User32Methods.DispatchMessage(ref msg);\n            }\n\n            return res;\n        }\n\n        private static IntPtr WindowProc(IntPtr hwnd, uint umsg,\n            IntPtr wParam, IntPtr lParam)\n        {\n            var msg = (WM) umsg;\n            switch (msg)\n            {\n                case WM.ERASEBKGND:\n                    return new IntPtr(1);\n                case WM.CLOSE:\n                {\n                    User32Methods.PostQuitMessage(0);\n                    break;\n                }\n                case WM.PAINT:\n                {\n                    PaintStruct ps;\n                    var hdc = User32Methods.BeginPaint(hwnd, out ps);\n                    User32Methods.FillRect(hdc, ref ps.PaintRect,\n                        Gdi32Helpers.GetStockObject(StockObject.WHITE_BRUSH));\n                    User32Methods.EndPaint(hwnd, ref ps);\n                    break;\n                }\n            }\n            return User32Methods.DefWindowProc(hwnd, umsg, wParam, lParam);\n        }\n    }\n}\n        "}),Object(d.createElement)("p",null,"Why would one do this? Because you can. You have no reason to go this really tedious way, however - if you want you always can. The primary function of ",Object(d.createElement)("code",null,"WinApi")," is after-all to provide a clean high-performance interop story."),Object(d.createElement)("p",null,"It does exactly what the previous C/C++ programs did. There's no additional GC pressure, other than loading the CLR before the initialization of ",Object(d.createElement)("code",null,"Main")," itself, ",Object(d.createElement)("code",null,"the JIT-compiled code would almost precisely match the assembly code of your C++"),"! Try doing that with Windows Forms. ;)"),Object(d.createElement)("p",null,"You can accomplish this in C# yourself, but you have to add all the ugly PInvokes, and method signatures aren't always straight-forward, and even sources like ",Object(d.createElement)("code",null,"pinvoke.net")," aren't always correct and are riddled with subtle errors, all of which WinApi handles."),Object(d.createElement)("p",null,"However, this program above is probably purely academic - not because it has to be, just because there better ways to do this using the ",Object(d.createElement)("code",null,"WinApi.Windows")," namespace."),Object(d.createElement)("h2",null,"WinApi structure"),Object(d.createElement)("p",null,"Before getting to the ",Object(d.createElement)("code",null,"WinApi.Windows")," namespace, I'd like to briefly touch on how ",Object(d.createElement)("code",null,"WinApi")," is organized. Each library that corresponds to a ",Object(d.createElement)("code",null,"windows dll")," gets its own namespace."),Object(d.createElement)("p",null,"Examples, ",Object(d.createElement)("code",null,"kernel32.dll")," functions all are in the ",Object(d.createElement)("code",null,"WinApi.Kernel32")," namespace, ",Object(d.createElement)("code",null,"user32.dll")," into ",Object(d.createElement)("code",null,"WinApi.User32")," namespace, and so on."),Object(d.createElement)("p",null,"And inside each namespace is a static class which ends with ",Object(d.createElement)("code",null,"Methods"),". Ex: ",Object(d.createElement)("code",null,"User32Methods")," - this class has all the functions of the user32.dll in its most primitive form. What this means is that, if a functions could potentially take multiple forms of input, say different structures, or variables enumerations - this method is the lower common factor, with the least marshalling performance impact."),Object(d.createElement)("p",null,"As an example ",Object(d.createElement)("code",null,"User32Methods")," has the following method defined:"),Object(d.createElement)(f.b,{lang:"csharp",children:"\n[DllImport(LibraryName, ExactSpelling = true)]\npublic static extern int MapWindowPoints(IntPtr hWndFrom, IntPtr hWndTo, IntPtr lpPoints, int cPoints);\n        "}),Object(d.createElement)("p",null,"It takes all inputs in the form of ",Object(d.createElement)("code",null,"IntPtr"),", which allows any kind of marshalling."),Object(d.createElement)("p",null,"At the same time, ",Object(d.createElement)("code",null,"User32Helpers")," has the following implementations:"),Object(d.createElement)(f.b,{lang:"csharp",children:"\npublic static unsafe int MapWindowPoints(IntPtr hWndFrom, IntPtr hWndTo, ref Point point)\n{\n    fixed (Point* ptr = &point)\n        return User32Methods.MapWindowPoints(hWndFrom, hWndTo, new IntPtr(ptr), 1);\n}\n    \npublic static unsafe int MapWindowPoints(IntPtr hWndFrom, IntPtr hWndTo, ref Rectangle rect)\n{\n    fixed (Rectangle* ptr = &rect)\n    {\n        var ptPtr = (Point*) ptr;\n        return User32Methods.MapWindowPoints(hWndFrom, hWndTo, new IntPtr(ptPtr), 2);\n    }\n}\n        "}),Object(d.createElement)("p",null,"Again, this provides straight forward Marshalling without any performance impact, since it simply pins the struct which already have C-Layouts, and passes in the pointers."),Object(d.createElement)("p",null,"Similar concepts are followed throughout the library in the form of ",Object(d.createElement)("code",null,"Methods")," and ",Object(d.createElement)("code",null,"Helpers")," to provide both raw and safer signatures."),Object(d.createElement)("p",null,"Then, there's also the ",Object(d.createElement)("code",null,"Experimental")," namespace inside each of the library namespaces, that provide all the undocumented functions, and helpers."),Object(d.createElement)("h2",null,Object(d.createElement)("code",null,"WinApi.Windows")),Object(d.createElement)("p",null,"Then comes the one namespace that is special - This is not named after any native library. This library provides helpers into ",Object(d.createElement)("code",null,"Windows")," - the literal windows that your applications use. It provides a high-performance, GC-allocation-free message loop, that's resembles ATL/WTL programming."),Object(d.createElement)("h3",null,"Class: ",Object(d.createElement)("code",null,"NativeWindow")),Object(d.createElement)("p",null,"This is the class that is the thinnest layer of Window. It simply wraps the original ",Object(d.createElement)("code",null,"Win32")," handle. And it only has a single member - an IntPtr of ",Object(d.createElement)("code",null,"Handle"),", and provides a way to attach itself to any Handle, and allows nice wrappers to be used through out."),Object(d.createElement)(f.b,{lang:"csharp",children:"\nvar win = WindowFactory.CreateWindowFromHandle(someHwnd);\nwin.SetText(\"Hello\");\nwin.SetPosition(100, 200);\nwin.Show();\nwin.Close();\n        "}),Object(d.createElement)("h3",null,"Class: ",Object(d.createElement)("code",null,"WindowFactory")),Object(d.createElement)("p",null,"This is the class that acts as a ",Object(d.createElement)("code",null,"WNDCLASSEX")," registration manager for Win32. It registers a class, manages its lifetime, and creates Windows of that particular class."),Object(d.createElement)("p",null,"It also provides all the convenience methods to be able to create classes as ",Object(d.createElement)("code",null,"NativeWindow"),", or as any other derivative of ",Object(d.createElement)("code",null,"WindowCore"),", and provides attachment, and connection implementations. It also has generic methods that are able to project the created class to any C# type that derives from ",Object(d.createElement)("code",null,"WindowCore"),"."),Object(d.createElement)("p",null,"Take a look at the source code of the several static methods to see what it does. Naturally, you also provide any ",Object(d.createElement)("code",null,"CS")," styles, background brush, class name and others while creating a new factory - for all practical purposes it is the equivalent of Win32 class registration."),Object(d.createElement)("h3",null,"Class ",Object(d.createElement)("code",null,"WindowCore")),Object(d.createElement)("p",null,"Now this is the class where all the magic happens. It provides the actual connection by attaching your handle and connecting your ",Object(d.createElement)("code",null,"WindowProc")," to the class instances. If you look at the internals of ",Object(d.createElement)("code",null,"ATL")," code, this is done using a concept called ",Object(d.createElement)("code",null,"thunking")," and its done in assembly which may seem like dark magic to many. However, ",Object(d.createElement)("code",null,"WinApi")," does this very transparently, and with no performance impact."),Object(d.createElement)("p",null,"It does this with the help of ",Object(d.createElement)("code",null,"WindowFactory"),", and swapping out its procedure during the creation of the window (more precisely during the ",Object(d.createElement)("code",null,"WM_NCCREATE")," message)."),Object(d.createElement)("p",null,"Once it provides the connections, the ",Object(d.createElement)("code",null,"OnMessage")," instance method can be used directly from C# to process the messages."),Object(d.createElement)("p",null,Object(d.createElement)("code",null,"WindowCore")," is still a super light weight class that does no message processing. Its stays completely out of the way, except for being able to control your message loop. But the keyword is ",Object(d.createElement)("code",null,"being able"),". It doesn't not by default process any message by itself. Its simply passes it down to it default procedure. This is the lightest class that's fully functional."),Object(d.createElement)("h3",null,"Class ",Object(d.createElement)("code",null,"EventedWindowCore")),Object(d.createElement)("p",null,"Directly derived from ",Object(d.createElement)("code",null,"WindowCore")," is the ",Object(d.createElement)("code",null,"EventedWindowCore")," - this class decodes all the window messages, and breaks it down to its components, and passes them down to the relatives class instance's event methods."),Object(d.createElement)("p",null,"For example"),Object(d.createElement)(f.b,{lang:"csharp",children:"\npublic sealed class MainWindow : EventedWindowCore\n{\n    protected override void OnCreate(ref CreateWindowPacket packet)\n    {\n        base.OnCreate(ref packet);\n    }\n\n    protected override void OnSize(ref SizePacket packet)\n    {\n        var size = packet.Size;\n        var flags = packet.Flag;\n        base.OnSize(ref packet);\n    }\n}\n        "}),Object(d.createElement)("p",null,"Internally it uses the ",Object(d.createElement)("code",null,"Packetizer")," class that simples create a corresponding ",Object(d.createElement)("code",null,"Packet")," struct, and transparently decodes every message into its parameters. The ",Object(d.createElement)("code",null,"EventedWindowCore")," handles most of the common window messages. That's actually all it does. The implementation can be thought of as nothing but one giant switch case that does simply creates a packet and propagates the packet to its appropriate handler method."),Object(d.createElement)("p",null,"For example,"),Object(d.createElement)(f.b,{lang:"csharp",children:"\npublic static unsafe void ProcessMove(ref WindowMessage msg, EventedWindowCore window)\n{\n    fixed (WindowMessage* ptr = &msg)\n    {\n        var packet = new MovePacket(ptr);\n        window.OnMove(ref packet);\n    }\n}\n        "}),Object(d.createElement)("p",null,"This is the implementation for ",Object(d.createElement)("code",null,"WM_MOVE")," handler. The ",Object(d.createElement)("code",null,"MovePacket")," provides a very nice way to handle ",Object(d.createElement)("code",null,"WM_MOVE"),", since it can both decode or encode the WM_MOVE messages into its parameter. It has the property ",Object(d.createElement)("code",null,"Point")," as one of its properties."),Object(d.createElement)("p",null,"So, similar to ATL/WTL, if you use the ",Object(d.createElement)("code",null,"WindowCore")," you could manually build only the events you want to handle, by using the corresponding ",Object(d.createElement)("code",null,"Packet")," manually - though in really, there's really no reason to do it, since the ",Object(d.createElement)("code",null,"JIT")," will optimize away the ",Object(d.createElement)("code",null,"EventedWindowCore")," to give you similar code in the end."),Object(d.createElement)("p",null,"You can use the ",Object(d.createElement)("code",null,"EventedWindowCore"),", derive all its benefits, but yet maintain performance very similar to writing native code in ",Object(d.createElement)("code",null,"ATL")," with C++. However, for some reason you still want to use ",Object(d.createElement)("code",null,"WindowCore"),", simply create the packet, to be able to decode the messages and build the logic manually, as you like. No more dealing with ",Object(d.createElement)("code",null,"wparam")," and ",Object(d.createElement)("code",null,"lparam"),"."),Object(d.createElement)("p",null,"Infact, the way ",Object(d.createElement)("code",null,"EventedWindowCore")," is implemented very similar to this:"),Object(d.createElement)(f.b,{lang:"csharp",children:"\npublic class EventedWindowCore : WindowCore {\n    protected override OnMessage(ref WindowMessage msg) {\n        switch (msg.Id) {\n            ...\n            case WM.MOVE {\n                Packetizer.ProcessMove(ref msg, this);\n                break;\n            }\n            ...\n            default:\n            {\n                this.OnMessageDefault(ref msg);\n            }\n        }\n    }\n\n    ...\n    protected internal virtual void OnMove(ref MovePacket packet)\n    {\n        // Call the OnMessageDefault here.\n    }\n    ...\n}\n        "}),Object(d.createElement)("p",null,"And in the above case ",Object(d.createElement)("code",null,"OnMessageDefault")," translates into calling the base window procedure, which would be the ",Object(d.createElement)("code",null,"DefWindowProc")," method in ",Object(d.createElement)("code",null,"user32.dll")," if its an plain window, or the window's default procedure if its an in-built class like ",Object(d.createElement)("code",null,"STATIC"),", ",Object(d.createElement)("code",null,"EDIT"),", etc."),Object(d.createElement)("p",null,"Also, the every single ",Object(d.createElement)("code",null,"Packet")," variant is highly optimized to pass values on without any marshalling and additional copies of data. Even though many of the pointers are very naturally exposed in C# as its counterpart structs, they involve no additional copying. It uses very neat interop techniques to perform ",Object(d.createElement)("code",null,"reinterpret")," casting across the C# managed boundary."),Object(d.createElement)("h2",null,"Putting it all together"),Object(d.createElement)(f.b,{lang:"csharp",children:"\ninternal class Program\n{\n    static int Main(string[] args)\n    {\n        // Window is just a wrapper over EventedWindowCore,\n        // that provides more convinience methods, which has\n        // its own self registered factory.\n        //\n        // Window is a part of WinApi.Windows.Controls.\n        //\n        // Samples contain code that also directly initiates\n        // EventedWindowCore without depending on \n        // WinApi.Windows.Controls simply by creating \n        // WindowFactory\n        using (var win = Window.Create<AppWindow>(\"Hello\"))\n        {\n            win.Show();\n            return new EventLoop().Run(win);\n        }\n    }\n}\n\npublic class AppWindow : Window\n{\n    protected override void OnMove(ref MovePacket packet)\n    {\n        base.OnMove(ref packet);\n    }\n\n    protected override void OnMessage(ref WindowMessage msg)\n    {\n        switch (msg.Id)\n        {\n            // Note: OnEraseBkgnd method is already available in \n            // EventedWindowCore, but directly intercepted here\n            // just for the sake of overriding the\n            // message loop.\n            // Also, note that the message loop is \n            // short-cicuited here.\n\n            case WM.ERASEBKGND:\n            {\n                // I can even build the loop only on pay-per-use\n                // basis, when I need it since all the Packets decoding,\n                // and encoding are cleanly abstracted away into the Packet\n                // structs itself.\n                //\n                // fixed (var msgPtr = &msg)\n                // {\n                //    var packet = new EraseBkgndPacket(msg);\n                //    // Do anything you want with the packet.\n                // }\n                // return;\n\n                msg.Result = new IntPtr(1);\n                return;\n            }\n        }\n        base.OnMessage(ref msg);\n    }\n}\n    "}),Object(d.createElement)("p",null,"The Samples included in the ",Object(d.createElement)("code",null,"WinApi")," repository also has several programs that use DirectX, OpenGL, Skia, to paint windows. There are tons of other things that ",Object(d.createElement)("code",null,"WinApi")," does, including one of the simplest ways of using ",Object(d.createElement)("code",null,"SendInput")," with the helpers built right in, ",Object(d.createElement)("code",null,"DxUtils")," that relives all the pain of managing the numerous Direct3D, Direct2D and also manages its versioning with ease, all while maintaining high-performance without any pressure on the GC."),Object(d.createElement)("p",null,"Hopefully, I'll have the time to write about more of those later. But there's already ",Object(d.createElement)("code",null,"Sample.SimulateInput")," as an example of ",Object(d.createElement)("code",null,"SendInput")," and ",Object(d.createElement)("code",null,"Sample.DirectX")," demonstrating ",Object(d.createElement)("code",null,"DxUtils")," in the repo."))}}});