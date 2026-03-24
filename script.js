const isAdmin = window.location.pathname.includes("admin");

let products = JSON.parse(localStorage.getItem("products")) || [
    { id: 1, name: "Party Dress", price: 790, category: "dress", img: "images/img 1.jpg" },
    { id: 2, name: "Pink Top", price: 420, category: "tshirt", img: "images/img 2.jpg" },
    { id: 3, name: "Denim Jacket", price: 1290, category: "denim", img: "images/img 3.jpg" }
];

function renderProducts() {
    const container = document.getElementById("products");
    if (!container) return;

    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
        <div class="card" data-category="${p.category}">
            ${isAdmin ? `
                <button class="delete-btn" onclick="deleteProduct('${p.id}',event)">❌</button>
                <button class="edit-btn" onclick="editProduct('${p.id}',event)">✏️</button>
            ` : ""}

            <div class="inner" onclick="openProduct('${p.id}')">
                <div class="front">
                    <img src="${p.img}">
                </div>
                <div class="back">
                    <h3>${p.name}</h3>
                    <p>₹${p.price}</p>
                </div>
            </div>
        </div>`;
    });
}
renderProducts();

function openProduct(id) {
    const p = products.find(x => x.id == id);
    localStorage.setItem("product", JSON.stringify(p));
    window.location.href = "product.html";
}

function deleteProduct(id, e) {
    e.stopPropagation();
    if (!confirm("Delete?")) return;
    products = products.filter(p => p.id != id);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
}

function editProduct(id, e) {
    e.stopPropagation();
    const p = products.find(x => x.id == id);
    name.value = p.name;
    price.value = p.price;
    category.value = p.category;
    localStorage.setItem("editId", id);
}

/* FILTER */
document.querySelectorAll(".pill").forEach(btn => {
    btn.onclick = () => {
        document.querySelector(".pill.active").classList.remove("active");
        btn.classList.add("active");
        let cat = btn.innerText;

        document.querySelectorAll(".card").forEach(c => {
            c.style.display = (cat == "All" || c.dataset.category == cat) ? "" : "none";
        });
    };
});

/* SEARCH */
const search = document.getElementById("search");
if (search) {
    search.addEventListener("input", () => {
        let val = search.value.toLowerCase();
        document.querySelectorAll(".card").forEach(c => {
            let name = c.querySelector("h3").innerText.toLowerCase();
            c.style.display = name.includes(val) ? "" : "none";
        });
    });
}

function openMap() {
    window.open("https://maps.app.goo.gl/cGk4r43jKUb2GvE18");
}