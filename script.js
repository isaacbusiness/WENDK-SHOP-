/* =========================================================
   WENDK SHOP — SCRIPT.JS
   BLOC 1/3
========================================================= */

/* =========================================================
   CONFIGURATION
========================================================= */

const WHATSAPP_NUMBER = "22607309472";

const products = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    category: "iphone",
    price: 850000,
    oldPrice: 900000,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    badge: "Nouveau",
    description: "iPhone haut de gamme avec performances exceptionnelles et design premium.",
    specs: [
      "Écran Super Retina",
      "Grande capacité de stockage",
      "Appareil photo professionnel",
      "Face ID",
      "5G"
    ]
  },

  {
    id: 2,
    name: "iPhone 15 Pro Max",
    category: "iphone",
    price: 650000,
    oldPrice: 700000,
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=800&q=80",
    badge: "Promo",
    description: "Un smartphone puissant avec une excellente qualité photo et vidéo.",
    specs: [
      "Écran OLED",
      "Puce Apple performante",
      "Caméra professionnelle",
      "5G",
      "Face ID"
    ]
  },

  {
    id: 3,
    name: "iPhone 13",
    category: "iphone",
    price: 350000,
    oldPrice: 390000,
    image: "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?auto=format&fit=crop&w=800&q=80",
    badge: "Promo",
    description: "Un iPhone fiable et performant pour une utilisation quotidienne.",
    specs: [
      "Écran Super Retina XDR",
      "Double caméra",
      "Face ID",
      "5G",
      "Batterie longue durée"
    ]
  },

  {
    id: 4,
    name: "Samsung Galaxy S25 Ultra",
    category: "samsung",
    price: 750000,
    oldPrice: 800000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
    badge: "Nouveau",
    description: "Le smartphone premium Samsung avec puissance, caméra et intelligence artificielle.",
    specs: [
      "Écran Dynamic AMOLED",
      "Caméra haute résolution",
      "S Pen",
      "5G",
      "Grande autonomie"
    ]
  },

  {
    id: 5,
    name: "Samsung Galaxy S24 Ultra",
    category: "samsung",
    price: 600000,
    oldPrice: 670000,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80",
    badge: "Promo",
    description: "Un smartphone premium Samsung puissant et polyvalent.",
    specs: [
      "Écran AMOLED",
      "S Pen",
      "Caméra 200 MP",
      "5G",
      "Batterie longue durée"
    ]
  },

  {
    id: 6,
    name: "Samsung Galaxy A55",
    category: "samsung",
    price: 220000,
    oldPrice: 250000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    badge: "Promo",
    description: "Excellent rapport qualité-prix pour le travail, les réseaux sociaux et le divertissement.",
    specs: [
      "Écran AMOLED",
      "Triple caméra",
      "5G",
      "Bonne autonomie",
      "Design premium"
    ]
  },

  {
    id: 7,
    name: "Redmi Note 14 Pro",
    category: "redmi",
    price: 180000,
    oldPrice: 210000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80",
    badge: "Promo",
    description: "Un smartphone Redmi puissant avec un excellent rapport qualité-prix.",
    specs: [
      "Écran AMOLED",
      "Caméra haute résolution",
      "Grande batterie",
      "Charge rapide",
      "4G/5G selon modèle"
    ]
  },

  {
    id: 8,
    name: "Redmi Note 13",
    category: "redmi",
    price: 135000,
    oldPrice: 155000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    badge: "Promo",
    description: "Un smartphone accessible et performant pour tous les jours.",
    specs: [
      "Écran AMOLED",
      "Grande batterie",
      "Caméra performante",
      "Charge rapide",
      "Double SIM"
    ]
  },

  {
    id: 9,
    name: "Tecno Camon 30",
    category: "tecno",
    price: 165000,
    oldPrice: 185000,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
    badge: "Nouveau",
    description: "Smartphone Tecno orienté photo avec design moderne.",
    specs: [
      "Écran AMOLED",
      "Caméra haute résolution",
      "Grande batterie",
      "Charge rapide",
      "Double SIM"
    ]
  },

  {
    id: 10,
    name: "Tecno Spark 20",
    category: "tecno",
    price: 85000,
    oldPrice: 100000,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
    badge: "Promo",
    description: "Un smartphone abordable pour les besoins essentiels.",
    specs: [
      "Grand écran",
      "Bonne autonomie",
      "Double caméra",
      "Double SIM",
      "Stockage généreux"
    ]
  },

  {
    id: 11,
    name: "AirPods Pro",
    category: "accessoires",
    price: 45000,
    oldPrice: 55000,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
    badge: "Promo",
    description: "Écouteurs sans fil avec réduction de bruit et boîtier de recharge.",
    specs: [
      "Bluetooth",
      "Réduction de bruit",
      "Boîtier de recharge",
      "Microphone intégré",
      "Sans fil"
    ]
  },

  {
    id: 12,
    name: "Apple Watch",
    category: "accessoires",
    price: 75000,
    oldPrice: 90000,
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=80",
    badge: "Nouveau",
    description: "Montre connectée élégante pour suivre votre activité et vos notifications.",
    specs: [
      "Écran tactile",
      "Bluetooth",
      "Notifications",
      "Suivi d'activité",
      "Bracelet réglable"
    ]
  },

  {
    id: 13,
    name: "Power Bank 20 000 mAh",
    category: "accessoires",
    price: 18000,
    oldPrice: 22000,
    image: "https://images.unsplash.com/photo-1609592424841-3f6f7b8c4a4a?auto=format&fit=crop&w=800&q=80",
    badge: "Promo",
    description: "Batterie externe haute capacité pour recharger vos appareils partout.",
    specs: [
      "20 000 mAh",
      "USB",
      "Charge rapide",
      "Indicateur de batterie",
      "Compatible smartphones"
    ]
  },

  {
    id: 14,
    name: "Chargeur rapide USB-C",
    category: "accessoires",
    price: 10000,
    oldPrice: 13000,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    badge: "Promo",
    description: "Chargeur rapide compatible avec de nombreux smartphones modernes.",
    specs: [
      "USB-C",
      "Charge rapide",
      "Compact",
      "Protection contre la surtension",
      "Compatible Android et iPhone"
    ]
  }
];


