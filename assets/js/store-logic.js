/* ==========================================================================
   ONLY LORD - Motor Arquitectónico Central v4.0 (store-logic.js)
   ========================================================================== */

const MI_TELEFONO_WHATSAPP = "59162276138";
const CODIGOS_DESCUENTO = {
    "ONLYLORD": 10,
    "PROPOSITO": 15
};

const PLAYLIST_CURSOS_YT = "https://youtube.com/playlist?list=PLWw6Mm4O7Oz0&si=hoE38sSsruOortGy";
const PLAYLIST_MULTITRACKS_GRATIS_YT = "https://youtube.com/playlist?list=PLCxE4itUOy5CQJ_Qdf617buH2ZrT6sWKA&si=XgAgkO-yx8VmDD70";

const LIBRERIA_MULTITRACKS = [
    { id: "intro-yeshua-hamashiaj", titulo: "INTRO + YESHUA HAMASHIAJ", artista: "MONTE SANTO EN CONCIERTO", precio: 15, ytId: "P6edqId1N48", acorde: "Mib Menor", tempo: "140 bpm", cantidadTracks: 15, pesoTrack: "83 Mb", sampleRate: "44.1 kHz", tags: ["intro", "worship", "live", "monte santo"], stems: ["AC", "Bass", "Choir", "Click Track", "Drums Live", "EG 1 – 4", "Guia", "Fx & Loop", "Keys 1 y 2", "Orq", "Piano"] },
    { id: "en-los-montes", titulo: "EN LOS MONTES LEGADO", artista: "MARCOS WITT", precio: 15, ytId: "zGiTsZVtQ9A", acorde: "Re Menor", tempo: "116 bpm", cantidadTracks: 26, pesoTrack: "102 Mb", sampleRate: "44.1 kHz", tags: ["clasico", "rock", "worship", "brass"], stems: ["Arp Bells", "Bass", "Clap", "Click Track", "Drop 1 y 2", "Drums Live", "Dubstep Drop", "EG 1, 2 y 3", "Fx", "Guia", "Metales", "Pads", "Percusion", "Pluck 1, 2 y 3", "Synth 1, 2 y 3", "Synth Bass 1 y 2", "Vox"] },
    { id: "intro-lion", titulo: "INTRO LION", artista: "BRANDON LAKE", precio: 15, ytId: "NHieltD_310", acorde: "Re Menor", tempo: "134 bpm", cantidadTracks: 15, pesoTrack: "28 Mb", sampleRate: "44.1 kHz", tags: ["intro", "worship", "synth", "live"], stems: ["AC", "Bass", "Click Track", "Drums Live", "EG 1 y 2", "Guia", "Keys 1, 2 y 3", "Loop y Fx", "Piano", "Synth Bass 1 y 2", "Vox"] },
    { id: "intro-concierto", titulo: "INTRO CONCIERTO", artista: "MONTE SANTO", precio: 15, ytId: "BQFtmlfKr0Y", acorde: "Re Mayor", tempo: "134 bpm", cantidadTracks: 15, pesoTrack: "22 Mb", sampleRate: "44.1 kHz", tags: ["intro", "worship", "keys", "strings"], stems: ["Bass", "Click Track", "Drums", "EG 1, 2 y 3", "Guia", "Keys 1 y 2", "Loop y Fx", "Pad", "Percusion", "Piano", "Strings"] },
    { id: "venga-tu-reino", titulo: "VENGA TU REINO", artista: "HILLSONG / ONLY LORD", precio: 15, ytId: "ipMtyBpOgSU", acorde: "Si Menor", tempo: "150 bpm", cantidadTracks: 15, pesoTrack: "75 Mb", sampleRate: "44.1 kHz", tags: ["worship", "hillsong", "live", "strings"], stems: ["Arp", "Bass", "Bells", "Click Track", "Drums Live", "EG 1 y 2", "Fx", "Keys", "Guia", "Piano", "Strings", "Synth Bass", "Voz", "Vox"] },
    { id: "medley-eres-fiel-ag", titulo: "MEDLEY ERES FIEL", artista: "AG MUSIC", precio: 30, ytId: "pp6rCjdzHGQ", acorde: "Variable", tempo: "Variable", cantidadTracks: 18, pesoTrack: "193 Mb", sampleRate: "44.1 kHz", tags: ["medley", "worship", "guitarras", "mix"], stems: ["Arp", "Bass", "Bells", "Click Track", "Drums Live", "EG 1 y 2", "Guia", "Fx & Loop", "Keys 1 y 2", "Lead", "Pad", "Piano", "Synth Bass", "Vox", "Voz Guia"] },
    { id: "cantaremos", titulo: "CANTAREMOS DE TU GRAN AMOR", artista: "BARAK / ONLY LORD", precio: 15, ytId: "QQS3hc00RK4", acorde: "Sol Menor", tempo: "142 bpm", cantidadTracks: 20, pesoTrack: "79.3 Mb", sampleRate: "44.1 kHz", tags: ["worship", "adoracion", "live", "brass"], stems: ["Arp 1 y 2", "Bass", "Brass", "Click Track", "Drop", "Drums Live", "EG 1 y 2", "Fx", "Guia", "Lead 1 y 2", "Loop", "Pads", "Pluck", "Synth", "Synth Bass", "Vox 1 y 2"] },
    { id: "hay-libertad-remix", titulo: "HAY LIBERTAD REMIX", artista: "ART AGUILERA / ONLY LORD", precio: 15, ytId: "9h0NwcsWMNE", acorde: "Re Menor", tempo: "150 bpm", cantidadTracks: 22, pesoTrack: "67 Mb", sampleRate: "44.1 kHz", tags: ["remix", "edm", "electro", "dance"], stems: ["Arp", "Bass", "Click Track", "Coros", "Drums Live", "EG 1 y 2", "EG AC", "Fx", "Guia", "Keys", "Pad 1 y 2", "Lead 1 y 2", "Piano", "Pluck", "Synth", "Synth Bass", "Vox"] },
    { id: "mix-naciones", titulo: "MIX NACIONES", artista: "NEW WINE", precio: 25, ytId: "CdCnEwtuaTU", acorde: "Variable", tempo: "Variable", cantidadTracks: 15, pesoTrack: "160 Mb", sampleRate: "44.1 kHz", tags: ["medley", "worship", "brass", "live"], stems: ["Arp", "Acordeon", "Bass", "Brass", "Click Track", "Drums Live", "EG 1 y 2", "EG AC", "Guia", "Pad", "Percussion", "Piano", "Sax", "Violin"] },
    { id: "salmos-99", titulo: "SALMOS 99", artista: "NEW WINE", precio: 15, ytId: "EiE_1wigCRU", acorde: "La Menor", tempo: "135 bpm", cantidadTracks: 11, pesoTrack: "52 Mb", sampleRate: "44.1 kHz", tags: ["worship", "brass", "live", "piano"], stems: ["Brass", "Bass", "Click Track", "Drums Live", "EG 1 y 2", "Fx", "Guia", "Lead", "Percusion", "Piano"] },
    { id: "remolino", titulo: "REMOLINO", artista: "NEW WINE", precio: 15, ytId: "WLNGleSSh2M", acorde: "Sol Menor", tempo: "172 bpm", cantidadTracks: 14, pesoTrack: "56 Mb", sampleRate: "44.1 kHz", tags: ["worship", "jubilo", "brass", "live"], stems: ["Brass", "Bass", "Click Track", "Drums Live", "EG 1 y 2", "EG AC", "Fx", "Guia", "Keys", "Lead", "Loop", "Pluck", "Strings"] },
    { id: "salmos-133", titulo: "SALMOS 133 / SOBRENATURAL", artista: "NEW WINE", precio: 20, ytId: "b5d5j3CW6Vo", acorde: "Variable", tempo: "Variable", cantidadTracks: 17, pesoTrack: "96 Mb", sampleRate: "44.1 kHz", tags: ["worship", "medley", "brass", "live"], stems: ["AC", "Bass", "Brass", "Click Track", "Coros", "Drums Live", "EG", "Guiro", "Guia", "Keys 1 y 2", "Percusion", "Piano", "Sax", "Trompetas", "Voz"] },
    { id: "lo-que-dios-dice", titulo: "LO QUE DIOS DICE QUE SOY", artista: "ADORACION IGLESIA CRISTIANA", precio: 15, ytId: "w_LFCopstUk", acorde: "Fa# Mayor", tempo: "105 bpm", cantidadTracks: 12, pesoTrack: "61 Mb", sampleRate: "44.1 kHz", tags: ["worship", "soft", "strings", "piano"], stems: ["Arp", "Bass", "Brass", "Click Track", "Drums Live", "EG 1 y 2", "Guia", "Loop", "Piano", "Strings", "Voz"] },
    { id: "alma-mia", titulo: "ALMA MIA", artista: "DENICHER POL", precio: 15, ytId: "4TulfAu8AeU", acorde: "Fa Mayor", tempo: "130 bpm", cantidadTracks: 17, pesoTrack: "192 Mb", sampleRate: "44.1 kHz", tags: ["worship", "orquestal", "piano", "strings"], stems: ["Arp Strings", "Arp", "Bass", "Bells", "Brass cinematic", "Click Track", "Drums Live", "EG AC", "EG", "Fx", "Guia", "Pad", "Piano", "Strings Bass", "Strings", "Violines 1 y 2"] },
    { id: "medley-ii", titulo: "MEDLEY II", artista: "AG MUSIC", precio: 25, ytId: "4iGNPJgOOIw", acorde: "Variable", tempo: "Variable", cantidadTracks: 20, pesoTrack: "171 Mb", sampleRate: "44.1 kHz", tags: ["medley", "worship", "guitarras", "mix"], stems: ["Arp", "Bass", "Bells", "Click Track", "Drums Live", "EG 1, 2 y 3", "EG Amb", "EG Clean", "EG Mute", "Guia", "Keys", "Loop", "Organ", "Piano", "Pluck", "Strings", "Synth", "Voz"] },
    { id: "medley-celebra", titulo: "MEDLEY CELEBRA VICTORIOSO", artista: "BRIMMER / ONLY LORD", precio: 33, ytId: "R52eoZr_sWg", acorde: "Variable", tempo: "Variable", cantidadTracks: 23, pesoTrack: "232 Mb", sampleRate: "44.1 kHz", tags: ["medley", "jubilo", "worship", "brass"], stems: ["Bass", "Brass", "Click Track", "Drums Live", "EG 1 - 6", "Fx", "Keys 1, 2, 3 y 4", "Guia", "Loop y Percusion", "Pad", "Piano", "Pluck", "Synth Lead", "Synth Bass", "Violin"] },
    { id: "fiesta-desierto-remix", titulo: "FIESTA EN EL DESIERTO REMIX", artista: "MONTE SANTO / WORSHIP BAND LIVE & ARTURY PEPPER", precio: 15, ytId: "_LnW2izFevI", acorde: "Do# Menor", tempo: "125-140 bpm", cantidadTracks: 27, pesoTrack: "76 Mb", sampleRate: "44.1 kHz", tags: ["remix", "worship", "live", "monte santo"], stems: ["Bass", "Bells", "Arp", "BGVS", "Click Track", "Choir 1 y 2", "Drums Live", "EG 1 – 5", "Guia", "Fx", "Keys 1 - 3", "Loop", "Piano", "Pad 1 y 2", "Strings", "Synth 1 - 4", "Voz"] },
    { id: "estoy-convencido", titulo: "ESTOY CONVENCIDO", artista: "AVERLY MORRILLO / WORSHIP BAND LIVE", precio: 9, ytId: "OscK7rdACjc", acorde: "Mi Mayor", tempo: "127 bpm (6/4)", cantidadTracks: 16, pesoTrack: "75 Mb", sampleRate: "44.1 kHz", tags: ["worship", "balada", "live", "strings"], stems: ["Arp", "Bass", "Bells", "Click Track", "Drums Live", "EG", "EG AC", "Fx", "Keys", "Guia", "Pad 1 y 2", "Piano", "Strings", "Synth 1 y 2"] },
    { id: "intro-nuestro-dios", titulo: "INTRO + NUESTRO DIOS", artista: "MARCO BARRIENTOS", precio: 17, ytId: "14eRH7z7lg4", acorde: "Sol Menor", tempo: "144 bpm", cantidadTracks: 17, pesoTrack: "105 Mb", sampleRate: "44.1 kHz", tags: ["intro", "worship", "rock", "synth"], stems: ["Arp 1 y 2", "Bass", "Bells", "Click Track", "Drums Live", "EG 1, 2 y 3", "Fx", "Guia", "Keys", "Loop", "Pad 1 y 2", "Synth Bass", "Synth"] },
    { id: "padre-bueno", titulo: "PADRE BUENO", artista: "ALEX MARQUEZ", precio: 15, ytId: "jD81VUqcRBE", acorde: "Sol Mayor", tempo: "132 bpm", cantidadTracks: 17, pesoTrack: "200 Mb", sampleRate: "48.1 kHz", tags: ["worship", "soft", "strings", "choir"], stems: ["Arp", "Bass", "Bells", "Cello", "Choir", "Click Track", "Drums Live", "EG", "EG AC", "EG Mute", "Guia", "Fx", "Keys", "Pad 1 y 2", "Piano", "Violines"] },
    { id: "intro-tu-hijo-soy", titulo: "INTRO TU HIJO SOY", artista: "BARAK LIVE / DAVID NOLASCO", precio: 15, ytId: "RjpYd6R5msg", acorde: "Fa# Menor", tempo: "134 bpm", cantidadTracks: 26, pesoTrack: "162 Mb", sampleRate: "44.1 kHz", tags: ["intro", "worship", "live", "choir"], stems: ["Alto 1 y 2", "Arp 1 y 2", "BGVS 1 y 2", "Choir", "Click Track", "Drums Live", "EG 1, 2 y 3", "Guia", "Keys 1 – 4", "Organ", "Percusion", "Piano", "Synth Bass 1 y 2", "Synth Orq", "Tenor", "Vox Fx 1 y 2"] },
    { id: "salvador", titulo: "SALVADOR", artista: "LA HORMIGA", precio: 9, ytId: "qTNHdnxHd-o", acorde: "Sol Menor", tempo: "118 bpm", cantidadTracks: 12, pesoTrack: "45 Mb", sampleRate: "44.1 kHz", tags: ["rock", "worship", "organ", "live"], stems: ["Bass", "Brass", "Click Track", "Drums Live", "EG 1 y 2", "Guia", "Keys", "Organ", "Fx", "Voz", "Loop"] },
    { id: "medley-eres-fiel", titulo: "MEDLEY ERES FIEL", artista: "JORGE PRIVADO", precio: 15, ytId: "ltq4ewmC9aE", acorde: "Variable", tempo: "Variable", cantidadTracks: 13, pesoTrack: "150 Mb", sampleRate: "44.1 kHz", tags: ["medley", "worship", "organ", "rock"], stems: ["Bass", "Brass", "Click Track", "EG 1, 2 y 3", "Guia", "Keys 1 y 2", "Loop", "Piano", "Organ", "Synth Bass"] },
    { id: "cuando-conoci", titulo: "CUANDO YO TE CONOCI", artista: "ALEX ZURDO / GENERACION PENTECOSTAL", precio: 5, ytId: "LnJCi9AvAbE", acorde: "Variable", tempo: "90 bpm", cantidadTracks: 22, pesoTrack: "61 Mb", sampleRate: "44.1 kHz", tags: ["pop", "urban", "worship", "guitarras"], stems: ["Bass", "Click Track", "Drums Live", "EG 1 – 4", "EG AC 1 - 3", "Guia", "Keys 1 - 3", "Loop", "Piano", "Pad", "Synth Bass", "Voz"] },
    { id: "con-poder", titulo: "CON PODER", artista: "BARAK LIVE / DAVID NOLASCO", precio: 9, ytId: "vVI-M39MZdw", acorde: "Si Menor", tempo: "75 bpm", cantidadTracks: 18, pesoTrack: "103 Mb", sampleRate: "44.1 kHz", tags: ["worship", "live", "rock", "pads"], stems: ["Bass", "Arp", "BGVS", "Click Track", "Drums Live", "EG 1 – 6", "Guia", "Fx", "Keys", "Piano", "Pad", "Voz"] },
    { id: "hosanna-remix", titulo: "HOSANNA REMIX", artista: "MARCOS BARRIENTOS", precio: 5, ytId: "1HMqnlELzD0", acorde: "Si Menor", tempo: "146 bpm", cantidadTracks: 21, pesoTrack: "98 Mb", sampleRate: "44.1 kHz", tags: ["remix", "worship", "edm", "live"], stems: ["Bass", "Arp", "BGVS", "Click Track", "Drums Live", "EG 1 – 4", "Guia", "Fx", "Keys", "Loop", "Piano", "Pad 1 y 2", "Strings", "Synth 1 - 4", "Voz"] }
];

