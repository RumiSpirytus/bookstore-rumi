// search hover 
let searchForm = document.querySelector(".search-form");

document.querySelector('#search-btn').onclick = function(){
    searchForm.classList.toggle('active');
}

//cart

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector('#cart-btn').onclick = function(){
    shoppingCart.classList.toggle('active');
}

//login - form

let loginForm = document.querySelector(".login-form");

document.querySelector('#login-btn').onclick = function(){
    loginForm.classList.toggle('active');
}