/* =========================================================
   ÉTAT DE L'APPLICATION
========================================================= */

let cart = JSON.parse(localStorage.getItem("wendkCart")) || [];

let favorites =
  JSON.parse(localStorage.getItem("wendkFavorites")) || [];

let currentCategory = "all";

let currentProduct = null;


/* =========================================================
   ÉLÉMENTS DOM
========================================================= */

const productsGrid = document.getElementById("productsGrid");

const noProducts = document.getElementById("noProducts");

const cartItems = document.getElementById("cartItems");

const cartCount = document.getElementById("cartCount");

const cartTotal = document.getElementById("cartTotal");

const headerCartTotal =
  document.getElementById("headerCartTotal");

const emptyCart = document.getElementById("emptyCart");

const cartFooter = document.getElementById("cartFooter");

const cartOverlay = document.getElementById("cartOverlay");

const cartDrawer = document.getElementById("cartDrawer");

const toast = document.getElementById("toast");

const currentYear = document.getElementById("currentYear");


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderProducts();

  renderCart();

  updateFavoritesButtons();

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

});


/* =========================================================
   FORMATAGE DES PRIX
========================================================= */

function formatPrice(price) {

  return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";

}


/* =========================================================
   SAUVEGARDE LOCALSTORAGE
========================================================= */

function saveCart() {

  localStorage.setItem(
    "wendkCart",
    JSON.stringify(cart)
  );

}


function saveFavorites() {

  localStorage.setItem(
    "wendkFavorites",
    JSON.stringify(favorites)
  );

}


/* =========================================================
   AFFICHAGE DES PRODUITS
========================================================= */

function renderProducts() {

  if (!productsGrid) return;

  let filteredProducts = products;

  if (currentCategory !== "all") {

    filteredProducts = products.filter(
      product => product.category === currentCategory
    );

  }

  if (filteredProducts.length === 0) {

    productsGrid.innerHTML = "";

    if (noProducts) {
      noProducts.classList.remove("hidden");
    }

    return;

  }

  if (noProducts) {
    noProducts.classList.add("hidden");
  }

  productsGrid.innerHTML = filteredProducts
    .map(product => createProductCard(product))
    .join("");

}


/* =========================================================
   CARTE PRODUIT
========================================================= */

