/* =========================================================
   WENDK SHOP
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

/*
   IMPORTANT :
   Remplace 226XXXXXXXX par ton vrai numéro WhatsApp.

   Exemple :
   const WHATSAPP_NUMBER = "22670123456";

   Ne mets PAS :
   +226 70 12 34 56
*/

const WHATSAPP_NUMBER = "22607309472";
/* =========================================================
   SUPABASE
   ========================================================= */

const SUPABASE_URL = "https://peytqrampgxvqdzygxnc.supabase.co";
const SUPABASE_KEY = "sb_publishable_atQoFNjWTz8MxT81vg2QGQ_iO4_giOb";

const SUPABASE_HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json"
};

/* =========================================================
   CHARGER LES PRODUITS DEPUIS SUPABASE
   ========================================================= */

async function loadProductsFromSupabase() {
    try {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/Product?select=*`,
            {
                method: "GET",
                headers: SUPABASE_HEADERS
            }
        );

        if (!response.ok) {
            throw new Error(`Erreur Supabase: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
            products.length = 0;
            products.push(...data);
            console.log("✅ Produits chargés depuis Supabase :", data.length);
        }
    } catch (error) {
        console.error("❌ Erreur chargement produits Supabase :", error);
        console.log("ℹ️ Les produits locaux seront utilisés.");
    }
}

/* =========================================================
   ENREGISTRER UNE COMMANDE DANS SUPABASE
   ========================================================= */

async function saveOrderToSupabase(order) {
    try {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/orders`,
            {
                method: "POST",
                headers: {
                    ...SUPABASE_HEADERS,
                    "Prefer": "return=representation"
                },
                body: JSON.stringify(order)
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
        }

        const savedOrder = await response.json();

        console.log("✅ Commande enregistrée dans Supabase :", savedOrder);

        return savedOrder;

    } catch (error) {
        console.error("❌ Impossible d'enregistrer la commande :", error);
        return null;
    }
   }

/* =========================================================
   PRODUITS
   ========================================================= */

const products = [

    {
        id: 1,
        name: "iPhone 11",
        category: "iphone",
        price: 145000,
        badge: "Populaire",
        description: "iPhone 11 • 64 Go • Excellent état",
        image: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 2,
        name: "iPhone 13",
        category: "iphone",
        price: 235000,
        badge: "Top vente",
        description: "iPhone 13 • 128 Go • Très bon état",
        image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 3,
        name: "iPhone 14",
        category: "iphone",
        price: 295000,
        badge: "Premium",
        description: "iPhone 14 • 128 Go • Disponible",
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 4,
        name: "iPhone 15",
        category: "iphone",
        price: 385000,
        badge: "Nouveau",
        description: "iPhone 15 • 128 Go • USB-C",
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 5,
        name: "Samsung Galaxy A15",
        category: "samsung",
        price: 85000,
        badge: "Bon prix",
        description: "Galaxy A15 • 128 Go • Dual SIM",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 6,
        name: "Samsung Galaxy A25",
        category: "samsung",
        price: 125000,
        badge: "Populaire",
        description: "Galaxy A25 • 128 Go • 5G",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 7,
        name: "Samsung Galaxy S23",
        category: "samsung",
        price: 285000,
        badge: "Premium",
        description: "Galaxy S23 • 256 Go • 5G",
        image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 8,
        name: "Samsung Galaxy S24",
        category: "samsung",
        price: 365000,
        badge: "Nouveau",
        description: "Galaxy S24 • 256 Go • 5G",
        image: "https://images.unsplash.com/photo-1707580108827-48c4d4b8e5c7?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 9,
        name: "Redmi Note 13",
        category: "redmi",
        price: 95000,
        badge: "Bon prix",
        description: "Redmi Note 13 • 128 Go",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 10,
        name: "Redmi Note 13 Pro",
        category: "redmi",
        price: 145000,
        badge: "Top vente",
        description: "Note 13 Pro • 256 Go",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 11,
        name: "Tecno Spark 20",
        category: "tecno",
        price: 80000,
        badge: "Promo",
        description: "Tecno Spark 20 • 128 Go",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 12,
        name: "Tecno Camon 30",
        category: "tecno",
        price: 125000,
        badge: "Nouveau",
        description: "Tecno Camon 30 • 256 Go",
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 13,
        name: "Power Bank 20 000 mAh",
        category: "accessoires",
        price: 15000,
        badge: "Essentiel",
        description: "Power Bank haute capacité",
        image: "https://images.unsplash.com/photo-1609592424694-7e4b2a4c8c4a?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 14,
        name: "Écouteurs Bluetooth",
        category: "accessoires",
        price: 10000,
        badge: "Promo",
        description: "Écouteurs sans fil Bluetooth",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 15,
        name: "Apple Watch",
        category: "accessoires",
        price: 65000,
        badge: "Premium",
        description: "Montre connectée Apple",
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 16,
        name: "Chargeur rapide USB-C",
        category: "accessoires",
        price: 7500,
        badge: "Essentiel",
        description: "Chargeur rapide USB-C",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=85"
    }

];


/* =========================================================
   ÉTAT DE L'APPLICATION
   ========================================================= */

let cart = JSON.parse(localStorage.getItem("wendkShopCart")) || [];

let currentCategory = "all";

let searchTerm = "";


/* =========================================================
   DOM
   ========================================================= */

const productsGrid = document.getElementById("productsGrid");

const noProducts = document.getElementById("noProducts");

const searchInput = document.getElementById("searchInput");

const cartCount = document.getElementById("cartCount");

const cartDrawer = document.getElementById("cartDrawer");

const cartOverlay = document.getElementById("cartOverlay");

const cartItems = document.getElementById("cartItems");

const cartTotal = document.getElementById("cartTotal");

const emptyCart = document.getElementById("emptyCart");

const cartFooter = document.getElementById("cartFooter");

const toast = document.getElementById("toast");


/* =========================================================
   FORMAT PRIX
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";

}


/* =========================================================
   AFFICHER PRODUITS
   ========================================================= */

function renderProducts() {

    const filteredProducts = products.filter(product => {

        const categoryMatch =
            currentCategory === "all" ||
            product.category === currentCategory;

        const searchMatch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());

        return categoryMatch && searchMatch;

    });


    productsGrid.innerHTML = "";


    if (filteredProducts.length === 0) {

        noProducts.classList.remove("hidden");

        return;

    }


    noProducts.classList.add("hidden");


    filteredProducts.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/800x800/f3f4f6/111827?text=WENDK+SHOP'"
                >

                <span class="product-badge">
                    ${product.badge}
                </span>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${getCategoryName(product.category)}
                </span>

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
                        data-id="${product.id}"
                        aria-label="Ajouter ${product.name} au panier"
                    >
                        🛒
                    </button>

                </div>

            </div>

        `;


        productsGrid.appendChild(card);

    });


    document.querySelectorAll(".add-cart").forEach(button => {

        button.addEventListener("click", () => {

            const productId = Number(button.dataset.id);

            addToCart(productId);

        });

    });

}


