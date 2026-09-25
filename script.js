/* =====================================================
   SETTINGS
===================================================== */

const phoneNumber = "201289848743";


/* =====================================================
   ELEMENTS
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const whatsappButton = document.getElementById("whatsappButton");
const footerWhatsapp = document.getElementById("footerWhatsapp");
const floatingWhatsapp = document.getElementById("floatingWhatsapp");

const phoneButton = document.getElementById("phoneButton");

const currentYear = document.getElementById("currentYear");


/* =====================================================
   WHATSAPP
===================================================== */

const whatsappMessage =
    "مرحباً، أرغب في الحصول على استشارة قانونية.";

const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;


if (whatsappButton) {
    whatsappButton.href = whatsappURL;
}

if (footerWhatsapp) {
    footerWhatsapp.href = whatsappURL;
}

if (floatingWhatsapp) {
    floatingWhatsapp.href = whatsappURL;
}


/* =====================================================
   PHONE CALL
===================================================== */

if (phoneButton) {
    phoneButton.href = `tel:+${phoneNumber}`;
}


/* =====================================================
   MOBILE MENU
===================================================== */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });

    });

}


/* =====================================================
   CURRENT YEAR
===================================================== */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}