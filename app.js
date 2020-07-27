let burger = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobileMenu');
burger.addEventListener('click',()=>{
	burger.classList.toggle('active')
	mobileMenu.classList.toggle('active');
});

