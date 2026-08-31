/* =========================================================
   WENDK SHOP
   SCRIPT.JS — VERSION COMPLÈTE
   BLOC 1/5
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

const WHATSAPP_NUMBER = "22607309472";

const SUPABASE_URL =
    "https://peytqrampgxvqdzygxnc.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_atQoFNjWTz8MxT81vg2QGQ_iO4_giOb";


const SUPABASE_HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json"
};


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
        image: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Écran": "6,1 pouces Liquid Retina HD",
            "Processeur": "Apple A13 Bionic",
            "Stockage": "64 Go",
            "Caméra": "Double caméra 12 MP",
            "Batterie": "3110 mAh",
            "SIM": "Nano-SIM + eSIM",
            "Réseau": "4G LTE",
            "Système": "iOS"
        }
    },


    {
        id: 2,
        name: "iPhone 13",
        category: "iphone",
        price: 235000,
        badge: "Top vente",
        description: "iPhone 13 • 128 Go • Très bon état",
        image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Écran": "6,1 pouces Super Retina XDR",
            "Processeur": "Apple A15 Bionic",
            "Stockage": "128 Go",
            "Caméra": "Double caméra 12 MP",
            "Batterie": "3227 mAh",
            "SIM": "Nano-SIM + eSIM",
            "Réseau": "5G",
            "Système": "iOS"
        }
    },


    {
        id: 3,
        name: "iPhone 14",
        category: "iphone",
        price: 295000,
        badge: "Premium",
        description: "iPhone 14 • 128 Go • Disponible",
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Écran": "6,1 pouces Super Retina XDR",
            "Processeur": "Apple A15 Bionic",
            "Stockage": "128 Go",
            "Caméra": "Double caméra 12 MP",
            "Batterie": "3279 mAh",
            "SIM": "Nano-SIM + eSIM",
            "Réseau": "5G",
            "Système": "iOS"
        }
    },


    {
        id: 4,
        name: "iPhone 15",
        category: "iphone",
        price: 385000,
        badge: "Nouveau",
        description: "iPhone 15 • 128 Go • USB-C",
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Écran": "6,1 pouces Super Retina XDR",
            "Processeur": "Apple A16 Bionic",
            "Stockage": "128 Go",
            "Caméra": "48 MP + 12 MP",
            "Batterie": "3349 mAh",
            "Connectique": "USB-C",
            "Réseau": "5G",
            "Système": "iOS"
        }
    },


    {
        id: 5,
        name: "Samsung Galaxy A15",
        category: "samsung",
        price: 85000,
        badge: "Bon prix",
        description: "Galaxy A15 • 128 Go • Dual SIM",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Écran": "6,5 pouces Super AMOLED",
            "Processeur": "MediaTek Helio G99",
            "Stockage": "128 Go",
            "RAM": "4 Go",
            "Caméra": "50 MP + 5 MP + 2 MP",
            "Batterie": "5000 mAh",
            "SIM": "Dual SIM",
            "Réseau": "4G"
        }
    },


    {
        id: 6,
        name: "Samsung Galaxy A25",
        category: "samsung",
        price: 125000,
        badge: "Populaire",
        description: "Galaxy A25 • 128 Go • 5G",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Écran": "6,5 pouces Super AMOLED",
            "Processeur": "Exynos 1280",
            "Stockage": "128 Go",
            "RAM": "6 Go",
            "Caméra": "50 MP + 8 MP + 2 MP",
            "Batterie": "5000 mAh",
            "SIM": "Dual SIM",
            "Réseau": "5G"
        }
    },


    {
        id: 7,
        name: "Samsung Galaxy S23",
        category: "samsung",
        price: 285000,
        badge: "Premium",
        description: "Galaxy S23 • 256 Go • 5G",
        image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Écran": "6,1 pouces Dynamic AMOLED 2X",
            "Processeur": "Snapdragon 8 Gen 2",
            "Stockage": "256 Go",
            "RAM": "8 Go",
            "Caméra": "50 MP + 12 MP + 10 MP",
            "Batterie": "3900 mAh",
            "SIM": "Dual SIM",
            "Réseau": "5G"
        }
    },


    {
        id: 8,
        name: "Samsung Galaxy S24",
        category: "samsung",
        price: 365000,
        badge: "Nouveau",
        description: "Galaxy S24 • 256 Go • 5G",
        image: "https://images.unsplash.com/photo-1707580108827-48c4d4b8e5c7?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Écran": "6,2 pouces Dynamic AMOLED 2X",
            "Processeur": "Exynos 2400",
            "Stockage": "256 Go",
            "RAM": "8 Go",
            "Caméra": "50 MP + 12 MP + 10 MP",
            "Batterie": "4000 mAh",
            "SIM": "Dual SIM",
            "Réseau": "5G"
        }
    },


    {
        id: 9,
        name: "Redmi Note 13",
        category: "redmi",
        price: 95000,
        badge: "Bon prix",
        description: "Redmi Note 13 • 128 Go",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Écran": "6,67 pouces AMOLED",
            "Processeur": "Snapdragon 685",
            "Stockage": "128 Go",
            "RAM": "6 Go",
            "Caméra": "108 MP",
            "Batterie": "5000 mAh",
            "Réseau": "4G",
            "Système": "Android"
        }
    },


    {
        id: 10,
        name: "Redmi Note 13 Pro",
        category: "redmi",
        price: 145000,
        badge: "Top vente",
        description: "Note 13 Pro • 256 Go",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Écran": "6,67 pouces AMOLED",
            "Processeur": "MediaTek Helio G99 Ultra",
            "Stockage": "256 Go",
            "RAM": "8 Go",
            "Caméra": "200 MP",
            "Batterie": "5000 mAh",
            "Réseau": "4G",
            "Système": "Android"
        }
    },


    {
        id: 11,
        name: "Tecno Spark 20",
        category: "tecno",
        price: 80000,
        badge: "Promo",
        description: "Tecno Spark 20 • 128 Go",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Écran": "6,56 pouces",
            "Processeur": "MediaTek Helio G85",
            "Stockage": "128 Go",
            "RAM": "4 Go",
            "Caméra": "50 MP",
            "Batterie": "5000 mAh",
            "SIM": "Dual SIM",
            "Réseau": "4G"
        }
    },


    {
        id: 12,
        name: "Tecno Camon 30",
        category: "tecno",
        price: 125000,
        badge: "Nouveau",
        description: "Tecno Camon 30 • 256 Go",
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Écran": "6,78 pouces AMOLED",
            "Processeur": "MediaTek Helio G99",
            "Stockage": "256 Go",
            "RAM": "8 Go",
            "Caméra": "50 MP",
            "Batterie": "5000 mAh",
            "SIM": "Dual SIM",
            "Réseau": "4G"
        }
    },


    {
        id: 13,
        name: "Power Bank 20 000 mAh",
        category: "accessoires",
        price: 15000,
        badge: "Essentiel",
        description: "Power Bank haute capacité",
        image: "https://images.unsplash.com/photo-1609592424694-7e4b2a4c8c4a?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Capacité": "20 000 mAh",
            "Type": "Power Bank",
            "Ports": "USB / USB-C",
            "Charge": "Charge rapide",
            "Compatibilité": "Smartphones et appareils USB"
        }
    },


    {
        id: 14,
        name: "Écouteurs Bluetooth",
        category: "accessoires",
        price: 10000,
        badge: "Promo",
        description: "Écouteurs sans fil Bluetooth",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Type": "Écouteurs sans fil",
            "Connexion": "Bluetooth",
            "Microphone": "Intégré",
            "Autonomie": "Selon utilisation",
            "Compatibilité": "Android et iPhone"
        }
    },


    {
        id: 15,
        name: "Apple Watch",
        category: "accessoires",
        price: 65000,
        badge: "Premium",
        description: "Montre connectée Apple",
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Type": "Montre connectée",
            "Écran": "Écran tactile",
            "Connexion": "Bluetooth",
            "Compatibilité": "iPhone",
            "Fonctions": "Notifications, activité, appels"
        }
    },


    {
        id: 16,
        name: "Chargeur rapide USB-C",
        category: "accessoires",
        price: 7500,
        badge: "Essentiel",
        description: "Chargeur rapide USB-C",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=85",

        specs: {
            "Type": "Chargeur secteur",
            "Connecteur": "USB-C",
            "Charge": "Charge rapide",
            "Compatibilité": "Smartphones USB-C"
        }
    }

];


/* =========================================================
   ÉTAT DE L'APPLICATION
   ========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem("wendkShopCart")
    ) || [];

let currentCategory = "all";

let searchTerm = "";

let selectedProduct = null;


/* =========================================================
   FIN DU BLOC 1
   ========================================================= */
