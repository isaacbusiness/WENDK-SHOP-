/* =========================================================
   WENDK SHOP — SCRIPT.JS
   VERSION COMPLÈTE
   BLOC 1/3
   ========================================================= */

/* ================= CONFIGURATION ================= */

const WHATSAPP_NUMBER = "22607309472";

const SUPABASE_URL =
    "https://peytqrampgxvqdzygxnc.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_atQoFNjWTz8MxT81vg2QGQ_iOb";

const SUPABASE_HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json"
};


/* ================= PRODUITS ================= */

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
        description: "Redmi Note 13 Pro • 256 Go",
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


/* ================= ÉTAT ================= */

let cart =
    JSON.parse(localStorage.getItem("wendkShopCart")) || [];

let currentCategory = "all";
let searchTerm = "";


/* ================= DOM ================= */

const productsGrid =
    document.getElementById("productsGrid");

const noProducts =
    document.getElementById("noProducts");

const searchInput =
    document.getElementById("searchInput");

const cartCount =
    document.getElementById("cartCount");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const emptyCart =
    document.getElementById("emptyCart");

const cartFooter =
    document.getElementById("cartFooter");

const toast =
    document.getElementById("toast");

const checkoutBtn =
    document.getElementById("checkoutBtn");

const openCartBtn =
    document.getElementById("openCartBtn");

const closeCartBtn =
    document.getElementById("closeCartBtn");

const clearCartBtn =
    document.getElementById("clearCartBtn");

const continueShopping =
    document.getElementById("continueShopping");

const resetFilters =
    document.getElementById("resetFilters");

const promoWhatsapp =
    document.getElementById("promoWhatsapp");

const contactWhatsapp =
    document.getElementById("contactWhatsapp");

const currentYear =
    document.getElementById("currentYear");


/* ================= FORMAT PRIX ================= */

function formatPrice(price) {

    return new Intl.NumberFormat("fr-FR")
        .format(Number(price) || 0) + " FCFA";

}


/* ================= CATÉGORIES ================= */

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


/* ================= AFFICHER PRODUITS ================= */

function renderProducts() {

    if (!productsGrid) return;

    const filteredProducts = products.filter(product => {

        const categoryMatch =
            currentCategory === "all" ||
            product.category === currentCategory;

        const text =
            `${product.name} ${product.description}`
                .toLowerCase();

        const searchMatch =
            text.includes(searchTerm.toLowerCase());

        return categoryMatch && searchMatch;

    });

    productsGrid.innerHTML = "";

    if (filteredProducts.length === 0) {

        if (noProducts) {
            noProducts.classList.remove("hidden");
        }

        return;

    }

    if (noProducts) {
        noProducts.classList.add("hidden");
    }

    filteredProducts.forEach(product => {

        const card =
            document.createElement("article");

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

    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener("click", () => {

                addToCart(
                    Number(button.dataset.id)
                );

            });

        });

}


/* ================= PANIER ================= */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );

    if (!product) return;

    const existingItem =
        cart.find(
            item => item.id === productId
        );

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }

    saveCart();
    updateCartUI();

    showToast(
        `${product.name} ajouté au panier ✅`
    );

}


function saveCart() {

    localStorage.setItem(
        "wendkShopCart",
        JSON.stringify(cart)
    );

}


function getCartProduct(item) {

    return products.find(
        product => product.id === item.id
    );

}


function changeQuantity(productId, amount) {

    const item =
        cart.find(
            item => item.id === productId
        );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== productId
            );

    }

    saveCart();
    updateCartUI();

}


function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveCart();
    updateCartUI();

    showToast("Produit supprimé du panier");

}


function clearCart() {

    if (cart.length === 0) return;

    if (
        !confirm(
            "Voulez-vous vraiment vider le panier ?"
        )
    ) return;

    cart = [];

    saveCart();
    updateCartUI();

    showToast("Panier vidé");

}


/* ================= RENDRE PANIER ================= */

function renderCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        if (emptyCart)
            emptyCart.classList.remove("hidden");

        if (cartFooter)
            cartFooter.classList.add("hidden");

        return;

    }

    if (emptyCart)
        emptyCart.classList.add("hidden");

    if (cartFooter)
        cartFooter.classList.remove("hidden");

    let total = 0;

    cart.forEach(item => {

        const product =
            getCartProduct(item);

        if (!product) return;

        const subtotal =
            Number(product.price) *
            Number(item.quantity);

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
            >
                🗑️
            </button>

        `;

        cartItems.appendChild(cartItem);

    });

    if (cartTotal) {
        cartTotal.textContent =
            formatPrice(total);
    }

    document
        .querySelectorAll("[data-action]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    const action =
                        button.dataset.action;

                    if (action === "increase")
                        changeQuantity(id, 1);

                    if (action === "decrease")
                        changeQuantity(id, -1);

                    if (action === "remove")
                        removeFromCart(id);

                }
            );

        });

}


function updateCartUI() {

    const count =
        cart.reduce(
            (total, item) =>
                total + Number(item.quantity),
            0
        );

    if (cartCount) {
        cartCount.textContent = count;
    }

    renderCart();

}


/* ================= PANIER DRAWER ================= */

function openCart() {

    if (cartDrawer)
        cartDrawer.classList.add("open");

    if (cartOverlay)
        cartOverlay.classList.add("active");

}


function closeCart() {

    if (cartDrawer)
        cartDrawer.classList.remove("open");

    if (cartOverlay)
        cartOverlay.classList.remove("active");

}


/* ================= TOAST ================= */

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);


}
/* =========================================================
   BLOC 2/3 — SUPABASE + CHECKOUT + WHATSAPP
   ========================================================= */

/* ================= SUPABASE — PRODUITS ================= */

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

            throw new Error(
                `Supabase produits : HTTP ${response.status}`
            );

        }

        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {

            console.warn(
                "⚠️ La table Product est vide. Produits locaux conservés."
            );

            return;

        }

        products.length = 0;

        data.forEach(product => {

            products.push({

                id: Number(product.id),

                name: product.name || "Produit",

                category:
                    product.category || "accessoires",

                price:
                    Number(product.price) || 0,

                description:
                    product.description || "",

                image:
                    product.image || "",

                badge:
                    product.badge || ""

            });

        });

        console.log(
            "✅ Produits chargés depuis Supabase :",
            products.length
        );

        renderProducts();

    } catch (error) {

        console.warn(
            "⚠️ Supabase produits indisponible.",
            "Les produits locaux sont utilisés.",
            error
        );

        renderProducts();

    }

}


/* ================= WHATSAPP ================= */

function createWhatsAppLink(message) {

    if (!WHATSAPP_NUMBER) {

        alert(
            "Le numéro WhatsApp n'est pas configuré."
        );

        return null;

    }

    return (
        `https://wa.me/${WHATSAPP_NUMBER}` +
        `?text=${encodeURIComponent(message)}`
    );

}


/* ================= CALCUL PANIER ================= */

function getCartTotal() {

    return cart.reduce(
        (total, item) => {

            const product =
                getCartProduct(item);

            if (!product) return total;

            return total +
                Number(product.price) *
                Number(item.quantity);

        },
        0
    );

}


/* ================= CRÉER LISTE COMMANDE ================= */

function getOrderItems() {

    return cart
        .map(item => {

            const product =
                getCartProduct(item);

            if (!product) return null;

            return {

                id: product.id,

                name: product.name,

                price: Number(product.price),

                quantity: Number(item.quantity),

                subtotal:
                    Number(product.price) *
                    Number(item.quantity)

            };

        })
        .filter(Boolean);

}


/* ================= MODALE CHECKOUT ================= */

function createCheckoutModal() {

    if (
        document.getElementById(
            "checkoutModal"
        )
    ) {

        return;

    }

    const modal =
        document.createElement("div");

    modal.id = "checkoutModal";

    modal.innerHTML = `

        <div
            class="checkout-modal-overlay"
            id="checkoutModalOverlay"
        >

            <div
                class="checkout-modal"
                role="dialog"
                aria-modal="true"
            >

                <button
                    type="button"
                    id="closeCheckoutModal"
                    class="checkout-modal-close"
                >
                    ×
                </button>

                <div class="checkout-modal-header">

                    <span class="section-label">
                        FINALISER LA COMMANDE
                    </span>

                    <h2>
                        Vos informations
                    </h2>

                    <p>
                        Remplissez vos informations
                        pour envoyer votre commande.
                    </p>

                </div>

                <form id="checkoutForm">

                    <div class="checkout-field">

                        <label for="customerName">
                            Nom complet
                        </label>

                        <input
                            type="text"
                            id="customerName"
                            name="customerName"
                            placeholder="Votre nom"
                            required
                        >

                    </div>

                    <div class="checkout-field">

                        <label for="customerPhone">
                            Téléphone
                        </label>

                        <input
                            type="tel"
                            id="customerPhone"
                            name="customerPhone"
                            placeholder="Ex : 70 12 34 56"
                            required
                        >

                    </div>

                    <div class="checkout-field">

                        <label for="customerAddress">
                            Adresse
                        </label>

                        <textarea
                            id="customerAddress"
                            name="customerAddress"
                            rows="3"
                            placeholder="Ville, quartier, secteur..."
                            required
                        ></textarea>

                    </div>

                    <div
                        class="checkout-summary"
                        id="checkoutSummary"
                    ></div>

                    <button
                        type="submit"
                        class="btn btn-whatsapp checkout-submit"
                    >
                        💬 Confirmer et commander
                    </button>

                </form>

            </div>

        </div>
    `;

    document.body.appendChild(modal);


    const closeButton =
        document.getElementById(
            "closeCheckoutModal"
        );

    const overlay =
        document.getElementById(
            "checkoutModalOverlay"
        );

    const form =
        document.getElementById(
            "checkoutForm"
        );


    closeButton.addEventListener(
        "click",
        closeCheckoutModal
    );


    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target === overlay
            ) {

                closeCheckoutModal();

            }

        }
    );


    form.addEventListener(
        "submit",
        handleCheckoutSubmit
    );

}