function obtenerPrecioItem(item) {
    if (item.precio != null) return item.precio;
    const track = LIBRERIA_MULTITRACKS.find(t => t.id === item.id);
    return track ? track.precio : 0;
}

function calcularTotalesCarrito(carrito, codigoDescuento) {
    const subtotal = carrito.reduce((sum, item) => sum + obtenerPrecioItem(item), 0);
    const codigoNormalizado = codigoDescuento.trim().toUpperCase();
    const porcentajeDescuento = CODIGOS_DESCUENTO[codigoNormalizado] || 0;
    const codigoValido = porcentajeDescuento > 0;
    const descuento = codigoValido ? subtotal * (porcentajeDescuento / 100) : 0;
    const total = subtotal - descuento;
    return { subtotal, descuento, total, codigoValido, porcentajeDescuento };
}

function formatearPrecioUSD(monto) {
    return `$${monto.toFixed(2)} USD`;
}

const LIBRERIA_SONIDOS = [
    { id: "s1", titulo: "LOOPS DRUMPADS", icon: "fa-drum", desc: "Secuencias rítmicas, loops de percusión y ambientes rítmicos Worship listos para tus shows." },
    { id: "s2", titulo: "KONTAKT LIBRARIES", icon: "fa-keyboard", desc: "Muestreos avanzados de pianos acústicos, sintetizadores analógicos y vientos con máxima articulación." },
    { id: "s3", titulo: "PLUGINS / VSTi", icon: "fa-plug", desc: "Herramientas virtuales de procesamiento de señal, ecualizadores y generadores armónicos de estudio." },
    { id: "s4", titulo: "PRESET GUITAR", icon: "fa-guitar", desc: "Cadenas de efectos y emulaciones de amplificadores exclusivas para procesadores Nux MG-300 / MG-400." },
    { id: "s5", titulo: "PRESET BAJO", icon: "fa-sliders-h", desc: "Configuraciones exclusivas de compresión y saturación analógica para líneas de bajo gordas de directo." },
    { id: "s6", titulo: "VST FULL", icon: "fa-compact-disc", desc: "Instrumentos virtuales y sintetizadores completos optimizados para la carga ligera en memoria RAM." }
];

