function NavClick(t){let e=t.getAttribute("target"),a=document.getElementById(e);document.body.scrollIntoView?a.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}):a.scrollIntoViewIfNeeded(),SetNavActive(t)}function NavHover(t,e){let a=t.querySelector(".dot-nav__title");a&&a.classList.toggle("dot-nav__title--active")}function SetNavActive(t){navItems.forEach(t=>t.classList.remove("dot-nav__item--active")),t.classList.add("dot-nav__item--active")}let sections=document.querySelectorAll(".js-dot-nav"),navItems=[];const _default=function(){let t=document.createElement("ul");t.classList.add("dot-nav__container"),sections.forEach(e=>{let a=document.createElement("li");if(a.classList.add("dot-nav__item"),a.setAttribute("target",e.id),e.hasAttribute("dot-nav-title")){let t=document.createElement("span");t.classList.add("dot-nav__title"),t.innerHTML=e.getAttribute("dot-nav-title"),a.append(t)}a.addEventListener("click",t=>NavClick(t.target)),a.addEventListener("mouseover",t=>NavHover(t.target)),a.addEventListener("mouseout",t=>NavHover(t.target)),navItems.push(a),t.append(a)}),document.body.append(t),SetNavActive(navItems[0]),window.addEventListener("scroll",()=>{let t=sections[0].clientHeight,e=window.scrollY+.1*t,a=Math.floor(e/t);SetNavActive(navItems[a])})};export{_default as default};