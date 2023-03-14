// search hover 
let searchForm = document.querySelector(".search-form");

document.querySelector('#search-btn').onclick = function(){
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//cart

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector('#cart-btn').onclick = function(){
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//login - form

let loginForm = document.querySelector(".login-form");

document.querySelector('#login-btn').onclick = function(){
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".navbar");

document.querySelector('#menu-btn').onclick = function(){
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = function(){
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}