const LIBRERIA_RECURSOS_GRATIS = [
    { id: "rg1", titulo: "MULTITRACKS GRATIS", icon: "fa-gift", desc: "En esta playlist de YouTube subiré multitracks gratuitos. Suscríbete a nuestro canal: en cada video encontrarás el enlace de descarga directa.", link: PLAYLIST_MULTITRACKS_GRATIS_YT, linkLabel: "Ver Playlist en YouTube" },
    { id: "rg2", titulo: "PLUGINS GRATIS", icon: "fa-plug", desc: "Herramientas y utilidades de mezcla digitales libres de licencias y completamente estables para directo." },
    { id: "rg3", titulo: "VST GRATIS", icon: "fa-keyboard", desc: "Sintetizadores e instrumentos virtuales libres optimizados para un bajo consumo de procesamiento." },
    { id: "rg4", titulo: "DAW GRATIS", icon: "fa-laptop-house", desc: "Estaciones de trabajo de audio digital y secuenciadores libres ideales para lanzar tus pistas en vivo." }
];

document.addEventListener("DOMContentLoaded", () => {
    inicializarCarritoHeader();
    actualizarContadorMenu();

    const gridMultitracks = document.getElementById("catalog-grid-container");
    if (gridMultitracks) {
        renderizarTarjetasTienda(LIBRERIA_MULTITRACKS);
        configurarBuscadorTags();
    }

    if (document.getElementById("detail-track-title")) {
        cargarDatosEnElMoldeDetalle();
    }

    if (document.getElementById("contenedor-sonidos-venta")) {
        renderizarMódulosSonidos();
    }

    if (document.getElementById("contenedor-recursos-gratis")) {
        renderizarMódulosRecursosGratis();
    }

    if (document.querySelector(".accordion-toggle")) {
        configurarAcordeonesSoporte();
    }

    const formPedido = document.getElementById("form-pedido-personalizado");
    if (formPedido) {
        formPedido.addEventListener("submit", procesarPedidoPersonalizado);
    }

    if (document.getElementById("lista-carrito-productos")) {
        renderizarPaginaCarrito();
    }
});

