/* ==========================================
   WENDK-SHOP
   SCRIPT PRINCIPAL
========================================== */


/* ==========================================
   CONFIGURATION
========================================== */

// IMPORTANT : remplace ce numéro par ton numéro WhatsApp.
// Format international sans + ni espaces.
const WHATSAPP_NUMBER = "22607309472";


/* ==========================================
   PRODUITS
========================================== */

const products = [

  {
    id: 1,
    name: "iPhone 17",
    category: "iPhone",
    price: 650000,
    description: "Smartphone Apple nouvelle génération.",
    icon: "🍎",
    badge: "NOUVEAU"
  },

  {
    id: 2,
    name: "iPhone 16",
    category: "iPhone",
    price: 550000,
    description: "iPhone performant avec excellent appareil photo.",
    icon: "🍎",
    badge: "POPULAIRE"
  },

  {
    id: 3,
    name: "iPhone 15",
    category: "iPhone",
    price: 450000,
    description: "Design premium et performances exceptionnelles.",
    icon: "🍎",
    badge: "PROMO"
  },

  {
    id: 4,
    name: "Samsung Galaxy S25",
    category: "Samsung",
    price: 500000,
    description: "Galaxy S25 avec performances haut de gamme.",
    icon: "📱",
    badge: "NOUVEAU"
  },

  {
    id: 5,
    name: "Samsung Galaxy A56",
    category: "Samsung",
    price: 235000,
    description: "Smartphone Samsung moderne et performant.",
    icon: "📱",
    badge: ""
  },

  {
    id: 6,
    name: "Samsung Galaxy A36",
    category: "Samsung",
    price: 180000,
    description: "Excellent rapport qualité-prix.",
    icon: "📱",
    badge: "PROMO"
  },

  {
    id: 7,
    name: "Redmi Note 14",
    category: "Redmi",
    price: 135000,
    description: "Grand écran et excellente autonomie.",
    icon: "📱",
    badge: "POPULAIRE"
  },

  {
    id: 8,
    name: "Redmi Note 14 Pro",
    category: "Redmi",
    price: 175000,
    description: "Version Pro avec performances supérieures.",
    icon: "📱",
    badge: ""
  },

  {
    id: 9,
    name: "Tecno Camon 30",
    category: "Tecno",
    price: 145000,
    description: "Excellent smartphone pour la photographie.",
    icon: "📱",
    badge: "PROMO"
  },

  {
    id: 10,
    name: "Tecno Spark 30",
    category: "Tecno",
    price: 95000,
    description: "Smartphone abordable et performant.",
    icon: "📱",
    badge: ""
  },

  {
    id: 11,
    name: "Power Bank 20 000 mAh",
    category: "Accessoires",
    price: 15000,
    description: "Grande capacité pour recharger vos appareils.",
    icon: "🔋",
    badge: "POPULAIRE"
  },

  {
    id: 12,
    name: "AirPods Pro",
    category: "Accessoires",
    price: 35000,
    description: "Écouteurs sans fil avec boîtier de recharge.",
    icon: "🎧",
    badge: "PROMO"
  },

  {
    id: 13,
    name: "Apple Watch",
    category: "Accessoires",
    price: 75000,
    description: "Montre connectée élégante et pratique.",
    icon: "⌚",
    badge: ""
  },

  {
    id: 14,
    name: "Chargeur rapide",
    category: "Accessoires",
    price: 10000,
    description: "Chargeur rapide pour smartphones.",
    icon: "🔌",
    badge: ""
  }

];


/* ==========================================
   VARIABLES
========================================== */

let cart = [];

let currentCategory = "Tous";

let searchTerm = "";


/* ==========================================
   ELEMENTS HTML
========================================== */

const productsGrid = document.getElementById("productsGrid");

const noProducts = document.getElementById("noProducts");

const searchInput = document.getElementById("searchInput");

const cartElement = document.getElementById("cart");

const cartOverlay = document.getElementById("cartOverlay");

