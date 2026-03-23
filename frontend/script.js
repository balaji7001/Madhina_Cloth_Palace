async function loadProducts() {
    const res = await fetch("http://127.0.0.1:5000/products");
    const data = await res.json();

    const container = document.getElementById("products");
    container.innerHTML = "";

    data.forEach(p => {
        container.innerHTML += `
      <div class="card">
        <img src="${p.image}" style="width:100%; height:200px; object-fit:cover;">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `;
    });
}

loadProducts();