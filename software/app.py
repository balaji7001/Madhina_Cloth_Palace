import sqlite3

def add_product():
    name = input("Name: ")
    price = float(input("Price: "))
    category = input("Category: ")
    image = input("Image path: ")

    conn = sqlite3.connect("../backend/database.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO products (name, price, category, image) VALUES (?, ?, ?, ?)",
        (name, price, category, image)
    )

    conn.commit()
    conn.close()

    print("Product Added!")

add_product()