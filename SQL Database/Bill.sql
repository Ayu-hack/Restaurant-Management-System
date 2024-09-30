CREATE TABLE bill (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,  -- Auto-increment primary key
    CustomerName VARCHAR(100) NOT NULL,
    ContactNumber VARCHAR(15) NOT NULL,  -- Changed to VARCHAR to accommodate various phone number formats
    TotalPrice DECIMAL(10, 2) NOT NULL,
    OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP  -- Default value set to the current timestamp
);
