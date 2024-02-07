import { btnClose } from "../Buttons/buttons";
import { filterName } from "../Filter/filter";
import { sectionClearFilter, sectionFilterPrice, sectionOptions } from "../Header/header";

// Funcion para crear el aside donde estan alojados los filtros, esta función llama a todas las secciones de los filtros y al boton cerrar.
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
    btnClose();
}

// Función encragada de renderizar el aside.
const renderAsideFilter = () => {
    createAsideFilter();
}

export default renderAsideFilter;