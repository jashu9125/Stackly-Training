let productsData = [];
let cart = [];


//FETCH API
fetch("https://fakestoreapi.com/products")
    .then(res => res.json()) // convert JSON
    .then(data => {
        productsData = data;
        render(productsData);
    });


//RENDER FUNCTION (Separate function)
function render(data) {

    const container = document.getElementById("products");
    container.innerHTML = "";

    data.map(product => {

        // Here we are going to create an element (create element) :- 
        const card = document.createElement("div");
        card.className = "card";

        // Here we are going to insert the HTML element (insert HTML) :-
        card.innerHTML = `
            <img src="${product.image}">
            <h4>${product.title}</h4>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Rating:</strong>  ${product.rating.rate}</p>
            <p class="desc">
            ${product.description.slice(0, 50)}...
            </p>
            <button>Add to Cart</button>
        `;

        // In this we are going to press the button to (add to cart event)
        card.querySelector("button").addEventListener("click", () => {

            // Here the exist & condition we have used is to (prevent duplicate)
            let exists = cart.some(item => item.id === product.id);

            if (exists) {
                let item = cart.find(item => item.id === product.id);
                item.quantity += 1;
            } else {
                product.quantity = 1;
                cart.push(product); // store product
            }

            updateCartCount();
            alert("Product Added Successfully");
        });

        container.appendChild(card);
    });
}


//UPDATE CART COUNT
function updateCartCount() {
    document.getElementById("cartCount").textContent =
        "Cart (" + cart.length + ")";
}


//SEARCH FUNCTION
document.getElementById("search").addEventListener("input", function() {

    let value = this.value.toLowerCase();

    let filtered = productsData.filter(product =>
        product.title.toLowerCase().includes(value)
    );

    render(filtered);
});


//CATEGORY FILTER
document.getElementById("category").addEventListener("change", function() {

    let value = this.value;

    if (value === "all") {
        render(productsData);
    } else {
        let filtered = productsData.filter(product =>
            product.category === value
        );
        render(filtered);
    }
});