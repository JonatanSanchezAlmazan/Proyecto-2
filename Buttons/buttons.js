import renderAsideFilter from "../Aside/aside";
import { cleanFilters, filterPrice } from "../Filter/filter";
import { renderListGame, games, renderUL } from "../Games/games";
import { renderHeader } from "../Header/header";
import renderForm from "../Login/login";


// Función para crear el boton de buscar y cuando clicamos en el llama a la función renderAsideFilter y deshabilita el boton de buscar..
const btnSearchFunction = () => {
    const sectionHeader = document.querySelector(".section-header");
    const sectionBtnSearch = document.createElement("section");
    const btnSearch = document.createElement("button");
    sectionBtnSearch.classList.add("section-btn-search");
    btnSearch.classList.add("btn-search");
    sectionBtnSearch.appendChild(btnSearch);
    sectionHeader.appendChild(sectionBtnSearch);
    btnSearch.addEventListener("click", () => {
        renderAsideFilter();
        btnSearch.disabled = true;
    });
}

// Función para crear el botton de Login y cuando clicamos llama a la función renderForm.
const btnLogin = () => {
    const sectionHeader = document.querySelector(".section-header");
    const sectionLogin = document.createElement("section");
    const btnLogin = document.createElement("button");
    sectionLogin.classList.add("section-login");
    btnLogin.classList.add("btn-login");
    sectionLogin.appendChild(btnLogin);
    sectionHeader.appendChild(sectionLogin);
    btnLogin.addEventListener("click", renderForm)
}

// Función para crear el boton de cerrar en la sección de aside, que cuando clicamos en el elimina esa sección y vuelve ha habilitar el boton de buscar.
const btnClose = () => {
    const asideFilter = document.querySelector(".aside-filter");
    const btnSearch = document.querySelector(".btn-search");
    const btnClose = document.createElement("button");
    btnClose.textContent = "X";
    btnClose.classList.add("btn-close");
    btnClose.addEventListener("click", () => {
        asideFilter.remove()
        btnSearch.disabled = false;
    });

    asideFilter.appendChild(btnClose);
}

// Función para crear el boton para buscar videojuegos con un rango de precio, al clicar llama a la función filterPrice
const btnSearchGame = () => {
    const sectionFilterPrice = document.querySelector(".filter-price");
    const btnPrice = document.createElement("button");
    btnPrice.classList.add("btn");
    btnPrice.textContent = "Buscar";
    sectionFilterPrice.appendChild(btnPrice);
    btnPrice.addEventListener("click", filterPrice);
}

// Función para crear el boton de limpiar todos los filtros, al clicar en el llama a la función cleanFilter y renderListGame para volver a mostrar todos los juegos.
const btnClean = () => {
        const sectionClear = document.querySelector(".clean-filter");
        const btnClean = document.createElement("button");
        btnClean.textContent = "Limpiar Filtros";
        btnClean.classList.add("btn");
        sectionClear.appendChild(btnClean);
        btnClean.addEventListener("click", () => {
            cleanFilters();
            renderListGame(games);
        })
    }
    // Funcion para crear el boton de volver atrás en la sección de la información de cada juego, al hacer click elimina la sección de la información del juego y vuelve a renderizar toda la página pricipal.
const btnBack = () => {
    const divInfo = document.querySelector(".div-info");
    const btnBackPage = document.createElement("button");
    btnBackPage.id = "btnBack";
    btnBackPage.classList.add("btn");
    btnBackPage.textContent = "Back";
    divInfo.appendChild(btnBackPage);
    btnBackPage.addEventListener("click", () => {
        divInfo.remove();
        renderHeader();
        btnSearchFunction();
        btnLogin();
        renderUL();
        renderListGame(games);


    })
}

//Función para crear el boton de salir del formulario, cuando se hace click en el se elimina el formulario y vuelve a renderizar la página pricipal.
const btnBackLogin = () => {
    const form = document.querySelector(".form");
    const btnBackPage = document.createElement("button");
    btnBackPage.classList.add("btn");
    btnBackPage.textContent = "Salir del formulario";
    form.appendChild(btnBackPage);
    btnBackPage.addEventListener("click", () => {
        form.remove();
        renderHeader();
        btnSearchFunction();
        btnLogin();
        renderUL();
        renderListGame(games);
    })
}


export { btnSearchFunction, btnLogin, btnClose, btnSearchGame, btnClean, btnBack, btnBackLogin };