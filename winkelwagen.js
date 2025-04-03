document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPriceContainer = document.getElementById("total");

    console.log("Loaded cart:", cart); 

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Je winkelwagen is leeg.</p>";
        totalPriceContainer.innerHTML = "";
    } else {
        let totalPrice = 0;

        cart.forEach(item => {
            let div = document.createElement("div");
            div.innerHTML = `
                <img src="${item.image}" width="100">
                <p>${item.name} - &#8364;${item.price.toFixed(2)}</p>
            `;
            cartContainer.appendChild(div);

            totalPrice += item.price; // Add item price to total
        });

        totalPriceContainer.innerHTML = `<strong>Totaalprijs: &#8364;${totalPrice.toFixed(2)}</strong>`;
    }
});

function clearCart() {
    sessionStorage.removeItem("cart")
    location.reload();
}