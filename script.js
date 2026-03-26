// ========== CONFIGURACIÓN DE ESTACIONES ==========
const stations = {
    mega: {
        name: "LA MEGA",
        frequency: "95.3",
        slogan: '"Desde Ciudad Arce para el Mundo"',
        logo: "https://i.imgur.com/8gY5kZF.png",
        url: "https://c18.radioboss.fm:18191/stream",
        primaryColor: "#ff4d1e",
        secondaryColor: "#ff884d",
        hours: "Lun - Sáb: 8:00 AM - 5:00 PM",
        address: "Cerrón Grande, Ciudad Arce, El Salvador",
        map: "https://maps.app.goo.gl/QrcY45UywWcGp5ke8",
        mision: "Ser el corazón musical de Ciudad Arce, entreteniendo e informando a nuestra comunidad con contenido de calidad.",
        vision: "Líder en innovación digital en El Salvador, expandiendo nuestra presencia a nivel nacional.",
        wa: "50377400409",
        fb: "lamega953",
        tk: "@lamega953",
        locutores: [
            { nombre: "Mervin Alvares", turno: "Mañanas Mega | 6AM - 10AM", img: "https://via.placeholder.com/65?text=🎙️" },
            { nombre: "Laura Guzman", turno: "Tardes de Sabor | 1PM - 5PM", img: "https://via.placeholder.com/65?text=🎙️" },
            { nombre: "César Gonzalez", turno: "Mix de Noche | 7PM - 11PM", img: "https://via.placeholder.com/65?text=🎙️" }
        ],
        admin: [{ nombre: "Melanie Osorio", cargo: "Directora Administrativa", img: "https://via.placeholder.com/65?text=👤" }]
    },
    buena: {
        name: "LA MÁS BUENA",
        frequency: "95.3",
        slogan: '"Desde Ahuachapán para el Mundo"',
        logo: "https://lamasbuena953fm.com/wp-content/uploads/2021/08/2.jpg",
        url: "https://c15.radioboss.fm:18349/stream",
        primaryColor: "#d946ef",
        secondaryColor: "#a855f7",
        hours: "24 Horas - 7 días a la semana",
        address: "Centro de Ahuachapán, El Salvador",
        map: "https://maps.app.goo.gl/AhuachapanBuena",
        mision: "Llevar la mejor energía, música y alegría a todo Ahuachapán y sus alrededores.",
        vision: "Consolidarnos como la red de comunicación más importante de la región occidental.",
        wa: "50371829887",
        fb: "lamasbuena953",
        tk: "@lamasbuena953",
        locutores: [
            { nombre: "Patty Castillo", turno: "El Show De La Mañana | 6AM - 10AM", img: "https://via.placeholder.com/65?text=🎙️" },
            { nombre: "Nayeli Villacorta", turno: "Ritmo y Pasión | 12PM - 4PM", img: "https://via.placeholder.com/65?text=🎙️" }
        ],
        admin: [{ nombre: "Gabriel Arcángel", cargo: "Director General", img: "https://via.placeholder.com/65?text=👤" }]
    }
};

// ========== VARIABLES GLOBALES ==========
let activeStation = 'mega';
let audio = new Audio(stations.mega.url);
audio.volume = 0.75;
let isPlaying = false;

// Elementos DOM
const dynamicBg = document.getElementById('dynamicBg');
const albumImg = document.getElementById('albumImg');
const stationTitle = document.getElementById('stationTitle');
const stationSlogan = document.getElementById('stationSlogan');
const frequency = document.getElementById('frequency');
const stationBadge = document.getElementById('stationBadge');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const volumeSlider = document.getElementById('volumeSlider');
const albumRing = document.getElementById('albumRing');

// ========== FUNCIÓN PARA ACTUALIZAR COLORES ==========
function updateThemeColors(primary, secondary) {
    document.documentElement.style.setProperty('--tab-color', primary);
    document.documentElement.style.setProperty('--tab-color-secondary', secondary);
    document.documentElement.style.setProperty('--icon-color', primary);
    document.documentElement.style.setProperty('--icon-color-secondary', secondary);
    document.documentElement.style.setProperty('--ring-color', primary);
    document.documentElement.style.setProperty('--title-color', secondary);
    document.documentElement.style.setProperty('--viz-color', primary);
    document.documentElement.style.setProperty('--viz-color-secondary', secondary);
    document.documentElement.style.setProperty('--thumb-color', primary);
    document.documentElement.style.setProperty('--border-color', primary);
    document.documentElement.style.setProperty('--link-color', primary);
    document.documentElement.style.setProperty('--link-color-secondary', secondary);
    document.documentElement.style.setProperty('--modal-icon', primary);
    
    dynamicBg.className = `dynamic-bg ${activeStation}`;
    albumRing.style.borderColor = primary;
}

