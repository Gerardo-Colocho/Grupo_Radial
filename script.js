const stations = {
    mega: {
        name: "LA MEGA <span>95.3</span>",
        slogan: '"Desde Ciudad Arce para el Mundo"',
        logo: "Gemini_Generated_Image_xo5ii7xo5ii7xo5i.png", 
        url: "https://c18.radioboss.fm:18191/stream", 
        color: "theme-mega",
        hours: "Lun - Sáb: 8:00 AM - 5:00 PM",
        addr: "Cerrón Grande, Ciudad Arce, El Salvador",
        map: "https://maps.app.goo.gl/QrcY45UywWcGp5ke8", 
        mision: "Nuestra misión es ser el corazón musical de Ciudad Arce, entreteniendo e informando a nuestra comunidad.",
        vision: "Ser la radio líder del occidente de El Salvador, innovando en la comunicación digital.",
        wa: "50377400409", 
        fb: "lamega953", 
        tk: "@lamega953",
        locutores: [
            { nombre: "Mervin Alvares", turno: "Mañanas Mega", foto: "https://scontent.fsal14-1.fna.fbcdn.net/v/t39.30808-6/572939019_1447326710735494_1994030276217514095_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=JjIaA9WJDF4Q7kNvwHSsvOK&_nc_oc=AdlBaN62EQU6hu2nyToE60nQXgOWk4xjIGq0rESs5DeoofaXdfVUrETHDizlaDBe1CQ&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=fGXNLeWOrO7vLTXBiL9e1Q&_nc_ss=8&oh=00_AfzkYsyIxBq9IlzyjtVztB1LG58yRHYA3vVWGnNr4Gonrg&oe=69BB8CB0" },
            { nombre: "Laura Guzman", turno: "Tardes de Sabor", foto: "https://scontent.fsal14-1.fna.fbcdn.net/v/t39.30808-6/574075737_1447326674068831_8677178821448870629_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=VROJx633kSIQ7kNvwE2mEWp&_nc_oc=AdnGGly_4O0Y6ft0hqPwRE1TgnItD_dw5W50tMkH3N9_l-AWYlt2WlnBTt9WsAwkAdY&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=SGscGWfxW5z7YXSWD0n1Yg&_nc_ss=8&oh=00_Afw_4Nz6v4mKO36rtUf9p2nCndR6TZshLy9DEiYsGbQ-IQ&oe=69BBBB05" },
            { nombre: "César Gonzalez", turno: "Mix de Noche", foto: "https://scontent.fsal14-1.fna.fbcdn.net/v/t39.30808-6/574110651_1447326764068822_8044835485813207029_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=WVYBBxSIJ5AQ7kNvwH4pcaU&_nc_oc=AdnSRPrZCg9fNJb8_WQY3hwhhieUAC1zF_krYaZnF_iqBHc4oKU-5wD2D96p_8ocOu0&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=0NHRui2BkO35KOz5ClNwKA&_nc_ss=8&oh=00_Afzql_DqSjfM8AL6nBPwcueV_8DYEHb673bfU4VSNjTmUQ&oe=69BBAEB7" },
            { nombre: "Diego Galdámez", turno: "Mix de Noche", foto: "https://scontent.fsal14-1.fna.fbcdn.net/v/t39.30808-6/574104505_1447326677402164_7055780046853405800_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=J826ijL5dc0Q7kNvwGWsk0m&_nc_oc=AdmNWHbb42qrxi9UTIRdaKXWAWm3fmM8OWp1c8GksgWE5odiLETbjRquyGs3EXyGLW0&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=XuTqK-hMPX1k5bSLkXfmAw&_nc_ss=8&oh=00_Afwg6VvOv908kPaA_ZVIfxxf4k22ucEP_X70NsiaoSpKGg&oe=69BBA44D" },
             { nombre: "Jefferson Gonzalez", turno: "Mix de Noche", foto: "https://scontent.fsal14-1.fna.fbcdn.net/v/t51.82787-15/648673201_18084112451257750_7503792634179828884_n.webp?stp=dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=K0tGdy7tmTEQ7kNvwFp9B9o&_nc_oc=AdkeQLxnu4oPXsbTAZXutXMSrvQ0ZXfm9CKwyGxLaJZKWU4E2JaXVKhZ2k9jZlNdWBE&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=oq8gnWZbfQiTwDgQmT9wog&_nc_ss=8&oh=00_Afyqp7TkNa3-XkKWSihkWVRA84PCgu5p4TiAKQDrBNocCg&oe=69BB878F" },
            { nombre: "Carolina Hernandez", turno: "Locución", foto: "https://scontent.fsal14-1.fna.fbcdn.net/v/t39.30808-6/572781322_1447326777402154_8713222701266411542_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=1WrscZ8-66MQ7kNvwGbeZUE&_nc_oc=Adnrr02CHu5F9rEpGGzUQZZa1GNxF5bFDzO9HgjBvDjTTpP3sn0S-gnYeJVWurEdJVE&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=FG9Ub1ghpmtO6Fvu7xgb7w&_nc_ss=8&oh=00_Afw0jdMQQozJ_ch5xAPsd56SLW6C1JF7GVvkOrVkruy-Ew&oe=69BBB9CE" }
        ],
        admin: [
            { nombre: "Melanie Osorio", cargo: "Secretaria", foto: "https://scontent.fsal14-1.fna.fbcdn.net/v/t51.82787-15/649225556_18084112529257750_715823342027487232_n.webp?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=mo8gJ6bDdlQQ7kNvwF9KoIJ&_nc_oc=Adn5Nl9xe3kk2yAQF9XdCZbjZen6GuAA24ZqamhnGhH7OhFdKY6nWXmQUnd6cg5JL1s&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=WpBuW8E_WGxAnLs5x75U2Q&_nc_ss=8&oh=00_AfxH4MNMVPN12x7Oi0qy5PQFq639vZQjaKclVbOmksftwQ&oe=69BB8F78" }
        ]
    },
    buena: {
        name: "LA MÁS BUENA <span>95.3</span>",
        slogan: '"Desde Ahuachapán para el Mundo"',
        logo: "https://lamasbuena953fm.com/wp-content/uploads/2021/08/2.jpg",
        url: "https://c15.radioboss.fm:18349/stream",
        color: "theme-buena",
        hours: "24 Horas Online",
        addr: "Ahuachapán, El Salvador",
        map: "https://maps.app.goo.gl/AhuachapanBuena",
        mision: "Llevar la mejor energía y alegría a todo Ahuachapán...",
        vision: "Consolidarnos como la red de comunicación más importante...",
        wa: "50371829887", fb: "lamasbuena953", tk: "@lamasbuena953",
        locutores: [
            { nombre: "Patty Castillo", turno: "El Show De La Mañana", foto: "https://scontent.fsal14-1.fna.fbcdn.net/v/t39.30808-6/603842269_883198057546519_1921269743923735418_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=JSTLU-gnc5kQ7kNvwFkEoZK&_nc_oc=AdkcaBhmuJuN2pjKHud017mezZbxscajE2HuGBlnz9eiWs7k3RNOmvwF2fUKJ81W87o&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=LIskV39Wi4sm_eldNgqNlg&_nc_ss=8&oh=00_Afzthb2yBd4vomQdWgl5I9GiTdN3tCVfk1B3cxEil1bmGA&oe=69BBBB17" },
            { nombre: "Nayeli Villacorta ", turno: "Ritmo y Pasión", foto: "https://scontent.fsal14-1.fna.fbcdn.net/v/t39.30808-6/601397475_883198104213181_4824930731802755492_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=omtUlXrbB7EQ7kNvwE8Nq91&_nc_oc=Adm-aapVBrUbkGCerh5dpEv7lk9V7HwPrG7m4JOzyvPCAgIHkZekpW_YTkjgecmYOQw&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=sGMP3lRs_zd5U88fCG-lRA&_nc_ss=8&oh=00_AfzWwciMXFldbXxmKCRbIQt-BpgQLRpGjcsmoiBAQ11d_Q&oe=69BBC4AF" },
            { nombre: "Erika Pineda", turno: "Ritmo y Pasión", foto: "https://scontent.fsal14-1.fna.fbcdn.net/v/t39.30808-6/599937435_883198154213176_7744355690679431452_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=JTRQl_GYB7EQ7kNvwH79qsf&_nc_oc=AdmHAucmKo1C0_TW4lFdnCpR_VwKfBVmvLkSSIpsk-Q-GNly6kYEsNXbZPfal0loaLo&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=lCvz52zKJPTkiQWQX-4d0A&_nc_ss=8&oh=00_AfxUzXIKtGfk7tlaxS0_JoiJi1_utpbFljO-0p551tk3xQ&oe=69BBB725" },
            { nombre: "Wlfredo Canizales", turno: "Ritmo y Pasión", foto: "https://scontent.fsal14-1.fna.fbcdn.net/v/t39.30808-6/601958261_883197967546528_1931083818608257227_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=60qrcHkgKhcQ7kNvwEqDc6D&_nc_oc=AdlVmkXnKirq6q3-Rez2Y99Mi4q4jAP8R_cZIV_U7H6BouRGjwh_2oLRaOHO6ehhbt0&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=EwDlzK5uJGzxQGle-0Qx9A&_nc_ss=8&oh=00_AfxhrnyyRAoCX3roEZtd914zzKyM-Det-RhE-7XzF90uyw&oe=69BBA6C8" },
            { nombre: "Osmir Zelaya", turno: "Ritmo y Pasión", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlV5VwX_FBJctRbON7LvmFbbVurL9QgWPB3Q&s" }
        ],
        admin: [
            { nombre: "Gabriel Arcángel", cargo: "Administración", foto: "https://scontent.fsal14-1.fna.fbcdn.net/v/t39.30808-6/518482104_759198956613097_3717861508699182621_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=mn3NiC496vsQ7kNvwHu0nAL&_nc_oc=AdkUn7zExkzoUxGiGbFR5O-aycKEkH4ysnHfwNq5aOjNT-vnNOeP_SnIIkB5vpCQAKw&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=tnDOSsCtQ9SA_Ksv_SMpIg&_nc_ss=8&oh=00_Afxv_sCYz7tYz2XLMpqTEzNIv8q6o8rPkmIQTH7B5VTZ4Q&oe=69BBB636" }
        ]
    }
};

let activeKey = 'mega';
let audio = new Audio(stations.mega.url);
let isPlaying = false;

function switchRadio(key) {
    if(activeKey === key) return;
    const art = document.getElementById('art-container');
    const text = document.getElementById('text-container');
    art.classList.add('fade-out');
    text.classList.add('fade-out');

    document.getElementById('values-content').classList.remove('show');
    document.getElementById('val-icon').style.transform = "rotate(0deg)";

    setTimeout(() => {
        audio.pause();
        activeKey = key;
        const data = stations[key];
        document.body.className = data.color;
        document.getElementById('radio-name').innerHTML = data.name;
        document.getElementById('radio-slogan').innerText = data.slogan;
        document.getElementById('main-logo').src = data.logo;
        document.getElementById('status-text').innerText = (key === 'mega' ? 'LA MEGA' : 'LA MÁS BUENA') + ' 95.3';
        document.getElementById('btn-mega').classList.toggle('active', key === 'mega');
        document.getElementById('btn-buena').classList.toggle('active', key === 'buena');
        updateMenuInfo(data);
        audio.src = data.url;
        audio.load();
        if(isPlaying) audio.play().catch(e => console.log("User touch needed"));
        art.classList.remove('fade-out');
        text.classList.remove('fade-out');
    }, 350); 
}

function updateMenuInfo(data) {
    document.getElementById('m-hours').innerText = data.hours;
    document.getElementById('m-addr-full').innerText = data.addr;
    document.getElementById('maps-link').href = data.map;
    document.getElementById('m-mision').innerText = data.mision;
    document.getElementById('m-vision').innerText = data.vision;
    document.getElementById('wa-link').href = `https://wa.me/${data.wa}`;
    document.getElementById('fb-link').href = `https://facebook.com/${data.fb}`;
    document.getElementById('tk-link').href = `https://tiktok.com/${data.tk}`;
    
    // Locutores
    document.getElementById('locutores-grid').innerHTML = data.locutores.map(loc => `
        <div class="locutor-card-v4">
            <img src="${loc.foto}" class="locutor-img-v4" onerror="this.src='https://via.placeholder.com/70?text=🎙️'">
            <h5>${loc.nombre}</h5><p>${loc.turno}</p>
        </div>
    `).join('');

    // Administración
    document.getElementById('admin-grid').innerHTML = data.admin.map(adm => `
        <div class="locutor-card-v4">
            <img src="${adm.foto}" class="locutor-img-v4" onerror="this.src='https://via.placeholder.com/70?text=👤'">
            <h5>${adm.nombre}</h5><p>${adm.cargo}</p>
        </div>
    `).join('');
}

function toggleValues() {
    const content = document.getElementById('values-content');
    const icon = document.getElementById('val-icon');
    content.classList.toggle('show');
    icon.style.transform = content.classList.contains('show') ? "rotate(180deg)" : "rotate(0deg)";
}

const modal = document.getElementById('modal');
document.getElementById('openMenu').onclick = () => { modal.classList.add('open'); document.body.classList.add('modal-open'); };
document.getElementById('closeMenu').onclick = () => { modal.classList.remove('open'); document.body.classList.remove('modal-open'); };

document.getElementById('master-play').onclick = function() {
    const icon = document.getElementById('play-icon');
    const viz = document.getElementById('viz');
    if(audio.paused) {
        audio.play();
        icon.className = "fa-solid fa-pause";
        viz.classList.add('playing');
        isPlaying = true;
    } else {
        audio.pause();
        icon.className = "fa-solid fa-play";
        viz.classList.remove('playing');
        isPlaying = false;
    }
};

document.getElementById('vol-slider').oninput = (e) => audio.volume = e.target.value;
updateMenuInfo(stations.mega);