function inicializarCarritoHeader() {
    document.querySelectorAll("#header nav").forEach(nav => {
        if (nav.querySelector(".header-cart-link")) return;
        const cartLink = document.createElement("a");
        cartLink.href = "carrito.html";
        cartLink.className = "header-cart-link";
        cartLink.setAttribute("aria-label", "Ir al carrito");
        cartLink.innerHTML = '<span class="icon solid fa-shopping-cart"></span><span class="header-cart-count cart-counter-nav">0</span>';
        const menuLink = nav.querySelector('a[href="#menu"]');
        if (menuLink) {
            nav.insertBefore(cartLink, menuLink);
        } else {
            nav.appendChild(cartLink);
        }
    });
}

function renderizarTarjetasTienda(lista) {
    const contenedorGrid = document.getElementById("catalog-grid-container");
    const mensajeNoResultados = document.getElementById("no-results-message");
    if (!contenedorGrid) return;

    contenedorGrid.innerHTML = "";
    if (lista.length === 0) {
        if (mensajeNoResultados) mensajeNoResultados.style.display = "block";
        return;
    }
    if (mensajeNoResultados) mensajeNoResultados.style.display = "none";

    lista.forEach((track, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "track-card";
        tarjeta.style.opacity = "0";
        tarjeta.style.transform = "translateY(15px)";
        tarjeta.style.transition = `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.03}s`;
        tarjeta.style.cursor = "pointer";
        tarjeta.setAttribute("role", "link");
        tarjeta.setAttribute("tabindex", "0");
        tarjeta.setAttribute("aria-label", `Ver detalles de ${track.titulo}`);

        const imgUrl = `https://img.youtube.com/vi/${track.ytId}/hqdefault.jpg`;

        tarjeta.innerHTML = `
            <div class="track-thumbnail-wrapper">
                <img src="${imgUrl}" alt="${track.titulo}" loading="lazy" />
                <div class="track-thumbnail-overlay">
                    <span class="icon solid fa-play"></span>
                    <span class="overlay-text">Ver Detalles</span>
                </div>
            </div>
            <div class="track-card-body">
                <div class="track-card-info">
                    <h3>${track.titulo}</h3>
                    <span class="artist">${track.artista}</span>
                    <span class="track-price-tag">${formatearPrecioUSD(track.precio)}</span>
                </div>
                <span class="button btn-card-action">Más Información</span>
            </div>
        `;

        tarjeta.addEventListener("click", () => enviarAlMoldeDetalle(track.id));
        tarjeta.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                enviarAlMoldeDetalle(track.id);
            }
        });

        contenedorGrid.appendChild(tarjeta);

        setTimeout(() => {
            tarjeta.style.opacity = "1";
            tarjeta.style.transform = "translateY(0)";
        }, 50);
    });
}

