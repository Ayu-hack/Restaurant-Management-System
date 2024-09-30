const db = require('./db');

async function createOrder(req, res) {
    console.log('Creating order');
    console.log(req.body);
    const { ContactNumber, TableNumber, CustomerName, Cart } = req.body;

    if (!ContactNumber || !TableNumber || !CustomerName ) {
        console.log('Missing required fields');
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        // Calculate total price from the cart items
        const TotalPrice = Cart.reduce((sum, item) => sum + item.price * item.Quantity, 0);

        // Insert into the 'bill' table
        const orderResult = await db.query(
            `INSERT INTO bill (CustomerName, ContactNumber, TotalPrice) VALUES ('${CustomerName}', '${ContactNumber}', ${TotalPrice})`,
            [CustomerName, ContactNumber, TotalPrice]
        );

        const OrderID = orderResult.insertId;

        // Insert into the 'item' table
        for (const cartItem of Cart) {
            const { id, name, Quantity, price } = cartItem;
            if (!id || !name || !Quantity || !price) {
                throw new Error("Missing order item fields");
            }

            await db.query(
                `INSERT INTO item (OrderID, ItemName, TableNumber, Quantity, Price) VALUES (${OrderID}, '${name}', ${TableNumber}, ${Quantity}, ${price})`,
                [OrderID, name, TableNumber, Quantity, price]
            );
        }

        res.status(201).json({ message: "Order placed successfully" });
    } catch (error) {
    
        console.error('DB operation failed.\n' + error);
        res.status(500).json({ message: 'An error occurred' });
    }
}

module.exports = createOrder;
