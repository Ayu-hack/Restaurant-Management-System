
const fs = require('fs');
const filePath = './orderData.json';
const createOrder = require('./services');


function reader(callback) {  
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            
            res.status(500).send('Server error'); // Return a 500 status if there's an error
            return;
        }
        callback(data); // Send the data back via the callback
    });
}

// Function to update the JSON file
function updater(toupdate){
    // Read the JSON file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }
        if (!data) {
            console.error('No data found in the file.');
            return;}
        // Parse the JSON file`
        const jsonData = JSON.parse(data);

        // Add a new data to the JSON file
        jsonData.orders.push(toupdate);

        // Convert the updated JSON back to a string and write it back to the file
        const updatedJson = JSON.stringify(jsonData, null, 2);

        // Write the updated JSON back to the file
        fs.writeFile(filePath, updatedJson, 'utf8', (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
                return;
            }
        
            console.log('JSON file has been updated.');

      
        
        });
    });
}

module.exports = {reader, updater};