/* =========================================================
   WENDK SHOP
   SCRIPT.JS — NOUVELLE VERSION
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
   PRODUITS WENDK SHOP
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
            "Écran": "6,1 pouces Liquid Retina",
            "Stockage": "64 Go",
            "Caméra": "Double caméra 12 MP",
            "Processeur": "Apple A13 Bionic",
            "Batterie": "Bonne autonomie",
            "Réseau": "4G LTE",
            "SIM": "Nano-SIM + eSIM"
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
            "Stockage": "128 Go",
            "Caméra": "Double caméra 12 MP",
            "Processeur": "Apple A15 Bionic",
            "Batterie": "Bonne autonomie",
            "Réseau": "5G",
            "SIM": "Nano-SIM + eSIM"
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
            "Stockage": "128 Go",
            "Caméra": "Double caméra 12 MP",
            "Processeur": "Apple A15 Bionic",
            "Batterie": "Bonne autonomie",
            "Réseau": "5G",
            "SIM": "Nano-SIM + eSIM"
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
            "Stockage": "128 Go",
            "Caméra": "48 MP + 12 MP",
            "Processeur": "Apple A16 Bionic",
            "Port": "USB-C",
            "Réseau": "5G",
            "SIM": "Nano-SIM + eSIM"
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
            "Stockage": "128 Go",
            "RAM": "4 Go",
            "Caméra": "50 MP",
            "Batterie": "5000 mAh",
            "Réseau": "4G",
            "SIM": "Dual SIM"
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
            "Stockage": "128 Go",
            "RAM": "6 Go",
            "Caméra": "50 MP",
            "Batterie": "5000 mAh",
            "Réseau": "5G",
            "SIM": "Dual SIM"
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
            "Stockage": "256 Go",
            "RAM": "8 Go",
            "Caméra": "50 MP",
            "Processeur": "Snapdragon 8 Gen 2",
            "Batterie": "3900 mAh",
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
            "Stockage": "256 Go",
            "RAM": "8 Go",
            "Caméra": "50 MP",
            "Processeur": "Exynos 2400",
            "Batterie": "4000 mAh",
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
            "Stockage": "128 Go",
            "RAM": "6 Go",
            "Caméra": "108 MP",
            "Batterie": "5000 mAh",
            "Réseau": "4G",
            "SIM": "Dual SIM"
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
            "Stockage": "256 Go",
            "RAM": "8 Go",
            "Caméra": "200 MP",
            "Batterie": "5000 mAh",
            "Charge": "67 W",
            "Réseau": "4G"
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
            "RAM": "4 Go",
            "Caméra": "50 MP",
            "Batterie": "5000 mAh",
            "Réseau": "4G",
            "SIM": "Dual SIM"
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
            "RAM": "8 Go",
            "Caméra": "50 MP",
            "Batterie": "5000 mAh",
            "Charge": "70 W",
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
            "Usage": "Smartphones et accessoires",
            "Recharge": "USB",
            "Indicateur": "Niveau de batterie"
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
            "Autonomie": "Plusieurs heures",
            "Recharge": "Boîtier USB"
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
            "Fonctions": "Notifications et suivi d'activité"
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
            "Port": "USB-C",
            "Technologie": "Charge rapide",
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
   AFFICHAGE PRODUITS + DÉTAILS
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
   AFFICHER LES PRODUITS
   ========================================================= */

