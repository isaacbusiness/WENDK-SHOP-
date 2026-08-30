/* =========================================================
   WENDK SHOP
   ADMIN.JS
   ========================================================= */

const SUPABASE_URL =
    "https://peytqrampgxvqdzygxnc.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_atQoFNjWTz8MxT81vg2QGQ_iO4_giOb";


/* =========================================================
   SUPABASE HEADERS
   ========================================================= */

function getHeaders() {

    return {
        "apikey": SUPABASE_KEY,
        "Authorization":
            `Bearer ${SUPABASE_KEY}`,
        "Content-Type":
            "application/json"
    };

}


/* =========================================================
   DOM
   ========================================================= */

const loginScreen =
    document.getElementById("loginScreen");

const dashboard =
    document.getElementById("dashboard");

const loginForm =
    document.getElementById("loginForm");

const loginEmail =
    document.getElementById("loginEmail");

const loginPassword =
    document.getElementById("loginPassword");

const loginBtn =
    document.getElementById("loginBtn");

const loginError =
    document.getElementById("loginError");

const logoutBtn =
    document.getElementById("logoutBtn");

const refreshBtn =
    document.getElementById("refreshBtn");

const loading =
    document.getElementById("loading");

const ordersContainer =
    document.getElementById("ordersContainer");

const emptyOrders =
    document.getElementById("emptyOrders");

const totalOrders =
    document.getElementById("totalOrders");

const newOrders =
    document.getElementById("newOrders");

const totalRevenue =
    document.getElementById("totalRevenue");


/* =========================================================
   SESSION
   ========================================================= */

let accessToken =
    localStorage.getItem("wendkAdminToken") || null;


/* =========================================================
   FORMAT PRIX
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("fr-FR")
        .format(Number(price) || 0)
        + " FCFA";

}


/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatDate(date) {

    if (!date) return "Date inconnue";

    return new Intl.DateTimeFormat(
        "fr-FR",
        {
            dateStyle: "medium",
            timeStyle: "short"
        }
    ).format(new Date(date));

}


/* =========================================================
   AFFICHER ERREUR
   ========================================================= */

function showLoginError(message) {

    loginError.textContent = message;

}


/* =========================================================
   CONNEXION SUPABASE
   ========================================================= */

async function login(email, password) {

    loginBtn.disabled = true;

    loginBtn.textContent =
        "⏳ Connexion...";

    showLoginError("");

    try {

        const response = await fetch(
            `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
            {
                method: "POST",

                headers: {
                    "apikey": SUPABASE_KEY,
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data?.error_description ||
                data?.msg ||
                data?.message ||
                "Email ou mot de passe incorrect."
            );

        }


        accessToken =
            data.access_token;


        localStorage.setItem(
            "wendkAdminToken",
            accessToken
        );


        showDashboard();

        await loadOrders();

    } catch (error) {

        console.error(error);

        showLoginError(
            error.message ||
            "Impossible de se connecter."
        );

    } finally {

        loginBtn.disabled = false;

        loginBtn.textContent =
            "🔐 Se connecter";

    }

}


/* =========================================================
   AFFICHER DASHBOARD
   ========================================================= */

function showDashboard() {

    loginScreen.classList.add("hidden");

    dashboard.classList.remove("hidden");

}


/* =========================================================
   AFFICHER LOGIN
   ========================================================= */

function showLogin() {

    dashboard.classList.add("hidden");

    loginScreen.classList.remove("hidden");

}


/* =========================================================
   CHARGER COMMANDES
   ========================================================= */

async function loadOrders() {

    if (!accessToken) return;


    loading.classList.remove("hidden");

    ordersContainer.innerHTML = "";

    emptyOrders.classList.add("hidden");


    try {

        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/orders?select=*&order=created_at.desc`,
            {
                method: "GET",

                headers: {
                    ...getHeaders(),

                    "Authorization":
                        `Bearer ${accessToken}`
                }
            }
        );


        if (response.status === 401) {

            logout();

            return;

        }


        if (!response.ok) {

            const errorText =
                await response.text();

            throw new Error(errorText);

        }


        const orders =
            await response.json();


        updateStats(orders);

        renderOrders(orders);

    } catch (error) {

        console.error(
            "Erreur chargement commandes :",
            error
        );

        ordersContainer.innerHTML = `
            <div class="empty-orders">
                <div>⚠️</div>
                <h3>Erreur de chargement</h3>
                <p>
                    Impossible de récupérer les commandes.
                </p>
            </div>
        `;

    } finally {

        loading.classList.add("hidden");

    }

}


/* =========================================================
   STATISTIQUES
   ========================================================= */

function updateStats(orders) {

    totalOrders.textContent =
        orders.length;


    const newCount =
        orders.filter(order =>
            (order.status || "Nouvelle")
                .toLowerCase() === "nouvelle"
        ).length;


    newOrders.textContent =
        newCount;


    const revenue =
        orders.reduce(
            (total, order) =>
                total +
                Number(order.total || 0),
            0
        );


    totalRevenue.textContent =
        formatPrice(revenue);

}


/* =========================================================
   RENDRE COMMANDES
   ========================================================= */

