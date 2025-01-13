function getDishesCategoriesTemplate(indexDishCategory) {
    return `<section id="category${indexDishCategory}" class="dish_category padding-responsive">
                <img src="${allDishes[indexDishCategory].img}">
                <h2>${allDishes[indexDishCategory].category}</h2>
                <div id="dishes${indexDishCategory}" class="dishes">
                </div>
            </section>`
}

function getDishesTemplate(indexDishCategory, indexDish) {
    return `<div>
                <h3>${allDishes[indexDishCategory].dishes[indexDish].name} (${allDishes[indexDishCategory].dishes[indexDish].price.toFixed(2)}€)</h3>
                <div class="dish_description">
                    <p>${allDishes[indexDishCategory].dishes[indexDish].description}</p>
                    <button class="add_dish" onclick="addDishtoOrder(${indexDishCategory}, ${indexDish})">+</button>
                </div>
            </div>`
}


function getShoppingCartTemplate(indexShoppingCart) {
    return `<div class="item margin_shopping_cart">
                <p>${shoppingCart[indexShoppingCart].name}</p>
                <div class="item_information">
                    <div class="amount_x">
                        <button><img onclick="countDown(${[indexShoppingCart]})" id="remove${[indexShoppingCart]}" class="remove_add" src="./assets/icons/remove.png" alt="remove"></button>
                        <div><p id="amount${[indexShoppingCart]}" class="item_amount">${shoppingCart[indexShoppingCart].amount}</p>x</div>
                        <button><img onclick="countUp(${[indexShoppingCart]})" id="add${[indexShoppingCart]}" class="remove_add" src="./assets/icons/add.png" alt="add"></button>
                    </div>
                    <div id="price${[indexShoppingCart]}" class="items_price"><p>${(shoppingCart[indexShoppingCart].price*shoppingCart[indexShoppingCart].amount).toFixed(2)}</p>€</div>
                    <img onclick="removeItemFromShoppingCart(${[indexShoppingCart]})" src="./assets/icons/trash_icon.png" class="delete_all">
                </div>
            </div>`
}


function getEmptyShoppingCartTemplate() {
    return `<p class="alert_empty_shopping_cart margin_shopping_cart">Dein Warenkorb ist noch leer. Füge jetzt deine Lieblingsgerichte hinzu!</p>`
}