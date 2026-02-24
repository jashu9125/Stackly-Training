const productContainer = document.getElementById('products');

// Function to fetch products
function fetchProducts() {
    productContainer.innerHTML = '<p>Loading products...</p>';
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load products');
            }
            return response.json();
        })
        .then(data => displayProducts(data))
        .catch(error => {
            console.error('Error:', error);
            productContainer.innerHTML = '<p>Failed to load products. Please try again.</p>';
        });
}

// Function to display products
function displayProducts(products) {
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    const productHTML = sortedProducts.map(product => `
    <div class="product">
      <h2>${product.title}</h2>
      <img src="${product.image}" alt="${product.title}" width="100">
      <p>Price: $${product.price}</p>
    </div>
  `).join('');
    productContainer.innerHTML = `
    <p>Total Products: ${products.length}</p>
    ${productHTML}
  `;
}

// Fetch products on page load
fetchProducts();