function enviarAlMoldeDetalle(idTrack) {
    const track = LIBRERIA_MULTITRACKS.find(t => t.id === idTrack);
    if (track) {
        sessionStorage.setItem("multitrack_detalle_actual", JSON.stringify(track));
        window.location.href = "track-details.html";
    }
}

function renderizarMódulosSonidos() {
    const contenedor = document.getElementById("contenedor-sonidos-venta");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    LIBRERIA_SONIDOS.forEach(sonido => {
        const item = document.createElement("div");
        item.className = "coming-soon-card";
        item.style.textAlign = "center";
        item.innerHTML = `
            <i class="fas ${sonido.icon}" style="font-size: 2.5em; margin-bottom: 0.5em; display: block;"></i>
            <h3>${sonido.titulo}</h3>
            <p style="margin-bottom: 1.5em; min-height: 48px;">${sonido.desc}</p>
            <span class="badge-soon">Muy Pronto</span>
        `;
        contenedor.appendChild(item);
    });
}

function renderizarMódulosRecursosGratis() {
    const contenedor = document.getElementById("contenedor-recursos-gratis");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    LIBRERIA_RECURSOS_GRATIS.forEach(recurso => {
        const item = document.createElement("div");
        item.className = "coming-soon-card";
        item.style.textAlign = "center";

        if (recurso.link) {
            item.style.cursor = "pointer";
            item.innerHTML = `
                <i class="fas ${recurso.icon}" style="font-size: 2.5em; margin-bottom: 0.5em; display: block;"></i>
                <h3>${recurso.titulo}</h3>
                <p style="margin-bottom: 1.5em; min-height: 48px;">${recurso.desc}</p>
                <span class="badge-soon" style="background:rgba(255,0,0,0.08); border-color:rgba(255,0,0,0.25); color:#ff4444;">YouTube</span>
            `;
            item.addEventListener("click", () => window.open(recurso.link, "_blank"));
        } else {
            item.innerHTML = `
                <i class="fas ${recurso.icon}" style="font-size: 2.5em; margin-bottom: 0.5em; display: block;"></i>
                <h3>${recurso.titulo}</h3>
                <p style="margin-bottom: 1.5em; min-height: 48px;">${recurso.desc}</p>
                <span class="badge-soon">Muy Pronto</span>
            `;
        }
        contenedor.appendChild(item);
    });
}

