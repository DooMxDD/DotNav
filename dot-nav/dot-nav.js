let sections = document.querySelectorAll(".js-dot-nav");
let navItems = [];

const _default = function dotNav() {
	let navContainer = document.createElement("ul");
	navContainer.classList.add("dot-nav__container");

	sections.forEach((section) => {
		let navItem = document.createElement("li");
		navItem.classList.add("dot-nav__item");
		navItem.setAttribute("target", section.id);

		if (section.hasAttribute("dot-nav-title")) {
			let navTitle = document.createElement("span");
			navTitle.classList.add("dot-nav__title");
			navTitle.innerHTML = section.getAttribute("dot-nav-title");
			navItem.append(navTitle);
		}

		navItem.addEventListener("click", (e) => NavClick(e.target));
		navItem.addEventListener("mouseover", (e) => NavHover(e.target));
		navItem.addEventListener("mouseout", (e) => NavHover(e.target));

		navItems.push(navItem);
		navContainer.append(navItem);
	});

	document.body.append(navContainer);

	SetNavActive(navItems[0]);

	window.addEventListener("scroll", () => {
		let sectionHeight = sections[0].clientHeight;
		let scroll = window.scrollY + (sectionHeight * 0.1);
		let actualNav = Math.floor(scroll / sectionHeight);
		SetNavActive(navItems[actualNav]);
	});
};
export { _default as default };

function NavClick(navItemElem) {
	let target = navItemElem.getAttribute("target");
	let targetSection = document.getElementById(target);

	if (document.body.scrollIntoView) {
		targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
	}
	else {
		targetSection.scrollIntoViewIfNeeded();
	}

	SetNavActive(navItemElem);
}

function NavHover(navItemElem, titleDisplay) {
	let navTitle = navItemElem.querySelector(".dot-nav__title");

	if (navTitle)
		navTitle.classList.toggle("dot-nav__title--active");
}

function SetNavActive(navItemElem) {
	navItems.forEach((navItem) => navItem.classList.remove("dot-nav__item--active"));
	navItemElem.classList.add("dot-nav__item--active");
}