/* ================= OUVRIR CHECKOUT ================= */

function openCheckoutModal() {

    if (cart.length === 0) {

        alert(
            "Votre panier est vide."
        );

        return;

    }

    createCheckoutModal();

    const modal =
        document.getElementById(
            "checkoutModal"
        );

    const summary =
        document.getElementById(
            "checkoutSummary"
        );

    if (summary) {

        const total =
            getCartTotal();

        const items =
            getOrderItems();

        summary.innerHTML = `

            <div class="checkout-summary-title">
                Résumé de votre commande
            </div>

            ${items.map(item => `

                <div class="checkout-summary-item">

                    <span>
                        ${item.name}
                        × ${item.quantity}
                    </span>

                    <strong>
                        ${formatPrice(item.subtotal)}
                    </strong>

                </div>

            `).join("")}

            <div class="checkout-summary-total">

                <span>
                    TOTAL
                </span>

                <strong>
                    ${formatPrice(total)}
                </strong>

            </div>
        `;

    }

    modal.classList.add("active");

    setTimeout(() => {

        const nameInput =
            document.getElementById(
                "customerName"
            );

        if (nameInput) {
            nameInput.focus();
        }

    }, 100);

}


/* ================= FERMER CHECKOUT ================= */

function closeCheckoutModal() {

    const modal =
        document.getElementById(
            "checkoutModal"
        );

    if (modal) {

        modal.classList.remove("active");

    }

}


/* ================= SAUVEGARDER COMMANDE ================= */

async function saveOrderToSupabase(order) {

    try {

        const response =
            await fetch(
                `${SUPABASE_URL}/rest/v1/orders`,
                {
                    method: "POST",

                    headers: {
                        ...SUPABASE_HEADERS,
                        "Prefer":
                            "return=representation"
                    },

                    body:
                        JSON.stringify(order)
                }
            );


        if (!response.ok) {

            const errorText =
                await response.text();

            throw new Error(
                errorText ||
                `HTTP ${response.status}`
            );

        }


        const data =
            await response.json();


        console.log(
            "✅ Commande enregistrée :",
            data
        );


        return data;


    } catch (error) {

        console.error(
            "❌ Erreur enregistrement commande :",
            error
        );


        return null;

    }

}


/* ================= TRAITER CHECKOUT ================= */

async function handleCheckoutSubmit(event) {

    event.preventDefault();


    const name =
        document
            .getElementById("customerName")
            .value
            .trim();


    const phone =
        document
            .getElementById("customerPhone")
            .value
            .trim();


    const address =
        document
            .getElementById("customerAddress")
            .value
            .trim();


    if (!name || !phone || !address) {

        alert(
            "Veuillez remplir tous les champs."
        );

        return;

    }


    if (cart.length === 0) {

        alert(
            "Votre panier est vide."
        );

        closeCheckoutModal();

        return;

    }


    const items =
        getOrderItems();


    const total =
        getCartTotal();


    /*
       On prépare les données
       pour la table orders.
    */

    const order = {

        customer_name: name,

        customer_phone: phone,

        address: address,

        items: items,

        total: total,

        statut: "Nouvelle"

    };


    const submitButton =
        document.querySelector(
            ".checkout-submit"
        );


    if (submitButton) {

        submitButton.disabled = true;

        submitButton.textContent =
            "⏳ Enregistrement...";

    }


    const savedOrder =
        await saveOrderToSupabase(order);


    /*
       Même si Supabase rencontre
       un problème, la commande
       WhatsApp pourra continuer.
    */


    let message =
        "Bonjour WENDK SHOP 👋\n\n" +

        "🛍️ *NOUVELLE COMMANDE*\n\n" +

        `👤 Nom : ${name}\n` +

        `📞 Téléphone : ${phone}\n` +

        `📍 Adresse : ${address}\n\n` +

        "📦 *Produits :*\n\n";


    items.forEach(item => {

        message +=
            `• ${item.name}\n` +

            `  Quantité : ${item.quantity}\n` +

            `  Prix : ${formatPrice(item.subtotal)}\n\n`;

    });


    message +=
        "━━━━━━━━━━━━━━\n" +

        `💰 *TOTAL : ${formatPrice(total)}*\n\n` +

        "Merci pour votre commande. 🙏";


    const link =
        createWhatsAppLink(message);


    if (link) {

        closeCheckoutModal();

        window.open(
            link,
            "_blank"
        );

    }


    /*
       On vide le panier uniquement
       après la création de la commande.
    */

    cart = [];

    saveCart();

    updateCartUI();


    if (savedOrder) {

        showToast(
            "Commande enregistrée ✅"
        );

    } else {

        showToast(
            "Commande envoyée sur WhatsApp ✅"
        );

    }


    if (submitButton) {

        submitButton.disabled = false;

        submitButton.textContent =
            "💬 Confirmer et commander";

    }

    }
