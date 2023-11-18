// funcionalidad "Menu Hamburguesa"
const menu = document.querySelector(".menu-conteiner");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

window.addEventListener("load", (e) => {
    e.preventDefault();

    function toggleMenu() {
        menu.classList.toggle("menu_abierto");


        openMenuBtn.addEventListener("click", toggleMenu);
        closeMenuBtn.addEventListener("click", toggleMenu);

        const enlaces = document.querySelectorAll(".menu-conteiner a");

        enlaces.forEach(enlace => {
            enlace.addEventListener("click", function () {
                menu.classList.remove("menu_abierto");
            })
        })


        // Funcionalidad "Selector"
        let menuItem = document.querySelectorAll(".menu-item");
        menuItem.forEach(function (item) {
            item.addEventListener("click", function (e) {
                const currentItem = document.querySelector(".active");
                currentItem.classList.remove("active");
                e.target.classList.add("active");
            });
        });

        // Funcionalidad Dark-Mode 
        const lightMode = document.querySelector(".light-mode");
        const darkMode = document.querySelector(".dark-mode");

        lightMode.addEventListener("click", setDarkMode);
        darkMode.addEventListener("click", setlightMode);

        function setDarkMode() {
            setUserTheme("dark");
        }

        function setlightMode() {
            setUserTheme("light");
        }

        function setUserTheme(newTheme) {
            document.documentElement.setAttribute("data-theme", newTheme);
        }
        }
    })

    //MENU PRINCIPAL
const cerrarMenuBtn = document.getElementById('cerrar-menu');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Agrega un evento de clic al botón de cerrar el menú
cerrarMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
    });

    // Muestra el menú desplegable al hacer clic en los items
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar Menú");
      } else {
        navToggle.setAttribute("aria-label", "Abrir Menú");
      }
    });