function configurarBuscadorTags() {
    const inputBuscador = document.getElementById("track-search");
    if (!inputBuscador) return;

    inputBuscador.addEventListener("input", (e) => {
        const texto = e.target.value.toLowerCase().trim();
        const filtrados = LIBRERIA_MULTITRACKS.filter(track => {
            const coincideTexto = track.titulo.toLowerCase().includes(texto) ||
                                  track.artista.toLowerCase().includes(texto);
            const limpiarTermino = texto.replace("#", "");
            const coincideTags = track.tags && track.tags.some(tag => tag.includes(limpiarTermino));
            return coincideTexto || coincideTags;
        });
        renderizarTarjetasTienda(filtrados);
    });
}

function lanzarNotificacionPremium(mensaje) {
    const viejoToast = document.getElementById("onlylord-toast-alert");
    if (viejoToast) viejoToast.remove();

    const toast = document.createElement("div");
    toast.id = "onlylord-toast-alert";
    toast.style.cssText = "position:fixed;bottom:2em;right:2em;background:var(--onlylord-bg-estudio);border:solid 1px var(--onlylord-accent);padding:1.2em 2em;border-radius:4px;box-shadow:0 10px 30px rgba(0,242,254,0.15);color:#fff;font-family:Raleway,Helvetica,sans-serif;font-size:0.9em;font-weight:700;letter-spacing:0.05em;z-index:99999;opacity:0;transform:translateY(10px);transition:all 0.3s cubic-bezier(0.16,1,0.3,1);";
    toast.innerHTML = `<span class="icon solid fa-check-circle" style="color:var(--onlylord-accent); margin-right:0.8em;"></span> ${mensaje.toUpperCase()}`;
    document.body.appendChild(toast);

    setTimeout(() => { toast.style.opacity = "1"; toast.style.transform = "translateY(0)"; }, 50);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function configurarAcordeonesSoporte() {
    const botonesAcordeon = document.querySelectorAll(".accordion-toggle");

    botonesAcordeon.forEach(boton => {
        boton.addEventListener("click", function() {
            const panel = this.nextElementSibling;
            const isOpen = this.classList.contains("active");

            document.querySelectorAll(".accordion-panel").forEach(p => {
                p.style.maxHeight = null;
                p.style.padding = "0 1.2em";
                p.style.borderWidth = "0";
                p.style.overflowY = "hidden";
                if (p.previousElementSibling) p.previousElementSibling.classList.remove("active");
            });

            if (!isOpen) {
                this.classList.add("active");
                panel.style.borderWidth = "1px";
                panel.style.padding = "1.2em";
                panel.style.overflowY = "auto";
                panel.style.maxHeight = Math.min(panel.scrollHeight + 24, window.innerHeight * 0.55) + "px";
            }
        });
    });
}

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("onlylord_cart")) || [];
}

function actualizarContadorMenu() {
    const carrito = obtenerCarrito();
    document.querySelectorAll(".cart-counter-nav").forEach(el => { el.innerText = carrito.length; });

    document.querySelectorAll("#menu a, .links a").forEach(link => {
        if (link.innerHTML.includes("Mi Carrito")) {
            link.innerHTML = `<span class="icon solid fa-shopping-cart"></span> Mi Carrito (${carrito.length})`;
        }
    });
}

function añadirAlCarritoLocal(id, titulo, categoria, precio) {
    let carrito = obtenerCarrito();
    if (carrito.some(item => item.id === id)) {
        lanzarNotificacionPremium(`"${titulo}" ya está en tu carrito.`);
        return;
    }
    const precioFinal = precio != null ? precio : obtenerPrecioItem({ id });
    carrito.push({ id, titulo, categoria, precio: precioFinal });
    localStorage.setItem("onlylord_cart", JSON.stringify(carrito));
    actualizarContadorMenu();
    lanzarNotificacionPremium(`"${titulo}" añadido al carrito.`);
}

function eliminarDelCarrito(id) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(item => item.id !== id);
    localStorage.setItem("onlylord_cart", JSON.stringify(carrito));
    actualizarContadorMenu();
    renderizarPaginaCarrito();
    lanzarNotificacionPremium("Elemento removido.");
}

