const isAdmin = window.location.pathname.includes("admin");

let products = JSON.parse(localStorage.getItem("products")) || [
    { id: 1, name: "Party Dress",   price: 790,  category: "dress",   backLine1: "Material: Cotton", backLine2: "Sizes: S / M / L", img: "images/img 1.jpg" },
    { id: 2, name: "Pink Top",      price: 420,  category: "t-shirt", backLine1: "Material: Polyester", backLine2: "Sizes: S / M / L / XL", img: "images/img 2.jpg" },
    { id: 3, name: "Denim Jacket",  price: 1290, category: "jeans",   backLine1: "Material: Denim", backLine2: "Sizes: M / L / XL", img: "images/img 3.jpg" }
];

// scrub any stale "undefined" strings saved by old code
const clean = v => (!v || v === "undefined") ? "" : v;
products = products.map(p => ({
    ...p,
    name:      clean(p.name),
    img:       clean(p.img),
    category:  clean(p.category),
    backLine1: clean(p.backLine1),
    backLine2: clean(p.backLine2)
}));
localStorage.setItem("products", JSON.stringify(products));

/* ── RENDER CARDS ── */
function renderProducts() {
    const container = document.getElementById("products");
    if (!container) return;
    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
        <div class="card" data-category="${p.category}">
            ${isAdmin ? `
                <button class="delete-btn" onclick="deleteProduct(${p.id},event)" title="Delete">✕</button>
                <button class="edit-btn"   onclick="editProduct(${p.id},event)"   title="Edit">✏️</button>
            ` : ""}
            <div class="inner" onclick="openProduct(${p.id})">
                <div class="front">
                    <img src="${p.img}" alt="${p.name}" loading="lazy"
                         onerror="this.style.display='none';this.parentElement.style.background='#eee'">
                </div>
                <div class="back">
                    <h3>${p.name || "No Name"}</h3>
                    <p class="back-price">₹${p.price}</p>
                    ${p.backLine1 ? `<p class="back-line">${p.backLine1}</p>` : ""}
                    ${p.backLine2 ? `<p class="back-line">${p.backLine2}</p>` : ""}
                    <span class="back-tap">Tap to view</span>
                </div>
            </div>
        </div>`;
    });
}
renderProducts();

/* ── OPEN PRODUCT PAGE ── */
function openProduct(id) {
    const p = products.find(x => x.id == id);
    if (!p) return;
    localStorage.setItem("product", JSON.stringify(p));
    window.location.href = "product.html";
}

/* ── DELETE (from index in admin mode) ── */
function deleteProduct(id, e) {
    e.stopPropagation();
    if (!confirm("Delete this product?")) return;
    products = products.filter(p => p.id != id);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
}

/* ── EDIT → go to admin ── */
function editProduct(id, e) {
    e.stopPropagation();
    localStorage.setItem("editId", id);
    window.location.href = "admin.html";
}

/* ── FILTER PILLS ── */
document.querySelectorAll(".pill").forEach(btn => {
    btn.onclick = () => {
        document.querySelector(".pill.active")?.classList.remove("active");
        btn.classList.add("active");
        const cat = btn.innerText.trim();
        document.querySelectorAll(".card").forEach(c => {
            c.style.display = (cat === "All" || c.dataset.category === cat) ? "" : "none";
        });
    };
});

/* ── SEARCH ── */
const searchEl = document.getElementById("search");
if (searchEl) {
    searchEl.addEventListener("input", () => {
        const val = searchEl.value.toLowerCase();
        document.querySelectorAll(".card").forEach(c => {
            const n = c.querySelector("h3")?.innerText.toLowerCase() || "";
            c.style.display = n.includes(val) ? "" : "none";
        });
    });
}