/* =========================================================
   WENDK SHOP
   SCRIPT.JS — BLOC 2/5
   ========================================================= */


/* =========================================================
   DOM
   ========================================================= */

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


/* =========================================================
   FORMAT PRIX
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("fr-FR")
        .format(Number(price) || 0)
        + " FCFA";

}


/* =========================================================
   NOM DES CATÉGORIES
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
   CHARGER LES PRODUITS SUPABASE
   ========================================================= */

async function loadProductsFromSupabase() {

    try {

        let response = await fetch(
            `${SUPABASE_URL}/rest/v1/Product?select=*`,
            {
                method: "GET",
                headers: SUPABASE_HEADERS
            }
        );


        /*
         Si la table est en minuscule,
         on essaie également "product".
        */

        if (!response.ok) {

            response = await fetch(
                `${SUPABASE_URL}/rest/v1/product?select=*`,
                {
                    method: "GET",
                    headers: SUPABASE_HEADERS
                }
            );

        }


        if (!response.ok) {

            throw new Error(
                `Erreur Supabase : ${response.status}`
            );

        }


        const data =
            await response.json();


        if (
            Array.isArray(data) &&
            data.length > 0
        ) {

            products.length = 0;


            data.forEach(product => {

                products.push({

                    id: Number(product.id),

                    name:
                        product.name || "Produit",

                    category:
                        product.category || "accessoires",

                    price:
                        Number(product.price) || 0,

                    description:
                        product.description || "",

                    image:
                        product.image || "",

                    badge:
                        product.badge || "",

                    specs:
                        product.specs || {}

                });

            });


            console.log(
                "✅ Produits Supabase chargés :",
                products.length
            );

        }

    } catch (error) {

        console.warn(
            "⚠️ Supabase produits indisponible.",
            "Les produits locaux sont conservés.",
            error
        );

    }

}


