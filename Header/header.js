import { btnClean, btnSearchGame } from "../Buttons/buttons";
import { filterSelect } from "../Filter/filter";


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

const sectionOptions = () => {
    const asideFilter = document.querySelector(".aside-filter");
    const sectionOptions = document.createElement("section");
    const selectElement = document.createElement("select");
    const options = ["AllGames", "Steam", "Battle", "Rockstar"];
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
    asideFilter.appendChild(sectionOptions);
    filterSelect();
}

const sectionFilterPrice = () => {
    const asideFilter = document.querySelector(".aside-filter");
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
    asideFilter.appendChild(sectionFilterPrice);
    btnSearchGame();
}

const sectionClearFilter = () => {
    const asideFilter = document.querySelector(".aside-filter");
    const sectionClearFilter = document.createElement("section");
    sectionClearFilter.classList.add("clean-filter");
    asideFilter.appendChild(sectionClearFilter);
    btnClean();
}

const renderHeader = () => {
    createHeader();
    createLogo();
    sectionInfoHeader();

}
export { renderHeader, createLogo, sectionOptions, sectionFilterPrice, sectionClearFilter, createHeader };