/* =========================================================
   CATÉGORIES
   ========================================================= */

function getCategoryName(category) {

    const categories = {

        iphone: "iPhone",

        samsung: "Samsung",

        redmi: "Redmi",

        tecno: "Tecno",

        accessoires: "Accessoires"

    };

    return categories[category] || "Produit";

}


/* =========================================================
   AJOUTER AU PANIER
   ========================================================= */

function addToCart(productId) {

    const product = products.find(item => item.id === productId);

    if (!product) return;


    const existingItem = cart.find(item => item.id === productId);


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            quantity: 1

        });

    }


    saveCart();

    updateCartUI();

    showToast(`${product.name} ajouté au panier ✅`);

}


/* =========================================================
   SAUVEGARDER PANIER
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "wendkShopCart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   OBTENIR PRODUIT DU PANIER
   ========================================================= */

function getCartProduct(item) {

    return products.find(
        product => product.id === item.id
    );

}


/* =========================================================
   RENDRE PANIER
   ========================================================= */

function renderCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        emptyCart.classList.remove("hidden");

        cartFooter.classList.add("hidden");

        return;

    }


    emptyCart.classList.add("hidden");

    cartFooter.classList.remove("hidden");


    let total = 0;


    cart.forEach(item => {

        const product = getCartProduct(item);

        if (!product) return;


        const subtotal =
            product.price * item.quantity;


        total += subtotal;


        const cartItem =
            document.createElement("div");


        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.src='https://placehold.co/200x200/f3f4f6/111827?text=WENDK'"
                >

            </div>


            <div>

                <div class="cart-item-name">
                    ${product.name}
                </div>

                <div class="cart-item-price">
                    ${formatPrice(product.price)}
                </div>


                <div class="quantity-control">

                    <button
                        data-action="decrease"
                        data-id="${product.id}"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        data-action="increase"
                        data-id="${product.id}"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                class="remove-item"
                data-action="remove"
                data-id="${product.id}"
                aria-label="Supprimer ${product.name}"
            >
                🗑️
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.textContent = formatPrice(total);


    document
        .querySelectorAll("[data-action]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                const action =
                    button.dataset.action;


                if (action === "increase") {

                    changeQuantity(id, 1);

                }


                if (action === "decrease") {

                    changeQuantity(id, -1);

                }


                if (action === "remove") {

                    removeFromCart(id);

                }

            });

        });

}


/* =========================================================
   CHANGER QUANTITÉ
   ========================================================= */