const cartItems = document.getElementById("cartItems");

const cartCount = document.getElementById("cartCount");

const cartTotal = document.getElementById("cartTotal");

const toast = document.getElementById("toast");


/* ==========================================
   FORMATAGE PRIX
========================================== */

function formatPrice(price) {

  return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";

}


/* ==========================================
   AFFICHAGE PRODUITS
========================================== */

function displayProducts() {

  const filteredProducts = products.filter(product => {

    const matchesCategory =
      currentCategory === "Tous" ||
      product.category === currentCategory;

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;

  });


  productsGrid.innerHTML = "";


  if (filteredProducts.length === 0) {

    noProducts.style.display = "block";

    return;

  }


  noProducts.style.display = "none";


  filteredProducts.forEach(product => {

    const card = document.createElement("article");

    card.className = "product-card";


    card.innerHTML = `

      <div class="product-image">

        ${
          product.badge
            ? `<span class="product-badge">${product.badge}</span>`
            : ""
        }

        <span>${product.icon}</span>

      </div>

      <div class="product-info">

        <div class="product-category">
          ${product.category}
        </div>

        <h3 class="product-name">
          ${product.name}
        </h3>

        <p class="product-description">
          ${product.description}
        </p>

        <div class="product-bottom">

          <strong class="product-price">
            ${formatPrice(product.price)}
          </strong>

          <button
            class="add-cart"
            onclick="addToCart(${product.id})"
          >
            + Panier
          </button>

        </div>

      </div>

    `;


    productsGrid.appendChild(card);

  });

}


/* ==========================================
   AJOUTER AU PANIER
========================================== */

function addToCart(productId) {

  const product = products.find(
    item => item.id === productId
  );

  if (!product) return;


  const existingItem = cart.find(
    item => item.id === productId
  );


  if (existingItem) {

    existingItem.quantity++;

  } else {

    cart.push({
      ...product,
      quantity: 1
    });

  }


  saveCart();

  updateCart();

  showToast(`${product.name} ajouté au panier`);

}


/* ==========================================
   MODIFIER QUANTITE
========================================== */

function changeQuantity(productId, amount) {

  const item = cart.find(
    product => product.id === productId
  );

  if (!item) return;


  item.quantity += amount;


  if (item.quantity <= 0) {

    cart = cart.filter(
      product => product.id !== productId
    );

  }


  saveCart();

  updateCart();

}


/* ==========================================
   SUPPRIMER PRODUIT
========================================== */

function removeFromCart(productId) {

  cart = cart.filter(
    product => product.id !== productId
  );


  saveCart();

  updateCart();

}


/* ==========================================
   AFFICHER PANIER
========================================== */

