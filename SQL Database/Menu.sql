CREATE TABLE menu_item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    available_time_start INT NOT NULL,
    available_time_end INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO menu_item (name, available_time_start, available_time_end, price)
VALUES
    ('Burger', 10, 22, 5.99),
    ('Pizza', 12, 18, 8.99),
    ('Pasta', 14, 21, 7.50);
