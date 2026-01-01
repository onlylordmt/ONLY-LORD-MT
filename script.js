// Número de WhatsApp
const WHATSAPP_NUMBER = "59162276138";

// CARRITO
let cart = [];

// Añadir producto al carrito (solo 1 unidad por producto)
function addToCart(name, price) {
    if(!cart.find(p => p.name === name)) {
        cart.push({name, price});
        alert(`Producto "${name}" agregado ✅`);
    } else {
        alert(`Producto "${name}" ya está en el carrito`);
    }
    renderCart();
}

// ABRIR MODAL CARRITO
const cartModal = document.getElementById("cartModal");
function openCart() {
    cartModal.style.display = "flex";
    renderCart();
}

// CERRAR MODAL CARRITO
function closeCart() {
    cartModal.style.display = "none";
}

// RENDERIZAR CARRITO
function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;

    if(cart.length === 0) {
        cartItems.innerHTML = "<p>El carrito está vacío</p>";
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            const div = document.createElement("div");
            div.classList.add("cart-item");
            div.style.display = "flex";
            div.style.justifyContent = "space-between";
            div.style.alignItems = "center";
            div.style.margin = "12px 0";
            div.innerHTML = `
                <span>${item.name} - $${item.price}</span>
                <button onclick="removeCart(${index})" style="background:#2a2b6e;color:#fff;border:none;padding:5px 10px;border-radius:6px;cursor:pointer;">Eliminar</button>
            `;
            cartItems.appendChild(div);
        });
    }

    totalEl.textContent = `$${total}`;
}

// REMOVER PRODUCTO DEL CARRITO
function removeCart(index) {
    cart.splice(index,1);
    renderCart();
}

// CHECKOUT -> WhatsApp
function checkoutCart() {
    if(cart.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    const name = document.getElementById("client-name").value;
    const email = document.getElementById("client-email").value;
    const country = document.getElementById("client-country").value;
    const city = document.getElementById("client-city").value;
    const payment = document.getElementById("client-payment").value;

    if(!name || !email || !country || !city || !payment) {
        alert("Por favor completa todos los datos");
        return;
    }

    let msg = `Hola, quiero comprar:\nProductos:\n`;
    cart.forEach(p => msg += `- ${p.name}\n`);
    msg += `Total: $${cart.reduce((a,b)=>a+b.price,0)}\n`;
    msg += `Datos del cliente:\nNombre: ${name}\nCorreo: ${email}\nPaís: ${country}\nCiudad: ${city}\nMétodo de pago elegido: ${payment}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// DEMO TRIANGULO BLANCO
const previewModal = document.getElementById("previewModal");
const previewIframe = document.getElementById("preview-iframe");

function openPreview(videoID) {
    previewModal.style.display = "flex";
    previewIframe.src = `https://www.youtube.com/embed/${videoID}`;
}

function closePreview() {
    previewModal.style.display = "none";
    previewIframe.src = "";
}

// MULTITRACK PERSONALIZADO
function sendCustomForm() {
    const tema = document.getElementById("custom-name").value;
    const artista = document.getElementById("custom-artist").value;
    const video = document.getElementById("custom-video").value;
    const detalles = document.getElementById("custom-details").value;

    if(!tema || !artista || !video) {
        alert("Por favor completa los campos obligatorios: Tema, Artista y Link de video.");
        return;
    }

    let msg = `Hola, quiero un multitrack personalizado:\nTema: ${tema}\nArtista: ${artista}\nLink de video de referencia: ${video}\nDatos extra: ${detalles}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// CERRAR MODALES AL HACER CLICK FUERA
window.onclick = function(e) {
    if(e.target === previewModal) closePreview();
    if(e.target === cartModal) closeCart();
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.onclick = function(e) {
        e.preventDefault();
        document.querySelector(a.getAttribute("href")).scrollIntoView({behavior: "smooth"});
    }
});

// HEADER SCROLL EFFECT (opcional si quieres mantenerlo)
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