function createProductCard(product) {

  const isFavorite = favorites.includes(product.id);

  const badgeClass =
    product.badge === "Promo"
      ? "product-badge sale"
      : "product-badge new";

  return `
    <article class="product-card">

      <div class="product-image-wrapper">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        ${
          product.badge
            ? `<span class="${badgeClass}">
                ${product.badge}
              </span>`
            : ""
        }

        <button
          class="favorite-btn ${isFavorite ? "active" : ""}"
          data-favorite="${product.id}"
          aria-label="Ajouter aux favoris"
        >
          ${isFavorite ? "♥" : "♡"}
        </button>

        <button
          class="product-quick-view"
          data-view="${product.id}"
        >
          Voir le produit
        </button>

      </div>

      <div class="product-content">

        <div class="product-category">
          ${getCategoryName(product.category)}
        </div>

        <h3 class="product-name">
          ${product.name}
        </h3>

        <p class="product-description">
          ${product.description}
        </p>

        <div class="product-bottom">

          <div>
            <span class="product-price">
              ${formatPrice(product.price)}
            </span>

            ${
              product.oldPrice
                ? `<span class="product-old-price">
                    ${formatPrice(product.oldPrice)}
                  </span>`
                : ""
            }
          </div>

          <button
            class="add-cart-btn"
            data-add-cart="${product.id}"
          >
            🛒 Ajouter
          </button>

        </div>

      </div>

    </article>
  `;

}


/* =========================================================
   NOM DES CATÉGORIES
========================================================= */

function getCategoryName(category) {

  const names = {
    iphone: "iPhone",
    samsung: "Samsung",
    redmi: "Redmi",
    tecno: "Tecno",
    accessoires: "Accessoires"
  };

  return names[category] || "Produit";

}


/* =========================================================
   ÉVÉNEMENTS PRODUITS
========================================================= */

document.addEventListener("click", (event) => {

  const addButton =
    event.target.closest("[data-add-cart]");

  if (addButton) {

    const productId =
      Number(addButton.dataset.addCart);

    addToCart(productId);

    return;
  }


  const favoriteButton =
    event.target.closest("[data-favorite]");

  if (favoriteButton) {

    const productId =
      Number(favoriteButton.dataset.favorite);

    toggleFavorite(productId);

    return;
  }


  const viewButton =
    event.target.closest("[data-view]");

  if (viewButton) {

    const productId =
      Number(viewButton.dataset.view);

    openProductDetails(productId);

    return;
  }

});


/* =========================================================
   FILTRES CATÉGORIES
========================================================= */

document.addEventListener("click", (event) => {

  const filterButton =
    event.target.closest(".filter-btn");

  if (!filterButton) return;

  const category =
    filterButton.dataset.filter;

  if (!category) return;

  currentCategory = category;

  document
    .querySelectorAll(".filter-btn")
    .forEach(button => {
      button.classList.remove("active");
    });

  filterButton.classList.add("active");

  renderProducts();

});


/* =========================================================
   FIN DU BLOC 1/3
========================================================= */
/* =========================================================
   WENDK SHOP — SCRIPT.JS
   BLOC 2/3
========================================================= */


/* =========================================================
   PANIER — AJOUTER UN PRODUIT
========================================================= */

function addToCart(productId) {

  const product = products.find(
    item => item.id === productId
  );

  if (!product) return;

  const existingItem = cart.find(
    item => item.id === productId
  );

  if (existingItem) {

    existingItem.quantity += 1;

  } else {

    cart.push({
      id: product.id,
      quantity: 1
    });

  }

  saveCart();

  renderCart();

  showToast(
    `${product.name} ajouté au panier`,
    "success"
  );

}


/* =========================================================
   PANIER — SUPPRIMER UN PRODUIT
========================================================= */

function removeFromCart(productId) {

  const product = products.find(
    item => item.id === productId
  );

  cart = cart.filter(
    item => item.id !== productId
  );

  saveCart();

  renderCart();

  if (product) {

    showToast(
      `${product.name} retiré du panier`,
      "success"
    );

  }

}


/* =========================================================
   PANIER — MODIFIER LA QUANTITÉ
========================================================= */

function updateQuantity(productId, change) {

  const item = cart.find(
    cartItem => cartItem.id === productId
  );

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {

    removeFromCart(productId);

    return;

  }

  saveCart();

  renderCart();

}


/* =========================================================
   CALCUL DU TOTAL
========================================================= */

function getCartTotal() {

  return cart.reduce((total, item) => {

    const product = products.find(
      product => product.id === item.id
    );

    if (!product) return total;

    return total + product.price * item.quantity;

  }, 0);

}


/* =========================================================
   NOMBRE TOTAL D'ARTICLES
========================================================= */

function getCartCount() {

  return cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

}


/* =========================================================
   AFFICHER LE PANIER
========================================================= */

