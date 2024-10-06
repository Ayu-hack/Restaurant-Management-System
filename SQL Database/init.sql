use restaurant;
CREATE TABLE bill (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,  -- Auto-increment primary key
    CustomerName VARCHAR(100) NOT NULL,
    ContactNumber VARCHAR(15) NOT NULL,  -- Changed to VARCHAR to accommodate various phone number formats
    TotalPrice DECIMAL(10, 2) NOT NULL,
    OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP  -- Default value set to the current timestamp
);


CREATE TABLE item (
    ItemID INT PRIMARY KEY AUTO_INCREMENT,  -- Auto-increment primary key for the item table
    OrderID INT NOT NULL,  -- Foreign key column
    ItemName VARCHAR(1500),
    TableNumber INT NOT NULL,
    Quantity INT,
    Price DECIMAL(10, 2),
    CONSTRAINT FK_Item_Bill FOREIGN KEY (OrderID) REFERENCES bill(OrderID) ON DELETE CASCADE  -- Define foreign key with CASCADE on delete
);