function changeQuantity(productId, amount) {

    const item =
        cart.find(item => item.id === productId);


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart = cart.filter(
            item => item.id !== productId
        );

    }


    saveCart();

    updateCartUI();

}


/* =========================================================
   SUPPRIMER
   ========================================================= */

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );


    saveCart();

    updateCartUI();

    showToast("Produit supprimé du panier");

}


/* =========================================================
   VIDER PANIER
   ========================================================= */

function clearCart() {

    if (cart.length === 0) return;


    const confirmed =
        confirm("Voulez-vous vraiment vider le panier ?");


    if (!confirmed) return;


    cart = [];

    saveCart();

    updateCartUI();

    showToast("Panier vidé");


}


/* =========================================================
   UPDATE PANIER
   ========================================================= */

function updateCartUI() {

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    cartCount.textContent = count;

    renderCart();

}


/* =========================================================
   WHATSAPP
   ========================================================= */

function createWhatsAppLink(message) {

    if (
        !WHATSAPP_NUMBER ||
        WHATSAPP_NUMBER.includes("XXXXXXXX")
    ) {

        alert(
            "Configure d'abord ton numéro WhatsApp dans script.js."
        );

        return null;

    }


    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

}


/* =========================================================
   COMMANDER PANIER
   ========================================================= */

function checkoutWhatsApp() {

    if (cart.length === 0) {

        alert("Votre panier est vide.");

        return;

    }


    let message =
        "Bonjour WENDK SHOP 👋\n\n" +
        "Je souhaite commander les produits suivants :\n\n";


    let total = 0;


    cart.forEach(item => {

        const product = getCartProduct(item);

        if (!product) return;


        const subtotal =
            product.price * item.quantity;


        total += subtotal;


        message +=
            `📱 ${product.name}\n` +
            `Quantité : ${item.quantity}\n` +
            `Prix : ${formatPrice(subtotal)}\n\n`;

    });


    message +=
        "━━━━━━━━━━━━━━\n" +
        `💰 TOTAL : ${formatPrice(total)}\n\n` +
        "📍 Ville / quartier : \n" +
        "📞 Nom du client : \n" +
        "🚚 Mode de livraison : \n\n" +
        "Merci de me confirmer la disponibilité. 🙏";


    const link =
        createWhatsAppLink(message);


    if (link) {

        window.open(
            link,
            "_blank"
        );

    }

}


/* =========================================================
   WHATSAPP GÉNÉRAL
   ========================================================= */

function setupWhatsAppLinks() { async function checkoutWhatsApp() {

    if (cart.length === 0) {
        alert("Votre panier est vide.");
        return;
    }

    let message =
        "Bonjour WENDK SHOP 👋\n\n" +
        "Je souhaite commander les produits suivants :\n\n";

    let total = 0;
    const orderItems = [];

    cart.forEach(item => {

        const product = getCartProduct(item);

        if (!product) return;

        const subtotal =
            product.price * item.quantity;

        total += subtotal;

        orderItems.push({
            id: product.id,
            name: product.name,
            quantity: item.quantity,
            price: product.price,
            subtotal: subtotal
        });

        message +=
            `📱 ${product.name}\n` +
            `Quantité : ${item.quantity}\n` +
            `Prix : ${formatPrice(subtotal)}\n\n`;
    });

    message +=
        "━━━━━━━━━━━━━━\n" +
        `💰 TOTAL : ${formatPrice(total)}\n\n` +
        "📍 Ville / quartier : \n" +
        "📞 Nom du client : \n" +
        "🚚 Mode de livraison : \n\n" +
        "Merci de me confirmer la disponibilité. 🙏";

    /* =====================================================
       ENREGISTRER LA COMMANDE DANS SUPABASE
       ===================================================== */

    const order = {
        customer_name: "",
        customer_phone: "",
        address: "",
        items: orderItems,
        total: total
    };

    await saveOrderToSupabase(order);

    /* =====================================================
       OUVRIR WHATSAPP
       ===================================================== */

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
} }


/* =========================================================
   OUVRIR PANIER
   ========================================================= */

function openCart() {

    cartDrawer.classList.add("active");

    cartOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   FERMER PANIER
   ========================================================= */

function closeCart() {

    cartDrawer.classList.remove("active");

    cartOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimeout;


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================================================
   FILTRAGE
   ========================================================= */

function setupFilters() {

    document
        .querySelectorAll(".category-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                document
                    .querySelectorAll(".category-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );


                button.classList.add("active");


                currentCategory =
                    button.dataset.category;


                renderProducts();

            });

        });


    searchInput.addEventListener(
        "input",
        event => {

            searchTerm =
                event.target.value.trim();


            renderProducts();

        }
    );


    document
        .getElementById("resetFilters")
        .addEventListener("click", () => {

            currentCategory = "all";

            searchTerm = "";

            searchInput.value = "";


            document
                .querySelectorAll(".category-btn")
                .forEach(b
