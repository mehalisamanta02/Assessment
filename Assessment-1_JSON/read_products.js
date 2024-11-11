const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
    } else {
        try {
            const products = JSON.parse(data);
            console.log("Parsed Product Data:", products);
        } catch (parseErr) {
            console.log("Error parsing JSON data:", parseErr);
        }
    }
});
