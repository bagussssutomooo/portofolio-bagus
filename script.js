// ==========================================
// MENU
// ==========================================

const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

    menuIcon.classList.toggle("bx-menu");

    menuIcon.classList.toggle("bx-x");

});


// ==========================================
// DARK / LIGHT MODE
// ==========================================

const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");


// Cek mode yang tersimpan
const savedTheme = localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeIcon.classList.remove("bx-sun");

    themeIcon.classList.add("bx-moon");

}


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {

        // LIGHT MODE

        themeIcon.classList.remove("bx-sun");

        themeIcon.classList.add("bx-moon");

        localStorage.setItem("theme", "light");

    } else {

        // DARK MODE

        themeIcon.classList.remove("bx-moon");

        themeIcon.classList.add("bx-sun");

        localStorage.setItem("theme", "dark");

    }

});


// ==========================================
// TRANSLATE
// ==========================================

const languageBtn = document.getElementById("language-btn");
const languageText = document.getElementById("language-text");


// Bahasa awal
let currentLanguage = "id";


// ==========================================
// FUNGSI TRANSLATE
// ==========================================

function translateWebsite() {

    // Semua teks
    const elements = document.querySelectorAll("[data-id]");


    elements.forEach(function (element) {

        if (currentLanguage === "en") {

            element.textContent =
                element.getAttribute("data-en");

        } else {

            element.textContent =
                element.getAttribute("data-id");

        }

    });


    // Placeholder input
    const inputs = document.querySelectorAll(
        "[data-id-placeholder]"
    );


    inputs.forEach(function (input) {

        if (currentLanguage === "en") {

            input.placeholder =
                input.getAttribute("data-en-placeholder");

        } else {

            input.placeholder =
                input.getAttribute("data-id-placeholder");

        }

    });


    // Tombol bahasa
    if (currentLanguage === "id") {

        languageText.textContent = "EN";

    } else {

        languageText.textContent = "ID";

    }

}


// ==========================================
// KLIK TRANSLATE
// ==========================================

languageBtn.addEventListener("click", function () {

    if (currentLanguage === "id") {

        currentLanguage = "en";

    } else {

        currentLanguage = "id";

    }


    translateWebsite();

});


// ==========================================
// TYPING EFFECT SEDERHANA
// ==========================================

const typingElement = document.querySelector(".typing");


const indonesiaText = [
    "Siswa SMKS Krian 1 Sidoarjo",
    "Siswa X RPL 2",
    "Kreator Digital"
];


const englishText = [
    "Student",
    "X RPL 2 Student",
    "Digital Creator"
];


let typingIndex = 0;

let characterIndex = 0;

let deleting = false;


function typingEffect() {

    const words =
        currentLanguage === "id"
            ? indonesiaText
            : englishText;


    const currentWord =
        words[typingIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            typingIndex++;

            if (typingIndex >= words.length) {

                typingIndex = 0;

            }

        }

    }


    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );

}


typingEffect();


// ==========================================
// NAVBAR ACTIVE
// ==========================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", function () {

    let current = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// TUTUP MENU SETELAH KLIK
// ==========================================

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        menuIcon.classList.remove("bx-x");

        menuIcon.classList.add("bx-menu");

    });

});