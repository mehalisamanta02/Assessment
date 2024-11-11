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

function addProduct(filePath, newProduct) {
    const products = loadProducts(filePath);
    products.push(newProduct);
    saveProducts(filePath, products);
}

const newProduct = {
    id: 6,
    name: "Smartwatch",
    category: "Electronics",
    price: 150,
    available: true
};

addProduct('data.json', newProduct);