// ========== ACTUALIZAR UI DE ESTACIÓN ==========
function updateStationUI(stationKey) {
    const data = stations[stationKey];
    albumImg.src = data.logo;
    stationTitle.innerHTML = `${data.name} <span style="background: linear-gradient(135deg, ${data.primaryColor}, ${data.secondaryColor}); -webkit-background-clip: text; background-clip: text; color: transparent;">${data.frequency}</span>`;
    stationSlogan.innerText = data.slogan;
    frequency.innerText = `FM ${data.frequency} MHz`;
    stationBadge.innerText = `${data.name} ${data.frequency}`;
    
    // Modal
    document.getElementById('modalTitle').innerHTML = `${data.name} ${data.frequency}`;
    document.getElementById('addressText').innerText = data.address;
    document.getElementById('mapLink').href = data.map;
    document.getElementById('misionText').innerText = data.mision;
    document.getElementById('visionText').innerText = data.vision;
    document.getElementById('hoursFooter').innerHTML = `<i class="fa-regular fa-clock"></i> ${data.hours}`;
    
    // Redes sociales
    document.getElementById('socialLinks').innerHTML = `
        <a href="https://wa.me/${data.wa}" target="_blank" class="social-link"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="https://facebook.com/${data.fb}" target="_blank" class="social-link"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://tiktok.com/${data.tk}" target="_blank" class="social-link"><i class="fa-brands fa-tiktok"></i></a>
    `;
    
    // Locutores
    document.getElementById('locutoresGrid').innerHTML = data.locutores.map(l => `
        <div class="person-card">
            <img class="person-img" src="${l.img}" onerror="this.src='https://via.placeholder.com/65?text=🎙️'">
            <h5 style="font-size: 0.85rem;">${l.nombre}</h5>
            <p style="font-size: 0.7rem; opacity: 0.7;">${l.turno}</p>
        </div>
    `).join('');
    
    // Admin
    document.getElementById('adminGrid').innerHTML = data.admin.map(a => `
        <div class="person-card">
            <img class="person-img" src="${a.img}" onerror="this.src='https://via.placeholder.com/65?text=👤'">
            <h5 style="font-size: 0.85rem;">${a.nombre}</h5>
            <p style="font-size: 0.7rem; opacity: 0.7;">${a.cargo}</p>
        </div>
    `).join('');
    
    updateThemeColors(data.primaryColor, data.secondaryColor);
}

// ========== CAMBIAR DE ESTACIÓN ==========
function switchStation(station) {
    if (activeStation === station) return;
    activeStation = station;
    const data = stations[station];
    const wasPlaying = isPlaying;
    
    audio.pause();
    audio.src = data.url;
    audio.load();
    
    if (wasPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            playIcon.className = "fa-solid fa-pause";
        }).catch(e => console.log(e));
    }
    
    updateStationUI(station);
}

// ========== VISUALIZADOR ==========
const vizContainer = document.getElementById('visualizer');
for (let i = 0; i < 24; i++) {
    const bar = document.createElement('div');
    bar.className = 'viz-bar';
    vizContainer.appendChild(bar);
}
const vizBars = document.querySelectorAll('.viz-bar');

// Animar las barras del visualizador
setInterval(() => {
    if (isPlaying) {
        vizBars.forEach(bar => {
            bar.style.height = Math.floor(Math.random() * 38 + 6) + 'px';
        });
    } else {
        vizBars.forEach(bar => bar.style.height = '5px');
    }
}, 100);

// ========== EVENTOS ==========
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        switchStation(tab.dataset.station);
    });
});

playBtn.onclick = () => {
    if (audio.paused) {
        audio.play().then(() => {
            isPlaying = true;
            playIcon.className = "fa-solid fa-pause";
        }).catch(e => console.log(e));
    } else {
        audio.pause();
        isPlaying = false;
        playIcon.className = "fa-solid fa-play";
    }
};

volumeSlider.oninput = (e) => {
    audio.volume = parseFloat(e.target.value);
};

// Modal
const modal = document.getElementById('modal');
document.getElementById('menuBtn').onclick = () => modal.classList.add('open');
document.getElementById('closeModalBtn').onclick = () => modal.classList.remove('open');
modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('open'); };

document.getElementById('accordionBtn').onclick = () => {
    const content = document.getElementById('accordContent');
    const icon = document.getElementById('accordIcon');
    content.classList.toggle('show');
    icon.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
};

// Crear partículas animadas
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = Math.random() * 4 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 15 + 10 + 's';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
    document.getElementById('particles').appendChild(particle);
}

// Inicializar
updateStationUI('mega');
audio.volume = 0.75;

console.log('🎵 Radio Premium | Streaming en vivo');
