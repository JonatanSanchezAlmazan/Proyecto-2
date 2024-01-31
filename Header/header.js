import { btnClean, btnClose, btnSearchGame } from "../Buttons/buttons";
import { filterName, filterPrice, filterSelect } from "../Filter/filter";

const createHeader = () => {
    const divApp = document.querySelector("#app");
    const header = document.createElement("header");
    const sectionHeader = document.createElement("section");
    sectionHeader.classList.add("section-header");
    header.appendChild(sectionHeader);
    divApp.appendChild(header);
}

const sectionInfoHeader = () => {
    const header = document.querySelector("header");
    const sectionInfoHeader = document.createElement("section");
    sectionInfoHeader.classList.add("info-header");
    const myH1 = document.createElement("h1");
    myH1.textContent = "Bienvenidos a tu página de videojuegos";
    sectionInfoHeader.appendChild(myH1);
    header.appendChild(sectionInfoHeader);
}

const createLogo = () => {
    const sectionHeader = document.querySelector(".section-header");
    const sectionlogo = document.createElement("section");
    const imgLogo = document.createElement("img");
    imgLogo.src = "/logo.svg";
    sectionlogo.classList.add("logo");
    sectionlogo.appendChild(imgLogo);
    sectionHeader.appendChild(sectionlogo);
}

const createSectionfilter = () => {
    const main = document.querySelector("main");
    const sectionFilter = document.createElement("section");
    sectionFilter.classList.add("section-filter");
    const inputFilterName = document.createElement("input");
    inputFilterName.id = "filter";
    inputFilterName.type = "text";
    inputFilterName.placeholder = "Busca tu videojuego"
    inputFilterName.classList.add("filter");
    sectionFilter.appendChild(inputFilterName);
    main.appendChild(sectionFilter);
    filterName();
    sectionOptions();
    sectionFilterPrice();
    sectionClearFilter();
    btnClean();
    btnClose();
}

const renderSectionFilter = () => {
    createSectionfilter();
}


const sectionOptions = () => {
    const sectionFilter = document.querySelector(".section-filter");
    const sectionOptions = document.createElement("section");
    const selectElement = document.createElement("select");
    const options = ["AllGames", "Steam", "Battle", "Rockstart"];
    options.forEach((option) => {
        let optionElement = document.createElement("option");
        optionElement.textContent = option;
        optionElement.value = option;
        optionElement.classList.add(option);
        selectElement.appendChild(optionElement);

    })
    sectionOptions.classList.add("section-options");
    selectElement.classList.add("select-element");
    sectionOptions.appendChild(selectElement);
    sectionFilter.appendChild(sectionOptions);
    filterSelect();
}

const sectionFilterPrice = () => {
    const sectionFilter = document.querySelector(".section-filter");
    const sectionFilterPrice = document.createElement("section");
    const firstLabel = document.createElement("label");
    const firstInput = document.createElement("input");
    const secondLabel = document.createElement("label");
    const secondInput = document.createElement("input");
    sectionFilterPrice.classList.add("filter-price");
    firstLabel.textContent = "Entre";
    secondLabel.textContent = "y";
    firstInput.type = "text";
    firstInput.id = "firstInput";
    secondInput.type = "text";
    secondInput.id = "secondInput";
    sectionFilterPrice.appendChild(firstLabel);
    sectionFilterPrice.appendChild(firstInput);
    sectionFilterPrice.appendChild(secondLabel);
    sectionFilterPrice.appendChild(secondInput);
    sectionFilter.appendChild(sectionFilterPrice);
    btnSearchGame();
    filterPrice();

}
const sectionClearFilter = () => {
    const sectionFilter = document.querySelector(".section-filter");
    const sectionClearFilter = document.createElement("section");
    sectionClearFilter.classList.add("clean-filter");
    sectionFilter.appendChild(sectionClearFilter);


}

const renderHeader = () => {
    createHeader();
    createLogo();
    sectionInfoHeader();
}
export { renderHeader, createLogo, sectionOptions, sectionFilterPrice, sectionClearFilter, createHeader, renderSectionFilter };