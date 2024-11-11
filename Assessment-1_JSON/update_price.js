const fs = require('fs');

function loadProducts(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading JSON file:", error);
        return [];
    }
}
function saveProducts(filePath, products) {
    try {
        const jsonData = JSON.stringify(products, null, 2);
        fs.writeFileSync(filePath, jsonData, 'utf8');
        console.log("Product catalog updated successfully.");
    } catch (error) {
        console.error("Error writing to JSON file:", error);
    }
}
function updateProductPrice(filePath, productId, newPrice) {
    const products = loadProducts(filePath);
    const product = products.find(p => p.id === productId);

    if (product) {
        product.price = newPrice;
        console.log(`Price updated for product ID ${productId} to ${newPrice}`);
        saveProducts(filePath, products);
    } else {
        console.log(`Product not found with ID: ${productId}`);
    }
}

updateProductPrice('data.json', 3, 599.99); 