/* =========================================================
   BLOC 3/3 — ÉVÉNEMENTS + INITIALISATION
   ========================================================= */

/* ================= LIENS WHATSAPP ================= */

function setupWhatsAppLinks() {

    const generalMessage =
        "Bonjour WENDK SHOP 👋\n\n" +
        "Je souhaite avoir des informations " +
        "sur vos produits et disponibilités.";

    const link =
        createWhatsAppLink(generalMessage);

    if (promoWhatsapp && link) {

        promoWhatsapp.href = link;

    }

    if (contactWhatsapp && link) {

        contactWhatsapp.href = link;

    }

}


/* ================= CATÉGORIES ================= */

function setupCategories() {

    const categoryButtons =
        document.querySelectorAll(
            ".category-btn"
        );

    categoryButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                categoryButtons.forEach(
                    btn => {
                        btn.classList.remove(
                            "active"
                        );
                    }
                );

                button.classList.add("active");

                currentCategory =
                    button.dataset.category ||
                    "all";

                renderProducts();

            }
        );

    });

}


/* ================= RECHERCHE ================= */

function setupSearch() {

    if (!searchInput) return;

    searchInput.addEventListener(
        "input",
        event => {

            searchTerm =
                event.target.value.trim();

            renderProducts();

        }
    );

}


/* ================= BOUTON RESET ================= */

function setupResetFilters() {

    if (!resetFilters) return;

    resetFilters.addEventListener(
        "click",
        () => {

            currentCategory = "all";

            searchTerm = "";

            if (searchInput) {

                searchInput.value = "";

            }


            document
                .querySelectorAll(
                    ".category-btn"
                )
                .forEach(button => {

                    button.classList.remove(
                        "active"
                    );

                });


            const allButton =
                document.querySelector(
                    '.category-btn[data-category="all"]'
                );

            if (allButton) {

                allButton.classList.add(
                    "active"
                );

            }


            renderProducts();

        }
    );

}


/* ================= PANIER ================= */

function setupCart() {

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


    if (cartOverlay) {

        cartOverlay.addEventListener(
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


    if (clearCartBtn) {

        clearCartBtn.addEventListener(
            "click",
            clearCart
        );

    }


    if (checkoutBtn) {

        checkoutBtn.addEventListener(
            "click",
            openCheckoutModal
        );

    }

}


/* ================= ANNÉE ================= */

function setupYear() {

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }

}


/* ================= TOUCHE ESC ================= */

function setupKeyboard() {

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeCart();

                closeCheckoutModal();

            }

        }
    );

}


/* ================= NETTOYAGE PANIER ================= */

function cleanCart() {

    cart = cart.filter(item => {

        const product =
            products.find(
                product =>
                    product.id === item.id
            );

        return (
            product &&
            Number(item.quantity) > 0
        );

    });

    saveCart();

}


/* =========================================================
   INITIALISATION
   ========================================================= */

async function initWendkShop() {

    console.log(
        "🚀 WENDK SHOP — démarrage..."
    );


    /*
       On affiche immédiatement
       les produits locaux.
    */

    renderProducts();

    updateCartUI();

    setupCategories();

    setupSearch();

    setupResetFilters();

    setupCart();

    setupWhatsAppLinks();

    setupYear();

    setupKeyboard();

    cleanCart();


    /*
       Ensuite on tente de charger
       les produits depuis Supabase.
    */

    await loadProductsFromSupabase();


    /*
       Réaffichage après Supabase.
    */

    renderProducts();

    updateCartUI();


    console.log(
        "✅ WENDK SHOP prêt."
    );

}


/* =========================================================
   LANCEMENT
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initWendkShop
    );

} else {

    initWendkShop();

       }
