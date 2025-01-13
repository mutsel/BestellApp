function init() {
    getFromLocalStorage();
    renderDishesCategories();
    renderShoppingCartContent();
}


function renderDishesCategories() {
    const dishesCategoriesContentRef = document.getElementById("dishes_categories");
    dishesCategoriesContentRef.innerHTML = "";

    for (let indexDishCategory = 0; indexDishCategory < allDishes.length; indexDishCategory++) {
        dishesCategoriesContentRef.innerHTML += getDishesCategoriesTemplate(indexDishCategory);
        renderDishes(indexDishCategory);
    }
}


function renderDishes(indexDishCategory) {
    const dishesContentRef = document.getElementById("dishes" + [indexDishCategory]);
    dishesContentRef.innerHTML = "";

    let dishesFromCategory = allDishes[indexDishCategory].dishes;

    for (let indexDish = 0; indexDish < dishesFromCategory.length; indexDish++) {
        dishesContentRef.innerHTML += getDishesTemplate(indexDishCategory, indexDish);
    }
    saveToLocalStorage();
}


function renderShoppingCartContent() {
    const shoppingCartContentRef = document.getElementById("content_shopping_cart");
    shoppingCartContentRef.innerHTML = "";

    if (shoppingCart.length != 0) {
        for (let indexShoppingCart = 0; indexShoppingCart < shoppingCart.length; indexShoppingCart++) {
            shoppingCartContentRef.innerHTML += getShoppingCartTemplate(indexShoppingCart);
        }
    } else {
        shoppingCartContentRef.innerHTML += getEmptyShoppingCartTemplate();
    }

    renderShoppingCartSum();
    saveToLocalStorage();
}


function addDishtoOrder(indexDishCategory, indexDish) {
    let addedItem = allDishes[indexDishCategory].dishes[indexDish];

    if ((shoppingCart.findIndex((element) => { return element.name === addedItem.name })) > -1) {
        let indexShoppingCart = shoppingCart.findIndex((element) => { return element.name === addedItem.name });
        countUp(indexShoppingCart);
    } else {
        shoppingCart.unshift(addedItem);
        shoppingCart[0].amount = 1;
    }

    renderShoppingCartContent();
    saveToLocalStorage();
}


function countUp(indexShoppingCart) {
    let amountItem = shoppingCart[indexShoppingCart].amount;
    shoppingCart[indexShoppingCart].amount = amountItem + 1;
    renderShoppingCartContent();
}


function countDown(indexShoppingCart) {
    let amountItem = shoppingCart[indexShoppingCart].amount;

    if (amountItem > 1) {
        shoppingCart[indexShoppingCart].amount = amountItem - 1;
    } else {
        removeItemFromShoppingCart(indexShoppingCart);
    }

    renderShoppingCartContent();
}


function removeItemFromShoppingCart(indexShoppingCart) {
    let orderedItem = shoppingCart[indexShoppingCart];
    let ItemIndexToRemove = shoppingCart.indexOf(orderedItem);

    shoppingCart.splice(ItemIndexToRemove, 1);

    renderShoppingCartContent();
}


function renderShoppingCartSum() {
    let subtotalRef = document.getElementById("subtotal");
    let shippingCostsRef = document.getElementById("shipping_costs");
    let totalRef = document.getElementById("total");
    let totalPrice = 0;
    renderShoppingCartSubtotal();
    totalPrice += eval(subtotalRef.innerHTML) + eval(shippingCostsRef.innerHTML);
    totalRef.innerHTML = totalPrice.toFixed(2);
}


function renderShoppingCartSubtotal() {
    let subtotalRef = document.getElementById("subtotal");
    subtotalRef.innerHTML = "";
    let subtotalPrice = 0;
    for (let indexShoppingCart = 0; indexShoppingCart < shoppingCart.length; indexShoppingCart++) {
        let priceForAmount = shoppingCart[indexShoppingCart].price * shoppingCart[indexShoppingCart].amount;
        subtotalPrice += +priceForAmount;
    };
    subtotalRef.innerHTML = subtotalPrice.toFixed(2);
    saveToLocalStorage();
}


function submitOrder() {
    let overlayRef = document.getElementById("overlay");    
    if (shoppingCart.length != 0) {
        if (overlayRef.classList.contains("d_none") === false) {
            let ResponsiveOverlayRef = document.getElementById("responsive_overlay");
            ResponsiveOverlayRef.classList.remove("d_none");
        }
        shoppingCart = [];
        renderShoppingCartContent();
        toggleOrderCompleted();
    }
}


function toggleOrderCompleted() {
    let orderCompletedRef = document.getElementById("order_completed");
    orderCompletedRef.classList.toggle("d_none");
    toggleOverlay();
}


function toggleOverlay() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
}


function addOverlay() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.remove("d_none");
}


function removeOverlays() {
    let overlayRef = document.getElementById("overlay");
    let ResponsiveOverlayRef = document.getElementById("responsive_overlay");
    let orderCompletedRef = document.getElementById("order_completed");
    let ResponsiveShoppingCartRef = document.getElementById("shopping_cart");
    overlayRef.classList.add("d_none");
    ResponsiveOverlayRef.classList.add("d_none");
    orderCompletedRef.classList.add("d_none");
    ResponsiveShoppingCartRef.classList.add("responsive_shopping_cart");
}


function toggleResponsiveShoppingCart() {
    let ResponsiveShoppingCartRef = document.getElementById("shopping_cart");
    ResponsiveShoppingCartRef.classList.toggle("responsive_shopping_cart");
    toggleOverlay();
}


function saveToLocalStorage() {
    localStorage.setItem('allDishes', JSON.stringify(allDishes));
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}


function getFromLocalStorage() {
    const storageAllDishes = JSON.parse(localStorage.getItem('allDishes'));
    if (storageAllDishes !== null) {
        allDishes = storageAllDishes;
    }
    const storageShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (storageShoppingCart !== null) {
        shoppingCart = storageShoppingCart;
    }
}