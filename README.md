# 👑 Madhina Cloth Palace

A fully functional, responsive clothing store website built with pure HTML, CSS, and JavaScript — no frameworks, no backend. All product data is stored and managed via `localStorage`.

---

## Live Features

### 🛍 Store (index.html)
- Hero section with call-to-action buttons
- Category filter pills (Women, Men, Kids)
- Live search with product count
- Flip cards — hover to reveal product details on the back
- **Image lightbox** — click any card to preview the full image with name, price, and details
- Fully responsive layout

### 📦 Product Page (product.html)
- Full product image with click-to-fullscreen
- Category badge, price, material, and size details
- WhatsApp enquiry button pre-filled with product info
- Back to store navigation

### ⚙ Admin Panel (admin.html)
- Password protected (`admin123`)
- Add, edit, and delete products
- Live card preview updates as you type
- Customize card back side — Line 1 (material) and Line 2 (sizes)
- Image upload with preview
- Grouped category dropdown
- Product table with stats (total, categories, avg price, highest price)
- Inline quick-edit for back side lines
- Toast notifications

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, flexbox, animations) |
| Logic | Vanilla JavaScript |
| Storage | localStorage (browser-based) |
| Fonts | Google Fonts — Poppins |

---

## Project Structure

```
├── index.html       # Main store page
├── product.html     # Product detail page
├── admin.html       # Admin panel
├── script.js        # Shared JS — products, render, lightbox, filter
├── style.css        # Shared styles
└── images/
    ├── logo.jpeg
    ├── frontpage.png
    ├── img 1.jpg
    ├── img 2.jpg
    └── img 3.jpg
```

---

## Getting Started

No install needed. Just open `index.html` in any browser.

```bash
git clone https://github.com/your-username/madhina-cloth-palace.git
cd madhina-cloth-palace


## Screenshots

| Store | Product | Admin |
|-------|---------|-------|
| Hero + flip cards | Full detail view | Password + product table |

---

## Notes

- All data persists in `localStorage` — no server required
- Changing the admin password: edit `ADMIN_PASS` in `admin.html`
- Products added via admin are saved instantly and reflected on the store

---

## License

MIT — free to use and modify.