function renderCart() {

  if (!cartItems) return;

  if (cart.length === 0) {

    cartItems.innerHTML = "";

    if (emptyCart) {
      emptyCart.classList.remove("hidden");
    }

    if (cartFooter) {
      cartFooter.classList.add("hidden");
    }

  } else {

    if (emptyCart) {
      emptyCart.classList.add("hidden");
    }

    if (cartFooter) {
      cartFooter.classList.remove("hidden");
    }

    cartItems.innerHTML = cart
      .map(item => createCartItem(item))
      .join("");

  }

  updateCartTotals();

}


/* =========================================================
   CARTE D'UN ARTICLE DU PANIER
========================================================= */

function createCartItem(item) {

  const product = products.find(
    product => product.id === item.id
  );

  if (!product) return "";

  const subtotal =
    product.price * item.quantity;

  return `
    <div class="cart-item">

      <img
        class="cart-item-image"
        src="${product.image}"
        alt="${product.name}"
      >

      <div class="cart-item-info">

        <h4 class="cart-item-name">
          ${product.name}
        </h4>

        <div class="cart-item-price">
          ${formatPrice(subtotal)}
        </div>

        <div class="cart-item-controls">

          <button
            class="quantity-btn"
            data-decrease="${product.id}"
            aria-label="Diminuer"
          >
            −
          </button>

          <span class="quantity-value">
            ${item.quantity}
          </span>

          <button
            class="quantity-btn"
            data-increase="${product.id}"
            aria-label="Augmenter"
          >
            +
          </button>

          <button
            class="remove-cart-item"
            data-remove-cart="${product.id}"
            aria-label="Supprimer"
          >
            🗑️
          </button>

        </div>

      </div>

    </div>
  `;

}


/* =========================================================
   TOTALS DU PANIER
========================================================= */

function updateCartTotals() {

  const count = getCartCount();

  const total = getCartTotal();

  if (cartCount) {

    cartCount.textContent = count;

    cartCount.style.display =
      count > 0 ? "flex" : "none";

  }

  if (cartTotal) {

    cartTotal.textContent =
      formatPrice(total);

  }

  if (headerCartTotal) {

    headerCartTotal.textContent =
      formatPrice(total);

  }

}


/* =========================================================
   ÉVÉNEMENTS DU PANIER
========================================================= */

document.addEventListener("click", (event) => {

  const increaseButton =
    event.target.closest("[data-increase]");

  if (increaseButton) {

    const productId =
      Number(increaseButton.dataset.increase);

    updateQuantity(productId, 1);

    return;

  }


  const decreaseButton =
    event.target.closest("[data-decrease]");

  if (decreaseButton) {

    const productId =
      Number(decreaseButton.dataset.decrease);

    updateQuantity(productId, -1);

    return;

  }


  const removeButton =
    event.target.closest("[data-remove-cart]");

  if (removeButton) {

    const productId =
      Number(removeButton.dataset.removeCart);

    removeFromCart(productId);

    return;

  }

});


/* =========================================================
   OUVRIR LE PANIER
========================================================= */

function openCart() {

  if (cartOverlay) {
    cartOverlay.classList.add("active");
  }

  if (cartDrawer) {
    cartDrawer.classList.add("active");
  }

  document.body.style.overflow = "hidden";

}


/* =========================================================
   FERMER LE PANIER
========================================================= */

function closeCart() {

  if (cartOverlay) {
    cartOverlay.classList.remove("active");
  }

  if (cartDrawer) {
    cartDrawer.classList.remove("active");
  }

  document.body.style.overflow = "";

}


/* =========================================================
   BOUTONS PANIER
========================================================= */

const openCartBtn =
  document.getElementById("openCartBtn");

const closeCartBtn =
  document.getElementById("closeCartBtn");

const continueShopping =
  document.getElementById("continueShopping");


if (openCartBtn) {

  openCartBtn.addEventListener(
    "click",
    openCart
  );

}


if (closeCartBtn) {

  closeCartBtn.addEventListener(
    "click",
    closeCart
  );

}


if (continueShopping) {

  continueShopping.addEventListener(
    "click",
    closeCart
  );

}


if (cartOverlay) {

  cartOverlay.addEventListener(
    "click",
    closeCart
  );

}


/* =========================================================
   VIDER LE PANIER
========================================================= */

const clearCartBtn =
  document.getElementById("clearCartBtn");

if (clearCartBtn) {

  clearCartBtn.addEventListener(
    "click",
    () => {

      if (cart.length === 0) {

        showToast(
          "Le panier est déjà vide",
          "error"
        );

        return;

      }

      const confirmed =
        confirm(
          "Voulez-vous vraiment vider le panier ?"
        );

      if (!confirmed) return;

      cart = [];

      saveCart();

      renderCart();

      showToast(
        "Panier vidé",
        "success"
      );

    }
  );

}