/* =========================================================
   AFFICHER LES PRODUITS
   ========================================================= */

function renderProducts() {

    if (!productsGrid) return;


    const filteredProducts =
        products.filter(product => {

            const categoryMatch =
                currentCategory === "all" ||
                product.category === currentCategory;


            const text =
                `${product.name || ""} ${product.description || ""}`
                    .toLowerCase();


            const searchMatch =
                text.includes(
                    searchTerm.toLowerCase()
                );


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


        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/800x800/f3f4f6/111827?text=WENDK+SHOP'"
                >

                ${
                    product.badge
                    ? `
                        <span class="product-badge">
                            ${product.badge}
                        </span>
                    `
                    : ""
                }

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${getCategoryName(product.category)}
                </span>


                <h3 class="product-name">
                    ${product.name}
                </h3>


                <p class="product-description">
                    ${product.description || ""}
                </p>


                <div class="product-bottom">

                    <strong class="product-price">
                        ${formatPrice(product.price)}
                    </strong>


                    <div
                        class="product-actions"
                        style="
                            display:flex;
                            gap:8px;
                            align-items:center;
                        "
                    >

                        <button
                            class="product-details-btn"
                            data-details-id="${product.id}"
                            type="button"
                            title="Voir les détails"
                        >
                            👁️
                        </button>


                        <button
                            class="add-cart"
                            data-id="${product.id}"
                            type="button"
                            aria-label="Ajouter ${product.name} au panier"
                        >
                            🛒
                        </button>

                    </div>

                </div>

            </div>

        `;


        productsGrid.appendChild(card);

    });


    /*
       Boutons ajouter au panier
    */

    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const productId =
                        Number(
                            button.dataset.id
                        );


                    addToCart(productId);

                }
            );

        });


    /*
       Boutons détails
    */

    document
        .querySelectorAll(
            ".product-details-btn"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const productId =
                        Number(
                            button.dataset.detailsId
                        );


                    openProductDetails(
                        productId
                    );

                }
            );

        });

}


/* =========================================================
   FICHE TECHNIQUE
   ========================================================= */

function openProductDetails(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    selectedProduct = product;


    let specsHTML = "";


    if (
        product.specs &&
        typeof product.specs === "object" &&
        Object.keys(product.specs).length > 0
    ) {

        specsHTML = `

            <div class="product-specs">

                <h3>
                    📋 Fiche technique
                </h3>

                <div class="specs-list">

                    ${Object.entries(product.specs)
                        .map(
                            ([key, value]) => `
                                <div class="spec-row">

                                    <strong>
                                        ${key}
                                    </strong>

                                    <span>
                                        ${value}
                                    </span>

                                </div>
                            `
                        )
                        .join("")}

                </div>

            </div>

        `;

    } else {

        specsHTML = `

            <div class="product-specs">

                <h3>
                    📋 Informations
                </h3>

                <p>
                    Contactez WENDK SHOP pour obtenir
                    les caractéristiques détaillées
                    de ce produit.
                </p>

            </div>

        `;

    }


    let modal =
        document.getElementById(
            "productDetailsModal"
        );


    if (!modal) {

        modal =
            document.createElement("div");

        modal.id =
            "productDetailsModal";

        document.body.appendChild(modal);

    }


    modal.innerHTML = `

        <div
            class="product-details-overlay"
            id="productDetailsOverlay"
        >

            <div
                class="product-details-modal"
                role="dialog"
                aria-modal="true"
            >

                <button
                    type="button"
                    class="product-details-close"
                    id="closeProductDetails"
                >
                    ×
                </button>


                <div class="product-details-content">

                    <div class="product-details-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            onerror="this.src='https://placehold.co/800x800/f3f4f6/111827?text=WENDK+SHOP'"
                        >

                    </div>


                    <div class="product-details-info">

                        <span class="product-category">
                            ${getCategoryName(product.category)}
                        </span>


                        <h2>
                            ${product.name}
                        </h2>


                        <strong class="product-details-price">
                            ${formatPrice(product.price)}
                        </strong>


                        <p>
                            ${product.description || ""}
                        </p>


                        ${specsHTML}


                        <button
                            type="button"
                            class="btn btn-primary details-add-cart"
                            id="detailsAddCart"
                        >
                            🛒 Ajouter au panier
                        </button>


                        <button
                            type="button"
                            class="btn btn-whatsapp details-whatsapp"
                            id="detailsWhatsapp"
                        >
                            💬 Commander sur WhatsApp
                        </button>

                    </div>

                </div>

            </div>

        </div>

    `;


    /*
       Afficher la fenêtre
    */

    requestAnimationFrame(() => {

        modal.classList.add("show");

    });


    const overlay =
        document.getElementById(
            "productDetailsOverlay"
        );


    const closeButton =
        document.getElementById(
            "closeProductDetails"
        );


    if (closeButton) {

        closeButton.onclick =
            closeProductDetails;

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            event => {

                if (
                    event.target === overlay
                ) {

                    closeProductDetails();

                }

            }
        );

    }


    const addButton =
        document.getElementById(
            "detailsAddCart"
        );


    if (addButton) {

        addButton.onclick = () => {

            addToCart(product.id);

            closeProductDetails();

        };

    }


    const whatsappButton =
        document.getElementById(
            "detailsWhatsapp"
        );


    if (whatsappButton) {

        whatsappButton.onclick = () => {

            const message =
                `Bonjour WENDK SHOP 👋\n\n` +
                `Je suis intéressé(e) par :\n` +
                `📱 ${product.name}\n` +
                `💰 ${formatPrice(product.price)}\n\n` +
                `Pouvez-vous me confirmer la disponibilité ?`;

            const link =
                createWhatsAppLink(message);


            if (link) {

                window.open(
                    link,
                    "_blank"
                );

            }

        };

    }

}


/* =========================================================
   FERMER FICHE PRODUIT
   ========================================================= */

function closeProductDetails() {

    const modal =
        document.getElementById(
            "productDetailsModal"
        );


    if (!modal) return;


    modal.classList.remove("show");


    setTimeout(() => {

        if (modal) {

            modal.remove();

        }

    }, 250);

}


/* =========================================================
   FIN DU BLOC 2
   ========================================================= */
