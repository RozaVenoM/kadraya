const btn = document.getElementById("startBtn");
const overlay = document.querySelector(".overlay");
const container = document.querySelector(".container");
const qrBtn = document.getElementById("qrBtn");

btn.addEventListener("click", () => {
    btn.classList.add("slideUp");

    setTimeout(() => {
        overlay.style.display = "none";
        container.style.opacity = "1";

        // Trigger semua animasi
        document.querySelectorAll('.smoke, .logo, .border-biru, .galaxy, .masjid, .pattern, .awan, .awan1, .awan2, .text1, .text2, .text3, .text4, .text5, .text6, .text7, .text8').forEach(el => {
            el.classList.add('animate');
        });

        // Popup QR selepas 12s (adjust ikut total animasi)
        setTimeout(() => {
            qrBtn.classList.add('show');
        }, 12000);

    }, 800);
});

qrBtn.addEventListener("click", () => {
    window.location.href = "images/qr.png"; // pastikan path betul
});
