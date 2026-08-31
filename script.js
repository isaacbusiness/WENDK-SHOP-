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
