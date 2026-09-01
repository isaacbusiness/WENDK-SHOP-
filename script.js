/* =========================================================
   WENDK SHOP — SCRIPT.JS
   BLOC 1/3
========================================================= */

"use strict";

/* =========================================================
   CONFIGURATION
========================================================= */

const WHATSAPP_NUMBER = "22607309472";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;


/* =========================================================
   PRODUITS
========================================================= */

const products = [

  {
    id: 1,
    name: "iPhone 17 Pro Max",
    category: "iphone",
    price: 850000,
    oldPrice: 900000,
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    description: "iPhone haut de gamme avec performances exceptionnelles et design premium.",
    specs: [
      "Écran Super Retina XDR",
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
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80",
    description: "Un smartphone premium puissant, élégant et performant.",
    specs: [
      "Écran OLED",
      "Puce Apple Silicon",
      "Appareil photo Pro",
      "Face ID",
      "5G"
    ]
  },

  {
    id: 3,
    name: "iPhone 13",
    category: "iphone",
    price: 350000,
    oldPrice: 390000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=800&q=80",
    description: "Un iPhone fiable et performant pour une utilisation quotidienne.",
    specs: [
      "Écran Super Retina",
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
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
    description: "Smartphone Samsung premium avec puissance et photographie avancée.",
    specs: [
      "Écran AMOLED",
      "Caméra haute résolution",
      "S Pen",
      "5G",
      "Batterie grande capacité"
    ]
  },

  {
    id: 5,
    name: "Samsung Galaxy S24 Ultra",
    category: "samsung",
    price: 600000,
    oldPrice: 670000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b3b?auto=format&fit=crop&w=800&q=80",
    description: "Un smartphone premium Samsung puissant et polyvalent.",
    specs: [
      "Écran AMOLED",
      "S Pen",
      "Caméra professionnelle",
      "5G",
      "Charge rapide"
    ]
  },

  {
    id: 6,
    name: "Samsung Galaxy A55",
    category: "samsung",
    price: 220000,
    oldPrice: 250000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    description: "Excellent rapport qualité-prix pour une utilisation quotidienne.",
    specs: [
      "Écran AMOLED",
      "Triple caméra",
      "5G",
      "Grande batterie",
      "Design moderne"
    ]
  },

  {
    id: 7,
    name: "Redmi Note 14 Pro",
    category: "redmi",
    price: 180000,
    oldPrice: 210000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    description: "Un smartphone Redmi performant à prix accessible.",
    specs: [
      "Écran haute définition",
      "Caméra performante",
      "Grande batterie",
      "Charge rapide",
      "Double SIM"
    ]
  },

  {
    id: 8,
    name: "Redmi Note 13",
    category: "redmi",
    price: 135000,
    oldPrice: 155000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
    description: "Smartphone économique avec de bonnes performances.",
    specs: [
      "Écran AMOLED",
      "Grande batterie",
      "Caméra haute résolution",
      "Double SIM",
      "Charge rapide"
    ]
  },

  {
    id: 9,
    name: "Tecno Camon 30",
    category: "tecno",
    price: 165000,
    oldPrice: 185000,
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    description: "Smartphone Tecno orienté photographie et divertissement.",
    specs: [
      "Écran AMOLED",
      "Caméra avancée",
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
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80",
    description: "Smartphone abordable pour les besoins essentiels.",
    specs: [
      "Grand écran",
      "Grande batterie",
      "Double caméra",
      "Double SIM",
      "Stockage confortable"
    ]
  },

  {
    id: 11,
    name: "AirPods Pro",
    category: "accessoires",
    price: 45000,
    oldPrice: 55000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
    description: "Écouteurs sans fil pratiques avec excellente qualité sonore.",
    specs: [
      "Connexion Bluetooth",
      "Réduction de bruit",
      "Boîtier de recharge",
      "Micro intégré",
      "Sans fil"
    ]
  },

  {
    id: 12,
    name: "Apple Watch",
    category: "accessoires",
    price: 75000,
    oldPrice: 90000,
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=800&q=80",
    description: "Montre connectée élégante pour accompagner votre quotidien.",
    specs: [
      "Écran tactile",
      "Notifications",
      "Suivi d'activité",
      "Bluetooth",
      "Bracelet confortable"
    ]
  },

  {
    id: 13,
    name: "Power Bank 20 000 mAh",
    category: "accessoires",
    price: 18000,
    oldPrice: 22000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1609592424753-7e9d7e9e7d7e?auto=format&fit=crop&w=800&q=80",
    description: "Batterie externe pratique pour recharger vos appareils partout.",
    specs: [
      "Capacité 20 000 mAh",
      "USB",
      "Recharge rapide",
      "Portable",
      "Compatible smartphones"
    ]
  },

  {
    id: 14,
    name: "Chargeur rapide USB-C",
    category: "accessoires",
    price: 10000,
    oldPrice: 13000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    description: "Chargeur rapide USB-C pratique pour vos smartphones et accessoires.",
    specs: [
      "Port USB-C",
      "Charge rapide",
      "Format compact",
      "Compatible smartphones",
      "Protection contre la surcharge"
    ]
  }

];


/* =========================================================
   ÉTAT DE L'APPLICATION
========================================================= */

let cart = JSON.parse(
  localStorage.getItem("wendkCart") || "[]"
);

let favorites = JSON.parse(
  localStorage.getItem("wendkFavorites") || "[]"
);

let currentCategory = "all";
let currentProduct = null;


/* =========================================================
   OUTILS
========================================================= */

function formatPrice(price) {

  return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";

}


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


function getCategoryName(category) {

  const categories = {

    all: "Tous les produits",
    iphone: "iPhone",
    samsung: "Samsung",
    redmi: "Redmi",
    tecno: "Tecno",
    accessoires: "Accessoires"

  };

  return categories[category] || category;

}


/* =========================================================
   RÉFÉRENCES HTML
========================================================= */

const productsGrid =
  document.getElementById("productsGrid");

const noProducts =
  document.getElementById("noProducts");

const cartItems =
  document.getElementById("cartItems");

const emptyCart =
  document.getElementById("emptyCart");

const cartCount =
  document.getElementById("cartCount");

const cartTotal =
  document.getElementById("cartTotal");

const headerCartTotal =
  document.getElementById("headerCartTotal");

const favoritesItems =
  document.getElementById("favoritesItems");

const toast =
  document.getElementById("toast");


/* =========================================================
   AFFICHAGE DES PRODUITS
========================================================= */

function renderProducts() {

  if (!productsGrid) return;

  let filteredProducts = products.filter(product => {

    if (currentCategory === "all") {
      return true;
    }

    return product.category === currentCategory;

  });


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


  productsGrid.innerHTML =
    filteredProducts
      .map(createProductCard)
      .join("");


  updateFavoritesButtons();

}


/* =========================================================
   CARTE PRODUIT
========================================================= */

function createProductCard(product) {

  const isFavorite =
    favorites.includes(product.id);

  return `

    <article class="product-card">

      <div class="product-image-wrapper">

        ${
          product.badge
            ? `<span class="product-badge">${product.badge}</span>`
            : ""
        }

        <button
          class="favorite-btn ${isFavorite ? "active" : ""}"
          data-favorite="${product.id}"
          type="button"
          aria-label="Ajouter aux favoris"
        >
          ${isFavorite ? "♥" : "♡"}
        </button>

        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-image"
          loading="lazy"
          onerror="this.style.display='none'"
        >

      </div>


      <div class="product-info">

        <span class="product-category">
          ${getCategoryName(product.category)}
        </span>

        <h3 class="product-name">
          ${product.name}
        </h3>

        <div class="product-price">

          <strong>
            ${formatPrice(product.price)}
          </strong>

          ${
            product.oldPrice
              ? `<del>${formatPrice(product.oldPrice)}</del>`
              : ""
          }

        </div>


        <div class="product-actions">

          <button
            class="btn btn-secondary"
            type="button"
            data-view="${product.id}"
          >
            Voir détails
          </button>

          <button
            class="btn btn-primary"
            type="button"
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
   INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  renderProducts();

});
/* =========================================================
   WENDK SHOP — SCRIPT.JS
   BLOC 2/3
========================================================= */


/* =========================================================
   PANIER
========================================================= */

function addToCart(productId) {

  const product = products.find(
    item => item.id === Number(productId)
  );

  if (!product) return;

  const existingItem = cart.find(
    item => item.id === product.id
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
  showToast("Produit ajouté au panier", "success");

}


/* =========================================================
   SUPPRIMER DU PANIER
========================================================= */

function removeFromCart(productId) {

  cart = cart.filter(
    item => item.id !== Number(productId)
  );

  saveCart();
  renderCart();

  showToast("Produit retiré du panier", "success");

}


/* =========================================================
   MODIFIER QUANTITÉ
========================================================= */

function updateQuantity(productId, change) {

  const item = cart.find(
    product => product.id === Number(productId)
  );

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {

    cart = cart.filter(
      product => product.id !== Number(productId)
    );

  }

  saveCart();
  renderCart();

}


/* =========================================================
   TOTAL PANIER
========================================================= */

function getCartTotal() {

  return cart.reduce(
    (total, item) => {

      const product = products.find(
        product => product.id === item.id
      );

      if (!product) return total;

      return total + (
        product.price * item.quantity
      );

    },
    0
  );

}


/* =========================================================
   NOMBRE D'ARTICLES
========================================================= */

function getCartCount() {

  return cart.reduce(
    (total, item) =>
      total + item.quantity,
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

  } else {

    if (emptyCart) {
      emptyCart.classList.add("hidden");
    }

    cartItems.innerHTML =
      cart.map(createCartItem).join("");

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

      <div class="cart-item-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          onerror="this.style.display='none'"
        >

      </div>


      <div class="cart-item-info">

        <h4>
          ${product.name}
        </h4>

        <strong>
          ${formatPrice(subtotal)}
        </strong>


        <div class="quantity-controls">

          <button
            type="button"
            data-decrease="${product.id}"
            aria-label="Diminuer"
          >
            −
          </button>

          <span>
            ${item.quantity}
          </span>

          <button
            type="button"
            data-increase="${product.id}"
            aria-label="Augmenter"
          >
            +
          </button>

        </div>

      </div>


      <button
        type="button"
        class="remove-cart-item"
        data-remove-cart="${product.id}"
        aria-label="Supprimer"
      >
        ×
      </button>

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
   BOUTONS PANIER
========================================================= */

document.addEventListener("click", function (event) {

  const addButton =
    event.target.closest("[data-add-cart]");

  if (addButton) {

    const id =
      Number(addButton.dataset.addCart);

    addToCart(id);

    return;

  }


  const increaseButton =
    event.target.closest("[data-increase]");

  if (increaseButton) {

    const id =
      Number(increaseButton.dataset.increase);

    updateQuantity(id, 1);

    return;

  }


  const decreaseButton =
    event.target.closest("[data-decrease]");

  if (decreaseButton) {

    const id =
      Number(decreaseButton.dataset.decrease);

    updateQuantity(id, -1);

    return;

  }


  const removeButton =
    event.target.closest("[data-remove-cart]");

  if (removeButton) {

    const id =
      Number(removeButton.dataset.removeCart);

    removeFromCart(id);

  }

});


/* =========================================================
   OUVRIR / FERMER LE PANIER
========================================================= */

const cartOverlay =
  document.getElementById("cartOverlay");

const cartDrawer =
  document.getElementById("cartDrawer");


function openCart() {

  if (cartOverlay) {
    cartOverlay.classList.add("active");
  }

  if (cartDrawer) {
    cartDrawer.classList.add("active");
  }

  document.body.style.overflow = "hidden";

}


function closeCart() {

  if (cartOverlay) {
    cartOverlay.classList.remove("active");
  }

  if (cartDrawer) {
    cartDrawer.classList.remove("active");
  }

  document.body.style.overflow = "";

}


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
    function () {

      if (cart.length === 0) {
        return;
      }


      const confirmation =
        confirm(
          "Voulez-vous vraiment vider votre panier ?"
        );


      if (!confirmation) return;


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

  const id = Number(productId);

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(
        item => item !== id
      );

    showToast(
      "Retiré des favoris",
      "success"
    );

  } else {

    favorites.push(id);

    showToast(
      "Ajouté aux favoris",
      "success"
    );

  }


  saveFavorites();

  updateFavoritesButtons();

  renderFavorites();

}


/* =========================================================
   BOUTONS FAVORIS
========================================================= */

function updateFavoritesButtons() {

  document
    .querySelectorAll("[data-favorite]")
    .forEach(button => {

      const id =
        Number(button.dataset.favorite);

      const active =
        favorites.includes(id);


      button.classList.toggle(
        "active",
        active
      );


      button.textContent =
        active ? "♥" : "♡";

    });

}


/* =========================================================
   CLIC FAVORIS
========================================================= */

document.addEventListener("click", function (event) {

  const favoriteButton =
    event.target.closest("[data-favorite]");

  if (!favoriteButton) return;


  const id =
    Number(
      favoriteButton.dataset.favorite
    );


  toggleFavorite(id);

});


/* =========================================================
   MODALE FAVORIS
========================================================= */

const favoritesModal =
  document.getElementById("favoritesModal");

const favoritesModalOverlay =
  document.getElementById(
    "favoritesModalOverlay"
  );

const closeFavoritesModal =
  document.getElementById(
    "closeFavoritesModal"
  );

const closeFavoritesBtn =
  document.getElementById(
    "closeFavoritesBtn"
  );

const favoritesItems =
  document.getElementById(
    "favoritesItems"
  );


function openFavorites() {

  renderFavorites();


  if (favoritesModal) {

    favoritesModal.classList.remove(
      "hidden"
    );

    favoritesModal.classList.add(
      "active"
    );

  }


  if (favoritesModalOverlay) {

    favoritesModalOverlay.classList.remove(
      "hidden"
    );

    favoritesModalOverlay.classList.add(
      "active"
    );

  }


  document.body.style.overflow = "hidden";

}


function closeFavorites() {

  if (favoritesModal) {

    favoritesModal.classList.remove(
      "active"
    );

    favoritesModal.classList.add(
      "hidden"
    );

  }


  if (favoritesModalOverlay) {

    favoritesModalOverlay.classList.remove(
      "active"
    );

    favoritesModalOverlay.classList.add(
      "hidden"
    );

  }


  document.body.style.overflow = "";

}


/* =========================================================
   AFFICHER LES FAVORIS
========================================================= */

function renderFavorites() {

  if (!favoritesItems) return;


  const favoriteProducts =
    products.filter(
      product =>
        favorites.includes(product.id)
    );


  if (favoriteProducts.length === 0) {

    favoritesItems.innerHTML = `

      <div class="empty-state">

        <div class="empty-state-icon">
          ♡
        </div>

        <h3>
          Aucun favori
        </h3>

        <p>
          Ajoutez vos produits préférés
          à vos favoris.
        </p>

      </div>

    `;

    return;

  }


  favoritesItems.innerHTML =
    favoriteProducts
      .map(product => `

        <div class="favorite-item">

          <img
            src="${product.image}"
            alt="${product.name}"
          >

          <div>

            <h4>
              ${product.name}
            </h4>

            <strong>
              ${formatPrice(product.price)}
            </strong>

          </div>

          <button
            type="button"
            data-remove-favorite="${product.id}"
          >
            ×
          </button>

        </div>

      `)
      .join("");

}


/* =========================================================
   BOUTONS FAVORIS MODALE
========================================================= */

const favoritesBtn =
  document.getElementById(
    "favoritesBtn"
  );


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
   SUPPRIMER UN FAVORI
========================================================= */

document.addEventListener("click", function (event) {

  const button =
    event.target.closest(
      "[data-remove-favorite]"
    );

  if (!button) return;


  const id =
    Number(
      button.dataset.removeFavorite
    );


  favorites =
    favorites.filter(
      item => item !== id
    );


  saveFavorites();

  renderFavorites();

  updateFavoritesButtons();


  showToast(
    "Favori supprimé",
    "success"
  );

});
/* =========================================================
   WENDK SHOP — SCRIPT.JS
   BLOC 3/3
========================================================= */


/* =========================================================
   DÉTAILS PRODUIT
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

function openProductDetails(product) {

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
      (product.specs || [])
        .map(spec => `
          <li class="spec-item">
            <span>✓</span>
            <span>${spec}</span>
          </li>
        `)
        .join("");

  }


  if (detailsAddCart) {

    detailsAddCart.onclick = function () {

      addToCart(product.id);

    };

  }


  /*
     IMPORTANT :
     On retire "hidden" ET on ajoute "active".
  */

  if (productDetailsOverlay) {

    productDetailsOverlay.classList.remove(
      "hidden"
    );

    productDetailsOverlay.classList.add(
      "active"
    );

  }


  if (productDetailsModal) {

    productDetailsModal.classList.remove(
      "hidden"
    );

    productDetailsModal.classList.add(
      "active"
    );

  }


  document.body.style.overflow = "hidden";

}


/* =========================================================
   FERMER LES DÉTAILS
========================================================= */

function closeProductDetailsModal() {

  if (productDetailsModal) {

    productDetailsModal.classList.remove(
      "active"
    );

    productDetailsModal.classList.add(
      "hidden"
    );

  }


  if (productDetailsOverlay) {

    productDetailsOverlay.classList.remove(
      "active"
    );

    productDetailsOverlay.classList.add(
      "hidden"
    );

  }


  document.body.style.overflow = "";

  currentProduct = null;

}


/* =========================================================
   BOUTON FERMER
========================================================= */

if (closeProductDetails) {

  closeProductDetails.addEventListener(
    "click",
    function (event) {

      event.preventDefault();
      event.stopPropagation();

      closeProductDetailsModal();

    }
  );

}


/* =========================================================
   CLIC SUR L'ARRIÈRE-PLAN
========================================================= */

if (productDetailsOverlay) {

  productDetailsOverlay.addEventListener(
    "click",
    function (event) {

      if (
        event.target ===
        productDetailsOverlay
      ) {

        closeProductDetailsModal();

      }

    }
  );

}


/* =========================================================
   BOUTON VOIR DÉTAILS
========================================================= */

document.addEventListener(
  "click",
  function (event) {

    const button =
      event.target.closest("[data-view]");

    if (!button) return;

    const productId =
      Number(button.dataset.view);

    const product =
      products.find(
        item => item.id === productId
      );

    if (product) {

      openProductDetails(product);

    }

  }
);


/* =========================================================
   RECHERCHE
========================================================= */

const searchInput =
  document.getElementById("searchInput");

const searchBtn =
  document.getElementById("searchBtn");


function searchProducts() {

  if (!searchInput) return;


  const search =
    searchInput.value
      .trim()
      .toLowerCase();


  if (!search) {

    currentCategory = "all";

    renderProducts();

    return;

  }


  const results =
    products.filter(product => {

      return (
        product.name
          .toLowerCase()
          .includes(search)
        ||
        product.category
          .toLowerCase()
          .includes(search)
        ||
        product.description
          .toLowerCase()
          .includes(search)
      );

    });


  if (!productsGrid) return;


  if (results.length === 0) {

    productsGrid.innerHTML = "";


    if (noProducts) {

      noProducts.classList.remove(
        "hidden"
      );

    }

    return;

  }


  if (noProducts) {

    noProducts.classList.add(
      "hidden"
    );

  }


  productsGrid.innerHTML =
    results
      .map(createProductCard)
      .join("");


  updateFavoritesButtons();

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
    function (event) {

      if (event.key === "Enter") {

        searchProducts();

      }

    }
  );

}


/* =========================================================
   FILTRES CATÉGORIES
========================================================= */

document.addEventListener(
  "click",
  function (event) {

    const filter =
      event.target.closest(
        ".filter-btn"
      );

    if (!filter) return;


    const category =
      filter.dataset.category;


    if (!category) return;


    currentCategory =
      category;


    document
      .querySelectorAll(
        ".filter-btn"
      )
      .forEach(button => {

        button.classList.remove(
          "active"
        );

      });


    filter.classList.add(
      "active"
    );


    renderProducts();


    const productsSection =
      document.getElementById(
        "produits"
      );


    if (productsSection) {

      productsSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  }
);


/* =========================================================
   AFFICHER TOUS LES PRODUITS
========================================================= */

const showAllProducts =
  document.getElementById(
    "showAllProducts"
  );


if (showAllProducts) {

  showAllProducts.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      currentCategory = "all";

      if (searchInput) {

        searchInput.value = "";

      }

      renderProducts();

      const productsSection =
        document.getElementById(
          "produits"
        );

      if (productsSection) {

        productsSection.scrollIntoView({
          behavior: "smooth"
        });

      }

    }
  );

}


/* =========================================================
   RÉINITIALISER LES FILTRES
========================================================= */

const resetFilters =
  document.getElementById(
    "resetFilters"
  );


if (resetFilters) {

  resetFilters.addEventListener(
    "click",
    function () {

      currentCategory = "all";

      if (searchInput) {

        searchInput.value = "";

      }

      renderProducts();

    }
  );

}


/* =========================================================
   COMMANDER SUR WHATSAPP
========================================================= */

const checkoutBtn =
  document.getElementById(
    "checkoutBtn"
  );


if (checkoutBtn) {

  checkoutBtn.addEventListener(
    "click",
    function () {

      if (cart.length === 0) {

        showToast(
          "Votre panier est vide",
          "error"
        );

        return;

      }


      let message =
        "Bonjour WENDK SHOP 👋%0A%0A";

      message +=
        "Je souhaite commander :%0A%0A";


      cart.forEach(item => {

        const product =
          products.find(
            product =>
              product.id === item.id
          );


        if (!product) return;


        message +=
          `• ${product.name} x${item.quantity}%0A`;

        message +=
          `  ${formatPrice(
            product.price * item.quantity
          )}%0A%0A`;

      });


      message +=
        `Total : ${formatPrice(
          getCartTotal()
        )}%0A%0A`;

      message +=
        "Merci de me confirmer la disponibilité et les modalités de livraison.";


      window.open(
        `${WHATSAPP_URL}?text=${message}`,
        "_blank"
      );

    }
  );

}


/* =========================================================
   COMPTE CLIENT
========================================================= */

const accountModal =
  document.getElementById(
    "accountModal"
  );

const accountModalOverlay =
  document.getElementById(
    "accountModalOverlay"
  );

const accountBtn =
  document.getElementById(
    "accountBtn"
  );

const closeAccountModal =
  document.getElementById(
    "closeAccountModal"
  );

const accountWhatsappBtn =
  document.getElementById(
    "accountWhatsappBtn"
  );


function openAccountModal() {

  if (accountModal) {

    accountModal.classList.remove(
      "hidden"
    );

    accountModal.classList.add(
      "active"
    );

  }


  if (accountModalOverlay) {

    accountModalOverlay.classList.remove(
      "hidden"
    );

    accountModalOverlay.classList.add(
      "active"
    );

  }


  document.body.style.overflow = "hidden";

}


function closeAccount() {

  if (accountModal) {

    accountModal.classList.remove(
      "active"
    );

    accountModal.classList.add(
      "hidden"
    );

  }


  if (accountModalOverlay) {

    accountModalOverlay.classList.remove(
      "active"
    );

    accountModalOverlay.classList.add(
      "hidden"
    );

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
    closeAccount
  );

}


if (accountModalOverlay) {

  accountModalOverlay.addEventListener(
    "click",
    function (event) {

      if (
        event.target ===
        accountModalOverlay
      ) {

        closeAccount();

      }

    }
  );

}


if (accountWhatsappBtn) {

  accountWhatsappBtn.addEventListener(
    "click",
    function () {

      const message =
        encodeURIComponent(
          "Bonjour WENDK SHOP 👋 Je souhaite créer un compte client."
        );


      window.open(
        `${WHATSAPP_URL}?text=${message}`,
        "_blank"
      );

    }
  );

}


/* =========================================================
   CATÉGORIES / NAVIGATION
========================================================= */

document.addEventListener(
  "click",
  function (event) {

    const link =
      event.target.closest(
        "[data-category]"
      );

    if (!link) return;


    const category =
      link.dataset.category;


    if (!category) return;


    event.preventDefault();


    currentCategory =
      category;


    if (searchInput) {

      searchInput.value = "";

    }


    document
      .querySelectorAll(
        ".filter-btn"
      )
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.category ===
            category
        );

      });


    renderProducts();


    const productsSection =
      document.getElementById(
        "produits"
      );


    if (productsSection) {

      productsSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  }
);


/* =========================================================
   NAVIGATION ANCRES
========================================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      function (event) {

        const targetId =
          link.getAttribute("href");


        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(
            targetId
          );


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth"
        });

      }
    );

  });


/* =========================================================
   NOTIFICATIONS
========================================================= */

let toastTimer;


function showToast(
  message,
  type = "success"
) {

  if (!toast) return;


  toast.textContent =
    message;


  toast.className =
    "toast show";


  if (type) {

    toast.classList.add(
      type
    );

  }


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(
      function () {

        toast.classList.remove(
          "show"
        );

      },
      3000
    );

}


/* =========================================================
   RETOUR EN HAUT
========================================================= */

const backToTop =
  document.getElementById(
    "backToTop"
  );


if (backToTop) {

  window.addEventListener(
    "scroll",
    function () {

      if (window.scrollY > 400) {

        backToTop.classList.add(
          "show"
        );

      } else {

        backToTop.classList.remove(
          "show"
        );

      }

    }
  );


  backToTop.addEventListener(
    "click",
    function () {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* =========================================================
   TOUCHE ÉCHAP
========================================================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key !== "Escape") {
      return;
    }


    closeCart();

    closeFavorites();

    closeProductDetailsModal();

    closeAccount();

  }
);


/* =========================================================
   ANNÉE AUTOMATIQUE
========================================================= */

const currentYear =
  document.getElementById(
    "currentYear"
  );


if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}


/* =========================================================
   INITIALISATION FINALE
========================================================= */

renderProducts();

renderCart();

renderFavorites();

updateCartTotals();

updateFavoritesButtons();