function renderizarPaginaCarrito() {
    const contenedorLista = document.getElementById("lista-carrito-productos");
    const contenedorCheckout = document.getElementById("checkout-area-box");
    const resumenTotales = document.getElementById("cart-totals-summary");
    const carrito = obtenerCarrito();
    const inputDescuento = document.getElementById("cart-discount-code");

    if (!contenedorLista) return;
    contenedorLista.innerHTML = "";

    if (carrito.length === 0) {
        contenedorLista.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 4em 0; color:rgba(255,255,255,0.3);">Tu carrito de compras se encuentra vacío.</td></tr>`;
        if (contenedorCheckout) contenedorCheckout.style.display = "none";
        if (resumenTotales) resumenTotales.style.display = "none";
        return;
    }

    if (contenedorCheckout) contenedorCheckout.style.display = "block";
    if (resumenTotales) resumenTotales.style.display = "block";

    carrito.forEach((item, index) => {
        const precio = obtenerPrecioItem(item);
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${index + 1}</strong></td>
            <td><span style="color:#ffffff; font-weight:700; text-transform:uppercase; font-size:0.9em; letter-spacing:0.05em;">${item.titulo}</span></td>
            <td><span class="badge-soon" style="font-size:0.75em; margin:0; padding:0.2em 0.6em; background:rgba(255,255,255,0.03); border-color:rgba(255,255,255,0.1); color:rgba(255,255,255,0.6); font-family:monospace;">${item.categoria}</span></td>
            <td style="text-align:right; font-weight:700; color:var(--onlylord-accent);">${formatearPrecioUSD(precio)}</td>
            <td style="text-align:right;">
                <button class="button small" style="height:2.4em; line-height:2.4em; padding: 0 1em; background:#ab3d26; box-shadow:none; color:#ffffff !important; border-radius:4px;" onclick="eliminarDelCarrito('${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        contenedorLista.appendChild(tr);
    });

    actualizarResumenTotalesCarrito();

    const formCheckout = document.getElementById("form-checkout-pass");
    if (formCheckout) {
        formCheckout.onsubmit = (e) => {
            e.preventDefault();
            despacharCarritoAWhatsApp();
        };
    }
}

function actualizarResumenTotalesCarrito() {
    const carrito = obtenerCarrito();
    const inputDescuento = document.getElementById("cart-discount-code");
    const elSubtotal = document.getElementById("cart-subtotal");
    const elDescuento = document.getElementById("cart-discount-row");
    const elDescuentoMonto = document.getElementById("cart-discount-amount");
    const elDescuentoLabel = document.getElementById("cart-discount-label");
    const elTotal = document.getElementById("cart-total-final");
    const elEstadoCodigo = document.getElementById("cart-discount-status");
    const codigo = inputDescuento ? inputDescuento.value : "";
    const { subtotal, descuento, total, codigoValido, porcentajeDescuento } = calcularTotalesCarrito(carrito, codigo);

    if (elSubtotal) elSubtotal.textContent = formatearPrecioUSD(subtotal);
    if (elTotal) elTotal.textContent = formatearPrecioUSD(total);

    if (elDescuento && elDescuentoMonto) {
        if (codigo.trim() && codigoValido) {
            elDescuento.style.display = "flex";
            if (elDescuentoLabel) elDescuentoLabel.textContent = `${porcentajeDescuento}%`;
            elDescuentoMonto.textContent = `- ${formatearPrecioUSD(descuento)} (${porcentajeDescuento}%)`;
            if (elEstadoCodigo) {
                elEstadoCodigo.textContent = "Código aplicado correctamente";
                elEstadoCodigo.style.color = "var(--onlylord-accent)";
            }
        } else {
            elDescuento.style.display = "none";
            if (elEstadoCodigo) {
                if (codigo.trim()) {
                    elEstadoCodigo.textContent = "Código no válido";
                    elEstadoCodigo.style.color = "#ab3d26";
                } else {
                    elEstadoCodigo.textContent = "";
                }
            }
        }
    }
}

function despacharCarritoAWhatsApp() {
    const nombres = document.getElementById("cart-client-name").value.trim();
    const apellidos = document.getElementById("cart-client-lastname").value.trim();
    const ciudadPais = document.getElementById("cart-client-city").value.trim();
    const celular = document.getElementById("cart-client-phone").value.trim();
    const correo = document.getElementById("cart-client-email").value.trim();
    const metodoPago = document.getElementById("cart-payment-method").value;
    const codigoDescuento = document.getElementById("cart-discount-code") ? document.getElementById("cart-discount-code").value.trim() : "";
    const carrito = obtenerCarrito();

    if (!nombres || !apellidos || !ciudadPais || !celular || !correo || !metodoPago) return;

    const { subtotal, descuento, total, codigoValido, porcentajeDescuento } = calcularTotalesCarrito(carrito, codigoDescuento);

    let listaProductosTexto = "";
    carrito.forEach((item, idx) => {
        const precio = obtenerPrecioItem(item);
        listaProductosTexto += `${idx + 1}. *${item.titulo}* [${item.categoria}] — ${formatearPrecioUSD(precio)}\n`;
    });

    let bloquePrecios = `💰 *Subtotal:* ${formatearPrecioUSD(subtotal)}\n`;
    if (codigoDescuento && codigoValido) {
        bloquePrecios += `🏷️ *Código de Descuento:* ${codigoDescuento.toUpperCase()} (-${porcentajeDescuento}%)\n`;
        bloquePrecios += `⬇️ *Descuento Aplicado:* -${formatearPrecioUSD(descuento)}\n`;
    } else if (codigoDescuento) {
        bloquePrecios += `⚠️ *Código ingresado:* ${codigoDescuento.toUpperCase()} (no válido)\n`;
    }
    bloquePrecios += `✅ *TOTAL A PAGAR:* ${formatearPrecioUSD(total)}`;

    const mensaje = `¡Hola, ONLY LORD! 👋\n` +
                    `He armado mi orden de compra desde la plataforma web oficial:\n\n` +
                    `👤 *Cliente:* ${nombres} ${apellidos}\n` +
                    `📍 *Ciudad/País:* ${ciudadPais}\n` +
                    `📱 *Celular:* ${celular}\n` +
                    `📧 *Correo de Entrega:* ${correo}\n\n` +
                    `📦 *Lista de Recursos Solicitados:*\n${listaProductosTexto}\n` +
                    `${bloquePrecios}\n\n` +
                    `CC: beltsasar007@gmail.com\n\n` +
                    `💳 *Método de Pago Seleccionado:* ${metodoPago}\n\n` +
                    `Por favor, proporcióname los datos de la cuenta o el código QR de transferencia correspondiente para realizar el depósito y adjuntarte mi comprobante de validación.`;

    localStorage.removeItem("onlylord_cart");
    window.open(`https://wa.me/${MI_TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`, '_blank');
    window.location.href = "index.html";
}

