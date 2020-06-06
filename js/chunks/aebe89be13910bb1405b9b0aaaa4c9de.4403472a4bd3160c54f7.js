webpackJsonp(["aebe89be13910bb1405b9b0aaaa4c9de"],{"./src/components/Banner.jsx":function(a,b,c){"use strict";var d=c("./node_modules/react/index.js"),e=c.n(d),f=c("./src/components/Link.jsx"),g=function(){return Object(d.createElement)("p",null,"Explore more of ",Object(d.createElement)(f.b,{to:"/"},"my blog"),", ",Object(d.createElement)(f.b,{to:"/archives/"},"archives")," or subscribe to my ",Object(d.createElement)("a",{rel:"alternate",type:"application/rss+xml",href:"/rss.xml"},"feed"),".")};b.a=function(a){var b=a.index;return Object(d.createElement)("header",{className:"banner"},Object(d.createElement)("h1",{id:"top"},Object(d.createElement)(f.b,{to:"/"},"Prasanna Loganathar")),b||Object(d.createElement)(g,null),Object(d.createElement)("hr",null))}},"./src/components/Footer.jsx":function(a,b,c){"use strict";var d=c("./node_modules/react/index.js"),e=c.n(d),f=c("./src/components/Link.jsx"),g=function(){return Object(d.createElement)("aside",{className:"my-3"},Object(d.createElement)("p",null,Object(d.createElement)("a",{href:"https://www.twitter.com/prasannavl"},"@prasannavl")," - If you enjoyed this post, please ",Object(d.createElement)("a",{href:"https://twitter.com/intent/tweet?url=https://www.prasannavl.com"+window.location.pathname,target:"_blank"},"share it with your followers"),"."))};b.a=function(a){var b=a.showTwitter,h=Object(d.createElement)("footer",{className:"mt-4"},Object(d.createElement)("hr",null),b&&Object(d.createElement)(e.a.Fragment,null,Object(d.createElement)(g,null),Object(d.createElement)("hr",null)),Object(d.createElement)("nav",{className:"clearfix footer-nav"},Object(d.createElement)("ul",{className:"list-inline float-left"},Object(d.createElement)("li",{className:"list-inline-item"},Object(d.createElement)("a",{href:"javascript:window.scroll(0,0)"},"Top")),Object(d.createElement)("li",{className:"list-inline-item"},Object(d.createElement)(f.b,{to:"/"},"Home")),Object(d.createElement)("li",{className:"list-inline-item"},Object(d.createElement)(f.b,{to:"/archives/"},"Archives")))),Object(d.createElement)("p",{className:"small text-muted mt-1 mb-0"},Object(d.createElement)("strong",null,"Copyright \xA9 ",new Date(Date.now()).getUTCFullYear()," ",Object(d.createElement)("a",{href:"/"},"Prasanna Loganathar")),". Blog content, design elements or any information without a direct or indirect license is licensed under ",Object(d.createElement)("a",{href:"https://creativecommons.org/licenses/by/4.0/",rel:"license"},"Creative Commons CC BY 4.0"),". Similarly, any such code fragments are licensed under ",Object(d.createElement)("a",{rel:"license",href:"http://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0 License"),"."));return h}},"./src/data/featured.json":function(a){a.exports=[{title:"Introducing WinApi: Comparing GC pressure and performance with WinForms",date:"2016-10-29T04:44:36.874Z",tags:["dotnet","windows","perf"],url:"/2016/10/introducing-winapi-comparing-gc-pressure-and-performance-with-winforms/"},{title:"Introducing WinApi: Graphics with Direct3D, D2D1, GDI, OpenGL and Skia",date:"2016-10-23T19:42:37.156Z",tags:["dotnet","windows","graphics"],url:"/2016/10/introducing-winapi-graphics-with-direct3d-d2d1-gdi-opengl-and-skia/"},{title:"Introducing WinApi: Basics",date:"2016-10-22T14:01:11.533Z",tags:["dotnet","windows"],url:"/2016/10/introducing-winapi-basics/"},{title:"Introducing WinApi: The Evolution",date:"2016-10-22T13:51:30.195Z",tags:["windows","dotnet"],url:"/2016/10/introducing-winapi-the-evolution/"},{title:"PVL-StockPlus - Custom ROM for Motorola Defy Plus",date:"2012-04-05T00:00:00.000Z",tags:["android","os"],url:"/2012/04/pvl-stockplus-custom-rom-for-motorola/"}]},"./src/data/projects.json":function(a){a.exports=[{name:"WinApi",url:"https://github.com/prasannavl/WinApi",stars:572,description:"A simple, direct, ultra-thin CLR library for high-performance Win32 Native Interop"},{name:"LiquidState",url:"https://github.com/prasannavl/LiquidState",stars:178,description:"Efficient asynchronous and synchronous state machines for .NET"},{name:"mchain",url:"https://github.com/prasannavl/mchain",stars:28,description:"A super tiny go package that handles middleware chaining in it's most minimal form"},{name:"icomponent",url:"https://github.com/prasannavl/icomponent",stars:27,description:"A super simple, render-agnostic component library for the modern web that emphasizes framework and renderer freedom"},{name:"Liara",url:"https://github.com/prasannavl/Liara",stars:14,description:"High-performance, highly modular, fully asynchronous .NET/Mono framework for building HTTP services and web sites."},{name:"go-errors",url:"https://github.com/prasannavl/go-errors",stars:13,description:"A super tiny package for error encapsulation in idiomatic Go"}]},"./src/data/recent.json":function(a){a.exports=[{title:"Introducing WinApi: Comparing GC pressure and performance with WinForms",date:"2016-10-29T04:44:36.874Z",tags:["dotnet","windows","perf"],url:"/2016/10/introducing-winapi-comparing-gc-pressure-and-performance-with-winforms/"},{title:"Introducing WinApi: Graphics with Direct3D, D2D1, GDI, OpenGL and Skia",date:"2016-10-23T19:42:37.156Z",tags:["dotnet","windows","graphics"],url:"/2016/10/introducing-winapi-graphics-with-direct3d-d2d1-gdi-opengl-and-skia/"},{title:"Introducing WinApi: Basics",date:"2016-10-22T14:01:11.533Z",tags:["dotnet","windows"],url:"/2016/10/introducing-winapi-basics/"},{title:"Introducing WinApi: The Evolution",date:"2016-10-22T13:51:30.195Z",tags:["windows","dotnet"],url:"/2016/10/introducing-winapi-the-evolution/"},{title:"Crash Analysis: Windows BSOD - Netwbw02.sys",date:"2016-03-05T06:54:09.738Z",tags:["windows","kernel","crash-analysis"],url:"/2016/03/crash-analysis-windows-bsod-netwbw02-sys/"}]},"./src/pages/Home.jsx":function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),c.d(b,"Page",function(){return r}),c.d(b,"Intro",function(){return s}),c.d(b,"Articles",function(){return t}),c.d(b,"Projects",function(){return u});var d=c("./node_modules/react/index.js"),e=c.n(d),f=c("./src/components/Layout.jsx"),g=c("./node_modules/date-fns/format/index.js"),h=c.n(g),i=c("./src/components/Link.jsx"),j=c("./src/components/Banner.jsx"),k=c("./src/components/Footer.jsx"),l=c("./src/data/featured.json"),m=c.n(l),n=c("./src/data/recent.json"),o=c.n(n),p=c("./src/data/projects.json"),q=c.n(p),r=function(a){return Object(d.createElement)(f.a,null,Object(d.createElement)(j.a,{index:!0}),Object(d.createElement)(s,null),Object(d.createElement)("hr",null),Object(d.createElement)("main",{role:"main"},Object(d.createElement)(t,a.indexes),Object(d.createElement)("hr",null),Object(d.createElement)(u,{data:a.projects})),Object(d.createElement)(k.a,null))},s=function(){var a="pvl";return Object(d.createElement)(e.a.Fragment,null,Object(d.createElement)("p",{className:"mb-md-0"},Object(d.createElement)("a",{href:"https://xkcd.com/387/",target:"_blank"},"Technology architect"),", ",Object(d.createElement)("a",{href:"https://xkcd.com/242/",target:"_blank"},"science-geek")," and ",Object(d.createElement)("a",{href:"https://www.forbes.com/sites/kateharrison/2013/03/05/cartoon-truths-for-entrepreneurs/#286e22733af4",target:"_blank"},"entrepreneur"),"."),Object(d.createElement)("p",null),Object(d.createElement)("p",null,"I'm a slow, unsafe and error prone human - wielding ",Object(d.createElement)("a",{href:"https://www.rust-lang.org/"},"@rustlang"),", ",Object(d.createElement)("a",{href:"https://webassembly.org"},"@webassembly")," ",Object(d.createElement)("br",{className:"br-on-desktop"}),"and imaginatory ",Object(d.createElement)("a",{href:"https://starwars.fandom.com/wiki/Midi-chlorian"},"midi-chlorians"),"."),Object(d.createElement)("p",null,"GitHub ",Object(d.createElement)("a",{href:"https://www.github.com/prasannavl"},"@prasannavl"),", Twitter ",Object(d.createElement)("a",{href:"https://www.twitter.com/prasannavl"},"@prasannavl"),", Feed ",Object(d.createElement)("a",{rel:"alternate",type:"application/rss+xml",href:"/rss.xml"},"RSS"),", Email ",Object(d.createElement)("a",{href:"#",onClick:function(){window.location.href="mailto:"+a+"@"+"prasannavl.com"}},a),"."))},t=function(a){var b=a.featured,c=a.recent,e=[c,b].map(function(a){var b=a.map(function(a){return Object(d.createElement)("li",{key:a.url},Object(d.createElement)(i.b,{to:a.url},a.title),a.note&&Object(d.createElement)("small",{className:"text-muted"}," \xBB Note"),"\xA0\u203A\xA0",Object(d.createElement)("small",{className:"no-wrap"},Object(d.createElement)("time",{dateTime:a.date},h()(new Date(a.date),"Do MMM YYYY"))))}),c=void 0;return 0<b.length&&(c=Object(d.createElement)("ul",{className:"list-unordered"},b)),c});return Object(d.createElement)("section",null,Object(d.createElement)("h2",null,"Articles ",Object(d.createElement)("small",{className:"h-small"},"\xBB\xA0",Object(d.createElement)(i.b,{to:"/archives/"},"show all"))),Object(d.createElement)("section",null,Object(d.createElement)("h4",null,"Recent"),e[0]),Object(d.createElement)("section",null,Object(d.createElement)("h4",null,"Featured"),e[1]),"    ",Object(d.createElement)("section",null,Object(d.createElement)("h4",null,"Archive"),Object(d.createElement)("p",null,"See ",Object(d.createElement)(i.b,{to:"/archives/"},"the complete list")," of my articles.")))},u=function(a){var b=a.data;return Object(d.createElement)("section",null,Object(d.createElement)("h2",null,"Projects"),Object(d.createElement)("section",null,Object(d.createElement)("h4",null,"Current"),Object(d.createElement)("p",null,"I'm currently not promoting any of my projects at this time.")),Object(d.createElement)("section",null,Object(d.createElement)("h4",null,"Most Popular ",Object(d.createElement)("small",{className:"h-small"},"\xA0(OSS)")),Object(d.createElement)("table",{className:"table table-sm table-borderless"},Object(d.createElement)("tbody",null,b.map(function(a){return Object(d.createElement)("tr",{key:a.url},Object(d.createElement)("th",null,Object(d.createElement)("a",{href:a.url},a.name)),Object(d.createElement)("td",null,a.description))})))),Object(d.createElement)("section",null,Object(d.createElement)("h4",null,"Archive"),Object(d.createElement)("p",null,"Complete listing of all my open source projects can be found on ",Object(d.createElement)("a",{href:"https://www.github.com/prasannavl"},"GitHub (prasannavl)"),".")))};b["default"]=function(){var a={featured:m.a,recent:o.a};return Object(d.createElement)(r,{indexes:a,projects:q.a})}}});