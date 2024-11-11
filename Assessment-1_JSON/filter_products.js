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

function filterAvailableProducts(filePath) {
    const products = loadProducts(filePath);
    return products.filter(product => product.available === true);
}
function filterProductsByCategory(filePath, category) {
    const products = loadProducts(filePath);
    return products.filter(product => product.category === category);
}
const availableProducts = filterAvailableProducts('data.json');
console.log("Available Products:", availableProducts);

const electronicsProducts = filterProductsByCategory('data.json', 'Electronics');
console.log("Electronics Products:", electronicsProducts);
