import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

# Create table
cursor.execute("""
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    category TEXT,
    image TEXT
)
""")

# Insert ONE sample product
cursor.execute("""
INSERT INTO products (name, price, category, image)
VALUES ('Red Dress', 799, 'dress',
'https://images.unsplash.com/photo-1514996937319-344454492b37')
""")

conn.commit()
conn.close()

print("DB Ready ✅")