function renderProducts() {

    if (!productsGrid) {

        console.error(
            "❌ productsGrid introuvable."
        );

        return;

    }


    const filteredProducts =
        products.filter(product => {

            const categoryMatch =
                currentCategory === "all" ||
                product.category === currentCategory;


            const searchText =
                (
                    product.name +
                    " " +
                    product.description
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


    productsGrid.innerHTML = "";


    if (
        filteredProducts.length === 0
    ) {

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


    filteredProducts.forEach(
        product => {

            const card =
                document.createElement(
                    "article"
                );


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

                    <span class="product-badge">
                        ${product.badge}
                    </span>

                </div>


                <div class="product-info">

                    <span class="product-category">
                        ${getCategoryName(
                            product.category
                        )}
                    </span>


                    <h3 class="product-name">
                        ${product.name}
                    </h3>


                    <p class="product-description">
                        ${product.description}
                    </p>


                    <div class="product-bottom">

                        <strong class="product-price">
                            ${formatPrice(
                                product.price
                            )}
                        </strong>


                        <div class="product-actions">

                            <button
                                class="details-btn"
                                data-details-id="${product.id}"
                            >
                                👁️ Détails
                            </button>


                            <button
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


            productsGrid.appendChild(card);

        }
    );


    /*
       Boutons Ajouter au panier
    */

    document
        .querySelectorAll(".add-cart")
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


    /*
       Boutons Détails
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

                    openProductDetails(id);

                }
            );

        });

}


/* =========================================================
   MODALE DÉTAILS PRODUIT
   ========================================================= */

function createProductDetailsModal() {

    if (
        document.getElementById(
            "productDetailsModal"
        )
    ) {

        return;

    }


    const modal =
        document.createElement("div");


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
                    id="closeProductDetailsBtn"
                    aria-label="Fermer"
                >
                    ×
                </button>


                <div
                    id="productDetailsContent"
                    class="product-details-content"
                ></div>

            </div>

        </div>

    `;


    document.body.appendChild(modal);


    const overlay =
        document.getElementById(
            "productDetailsOverlay"
        );


    const closeButton =
        document.getElementById(
            "closeProductDetailsBtn"
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

}


/* =========================================================
   OUVRIR DÉTAILS
   ========================================================= */

function openProductDetails(productId) {

    const product =
        products.find(
            item =>
                item.id === productId
        );


    if (!product) {

        return;

    }


    selectedProduct =
        product;


    createProductDetailsModal();


    const modal =
        document.getElementById(
            "productDetailsModal"
        );


    const content =
        document.getElementById(
            "productDetailsContent"
        );


    if (!modal || !content) {

        return;

    }


    let specsHTML = "";


    if (
        product.specs &&
        typeof product.specs === "object"
    ) {

        specsHTML = Object.entries(
            product.specs
        )
            .map(
                ([key, value]) => `

                    <div class="spec-row">

                        <span>
                            ${key}
                        </span>

                        <strong>
                            ${value}
                        </strong>

                    </div>

                `
            )
            .join("");

    }


    content.innerHTML = `

        <div class="product-details-image">

            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="
                    this.src='https://placehold.co/800x800/f3f4f6/111827?text=WENDK+SHOP'
                "
            >

        </div>


        <div class="product-details-info">

            <span class="product-category">
                ${getCategoryName(
                    product.category
                )}
            </span>


            <h2>
                ${product.name}
            </h2>


            <div class="product-details-price">
                ${formatPrice(
                    product.price
                )}
            </div>


            <p>
                ${product.description}
            </p>


            ${
                specsHTML
                ? `
                    <h3>
                        📋 Fiche technique
                    </h3>

                    <div class="specifications">
                        ${specsHTML}
                    </div>
                `
                : ""
            }


            <button
                class="btn btn-whatsapp"
                id="detailsAddCartBtn"
            >
                🛒 Ajouter au panier
            </button>

        </div>

    `;


    modal.classList.add("open");


    const addButton =
        document.getElementById(
            "detailsAddCartBtn"
        );


    if (addButton) {

        addButton.addEventListener(
            "click",
            () => {

                addToCart(product.id);

                closeProductDetails();

                openCart();

            }
        );

    }

}


/* =========================================================
   FERMER DÉTAILS
   ========================================================= */

function closeProductDetails() {

    const modal =
        document.getElementById(
            "productDetailsModal"
        );


    if (modal) {

        modal.classList.remove(
            "open"
        );

    }


    selectedProduct =
        null;

}


/* =========================================================
   FIN DU BLOC 2
   ========================================================= */

