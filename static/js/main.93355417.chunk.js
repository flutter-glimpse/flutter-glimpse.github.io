(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),i=(a(10),a(1));a(12),a(14);function s(e){var t=e.glimpseGif&&l.a.createElement("div",null,"Video glimpse:",l.a.createElement("p",null,"<img src="+e.glimpseGif+' width="320" />')),a=e.glimpsePng&&l.a.createElement("div",null,"Screenshot glimpse:",l.a.createElement("p",null,"<img src="+e.glimpsePng+' width="320" />')),n=t||a?[t,a]:"You have to fill in at least repository";return l.a.createElement("pre",{className:"links"},l.a.createElement("code",null,n))}function c(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],o=a[1];Object(n.useEffect)(function(){return o(!1)},[e]);var s=e.glimpseGif&&l.a.createElement("div",{className:"column"},l.a.createElement("h5",null,"Video Glimpse"),l.a.createElement("img",{src:e.glimpseGif,className:"glimpse"})),c=e.glimpsePng&&l.a.createElement("div",{className:"column"},l.a.createElement("h5",null,"Screenshot Glimpse"),l.a.createElement("img",{src:e.glimpsePng,className:"glimpse"})),u=(s||c)&&[s,c];return l.a.createElement("div",null,r?l.a.createElement("div",{className:"row"},u):"",l.a.createElement("button",{type:"button",onClick:function(){o(!r)},disabled:!e.isValidRepo},r?"Hide":"Show"," Glimpse"))}var u=function(){var e="https://flutter-glimpse.tomasdostal.com/",t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),p=m[0],h=m[1],d=Object(n.useState)(""),g=Object(i.a)(d,2),E=g[0],f=g[1],y=Object(n.useState)(""),b=Object(i.a)(y,2),v=b[0],w=b[1],k=2===r.split("/").filter(Boolean).length,I=v?j():"",N=j(!0),G="https://twitter.com/intent/tweet?screen_name=Tomino2112";function j(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(k){var a=e;return a+="?r=".concat(encodeURIComponent(r)).concat(p&&encodeURIComponent("#".concat(p))).concat(E&&encodeURIComponent(":".concat(E))),v&&!t&&(a+="&t=".concat(encodeURIComponent(v))),a}}return l.a.createElement("div",{className:"container App"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Flutter Glimpse"),l.a.createElement("h3",null,"Display glimpse of your Flutter application. Updated on every push."),l.a.createElement("p",null,l.a.createElement("span",{className:"quote"},"A picture is worth a thousand words!")," You don't have to update screenshot and video of your app on every push to show people what you made. Add a link to the Flutter Glimpse and don't worry about the rest.")),l.a.createElement("section",null,l.a.createElement("h4",null,"1. Provide info about your Flutter app"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column column-50"},l.a.createElement("label",null,"Repository ",l.a.createElement("span",{className:"required"},"*")," ",l.a.createElement("small",null," Github username/repository of your Flutter app.")),l.a.createElement("input",{type:"text",placeholder:"username/repository",onChange:function(e){return o(e.target.value)}}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column column-50"},l.a.createElement("label",null,"Branch ",l.a.createElement("small",null,"Repository branch to checkout. Defaults to ",l.a.createElement("strong",null,"master"))),l.a.createElement("input",{type:"text",placeholder:"master",onChange:function(e){return h(e.target.value)}}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column column-50"},l.a.createElement("label",null,"Path ",l.a.createElement("small",null,"Path to Flutter app within the repository. Defaults to ",l.a.createElement("strong",null,"/"))),l.a.createElement("input",{type:"text",placeholder:"path/to/flutter/app",onChange:function(e){return f(e.target.value)}}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column column-50"},l.a.createElement("label",null,"Integration test target ",l.a.createElement("small",null,"Path to the integration test to execute (if any)")),l.a.createElement("input",{type:"text",placeholder:"test_driver/target",onChange:function(e){return w(e.target.value)}})))),l.a.createElement("section",null,l.a.createElement("h4",null,"2. Paste image link to your README.md"),l.a.createElement(s,{glimpseGif:I,glimpsePng:N})),l.a.createElement("section",null,l.a.createElement(c,{isValidRepo:k,glimpseGif:I,glimpsePng:N})),l.a.createElement("div",{className:"faq"},l.a.createElement("h3",null,"FAQ"),l.a.createElement("h4",null,"Troubleshooting"),l.a.createElement("ul",null,l.a.createElement("li",null,"I am seeing a loading bar instead of the glimpse - Glimpse can take between couple of minutes and up to an hour to generate, if you see loading bar it means everything is going well."),l.a.createElement("li",null,'I am seeing "broken image" icon in place - Something must have gone terribly wrong, ',l.a.createElement("a",{href:G},"contact me!")),l.a.createElement("li",null,"I am not seeing anything in place of glimpse - If you are not seeing anything it means there was an issue processing your request. To debug this, send the image request using tool such as ",l.a.createElement("a",{href:"https://www.getpostman.com/",target:"_blank"},"Postman"),' so you can inspect the headers. Error code is included in the "X-Script-Error".')),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Error Code"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"4000"),l.a.createElement("td",null,'Missing "repo" or "r" query param')),l.a.createElement("tr",null,l.a.createElement("td",null,"4001"),l.a.createElement("td",null,'No repository detected within the "repo" or "r" query param. Repository must be in first place and in format: username/repository')),l.a.createElement("tr",null,l.a.createElement("td",null,"4002"),l.a.createElement("td",null,"Project at repository/path location does not seem to be Flutter app")),l.a.createElement("tr",null,l.a.createElement("td",null,"4003"),l.a.createElement("td",null,"Github error - ",l.a.createElement("a",{href:G},"contact me!"))),l.a.createElement("tr",null,l.a.createElement("td",null,"500X"),l.a.createElement("td",null,"Internal error - you don't need to contact me, I have been notified by the system")))),l.a.createElement("ul",null,l.a.createElement("li",null,"I have shared the glimpse link to Slack or somewhere else and it doesn't refresh after push - Many systems out there are caching images on their own servers. I have implemented standard cache control which Github follows well, but it is not guaranteed that others will.")),l.a.createElement("h4",null,"Why?"),l.a.createElement("ul",null,l.a.createElement("li",null,"Flutter Glimpse should make life easier for developers. Not having to keep updated screenshot/video assets within repository."),l.a.createElement("li",null,"Personal frustration of having to clone and build each and every application just to see how it looks like."),l.a.createElement("li",null,"Raise awareness/interest in integration tests. If you do write integration tests, you can have a video glimpse in your repo showcasing UI interactions and full journeys through the app.")),l.a.createElement("h4",null,"How?"),l.a.createElement("p",null,"First time someone views your app on Github, flutter-glimpse servers will be asked to provide the glimpse. Your app will be added to the queue and processed as soon as possible. During this process your app will be cloned, built locally and glimpse will be created. This process can take ",l.a.createElement("strong",null,"between couple of minutes up to an hour")," depending on number of jobs in the queue."),l.a.createElement("p",null,"Glimpse is generated per combination of: ",l.a.createElement("strong",null,"repository, branch, commit, path, and target"),". If any of these values change it will be re-generated."),l.a.createElement("h4",null,"Why would I not use CI instead?"),l.a.createElement("p",null,"Of course you can, but you will have to setup the glimpse export and upload to Github by your self. Apart from that 99% of apps out there don't have/need CI. This project is mainly aimed at small POC apps that people publish for others to dig into."),l.a.createElement("h4",null,"Isn't it quite difficult for you to process and store all the requests?"),l.a.createElement("p",null,"You don't have to worry about that! Don't worry I am using the latest and best in cloud technology and most heavy lifting is on them."),l.a.createElement("h4",null,"Do you support private repositories?"),l.a.createElement("p",null,"Not at the moment, but if there is interest I can make it work. "),l.a.createElement("h4",null,"Is it free?"),l.a.createElement("p",null,"YES. The basic usage of generating screenshot and video glimpse for public github repositories will be always free. I do have ideas for more sophisticated features which I would charge for."),l.a.createElement("h4",null,"Can I automate the glimpse generating so people don't have to wait?"),l.a.createElement("p",null,'Yes! You can add above links (minus the "img" tag) to your ',l.a.createElement("a",{href:"http://lmgtfy.com/?q=github+setup+wbhook",target:"_blank"},"repository webhooks")," and have the glimpse generated right away after every push.")),l.a.createElement("footer",null,"This project is maintained by ",l.a.createElement("a",{href:G,target:"_blank"},"Tomas Dostal")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,a){e.exports=a(16)}},[[4,2,1]]]);
//# sourceMappingURL=main.93355417.chunk.js.map