CREATE TABLE item (
    ItemID INT PRIMARY KEY AUTO_INCREMENT,  -- Auto-increment primary key for the item table
    OrderID INT NOT NULL,  -- Foreign key column
    ItemName VARCHAR(1500),
    TableNumber INT NOT NULL,
    Quantity INT,
    Price DECIMAL(10, 2),
    CONSTRAINT FK_Item_Bill FOREIGN KEY (OrderID) REFERENCES bill(OrderID) ON DELETE CASCADE  -- Define foreign key with CASCADE on delete
);
