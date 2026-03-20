const btn = document.getElementById("startBtn");
const overlay = document.querySelector(".overlay");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
    btn.classList.add("slideUp");

    setTimeout(() => {
        overlay.style.display = "none";
        container.style.opacity = "1";

        // Trigger semua animasi
        document.querySelectorAll('.smoke, .logo, .border-biru, .galaxy, .masjid, .pattern, .awan, .awan1, .awan2, .text1, .text2, .text3, .text4, .text5, .text6, .text7, .text8').forEach(el=>{
            el.classList.add('animate');
        });

    }, 800);
});

// pilih semua layer untuk trigger animasi
const layers = ['.smoke', '.logo', '.border-biru', '.galaxy', '.masjid', '.pattern',
                '.awan', '.awan1', '.awan2',
                '.text1','.text2','.text3','.text4','.text5','.text6','.text7','.text8'];

// button start
btn.addEventListener("click", () => {
    btn.classList.add("slideUp");

    setTimeout(() => {
        overlay.style.display = "none";
        container.style.opacity = "1";

        // start animasi semua layer
        layers.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.classList.add('animate'));
        });

        // Popup QR button selepas 12s (atau adjust ikut total animasi)
        setTimeout(() => {
            const qrBtn = document.getElementById("qrBtn");
            qrBtn.classList.add('show');
        }, 12000);

    }, 800);
});

// redirect QR image bila tekan
document.getElementById("qrBtn").addEventListener("click", () => {
    window.location.href = "images/qr.png"; // tukar ikut path QR image
});