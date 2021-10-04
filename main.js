let toogleButton = document.querySelector(".mobile-nav-toogle img");
let mobileMenu = document.querySelector(".mobile-pages-list");

toogleButton.addEventListener("click", () => {
	mobileMenu.classList.toggle("toogle");
});
