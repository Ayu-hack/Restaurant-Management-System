from flask import Flask, jsonify
import mysql.connector
from datetime import datetime

app = Flask(__name__)

# Database connection settings
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '#Pratikj31',  # Change to your MySQL password
    'database': 'restaurant'
}

@app.route('/')
def home():
    return "Welcome to the Restaurant Management System API!"

@app.route('/api/menu', methods=['GET'])
def get_menu():
    # Get the current hour
    current_hour = datetime.now().hour
    print(f"Current hour: {current_hour}")  # Debug: Print current hour

    # Connect to the database
    try:
        conn = mysql.connector.connect(**db_config)
        print("Database connection successful!")  # Confirm connection
        cursor = conn.cursor(dictionary=True)

        # Query to fetch menu items available at the current hour
        query = '''
        SELECT * FROM menu_item  -- Change here to match your table name
        WHERE available_time_start <= %s AND available_time_end >= %s
        '''
        cursor.execute(query, (current_hour, current_hour))
        menu_items = cursor.fetchall()

        print(f"Menu items: {menu_items}")  # Debug: Print menu items retrieved

        cursor.close()
        conn.close()

        # Return menu items as JSON
        if menu_items:
            return jsonify(menu_items)
        else:
            return jsonify({'message': 'No menu items available at this hour.'}), 404

    except mysql.connector.Error as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(port=3000)
