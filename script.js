/* =========================================================
   WENDK SHOP
   SCRIPT.JS — NOUVELLE VERSION
   BLOC 1/5
   CONFIGURATION + PRODUITS + ÉTAT
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
            "Écran": "6,1 pouces",
            "Stockage": "64 Go",
            "Caméra": "12 MP",
            "Réseau": "4G",
            "SIM": "Double SIM",
            "Batterie": "3110 mAh"
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
            "Écran": "6,1 pouces OLED",
            "Stockage": "128 Go",
            "Caméra": "Double 12 MP",
            "Réseau": "5G",
            "SIM": "Double SIM",
            "Batterie": "3240 mAh"
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
            "Écran": "6,1 pouces OLED",
            "Stockage": "128 Go",
            "Caméra": "Double 12 MP",
            "Réseau": "5G",
            "SIM": "Double SIM",
            "Batterie": "3279 mAh"
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
            "Écran": "6,1 pouces OLED",
            "Stockage": "128 Go",
            "Caméra": "48 MP",
            "Réseau": "5G",
            "Connecteur": "USB-C",
            "Batterie": "3349 mAh"
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
            "Écran": "6,5 pouces",
            "Stockage": "128 Go",
            "Caméra": "50 MP",
            "Réseau": "4G",
            "SIM": "Double SIM",
            "Batterie": "5000 mAh"
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
            "Écran": "6,5 pouces AMOLED",
            "Stockage": "128 Go",
            "Caméra": "50 MP",
            "Réseau": "5G",
            "SIM": "Double SIM",
            "Batterie": "5000 mAh"
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
            "Écran": "6,1 pouces AMOLED",
            "Stockage": "256 Go",
            "Caméra": "50 MP",
            "Réseau": "5G",
            "RAM": "8 Go",
            "Batterie": "3900 mAh"
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
            "Écran": "6,2 pouces AMOLED",
            "Stockage": "256 Go",
            "Caméra": "50 MP",
            "Réseau": "5G",
            "RAM": "8 Go",
            "Batterie": "4000 mAh"
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
            "Stockage": "128 Go",
            "Caméra": "108 MP",
            "Réseau": "4G",
            "RAM": "6 Go",
            "Batterie": "5000 mAh"
        }
    },

    {
        id: 10,
        name: "Redmi Note 13 Pro",
        category: "redmi",
        price: 145000,
        badge: "Top vente",
        description: "Redmi Note 13 Pro • 256 Go",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85",
        specs: {
            "Écran": "6,67 pouces AMOLED",
            "Stockage": "256 Go",
            "Caméra": "200 MP",
            "Réseau": "4G",
            "RAM": "8 Go",
            "Batterie": "5000 mAh"
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
            "Stockage": "128 Go",
            "Caméra": "50 MP",
            "Réseau": "4G",
            "RAM": "8 Go",
            "Batterie": "5000 mAh"
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
            "Stockage": "256 Go",
            "Caméra": "50 MP",
            "Réseau": "4G",
            "RAM": "8 Go",
            "Batterie": "5000 mAh"
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
            "Recharge": "USB",
            "Compatibilité": "Smartphones"
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
            "Type": "Sans fil",
            "Connexion": "Bluetooth",
            "Microphone": "Oui",
            "Recharge": "USB"
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
            "Connexion": "Bluetooth",
            "Écran": "Tactile",
            "Compatibilité": "iPhone"
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
            "Type": "Chargeur rapide",
            "Connecteur": "USB-C",
            "Compatibilité": "Smartphones",
            "Charge": "Rapide"
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
   DOM + PRODUITS + AFFICHAGE
   ========================================================= */


/* =========================================================
   ÉLÉMENTS HTML
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
   FORMATAGE DU PRIX
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("fr-FR")
        .format(Number(price) || 0) + " FCFA";

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
   CHARGEMENT DES PRODUITS SUPABASE
   ========================================================= */

async function loadProductsFromSupabase() {

    try {

        const response =
            await fetch(
                `${SUPABASE_URL}/rest/v1/Product?select=*`,
                {
                    method: "GET",
                    headers: SUPABASE_HEADERS
                }
            );


        if (!response.ok) {

            console.warn(
                "⚠️ Table Product indisponible."
            );

            return;

        }


        const data =
            await response.json();


        if (
            !Array.isArray(data) ||
            data.length === 0
        ) {

            console.log(
                "ℹ️ Aucun produit Supabase. Produits locaux conservés."
            );

            return;

        }


        products.length = 0;


        data.forEach(product => {

            products.push({

                id:
                    Number(product.id),

                name:
                    product.name || "Produit",

                category:
                    product.category || "accessoires",

                price:
                    Number(product.price) || 0,

                badge:
                    product.badge || "",

                description:
                    product.description || "",

                image:
                    product.image || "",

                specs:
                    product.specs || {}

            });

        });


        console.log(
            "✅ Produits Supabase chargés :",
            products.length
        );

    }


    catch (error) {

        console.warn(
            "⚠️ Supabase indisponible. Produits locaux utilisés.",
            error
        );

    }

}


