let btns = document.getElementsByClassName('add-cart-btn')
for (var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', myFunction)
}

function myId(id){
    return document.getElementById("cart-" + id)
}

function myFunction(){
    let parent = this.parentElement;
    let productId = parent.getAttribute('id');
    let shopping = document.getElementsByClassName('shopping-cart')[0]
    let productInCart = myId(productId)
    let quantityProduct = 1
    if (productInCart) {
        quantityProduct = parseInt(productInCart.getElementsByClassName('quantity-num')[0].innerHTML) + 1
    }
    let shoppingCartTotal = shopping.getElementsByClassName('total')[0]
    let html = `
    <div class="box" id="cart-` + productId + `">
    <i class="fas fa-trash"></i>
    <img src="`+ parent.getElementsByTagName('img')[0].getAttribute('src') +`" alt="" />
    <div class="content">
        <h3>` + parent.getElementsByTagName('h3')[0].innerHTML + `</h3>
        <span class="price">$5/- </span>
        <span class="quantity">Quantity: <span class="quantity-num">` + quantityProduct +`</span></span>
    </div>
</div>
    `
    if (productInCart) {
        productInCart.innerHTML = html
    } else {
        shoppingCartTotal.insertAdjacentHTML('beforebegin', html)
    }
}