function updateCart() {

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );


  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  cartCount.textContent = totalQuantity;

  cartTotal.textContent = formatPrice(totalPrice);


  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="empty-cart">
        Votre panier est vide.
      </div>
    `;

    return;

  }


  cartItems.innerHTML = "";


  cart.forEach(item => {

    const element = document.createElement("div");

    element.className = "cart-item";


    element.innerHTML = `

      <div class="cart-item-image">
        ${item.icon}
      </div>

      <div>

        <h4>${item.name}</h4>

        <p>
          ${formatPrice(item.price)}
        </p>

        <div class="quantity">

          <button
            onclick="changeQuantity(${item.id}, -1)"
          >
            −
          </button>

          <strong>
            ${item.quantity}
          </strong>

          <button
            onclick="changeQuantity(${item.id}, 1)"
          >
            +
          </button>

        </div>

      </div>

      <button
        class="remove-item"
        onclick="removeFromCart(${item.id})"
      >
        🗑️
      </button>

    `;


    cartItems.appendChild(element);

  });

}


/* ==========================================
   OUVRIR PANIER
========================================== */

function openCart() {

  cartElement.classList.add("active");

  cartOverlay.classList.add("active");

  document.body.style.overflow = "hidden";

}


/* ==========================================
   FERMER PANIER
========================================== */

function closeCart() {

  cartElement.classList.remove("active");

  cartOverlay.classList.remove("active");

  document.body.style.overflow = "";

}


/* ==========================================
   VIDER PANIER
========================================== */

function clearCart() {

  if (cart.length === 0) return;


  const confirmation = confirm(
    "Voulez-vous vraiment vider votre panier ?"
  );


  if (!confirmation) return;


  cart = [];

  saveCart();

  updateCart();

  showToast("Panier vidé");

}


/* ==========================================
   COMMANDE WHATSAPP
========================================== */

function checkoutWhatsApp() {

  if (cart.length === 0) {

    showToast("Votre panier est vide");

    return;

  }


  let message =
    "Bonjour WENDK-SHOP 👋\n\n" +
    "Je souhaite commander :\n\n";


  cart.forEach(item => {

    message +=
      `• ${item.name} x${item.quantity} — ` +
      `${formatPrice(item.price * item.quantity)}\n`;

  });


  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );


  message +=
    `\n💰 Total : ${formatPrice(total)}\n\n` +
    "📍 Ma localisation : " +
    "________________\n\n" +
    "Merci de me confirmer la disponibilité.";


  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(message)}`;


  window.open(
    whatsappURL,
    "_blank"
  );

}


/* ==========================================
   RECHERCHE
========================================== */

searchInput.addEventListener(
  "input",
  function () {

    searchTerm = this.value;

    displayProducts();

  }
);


/* ==========================================
   CATEGORIES
========================================== */

document.querySelectorAll(".category").forEach(button => {

  button.addEventListener("click", function () {

    document
      .querySelectorAll(".category")
      .forEach(btn => {
        btn.classList.remove("active");
      });


    this.classList.add("active");


    currentCategory =
      this.dataset.category;


    displayProducts();

  });

});


/* ==========================================
   EVENEMENTS PANIER
========================================== */

document
  .getElementById("openCart")
  .addEventListener(
    "click",
    openCart
  );


document
  .getElementById("closeCart")
  .addEventListener(
    "click",
    closeCart
  );


cartOverlay.addEventListener(
  "click",
  closeCart
);


document
  .getElementById("clearCart")
  .addEventListener(
    "click",
    clearCart
);


document
  .getElementById("checkoutButton")
  .addEventListener(
    "click",
    checkoutWhatsApp
);


/* ==========================================
   MENU MOBILE
========================================== */

const menuButton =
  document.getElementById("menuButton");

const nav =
  document.querySelector(".nav");


menuButton.addEventListener(
  "click",
  function () {

    if (nav.style.display === "flex") {

      nav.style.display = "";

    } else {

      nav.style.display = "flex";

      nav.style.position = "absolute";

      nav.style.top = "72px";

      nav.style.left = "0";

      nav.style.right = "0";

      nav.style.padding = "20px";

      nav.style.background = "white";

      nav.style.flexDirection = "column";

      nav.style.borderBottom =
        "1px solid #e5e7eb";

    }

  }
);


/* ==========================================
   TOAST
========================================== */

let toastTimeout;


function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");


  clearTimeout(toastTimeout);


  toastTimeout = setTimeout(
    () => {
      toast.classList.remove("show");
    },
    2500
  );

}


/* ==========================================
   LOCAL STORAGE
========================================== */

function saveCart() {

  localStorage.setItem(
    "wendkShopCart",
    JSON.stringify(cart)
  );

}


function loadCart() {

  const savedCart =
    localStorage.getItem(
      "wendkShopCart"
    );


  if (!savedCart) return;


  try {

    cart = JSON.parse(savedCart);

  } catch (error) {

    cart = [];

  }

}


/* ==========================================
   ANNEE FOOTER
========================================== */

document.getElementById("year")
  .textContent =
  new Date().getFullYear();


/* ==========================================
   INITIALISATION
========================================== */

loadCart();

displayProducts();

updateCart();