/* =========================================================
   FAVORIS
========================================================= */

function toggleFavorite(productId) {

  const product = products.find(
    item => item.id === productId
  );

  if (!product) return;

  const index =
    favorites.indexOf(productId);

  if (index === -1) {

    favorites.push(productId);

    showToast(
      `${product.name} ajouté aux favoris`,
      "success"
    );

  } else {

    favorites.splice(index, 1);

    showToast(
      `${product.name} retiré des favoris`,
      "success"
    );

  }

  saveFavorites();

  renderProducts();

  updateFavoritesButtons();

}


/* =========================================================
   METTRE À JOUR LES BOUTONS FAVORIS
========================================================= */

function updateFavoritesButtons() {

  document
    .querySelectorAll("[data-favorite]")
    .forEach(button => {

      const productId =
        Number(button.dataset.favorite);

      const isFavorite =
        favorites.includes(productId);

      button.classList.toggle(
        "active",
        isFavorite
      );

      button.textContent =
        isFavorite ? "♥" : "♡";

    });

}


/* =========================================================
   MODALE FAVORIS
========================================================= */

const favoritesModal =
  document.getElementById("favoritesModal");

const favoritesModalOverlay =
  document.getElementById("favoritesModalOverlay");

const favoritesItems =
  document.getElementById("favoritesItems");

const favoritesBtn =
  document.getElementById("favoritesBtn");

const closeFavoritesModal =
  document.getElementById("closeFavoritesModal");

const closeFavoritesBtn =
  document.getElementById("closeFavoritesBtn");


