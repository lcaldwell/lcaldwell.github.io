let toggleThemeSetting=()=>{let e=determineThemeSetting();setThemeSetting("system"==e?"light":"light"==e?"dark":"system")},setThemeSetting=e=>{console.log("setThemeSetting"),localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme-setting",e),applyTheme()},applyTheme=()=>{console.log("apply theme");let e=determineComputedTheme();transTheme(),setHighlight(e),setGiscusTheme(e),setSearchTheme(e),"undefined"!=typeof mermaid&&setMermaidTheme(e),"undefined"!=typeof Diff2HtmlUI&&setDiff2htmlTheme(e),"undefined"!=typeof echarts&&setEchartsTheme(e),"undefined"!=typeof vegaEmbed&&setVegaLiteTheme(e),document.documentElement.setAttribute("data-theme",e);let t=document.getElementsByTagName("table");for(let m=0;m<t.length;m++)"dark"==e?t[m].classList.add("table-dark"):t[m].classList.remove("table-dark");let m=document.getElementsByClassName("jupyter-notebook-iframe-container");for(let t=0;t<m.length;t++){let i=m[t].getElementsByTagName("iframe")[0].contentWindow.document.body;"dark"==e?(i.setAttribute("data-jp-theme-light","false"),i.setAttribute("data-jp-theme-name","JupyterLab Dark")):(i.setAttribute("data-jp-theme-light","true"),i.setAttribute("data-jp-theme-name","JupyterLab Light"))}"undefined"!=typeof medium_zoom&&medium_zoom.update({background:getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")+"ee"})},setHighlight=e=>{"dark"==e?(document.getElementById("highlight_theme_light").media="none",document.getElementById("highlight_theme_dark").media=""):(document.getElementById("highlight_theme_dark").media="none",document.getElementById("highlight_theme_light").media="")},setGiscusTheme=e=>{function t(e){const t=document.querySelector("iframe.giscus-frame");t&&t.contentWindow.postMessage({giscus:e},"https://giscus.app")}t({setConfig:{theme:e}})},addMermaidZoom=(e,t)=>{d3.selectAll(".mermaid svg").each(function(){var e=d3.select(this);e.html("<g>"+e.html()+"</g>");var t=e.select("g"),m=d3.zoom().on("zoom",function(e){t.attr("transform",e.transform)});e.call(m)}),t.disconnect()},setMermaidTheme=e=>{"light"==e&&(e="default"),document.querySelectorAll(".mermaid").forEach(e=>{let t=e.previousSibling.childNodes[0].innerHTML;e.removeAttribute("data-processed"),e.innerHTML=t}),mermaid.initialize({theme:e}),window.mermaid.init(undefined,document.querySelectorAll(".mermaid"));const t=document.querySelector(".mermaid svg");if(null!==t){const e={childList:!0};new MutationObserver(addMermaidZoom).observe(t,e)}},setDiff2htmlTheme=e=>{document.querySelectorAll(".diff2html").forEach(t=>{let m=t.previousSibling.childNodes[0].innerHTML;t.innerHTML="",new Diff2HtmlUI(t,m,{colorScheme:e,drawFileList:!0,highlight:!0,matching:"lines"}).draw()})},setEchartsTheme=e=>{document.querySelectorAll(".echarts").forEach(t=>{let m=t.previousSibling.childNodes[0].innerHTML;if(echarts.dispose(t),"dark"===e)var i=echarts.init(t,"dark-fresh-cut");else i=echarts.init(t);i.setOption(JSON.parse(m))})},setVegaLiteTheme=e=>{document.querySelectorAll(".vega-lite").forEach(t=>{let m=t.previousSibling.childNodes[0].innerHTML;t.innerHTML="","dark"===e?vegaEmbed(t,JSON.parse(m),{theme:"dark"}):vegaEmbed(t,JSON.parse(m))})},setSearchTheme=e=>{const t=document.querySelector("ninja-keys");t&&("dark"===e?t.classList.add("dark"):t.classList.remove("dark"))},transTheme=()=>{document.documentElement.classList.add("transition"),window.setTimeout(()=>{document.documentElement.classList.remove("transition")},500)},determineThemeSetting=()=>{let e=localStorage.getItem("theme");return console.log("hello"),console.log(e),"dark"!=e&&"light"!=e&&"system"!=e&&(e="system"),e},determineComputedTheme=()=>{console.log("determineComputed");let e=determineThemeSetting();if("system"==e){const e=window.matchMedia;return e&&e("(prefers-color-scheme: dark)").matches?"dark":"light"}return e},initTheme=()=>{let e=determineThemeSetting();setThemeSetting(e),document.addEventListener("DOMContentLoaded",function(){document.getElementById("light-toggle").addEventListener("click",function(){toggleThemeSetting()})}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:e})=>{applyTheme()})};