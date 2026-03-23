from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)
CORS(app)

# correct DB path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
db_path = os.path.join(BASE_DIR, "database.db")

@app.route("/products")
def get_products():
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM products")
    rows = cursor.fetchall()

    data = []
    for r in rows:
        data.append({
            "id": r[0],
            "name": r[1],
            "price": r[2],
            "category": r[3],
            "image": r[4]
        })

    conn.close()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)