function renderFavorites() {

  if (!favoritesItems) return;

  if (favorites.length === 0) {

    favoritesItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">♡</div>
        <h3>Aucun favori</h3>
        <p>
          Ajoutez vos produits préférés ici.
        </p>
      </div>
    `;

    return;

  }

  favoritesItems.innerHTML = favorites
    .map(productId => {

      const product = products.find(
        item => item.id === productId
      );

      if (!product) return "";

      return `
        <div class="favorite-item">

          <img
            src="${product.image}"
            alt="${product.name}"
          >

          <div class="favorite-item-info">

            <h4>
              ${product.name}
            </h4>

            <p>
              ${formatPrice(product.price)}
            </p>

          </div>

          <button
            class="remove-cart-item"
            data-remove-favorite="${product.id}"
          >
            🗑️
          </button>

        </div>
      `;

    })
    .join("");

}


function openFavorites() {

  renderFavorites();

  if (favoritesModal) {
    favoritesModal.classList.add("active");
  }

  if (favoritesModalOverlay) {
    favoritesModalOverlay.classList.add("active");
  }

  document.body.style.overflow = "hidden";

}


function closeFavorites() {

  if (favoritesModal) {
    favoritesModal.classList.remove("active");
  }

  if (favoritesModalOverlay) {
    favoritesModalOverlay.classList.remove("active");
  }

  document.body.style.overflow = "";

}


if (favoritesBtn) {

  favoritesBtn.addEventListener(
    "click",
    openFavorites
  );

}


if (closeFavoritesModal) {

  closeFavoritesModal.addEventListener(
    "click",
    closeFavorites
  );

}


if (closeFavoritesBtn) {

  closeFavoritesBtn.addEventListener(
    "click",
    closeFavorites
  );

}


if (favoritesModalOverlay) {

  favoritesModalOverlay.addEventListener(
    "click",
    closeFavorites
  );

}


/* =========================================================
   SUPPRESSION FAVORI
========================================================= */

document.addEventListener("click", (event) => {

  const removeFavorite =
    event.target.closest("[data-remove-favorite]");

  if (!removeFavorite) return;

  const productId =
    Number(removeFavorite.dataset.removeFavorite);

  favorites =
    favorites.filter(id => id !== productId);

  saveFavorites();

  renderFavorites();

  renderProducts();

  showToast(
    "Produit retiré des favoris",
    "success"
  );

});


/* =========================================================
   FIN DU BLOC 2/3
=================================================== */
/* =========================================================
   WENDK SHOP — SCRIPT.JS
   BLOC 3/3
========================================================= */


/* =========================================================
   MODALE DÉTAILS PRODUIT
========================================================= */

const productDetailsModal =
  document.getElementById("productDetailsModal");

const productDetailsOverlay =
  document.getElementById("productDetailsOverlay");

const closeProductDetails =
  document.getElementById("closeProductDetails");

const detailsProductImage =
  document.getElementById("detailsProductImage");

const detailsProductCategory =
  document.getElementById("detailsProductCategory");

const detailsProductName =
  document.getElementById("detailsProductName");

const detailsProductDescription =
  document.getElementById("detailsProductDescription");

const detailsProductPrice =
  document.getElementById("detailsProductPrice");

const detailsProductSpecs =
  document.getElementById("detailsProductSpecs");

const detailsAddCart =
  document.getElementById("detailsAddCart");


/* =========================================================
   OUVRIR LES DÉTAILS
========================================================= */

function openProductDetails(productId) {

  const product = products.find(
    item => item.id === productId
  );

  if (!product) return;

  currentProduct = product;

  if (detailsProductImage) {

    detailsProductImage.src =
      product.image;

    detailsProductImage.alt =
      product.name;

  }

  if (detailsProductCategory) {

    detailsProductCategory.textContent =
      getCategoryName(product.category);

  }

  if (detailsProductName) {

    detailsProductName.textContent =
      product.name;

  }

  if (detailsProductDescription) {

    detailsProductDescription.textContent =
      product.description;

  }

  if (detailsProductPrice) {

    detailsProductPrice.textContent =
      formatPrice(product.price);

  }

  if (detailsProductSpecs) {

    detailsProductSpecs.innerHTML =
      product.specs
        .map(spec => `
          <li class="spec-item">
            <span>✓</span>
            ${spec}
          </li>
        `)
        .join("");

  }

  if (productDetailsModal) {

    productDetailsModal.classList.add("active");

  }

  if (productDetailsOverlay) {

    productDetailsOverlay.classList.add("active");

  }

  document.body.style.overflow = "hidden";

}


/* =========================================================
   FERMER LES DÉTAILS
========================================================= */

function closeProductDetailsModal() {

  if (productDetailsModal) {

    productDetailsModal.classList.remove("active");

  }

  if (productDetailsOverlay) {

    productDetailsOverlay.classList.remove("active");

  }

  document.body.style.overflow = "";

  currentProduct = null;

}


if (closeProductDetails) {

  closeProductDetails.addEventListener(
    "click",
    closeProductDetailsModal
  );

}


if (productDetailsOverlay) {

  productDetailsOverlay.addEventListener(
    "click",
    closeProductDetailsModal
  );

}


/* =========================================================
   AJOUTER LE PRODUIT DE LA MODALE AU PANIER
========================================================= */

if (detailsAddCart) {

  detailsAddCart.addEventListener(
    "click",
    () => {

      if (!currentProduct) return;

      addToCart(currentProduct.id);

      closeProductDetailsModal();

      openCart();

    }
  );

}


/* =========================================================
   RECHERCHE PRODUITS
========================================================= */

const searchInput =
  document.getElementById("searchInput");

const searchBtn =
  document.getElementById("searchBtn");


function searchProducts() {

  if (!searchInput) return;

  const searchTerm =
    searchInput.value
      .trim()
      .toLowerCase();

  if (!searchTerm) {

    currentCategory = "all";

    renderProducts();

    return;

  }

  const results =
    products.filter(product => {

      return (
        product.name
          .toLowerCase()
          .includes(searchTerm) ||

        product.description
          .toLowerCase()
          .includes(searchTerm) ||

        product.category
          .toLowerCase()
          .includes(searchTerm)
      );

    });


  if (!productsGrid) return;

  if (results.length === 0) {

    productsGrid.innerHTML = "";

    if (noProducts) {

      noProducts.classList.remove("hidden");

    }

    return;

  }


  if (noProducts) {

    noProducts.classList.add("hidden");

  }


  productsGrid.innerHTML =
    results
      .map(product => createProductCard(product))
      .join("");

}


if (searchBtn) {

  searchBtn.addEventListener(
    "click",
    searchProducts
  );

}


if (searchInput) {

  searchInput.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {

        searchProducts();

      }

    }
  );

}


/* =========================================================
   AFFICHER TOUS LES PRODUITS
========================================================= */

const showAllProducts =
  document.getElementById("showAllProducts");


if (showAllProducts) {

  showAllProducts.addEventListener(
    "click",
    event => {

      event.preventDefault();

      currentCategory = "all";

      if (searchInput) {

        searchInput.value = "";

      }

      document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

          button.classList.remove("active");

        });


      const allButton =
        document.querySelector(
          '.filter-btn[data-filter="all"]'
        );

      if (allButton) {

        allButton.classList.add("active");

      }

      renderProducts();

      const productsSection =
        document.getElementById("produits");

      if (productsSection) {

        productsSection.scrollIntoView({
          behavior: "smooth"
        });

      }

    }
  );

}


/* =========================================================
   RESET DES FILTRES
========================================================= */

const resetFilters =
  document.getElementById("resetFilters");


if (resetFilters) {

  resetFilters.addEventListener(
    "click",
    () => {

      currentCategory = "all";

      if (searchInput) {

        searchInput.value = "";

      }

      document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

          button.classList.remove("active");

        });


      const allButton =
        document.querySelector(
          '.filter-btn[data-filter="all"]'
        );

      if (allButton) {

        allButton.classList.add("active");

      }

      renderProducts();

    }
  );

}


/* =========================================================
   COMMANDE WHATSAPP
========================================================= */

const checkoutBtn =
  document.getElementById("checkoutBtn");


function checkoutWhatsApp() {

  if (cart.length === 0) {

    showToast(
      "Votre panier est vide",
      "error"
    );

    return;

  }


  let message =
    "🛍️ *COMMANDE WENDK SHOP*\n\n";


  cart.forEach((item, index) => {

    const product =
      products.find(
        product => product.id === item.id
      );

    if (!product) return;

    const subtotal =
      product.price * item.quantity;


    message +=
      `${index + 1}. ${product.name}\n`;

    message +=
      `   Quantité : ${item.quantity}\n`;

    message +=
      `   Prix : ${formatPrice(subtotal)}\n\n`;

  });


  message +=
    `💰 *TOTAL : ${formatPrice(
      getCartTotal()
    )}*\n\n`;

  message +=
    "📍 Livraison : Burkina Faso\n";

  message +=
    "📞 Merci de confirmer votre commande avec WENDK SHOP.";


  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;


  window.open(
    whatsappUrl,
    "_blank"
  );

}


if (checkoutBtn) {

  checkoutBtn.addEventListener(
    "click",
    checkoutWhatsApp
  );

}


/* =========================================================
   BOUTON COMPTE
========================================================= */

const accountBtn =
  document.getElementById("accountBtn");

const accountModal =
  document.getElementById("accountModal");

const accountModalOverlay =
  document.getElementById("accountModalOverlay");

const closeAccountModal =
  document.getElementById("closeAccountModal");

const accountWhatsappBtn =
  document.getElementById("accountWhatsappBtn");


function openAccountModal() {

  if (accountModal) {

    accountModal.classList.add("active");

  }

  if (accountModalOverlay) {

    accountModalOverlay.classList.add("active");

  }

  document.body.style.overflow = "hidden";

}


function closeAccountModalFunction() {

  if (accountModal) {

    accountModal.classList.remove("active");

  }

  if (accountModalOverlay) {

    accountModalOverlay.classList.remove("active");

  }

  document.body.style.overflow = "";

}


if (accountBtn) {

  accountBtn.addEventListener(
    "click",
    openAccountModal
  );

}


if (closeAccountModal) {

  closeAccountModal.addEventListener(
    "click",
    closeAccountModalFunction
  );

}


if (accountModalOverlay) {

  accountModalOverlay.addEventListener(
    "click",
    closeAccountModalFunction
  );

}


if (accountWhatsappBtn) {

  accountWhatsappBtn.addEventListener(
    "click",
    () => {

      const message =
        "Bonjour WENDK SHOP 👋\n\n" +
        "Je souhaite créer un compte client " +
        "et obtenir plus d'informations.";

      const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          message
        )}`;

      window.open(url, "_blank");

    }
  );

}


