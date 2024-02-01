import { btnClean, btnClose } from "../Buttons/buttons";
import { filterName } from "../Filter/filter";
import { sectionClearFilter, sectionFilterPrice, sectionOptions } from "../Header/header";

const createAsideFilter = () => {
    const divApp = document.querySelector("#app");
    const main = document.querySelector("main");
    const asideFilter = document.createElement("aside");
    asideFilter.classList.add("aside-filter");
    const inputFilterName = document.createElement("input");
    inputFilterName.id = "filter";
    inputFilterName.type = "text";
    inputFilterName.placeholder = "Busca tu videojuego"
    inputFilterName.classList.add("filter");
    asideFilter.appendChild(inputFilterName);
    divApp.insertBefore(asideFilter, main);
    filterName();
    sectionOptions();
    sectionFilterPrice();
    sectionClearFilter();
    btnClean();
    btnClose();
}

const renderAsideFilter = () => {
    createAsideFilter();
}

export default renderAsideFilter;