import { cleanFilters } from "../Filter/filter";
import { renderListGame, games } from "../Games/games";
import { renderSectionFilter, } from "../Header/header";


const btnSearchFunction = () => {
    const sectionHeader = document.querySelector(".section-header");
    const sectionBtnSearch = document.createElement("section");
    const btnSearch = document.createElement("button");
    sectionBtnSearch.classList.add("section-btn-search");
    btnSearch.classList.add("btn-search");
    sectionBtnSearch.appendChild(btnSearch);
    sectionHeader.appendChild(sectionBtnSearch);
    btnSearch.addEventListener("click", () => {
        renderSectionFilter();
        renderListGame(games);

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
    btnLogin.addEventListener("click", () => console.log("Hola"))
}

const btnClose = () => {
    const sectionFilter = document.querySelector(".section-filter");
    const btnClose = document.createElement("button");
    btnClose.textContent = "X";
    btnClose.classList.add("btn-close");
    btnClose.addEventListener("click", () => {
        sectionFilter.remove();
    })

    sectionFilter.appendChild(btnClose);

}

const btnSearchGame = () => {
    const sectionFilterPrice = document.querySelector(".filter-price");
    const btnPrice = document.createElement("button");
    btnPrice.classList.add("btn");
    btnPrice.textContent = "Search Game";
    sectionFilterPrice.appendChild(btnPrice);

}

const btnClean = () => {
    const sectionClear = document.querySelector(".clean-filter");
    const btnClean = document.createElement("button");
    btnClean.textContent = "Clear Filters";
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
    btnBackPage.classList.add("btn");
    btnBackPage.textContent = "Back";
    btnBackPage.addEventListener("click", () => {
        location.reload();


    })
    divInfo.appendChild(btnBackPage);
}



export { btnSearchFunction, btnLogin, btnClose, btnSearchGame, btnClean, btnBack };