function renderOrders(orders) {

    if (!orders.length) {

        emptyOrders.classList.remove("hidden");

        return;

    }


    emptyOrders.classList.add("hidden");


    orders.forEach(order => {

        const element =
            document.createElement("article");


        element.className =
            "order-item";


        const status =
            order.status || "Nouvelle";


        element.innerHTML = `

            <div class="order-top">

                <div>

                    <div class="order-number">
                        📦 Commande #${order.id}
                    </div>

                    <div class="order-date">
                        ${formatDate(order.created_at)}
                    </div>

                </div>


                <select
                    class="status-select"
                    data-order-id="${order.id}"
                >

                    <option
                        value="Nouvelle"
                        ${status === "Nouvelle" ? "selected" : ""}
                    >
                        🆕 Nouvelle
                    </option>

                    <option
                        value="Confirmée"
                        ${status === "Confirmée" ? "selected" : ""}
                    >
                        ✅ Confirmée
                    </option>

                    <option
                        value="Livrée"
                        ${status === "Livrée" ? "selected" : ""}
                    >
                        🚚 Livrée
                    </option>

                    <option
                        value="Annulée"
                        ${status === "Annulée" ? "selected" : ""}
                    >
                        ❌ Annulée
                    </option>

                </select>

            </div>


            <div class="order-info">

                <div class="info-box">

                    <span>
                        CLIENT
                    </span>

                    <strong>
                        ${escapeHTML(
                            order.customer_name ||
                            "Non renseigné"
                        )}
                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        TÉLÉPHONE
                    </span>

                    <strong>
                        ${escapeHTML(
                            order.customer_phone ||
                            "Non renseigné"
                        )}
                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        ADRESSE
                    </span>

                    <strong>
                        ${escapeHTML(
                            order.address ||
                            "Non renseignée"
                        )}
                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        TOTAL
                    </span>

                    <strong>
                        ${formatPrice(order.total)}
                    </strong>

                </div>

            </div>


            <div class="order-products">

                <h4>
                    🛍️ Produits
                </h4>

                <div class="products-list">

                    ${renderOrderItems(order.items)}

                </div>

            </div>


            <div class="order-bottom">

                <span>
                    Statut actuel :
                </span>

                <strong>
                    ${escapeHTML(status)}
                </strong>

            </div>

        `;


        ordersContainer.appendChild(element);

    });


    document
        .querySelectorAll(".status-select")
        .forEach(select => {

            select.addEventListener(
                "change",
                async () => {

                    const orderId =
                        select.dataset.orderId;

                    const newStatus =
                        select.value;

                    await updateOrderStatus(
                        orderId,
                        newStatus
                    );

                }
            );

        });

}


/* =========================================================
   AFFICHER PRODUITS COMMANDE
   ========================================================= */

function renderOrderItems(items) {

    if (!items) {

        return `
            <p>
                Produits non détaillés.
            </p>
        `;

    }


    let parsedItems = items;


    if (typeof items === "string") {

        try {

            parsedItems =
                JSON.parse(items);

        } catch {

            return `
                <p>
                    ${escapeHTML(items)}
                </p>
            `;

        }

    }


    if (!Array.isArray(parsedItems)) {

        return `
            <p>
                Détails indisponibles.
            </p>
        `;

    }


    return parsedItems.map(item => {

        const name =
            item.name ||
            item.product_name ||
            "Produit";


        const quantity =
            item.quantity || 1;


        const price =
            item.price ||
            item.subtotal ||
            0;


        return `

            <div class="product-line">

                <span>
                    ${escapeHTML(name)}
                    × ${quantity}
                </span>

                <strong>
                    ${formatPrice(price)}
                </strong>

            </div>

        `;

    }).join("");

}


/* =========================================================
   MODIFIER STATUT
   ========================================================= */

async function updateOrderStatus(
    orderId,
    status
) {

    try {

        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/orders?id=eq.${encodeURIComponent(orderId)}`,
            {
                method: "PATCH",

                headers: {
                    ...getHeaders(),

                    "Authorization":
                        `Bearer ${accessToken}`,

                    "Prefer":
                        "return=representation"
                },

                body: JSON.stringify({
                    status: status
                })
            }
        );


        if (!response.ok) {

            const errorText =
                await response.text();

            throw new Error(errorText);

        }


        await loadOrders();

    } catch (error) {

        console.error(error);

        alert(
            "Impossible de modifier le statut de la commande."
        );

    }

}


/* =========================================================
   SÉCURITÉ AFFICHAGE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   DÉCONNEXION
   ========================================================= */

function logout() {

    accessToken = null;

    localStorage.removeItem(
        "wendkAdminToken"
    );

    ordersContainer.innerHTML = "";

    showLogin();

}


/* =========================================================
   ÉVÉNEMENTS
   ========================================================= */

loginForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        login(
            loginEmail.value.trim(),
            loginPassword.value
        );

    }
);


logoutBtn.addEventListener(
    "click",
    logout
);


refreshBtn.addEventListener(
    "click",
    loadOrders
);


/* =========================================================
   INITIALISATION
   ========================================================= */

async function init() {

    if (!accessToken) {

        showLogin();

        return;

    }


    showDashboard();

    await loadOrders();

}


init();
