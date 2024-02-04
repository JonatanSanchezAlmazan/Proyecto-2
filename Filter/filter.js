import { renderListGame, games } from "../Games/games";


const changeOption = (option) => {
    if (option === "AllGames") {
        renderListGame(games);
    } else {
        const filtered = games.filter((game) => game.seller === option);
        renderListGame(filtered);
    }
}

const filterSelect = () => {
    const elementSelect = document.querySelector("select");
    elementSelect.addEventListener("change", (event) => {
        const value = event.target.value;
        changeOption(value);
    });
}

const filterName = () => {
    const inputFilter = document.querySelector("#filter");
    inputFilter.addEventListener("input", (event) => {
        const selectedOption = document.querySelector("select").value;
        const value = event.target.value.toLowerCase();
        const filteredName = games.filter((game) => game.name.toLowerCase().includes(value));
        const filteredByPlatform = selectedOption !== "AllGames" ? filteredName.filter((game) => game.seller === selectedOption) : filteredName;
        if (filteredByPlatform.length === 0) {
            const ul = document.querySelector("#list");
            ul.innerHTML = `<p>No hay ningún videojuego que contenga la letra ${value}</p> `;
        } else {
            renderListGame(filteredByPlatform);
        }
    });
}






const inputChange = () => {
    const ul = document.querySelector("#list");
    const firstInput = document.querySelector("#firstInput");
    const secondInput = document.querySelector("#secondInput");
    const selectedOption = document.querySelector("select").value;
    let minValue = parseInt(firstInput.value);
    let maxvalue = parseInt(secondInput.value);
    minValue = isNaN(minValue) ? 0 : minValue;
    maxvalue = isNaN(maxvalue) ? Math.max(...games.map((game) => game.price)) : maxvalue;
    const filteredGames = games.filter((game) => {
        return game.price >= minValue && game.price <= maxvalue && (selectedOption === "AllGames" || game.seller === selectedOption);
    });
    if (filteredGames.length === 0) {
        ul.innerHTML = `<p>No hay ningun videojuego que este entre ${minValue}€ y ${maxvalue}€</p> `;
    } else {
        renderListGame(filteredGames);
    }
}




const filterPrice = () => {
    inputChange();
}

const cleanFilters = () => {
    const inputFilter = document.querySelector("#filter");
    const firstInput = document.querySelector("#firstInput");
    const secondInput = document.querySelector("#secondInput");
    const selectElement = document.querySelector(".select-element");
    firstInput.value = "";
    secondInput.value = "";
    selectElement.value = "AllGames";
    if (inputFilter != null) {
        inputFilter.value = "";
    }
}

export { filterSelect, filterName, filterPrice, cleanFilters };