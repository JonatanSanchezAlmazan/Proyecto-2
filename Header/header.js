import { btnClean, btnSearchGame } from "../Buttons/buttons";
import { filterSelect } from "../Filter/filter";

// Función encargada de crear el header con una sección header.
const createHeader = () => {
    const divApp = document.querySelector("#app");
    const header = document.createElement("header");
    const sectionHeader = document.createElement("section");
    sectionHeader.classList.add("section-header");
    header.appendChild(sectionHeader);
    divApp.appendChild(header);
}

// Función encargada de crear una sección para el titulo principal de la página
const sectionInfoHeader = () => {
    const header = document.querySelector("header");
    const sectionInfoHeader = document.createElement("section");
    sectionInfoHeader.classList.add("info-header");
    const myH1 = document.createElement("h1");
    myH1.textContent = "Bienvenidos a tu página de videojuegos";
    sectionInfoHeader.appendChild(myH1);
    header.appendChild(sectionInfoHeader);
}

// Función encragada de crear el logo de la página.
const createLogo = () => {
    const sectionHeader = document.querySelector(".section-header");
    const sectionlogo = document.createElement("section");
    const imgLogo = document.createElement("img");
    imgLogo.src = "/logo.svg";
    sectionlogo.classList.add("logo");
    sectionlogo.appendChild(imgLogo);
    sectionHeader.appendChild(sectionlogo);
}

// Función encargada de recojer el aside y crear dentro la sección del select con una opcion por cada plataforma, esta función también llama a la función filterSelect.
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

// Función encargada de crear la sección de filtrado por precio, esta función llama a la función btnSearchGame para buscar los juegos entre los rangos de precio.
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

// Función encragada crear la sección para introducir el boton de limpiar los filtros, esta llama a la función btnClean para limpiar el valor de los filtros.
const sectionClearFilter = () => {
    const asideFilter = document.querySelector(".aside-filter");
    const sectionClearFilter = document.createElement("section");
    sectionClearFilter.classList.add("clean-filter");
    asideFilter.appendChild(sectionClearFilter);
    btnClean();
}

// Función encragada de renderizar todo el header.
const renderHeader = () => {
    createHeader();
    createLogo();
    sectionInfoHeader();

}
export { renderHeader, createLogo, sectionOptions, sectionFilterPrice, sectionClearFilter, createHeader };