/* =========================================================
   FILTRAGE DES PRODUITS
   ========================================================= */

function getFilteredProducts() {

    return products.filter(product => {

        const categoryMatch =
            currentCategory === "all" ||
            product.category === currentCategory;


        const searchText =
            (
                String(product.name || "") +
                " " +
                String(product.description || "")
            ).toLowerCase();


        const searchMatch =
            searchText.includes(
                searchTerm.toLowerCase()
            );


        return (
            categoryMatch &&
            searchMatch
        );

    });

}


/* =========================================================
   AFFICHAGE DES PRODUITS
   ========================================================= */

function renderProducts() {

    if (!productsGrid) {

        console.error(
            "❌ productsGrid introuvable."
        );

        return;

    }


    const filteredProducts =
        getFilteredProducts();


    productsGrid.innerHTML = "";


    if (
        noProducts
    ) {

        if (
            filteredProducts.length === 0
        ) {

            noProducts.classList.remove(
                "hidden"
            );

        } else {

            noProducts.classList.add(
                "hidden"
            );

        }

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
                    onerror="
                        this.src='https://placehold.co/800x800/f3f4f6/111827?text=WENDK+SHOP'
                    "
                >

                ${
                    product.badge
                    ?
                    `<span class="product-badge">
                        ${product.badge}
                    </span>`
                    :
                    ""
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
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <strong class="product-price">
                        ${formatPrice(product.price)}
                    </strong>


                    <div class="product-actions">

                        <button
                            type="button"
                            class="details-btn"
                            data-details-id="${product.id}"
                        >
                            👁️ Détails
                        </button>


                        <button
                            type="button"
                            class="add-cart"
                            data-id="${product.id}"
                            aria-label="Ajouter ${product.name} au panier"
                        >
                            🛒
                        </button>

                    </div>

                </div>

            </div>

        `;


        productsGrid.appendChild(
            card
        );

    });


    /*
       Boutons détails
    */

    document
        .querySelectorAll(
            "[data-details-id]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(
                            button.dataset.detailsId
                        );


                    openProductDetails(
                        id
                    );

                }
            );

        });


    /*
       Boutons panier
    */

    document
        .querySelectorAll(
            ".add-cart"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(
                            button.dataset.id
                        );


                    addToCart(id);

                }
            );

        });

}


/* =========================================================
   DÉTAILS DU PRODUIT
   ========================================================= */

function openProductDetails(productId) {

    const product =
        products.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );


    if (!product) {

        return;

    }


    selectedProduct =
        product;


    const existing =
        document.getElementById(
            "productDetailsModal"
        );


    if (existing) {

        existing.remove();

    }


    const specs =
        product.specs || {};


    let specsHTML = "";


    Object.keys(specs).forEach(key => {

        specsHTML += `

            <div class="spec-row">

                <span>
                    ${key}
                </span>

                <strong>
                    ${specs[key]}
                </strong>

            </div>

        `;

    });


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "productDetailsModal";


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


                <img
                    class="details-image"
                    src="${product.image}"
                    alt="${product.name}"
                >


                <span class="product-category">
                    ${getCategoryName(product.category)}
                </span>


                <h2>
                    ${product.name}
                </h2>


                <p>
                    ${product.description}
                </p>


                <strong class="details-price">
                    ${formatPrice(product.price)}
                </strong>


                <h3>
                    📋 Fiche technique
                </h3>


                <div class="specs-list">

                    ${
                        specsHTML ||
                        "<p>Informations techniques disponibles sur demande.</p>"
                    }

                </div>


                <button
                    type="button"
                    class="btn btn-whatsapp"
                    id="detailsAddCart"
                >
                    🛒 Ajouter au panier
                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    const closeButton =
        document.getElementById(
            "closeProductDetails"
        );


    const overlay =
        document.getElementById(
            "productDetailsOverlay"
        );


    const addButton =
        document.getElementById(
            "detailsAddCart"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeProductDetails
        );

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


    if (addButton) {

        addButton.addEventListener(
            "click",
            () => {

                addToCart(
                    product.id
                );

                closeProductDetails();

            }
        );

    }

}


/* =========================================================
   FERMER DÉTAILS PRODUIT
   ========================================================= */

function closeProductDetails() {

    const modal =
        document.getElementById(
            "productDetailsModal"
        );


    if (modal) {

        modal.remove();

    }


    selectedProduct =
        null;

}


/* =========================================================
   FIN DU BLOC 2
   ========================================================= */