/* =========================================================
   LIENS CATÉGORIES
========================================================= */

document.addEventListener(
  "click",
  event => {

    const categoryLink =
      event.target.closest("[data-category]");

    if (!categoryLink) return;

    const category =
      categoryLink.dataset.category;

    if (!category) return;

    currentCategory = category;

    if (searchInput) {

      searchInput.value = "";

    }

    document
      .querySelectorAll(".filter-btn")
      .forEach(button => {

        button.classList.remove("active");

      });


    const filterButton =
      document.querySelector(
        `.filter-btn[data-filter="${category}"]`
      );

    if (filterButton) {

      filterButton.classList.add("active");

    }

    renderProducts();

    const productsSection =
      document.getElementById("produits");

    if (productsSection) {

      productsSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  }
);


/* =========================================================
   NAVIGATION FLUIDE
========================================================= */

document.querySelectorAll(
  'a[href^="#"]'
).forEach(link => {

  link.addEventListener(
    "click",
    event => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }
  );

});


/* =========================================================
   TOAST / NOTIFICATION
========================================================= */

let toastTimeout;


function showToast(message, type = "success") {

  if (!toast) return;

  clearTimeout(toastTimeout);

  toast.textContent = message;

  toast.className =
    `toast ${type} show`;

  toastTimeout =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 3000);

}


