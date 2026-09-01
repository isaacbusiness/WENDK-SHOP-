"use strict";

/* =========================================================
   WENDK SHOP — BLOC 1/3
========================================================= */

const WHATSAPP_NUMBER = "22607309472";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER;


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
    description: "iPhone haut de gamme avec performances exceptionnelles.",
    specs: [
      "Écran haute qualité",
      "Appareil photo professionnel",
      "5G",
      "Face ID"
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
    description: "Smartphone premium Apple puissant et élégant.",
    specs: [
      "Écran OLED",
      "Caméra Pro",
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
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=800&q=80",
    description: "Un iPhone performant pour une utilisation quotidienne.",
    specs: [
      "Écran Retina",
      "Double caméra",
      "5G",
      "Face ID"
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
    description: "Smartphone Samsung premium très performant.",
    specs: [
      "Écran AMOLED",
      "Caméra haute résolution",
      "5G",
      "S Pen"
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
    description: "Smartphone Samsung puissant et polyvalent.",
    specs: [
      "Écran AMOLED",
      "S Pen",
      "Caméra professionnelle",
      "5G"
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
    description: "Excellent rapport qualité-prix.",
    specs: [
      "Écran AMOLED",
      "5G",
      "Grande batterie",
      "Triple caméra"
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
    description: "Smartphone Redmi performant et accessible.",
    specs: [
      "Écran haute définition",
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
    description: "Smartphone économique et performant.",
    specs: [
      "Écran AMOLED",
      "Grande batterie",
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
    description: "Smartphone Tecno orienté photographie.",
    specs: [
      "Écran AMOLED",
      "Caméra avancée",
      "Grande batterie",
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
    description: "Smartphone abordable pour le quotidien.",
    specs: [
      "Grand écran",
      "Grande batterie",
      "Double caméra",
      "Double SIM"
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
    description: "Écouteurs sans fil avec excellente qualité sonore.",
    specs: [
      "Bluetooth",
      "Réduction de bruit",
      "Boîtier de recharge",
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
    description: "Montre connectée élégante.",
    specs: [
      "Écran tactile",
      "Notifications",
      "Suivi d'activité",
      "Bluetooth"
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
    description: "Batterie externe pratique pour vos appareils.",
    specs: [
      "20 000 mAh",
      "USB",
      "Recharge rapide",
      "Portable"
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
    description: "Chargeur rapide USB-C compact.",
    specs: [
      "USB-C",
      "Charge rapide",
      "Format compact",
      "Protection surcharge"
    ]
  }

];


/* =========================================================
   VARIABLES
========================================================= */

let cart = [];

let favorites = [];

let currentCategory = "all";

let currentProduct = null;


/* =========================================================
   CHARGEMENT LOCALSTORAGE
========================================================= */

try {

  cart =
    JSON.parse(
      localStorage.getItem("wendkCart")
    ) || [];

} catch (error) {

  cart = [];

}


try {

  favorites =
    JSON.parse(
      localStorage.getItem("wendkFavorites")
    ) || [];

} catch (error) {

  favorites = [];

}


/* =========================================================
   OUTILS
========================================================= */

function formatPrice(price) {

  return new Intl.NumberFormat("fr-FR")
    .format(price) + " FCFA";

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

  const names = {

    all: "Tous",
    iphone: "iPhone",
    samsung: "Samsung",
    redmi: "Redmi",
    tecno: "Tecno",
    accessoires: "Accessoires"

  };

  return names[category] || category;

}


/* =========================================================
   AFFICHAGE DES PRODUITS
========================================================= */

function renderProducts() {

  const grid =
    document.getElementById(
      "productsGrid"
    );

  const empty =
    document.getElementById(
      "noProducts"
    );


  if (!grid) {

    console.error(
      "WENDK SHOP : productsGrid introuvable."
    );

    return;

  }


  let list = products;


  if (currentCategory !== "all") {

    list =
      products.filter(
        product =>
          product.category ===
          currentCategory
      );

  }


  if (list.length === 0) {

    grid.innerHTML = "";

    if (empty) {
      empty.classList.remove("hidden");
    }

    return;

  }


  if (empty) {
    empty.classList.add("hidden");
  }


  grid.innerHTML =
    list
      .map(product => createProductCard(product))
      .join("");


  updateFavoriteButtons();

}


/* =========================================================
   CARTE PRODUIT
========================================================= */

function createProductCard(product) {

  const favorite =
    favorites.includes(product.id);


  return `

    <article class="product-card">

      <div class="product-image-wrapper">

        <span class="product-badge">
          ${product.badge}
        </span>

        <button
          type="button"
          class="favorite-btn ${favorite ? "active" : ""}"
          data-favorite="${product.id}"
        >
          ${favorite ? "♥" : "♡"}
        </button>

        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-image"
          loading="lazy"
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

          <del>
            ${formatPrice(product.oldPrice)}
          </del>

        </div>


        <div class="product-actions">

          <button
            type="button"
            class="btn btn-secondary"
            data-view="${product.id}"
          >
            Voir détails
          </button>

          <button
            type="button"
            class="btn btn-primary"
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

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderProducts();

  }
);
/* =========================================================
   WENDK SHOP — BLOC 2/3
   PANIER + FAVORIS
========================================================= */


/* =========================================================
   PANIER — AJOUTER
========================================================= */

function addToCart(productId) {

  const id = Number(productId);

  const product = products.find(
    item => item.id === id
  );

  if (!product) return;


  const existing = cart.find(
    item => item.id === id
  );


  if (existing) {

    existing.quantity += 1;

  } else {

    cart.push({
      id: id,
      quantity: 1
    });

  }


  saveCart();
  renderCart();

  showToast(
    product.name + " ajouté au panier",
    "success"
  );

}


/* =========================================================
   PANIER — SUPPRIMER
========================================================= */

function removeFromCart(productId) {

  const id = Number(productId);

  cart = cart.filter(
    item => item.id !== id
  );

  saveCart();
  renderCart();

}


/* =========================================================
   PANIER — QUANTITÉ
========================================================= */

function changeQuantity(productId, amount) {

  const id = Number(productId);

  const item = cart.find(
    product => product.id === id
  );

  if (!item) return;


  item.quantity += amount;


  if (item.quantity <= 0) {

    cart = cart.filter(
      product => product.id !== id
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
    function (total, item) {

      const product = products.find(
        p => p.id === item.id
      );

      if (!product) return total;

      return total +
        product.price * item.quantity;

    },
    0
  );

}


/* =========================================================
   NOMBRE D'ARTICLES
========================================================= */

function getCartCount() {

  return cart.reduce(
    function (total, item) {

      return total + item.quantity;

    },
    0
  );

}


/* =========================================================
   AFFICHER LE PANIER
========================================================= */

function renderCart() {

  const itemsContainer =
    document.getElementById(
      "cartItems"
    );

  const empty =
    document.getElementById(
      "emptyCart"
    );


  if (!itemsContainer) return;


  if (cart.length === 0) {

    itemsContainer.innerHTML = "";


    if (empty) {
      empty.classList.remove(
        "hidden"
      );
    }

  } else {

    if (empty) {
      empty.classList.add(
        "hidden"
      );
    }


    itemsContainer.innerHTML =
      cart
        .map(item => createCartItem(item))
        .join("");

  }


  updateCartTotals();

}


/* =========================================================
   ARTICLE PANIER
========================================================= */

function createCartItem(item) {

  const product =
    products.find(
      p => p.id === item.id
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
          >
            −
          </button>

          <span>
            ${item.quantity}
          </span>

          <button
            type="button"
            data-increase="${product.id}"
          >
            +
          </button>

        </div>

      </div>


      <button
        type="button"
        class="remove-cart-item"
        data-remove-cart="${product.id}"
      >
        ×
      </button>

    </div>

  `;

}


/* =========================================================
   MISE À JOUR DES TOTAUX
========================================================= */

function updateCartTotals() {

  const count =
    getCartCount();

  const total =
    getCartTotal();


  const cartCountElement =
    document.getElementById(
      "cartCount"
    );

  const cartTotalElement =
    document.getElementById(
      "cartTotal"
    );

  const headerTotal =
    document.getElementById(
      "headerCartTotal"
    );


  if (cartCountElement) {

    cartCountElement.textContent =
      count;

  }


  if (cartTotalElement) {

    cartTotalElement.textContent =
      formatPrice(total);

  }


  if (headerTotal) {

    headerTotal.textContent =
      formatPrice(total);

  }

}


/* =========================================================
   CLICS PANIER
========================================================= */

document.addEventListener(
  "click",
  function (event) {


    const addButton =
      event.target.closest(
        "[data-add-cart]"
      );


    if (addButton) {

      addToCart(
        addButton.dataset.addCart
      );

      return;

    }


    const increase =
      event.target.closest(
        "[data-increase]"
      );


    if (increase) {

      changeQuantity(
        increase.dataset.increase,
        1
      );

      return;

    }


    const decrease =
      event.target.closest(
        "[data-decrease]"
      );


    if (decrease) {

      changeQuantity(
        decrease.dataset.decrease,
        -1
      );

      return;

    }


    const remove =
      event.target.closest(
        "[data-remove-cart]"
      );


    if (remove) {

      removeFromCart(
        remove.dataset.removeCart
      );

    }

  }
);


/* =========================================================
   OUVRIR / FERMER PANIER
========================================================= */

function openCart() {

  const overlay =
    document.getElementById(
      "cartOverlay"
    );

  const drawer =
    document.getElementById(
      "cartDrawer"
    );


  if (overlay) {

    overlay.classList.add(
      "active"
    );

  }


  if (drawer) {

    drawer.classList.add(
      "active"
    );

  }


  document.body.style.overflow =
    "hidden";

}


function closeCart() {

  const overlay =
    document.getElementById(
      "cartOverlay"
    );

  const drawer =
    document.getElementById(
      "cartDrawer"
    );


  if (overlay) {

    overlay.classList.remove(
      "active"
    );

  }


  if (drawer) {

    drawer.classList.remove(
      "active"
    );

  }


  document.body.style.overflow =
    "";

}


const openCartButton =
  document.getElementById(
    "openCartBtn"
  );

const closeCartButton =
  document.getElementById(
    "closeCartBtn"
  );

const continueButton =
  document.getElementById(
    "continueShopping"
  );

const cartOverlayElement =
  document.getElementById(
    "cartOverlay"
  );


if (openCartButton) {

  openCartButton.addEventListener(
    "click",
    openCart
  );

}


if (closeCartButton) {

  closeCartButton.addEventListener(
    "click",
    closeCart
  );

}


if (continueButton) {

  continueButton.addEventListener(
    "click",
    closeCart
  );

}


if (cartOverlayElement) {

  cartOverlayElement.addEventListener(
    "click",
    closeCart
  );

}


/* =========================================================
   VIDER PANIER
========================================================= */

const clearCartButton =
  document.getElementById(
    "clearCartBtn"
  );


if (clearCartButton) {

  clearCartButton.addEventListener(
    "click",
    function () {

      if (cart.length === 0) {

        showToast(
          "Le panier est déjà vide",
          "error"
        );

        return;

      }


      if (
        confirm(
          "Voulez-vous vider le panier ?"
        )
      ) {

        cart = [];

        saveCart();

        renderCart();

        showToast(
          "Panier vidé",
          "success"
        );

      }

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

  updateFavoriteButtons();

  renderFavorites();

}


/* =========================================================
   BOUTONS FAVORIS
========================================================= */

function updateFavoriteButtons() {

  document
    .querySelectorAll(
      "[data-favorite]"
    )
    .forEach(button => {

      const id =
        Number(
          button.dataset.favorite
        );


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

document.addEventListener(
  "click",
  function (event) {

    const button =
      event.target.closest(
        "[data-favorite]"
      );


    if (!button) return;


    toggleFavorite(
      button.dataset.favorite
    );

  }
);


/* =========================================================
   MODALE FAVORIS
========================================================= */

function openFavorites() {

  renderFavorites();


  const modal =
    document.getElementById(
      "favoritesModal"
    );

  const overlay =
    document.getElementById(
      "favoritesModalOverlay"
    );


  if (modal) {

    modal.classList.remove(
      "hidden"
    );

    modal.classList.add(
      "active"
    );

  }


  if (overlay) {

    overlay.classList.remove(
      "hidden"
    );

    overlay.classList.add(
      "active"
    );

  }


  document.body.style.overflow =
    "hidden";

}


function closeFavorites() {

  const modal =
    document.getElementById(
      "favoritesModal"
    );

  const overlay =
    document.getElementById(
      "favoritesModalOverlay"
    );


  if (modal) {

    modal.classList.remove(
      "active"
    );

    modal.classList.add(
      "hidden"
    );

  }


  if (overlay) {

    overlay.classList.remove(
      "active"
    );

    overlay.classList.add(
      "hidden"
    );

  }


  document.body.style.overflow =
    "";

}


/* =========================================================
   AFFICHER FAVORIS
========================================================= */

function renderFavorites() {

  const container =
    document.getElementById(
      "favoritesItems"
    );


  if (!container) return;


  const list =
    products.filter(
      product =>
        favorites.includes(
          product.id
        )
    );


  if (list.length === 0) {

    container.innerHTML = `

      <div class="empty-state">

        <div class="empty-state-icon">
          ♡
        </div>

        <h3>
          Aucun favori
        </h3>

        <p>
          Vos produits favoris
          apparaîtront ici.
        </p>

      </div>

    `;

    return;

  }


  container.innerHTML =
    list
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

const favoritesButton =
  document.getElementById(
    "favoritesBtn"
  );

const closeFavoritesButton =
  document.getElementById(
    "closeFavoritesModal"
  );

const closeFavoritesBottom =
  document.getElementById(
    "closeFavoritesBtn"
  );

const favoritesOverlay =
  document.getElementById(
    "favoritesModalOverlay"
  );


if (favoritesButton) {

  favoritesButton.addEventListener(
    "click",
    openFavorites
  );

}


if (closeFavoritesButton) {

  closeFavoritesButton.addEventListener(
    "click",
    closeFavorites
  );

}


if (closeFavoritesBottom) {

  closeFavoritesBottom.addEventListener(
    "click",
    closeFavorites
  );

}


if (favoritesOverlay) {

  favoritesOverlay.addEventListener(
    "click",
    closeFavorites
  );

}


/* =========================================================
   SUPPRIMER FAVORI
========================================================= */

document.addEventListener(
  "click",
  function (event) {

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

    updateFavoriteButtons();

    showToast(
      "Favori supprimé",
      "success"
    );

  }
);


/* =========================================================
   INITIALISATION PANIER
========================================================= */

renderCart();
renderFavorites();
updateCartTotals();
/* =========================================================
   WENDK SHOP — BLOC 3/3
========================================================= */


/* =========================================================
   DÉTAILS PRODUIT
========================================================= */

function openProductDetails(product) {

  if (!product) return;

  currentProduct = product;

  const modal =
    document.getElementById("productDetailsModal");

  const overlay =
    document.getElementById("productDetailsOverlay");

  const image =
    document.getElementById("detailsProductImage");

  const category =
    document.getElementById("detailsProductCategory");

  const name =
    document.getElementById("detailsProductName");

  const description =
    document.getElementById("detailsProductDescription");

  const price =
    document.getElementById("detailsProductPrice");

  const specs =
    document.getElementById("detailsProductSpecs");

  const addButton =
    document.getElementById("detailsAddCart");


  if (image) {
    image.src = product.image;
    image.alt = product.name;
  }

  if (category) {
    category.textContent =
      getCategoryName(product.category);
  }

  if (name) {
    name.textContent =
      product.name;
  }

  if (description) {
    description.textContent =
      product.description;
  }

  if (price) {
    price.textContent =
      formatPrice(product.price);
  }

  if (specs) {

    specs.innerHTML =
      product.specs
        .map(spec => `
          <li class="spec-item">
            <span>✓</span>
            <span>${spec}</span>
          </li>
        `)
        .join("");

  }


  if (addButton) {

    addButton.onclick = function () {

      addToCart(product.id);

    };

  }


  /*
     OUVERTURE
  */

  if (overlay) {

    overlay.classList.remove("hidden");
    overlay.classList.add("active");

  }

  if (modal) {

    modal.classList.remove("hidden");
    modal.classList.add("active");

  }

  document.body.style.overflow = "hidden";

}


/* =========================================================
   FERMER DÉTAILS PRODUIT
========================================================= */

function closeProductDetailsModal() {

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

  currentProduct = null;

}


/* =========================================================
   BOUTON X DÉTAILS
========================================================= */

const closeProductDetails =
  document.getElementById(
    "closeProductDetails"
  );


if (closeProductDetails) {

  closeProductDetails.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      closeProductDetailsModal();

    }
  );

}


/* =========================================================
   CLIC SUR L'ARRIÈRE-PLAN DÉTAILS
========================================================= */

const productDetailsOverlay =
  document.getElementById(
    "productDetailsOverlay"
  );


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

    const id =
      Number(button.dataset.view);

    const product =
      products.find(
        item => item.id === id
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
  document.getElementById(
    "searchInput"
  );

const searchButton =
  document.getElementById(
    "searchBtn"
  );


function searchProducts() {

  if (!searchInput) return;


  const query =
    searchInput.value
      .trim()
      .toLowerCase();


  if (!query) {

    currentCategory = "all";

    renderProducts();

    return;

  }


  const results =
    products.filter(
      product =>
        product.name
          .toLowerCase()
          .includes(query)
        ||
        product.category
          .toLowerCase()
          .includes(query)
        ||
        product.description
          .toLowerCase()
          .includes(query)
    );


  const grid =
    document.getElementById(
      "productsGrid"
    );

  const empty =
    document.getElementById(
      "noProducts"
    );


  if (!grid) return;


  if (results.length === 0) {

    grid.innerHTML = "";

    if (empty) {
      empty.classList.remove("hidden");
    }

    return;

  }


  if (empty) {
    empty.classList.add("hidden");
  }


  grid.innerHTML =
    results
      .map(product => createProductCard(product))
      .join("");


  updateFavoriteButtons();

}


if (searchButton) {

  searchButton.addEventListener(
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
   FILTRES
========================================================= */

document.addEventListener(
  "click",
  function (event) {

    const button =
      event.target.closest(
        ".filter-btn"
      );

    if (!button) return;


    const category =
      button.dataset.category;

    if (!category) return;


    currentCategory =
      category;


    document
      .querySelectorAll(".filter-btn")
      .forEach(item => {

        item.classList.remove(
          "active"
        );

      });


    button.classList.add(
      "active"
    );


    renderProducts();

  }
);


/* =========================================================
   LIENS DE CATÉGORIES
========================================================= */

document.addEventListener(
  "click",
  function (event) {

    const link =
      event.target.closest(
        "[data-category]"
      );

    if (!link) return;


    if (
      link.classList.contains(
        "filter-btn"
      )
    ) {
      return;
    }


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
      .querySelectorAll(".filter-btn")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.category ===
          category
        );

      });


    renderProducts();


    const section =
      document.getElementById(
        "produits"
      );


    if (section) {

      section.scrollIntoView({
        behavior: "smooth"
      });

    }

  }
);


/* =========================================================
   AFFICHER TOUS LES PRODUITS
========================================================= */

const showAll =
  document.getElementById(
    "showAllProducts"
  );


if (showAll) {

  showAll.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      currentCategory = "all";

      if (searchInput) {
        searchInput.value = "";
      }

      renderProducts();

      const section =
        document.getElementById(
          "produits"
        );

      if (section) {

        section.scrollIntoView({
          behavior: "smooth"
        });

      }

    }
  );

}


/* =========================================================
   RÉINITIALISER
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

      document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

          button.classList.toggle(
            "active",
            button.dataset.category === "all"
          );

        });

      renderProducts();

    }
  );

}


/* =========================================================
   COMMANDE WHATSAPP
========================================================= */

const checkoutButton =
  document.getElementById(
    "checkoutBtn"
  );


if (checkoutButton) {

  checkoutButton.addEventListener(
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
        "Bonjour WENDK SHOP 👋\n\n";

      message +=
        "Je souhaite commander :\n\n";


      cart.forEach(item => {

        const product =
          products.find(
            p => p.id === item.id
          );

        if (!product) return;


        message +=
          "• " +
          product.name +
          " x" +
          item.quantity +
          "\n";

        message +=
          formatPrice(
            product.price *
            item.quantity
          ) +
          "\n\n";

      });


      message +=
        "TOTAL : " +
        formatPrice(
          getCartTotal()
        ) +
        "\n\n";

      message +=
        "Merci de me confirmer la disponibilité et la livraison.";


      window.open(
        WHATSAPP_URL +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
      );

    }
  );

}


/* =========================================================
   COMPTE
========================================================= */

const accountButton =
  document.getElementById(
    "accountBtn"
  );

const accountModal =
  document.getElementById(
    "accountModal"
  );

const accountOverlay =
  document.getElementById(
    "accountModalOverlay"
  );

const closeAccountButton =
  document.getElementById(
    "closeAccountModal"
  );

const accountWhatsapp =
  document.getElementById(
    "accountWhatsappBtn"
  );


function openAccount() {

  if (accountModal) {

    accountModal.classList.remove(
      "hidden"
    );

    accountModal.classList.add(
      "active"
    );

  }


  if (accountOverlay) {

    accountOverlay.classList.remove(
      "hidden"
    );

    accountOverlay.classList.add(
      "active"
    );

  }


  document.body.style.overflow =
    "hidden";

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


  if (accountOverlay) {

    accountOverlay.classList.remove(
      "active"
    );

    accountOverlay.classList.add(
      "hidden"
    );

  }


  document.body.style.overflow =
    "";

}


if (accountButton) {

  accountButton.addEventListener(
    "click",
    openAccount
  );

}


if (closeAccountButton) {

  closeAccountButton.addEventListener(
    "click",
    closeAccount
  );

}


if (accountOverlay) {

  accountOverlay.addEventListener(
    "click",
    function (event) {

      if (
        event.target ===
        accountOverlay
      ) {

        closeAccount();

      }

    }
  );

}


if (accountWhatsapp) {

  accountWhatsapp.addEventListener(
    "click",
    function () {

      const message =
        encodeURIComponent(
          "Bonjour WENDK SHOP 👋 Je souhaite créer un compte client."
        );

      window.open(
        WHATSAPP_URL +
        "?text=" +
        message,
        "_blank"
      );

    }
  );

}


/* =========================================================
   FAVORIS — SUPPRESSION
========================================================= */

document.addEventListener(
  "click",
  function (event) {

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

    updateFavoriteButtons();

  }
);


/* =========================================================
   ÉCHAP — FERMER LES FENÊTRES
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
   ANNÉE
========================================================= */

const year =
  document.getElementById(
    "currentYear"
  );


if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* =========================================================
   BOUTON RETOUR EN HAUT
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
   WHATSAPP FLOTTANT
========================================================= */

const floatingWhatsapp =
  document.getElementById(
    "floatingWhatsapp"
  );


if (floatingWhatsapp) {

  floatingWhatsapp.href =
    WHATSAPP_URL;

  floatingWhatsapp.target =
    "_blank";

}


/* =========================================================
   INITIALISATION FINALE
========================================================= */

renderProducts();

renderCart();

renderFavorites();

updateCartTotals();

updateFavoriteButtons();

console.log(
  "WENDK SHOP : site initialisé avec succès."
);

// ===== CORRECTIF BOUTON PASSER LA COMMANDE =====
document.addEventListener("DOMContentLoaded", function () {
  const cartFooter = document.getElementById("cartFooter");

  if (!cartFooter) return;

  if (!document.getElementById("checkoutBtn")) {
    const checkoutButton = document.createElement("button");

    checkoutButton.id = "checkoutBtn";
    checkoutButton.type = "button";
    checkoutButton.className = "btn btn-primary checkout-btn";
    checkoutButton.textContent = "📲 Passer la commande sur WhatsApp";

    cartFooter.appendChild(checkoutButton);

    checkoutButton.addEventListener("click", function () {
      if (!cart || cart.length === 0) {
        alert("Votre panier est vide.");
        return;
      }

      let message = "Bonjour WENDK SHOP 👋%0A%0A";
      message += "Je souhaite passer cette commande :%0A%0A";

      cart.forEach(function (item) {
        const product = products.find(function (p) {
          return p.id === item.id;
        });

        if (product) {
          message += "📦 " + product.name + "%0A";
          message += "Quantité : " + item.quantity + "%0A";
          message += "Prix : " + formatPrice(product.price * item.quantity) + "%0A%0A";
        }
      });

      message += "💰 Total : " + formatPrice(getCartTotal()) + "%0A%0A";
      message += "Merci de me contacter pour confirmer la commande.";

      window.open(
        "https://wa.me/22607309472?text=" + message,
        "_blank"
      );
    });
  }
});
// ===== BOUTON COMMANDE FORCÉ =====
(function () {

  function createOrderButton() {

    if (document.getElementById("forceOrderBtn")) return;

    const cartDrawer = document.getElementById("cartDrawer");

    if (!cartDrawer) return;

    const button = document.createElement("button");

    button.id = "forceOrderBtn";
    button.type = "button";
    button.innerHTML = "📲 PASSER LA COMMANDE";
    
    button.style.cssText = `
      display:block;
      width:calc(100% - 30px);
      margin:15px;
      padding:16px;
      background:#25D366;
      color:white;
      border:none;
      border-radius:10px;
      font-size:16px;
      font-weight:700;
      cursor:pointer;
      text-align:center;
      box-sizing:border-box;
      position:relative;
      z-index:9999;
    `;

    cartDrawer.appendChild(button);

    button.addEventListener("click", function () {

      if (!cart || cart.length === 0) {
        alert("Votre panier est vide.");
        return;
      }

      let message = "Bonjour WENDK SHOP 👋\n\n";
      message += "Je souhaite passer cette commande :\n\n";

      cart.forEach(function(item) {

        const product = products.find(function(p) {
          return p.id === item.id;
        });

        if (product) {
          message += "📦 " + product.name + "\n";
          message += "Quantité : " + item.quantity + "\n";
          message += "Prix : " +
            formatPrice(product.price * item.quantity) +
            "\n\n";
        }

      });

      message += "💰 TOTAL : " + formatPrice(getCartTotal()) + "\n\n";
      message += "Merci de confirmer ma commande.";

      window.open(
        "https://wa.me/22607309472?text=" +
        encodeURIComponent(message),
        "_blank"
      );

    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createOrderButton);
  } else {
    createOrderButton();
  }

})();
