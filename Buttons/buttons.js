import renderAsideFilter from "../Aside/aside";
import { cleanFilters } from "../Filter/filter";
import { renderListGame, games, renderUL } from "../Games/games";
import { renderHeader } from "../Header/header";
import renderForm from "../Login/login";



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
    });

}

const btnLogin = () => {
    const sectionHeader = document.querySelector(".section-header");
    const sectionLogin = document.createElement("section");
    const btnLogin = document.createElement("button");
    sectionLogin.classList.add("section-login");
    btnLogin.classList.add("btn-login");
    sectionLogin.appendChild(btnLogin);
    sectionHeader.appendChild(sectionLogin);
    btnLogin.addEventListener("click", () => {
        renderForm();


    })
}

const btnClose = () => {
    const asideFilter = document.querySelector(".aside-filter");
    const btnClose = document.createElement("button");
    btnClose.textContent = "X";
    btnClose.classList.add("btn-close");
    btnClose.addEventListener("click", () => {
        asideFilter.remove();
    })

    asideFilter.appendChild(btnClose);

}

const btnSearchGame = () => {
    const sectionFilterPrice = document.querySelector(".filter-price");
    const btnPrice = document.createElement("button");
    btnPrice.classList.add("btn");
    btnPrice.textContent = "Buscar";
    sectionFilterPrice.appendChild(btnPrice);

}

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