/* =========================================================
   BOUTON RETOUR EN HAUT
========================================================= */

const backToTop =
  document.getElementById("backToTop");


window.addEventListener(
  "scroll",
  () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {

      backToTop.classList.add("active");

    } else {

      backToTop.classList.remove("active");

    }

  }
);


if (backToTop) {

  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* =========================================================
   FERMER LES MODALES AVEC ÉCHAP
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") return;

    closeCart();

    closeFavorites();

    closeProductDetailsModal();

    closeAccountModalFunction();

  }
);


/* =========================================================
   PROTECTION DES IMAGES
========================================================= */

document.addEventListener(
  "error",
  event => {

    if (
      event.target &&
      event.target.tagName === "IMG"
    ) {

      event.target.style.objectFit = "contain";

    }

  },
  true
);


/* =========================================================
   FIN DU SCRIPT.JS
========================================================= */
/* =========================================================
   CORRECTION — MODALE DÉTAILS PRODUIT
========================================================= */

document.addEventListener("click", function(event) {

  const viewButton = event.target.closest("[data-view]");

  if (!viewButton) return;

  const productId = Number(viewButton.dataset.view);

  const product = products.find(
    product => product.id === productId
  );

  if (!product) return;

  const modal =
    document.getElementById("productDetailsModal");

  const overlay =
    document.getElementById("productDetailsOverlay");

  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("active");
  }

  if (overlay) {
    overlay.classList.remove("hidden");
    overlay.classList.add("active");
  }

});

/* =========================================================
   CORRECTIF COMPLET — DÉTAILS PRODUIT
========================================================= */

document.addEventListener("click", function (event) {

  const button = event.target.closest(".product-quick-view");

  if (!button) return;

  const productId = Number(button.dataset.view);

  const product = products.find(p => p.id === productId);

  if (!product) {
    console.error("Produit introuvable :", productId);
    return;
  }

  const modal = document.getElementById("productDetailsModal");
  const overlay = document.getElementById("productDetailsOverlay");

  const image = document.getElementById("detailsProductImage");
  const category = document.getElementById("detailsProductCategory");
  const name = document.getElementById("detailsProductName");
  const description = document.getElementById("detailsProductDescription");
  const price = document.getElementById("detailsProductPrice");
  const specs = document.getElementById("detailsProductSpecs");

  if (!modal) {
    console.error("productDetailsModal introuvable");
    return;
  }

  if (image) {
    image.src = product.image;
    image.alt = product.name;
  }

  if (category) {
    category.textContent = getCategoryName(product.category);
  }

  if (name) {
    name.textContent = product.name;
  }

  if (description) {
    description.textContent = product.description;
  }

  if (price) {
    price.textContent = formatPrice(product.price);
  }

  if (specs) {
    specs.innerHTML = product.specs
      .map(spec => `
        <li class="spec-item">
          <span>✓</span>
          ${spec}
        </li>
      `)
      .join("");
  }

  modal.classList.remove("hidden");
  modal.classList.add("active");

  if (overlay) {
    overlay.classList.remove("hidden");
    overlay.classList.add("active");
  }

  document.body.style.overflow = "hidden";

});
/* =========================================================
   CORRECTIF — FERMETURE FENÊTRE DÉTAILS PRODUIT
========================================================= */

function forceCloseProductDetails() {

  const modal =
    document.getElementById("productDetailsModal");

  const overlay =
    document.getElementById("productDetailsOverlay");

  if (modal) {
    modal.classList.remove("active");
    modal.classList.add("hidden");
  }

  if (overlay) {
    overlay.classList.remove("active");
    overlay.classList.add("hidden");
  }

  document.body.style.overflow = "";

}


/* Bouton X */

document.addEventListener("click", function(event) {

  const closeButton =
    event.target.closest("#closeProductDetails");

  if (!closeButton) return;

  event.preventDefault();

  forceCloseProductDetails();

});


/* Clic sur l'arrière-plan */

document.addEventListener("click", function(event) {

  const overlay =
    event.target.closest("#productDetailsOverlay");

  if (!overlay) return;

  forceCloseProductDetails();

});


/* Touche Échap */

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

    const modal =
      document.getElementById("productDetailsModal");

    if (
      modal &&
      modal.classList.contains("active")
    ) {
      forceCloseProductDetails();
    }

  }

});