function procesarPedidoPersonalizado(e) {
    e.preventDefault();

    const nombres = document.getElementById("order-client-name").value.trim();
    const apellidos = document.getElementById("order-client-lastname").value.trim();
    const correo = document.getElementById("order-client-email").value.trim();
    const pais = document.getElementById("order-client-country").value.trim();
    const telefono = document.getElementById("order-client-phone").value.trim();
    const cancion = document.getElementById("order-track-name").value.trim();
    const artista = document.getElementById("order-artist-name").value.trim();
    const version = document.getElementById("order-version-name").value.trim();
    const referencia = document.getElementById("order-link-ref").value.trim();
    const notas = document.getElementById("order-instructions").value.trim();

    const mensaje = `¡Hola, ONLY LORD! 👋\n` +
                    `Deseo contratar tu servicio de *Reconstrucción de Multitrack Personalizado*:\n\n` +
                    `👤 *Datos del Cliente:*\n` +
                    `• Nombre: ${nombres} ${apellidos}\n` +
                    `• Correo: ${correo}\n` +
                    `• País: ${pais}\n` +
                    `• Teléfono: ${telefono}\n\n` +
                    `🎵 *Canción:* ${cancion}\n` +
                    `🎤 *Artista:* ${artista}\n` +
                    `💿 *Versión / Concierto:* ${version}\n` +
                    `🔗 *Enlace de Referencia:* ${referencia ? referencia : "No especificado"}\n\n` +
                    `📝 *Indicaciones Especiales:*\n"${notas}"\n\n` +
                    `📋 *Proceso:* Primero recibiré la cotización del multitrack. Una vez aprobada y realizado el pago, la producción se entrega en 5 días hábiles.\n\n` +
                    `Quedo a la espera de tu confirmación de presupuesto.`;

    window.open(`https://wa.me/${MI_TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`, '_blank');
    document.getElementById("form-pedido-personalizado").reset();
}

function cargarDatosEnElMoldeDetalle() {
    const datosJSON = sessionStorage.getItem("multitrack_detalle_actual");
    if (!datosJSON) { window.location.href = "multitracks.html"; return; }

    const track = JSON.parse(datosJSON);
    document.getElementById("detail-track-title").innerText = track.titulo;
    document.getElementById("detail-track-artist").innerText = track.artista;

    const iframeVideo = document.getElementById("detail-video-iframe");
    if (iframeVideo) {
        iframeVideo.src = `https://www.youtube.com/embed/${track.ytId}?rel=0&autoplay=0`;
    }

    const contenedorStems = document.getElementById("detail-stems-container");
    if (contenedorStems) {
        contenedorStems.innerHTML = "";
        track.stems.forEach(stem => {
            const div = document.createElement("div");
            div.className = "stem-item";
            div.innerHTML = `<span>${stem}</span>`;
            contenedorStems.appendChild(div);
        });
    }

    const elPrecio = document.getElementById("detail-track-price");
    if (elPrecio && track.precio != null) {
        elPrecio.innerHTML = `<strong style="color:var(--onlylord-accent); font-size:1.4em;">${formatearPrecioUSD(track.precio)}</strong>`;
    }

    const setSpec = (id, value) => {
        const el = document.getElementById(id);
        if (el && value) el.textContent = value;
    };
    setSpec("detail-spec-acorde", track.acorde);
    setSpec("detail-spec-tempo", track.tempo);
    setSpec("detail-spec-tracks-count", track.cantidadTracks ? `${track.cantidadTracks} Tracks` : null);
    setSpec("detail-spec-weight", track.pesoTrack ? `${track.pesoTrack} c/u` : null);
    setSpec("detail-spec-sample-rate", track.sampleRate || "44.1 kHz");

    const btnCarrito = document.getElementById("btn-add-to-cart-action");
    if (btnCarrito) {
        btnCarrito.setAttribute("onclick", `añadirAlCarritoLocal('${track.id}', '${track.titulo.replace(/'/g, "\\'")}', 'Multitrack Premium', ${track.precio})`);
    }
}
