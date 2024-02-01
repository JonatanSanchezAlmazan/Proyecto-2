import { renderListGame, games } from "../Games/games";


const changeOption = (opcion) => {
    if (opcion === "AllGames") {
        renderListGame(games);
    } else if (opcion === "Steam") {
        const filtered = games.filter((game) => game.seller === "Steam");
        renderListGame(filtered);
    } else if (opcion === "Battle") {
        const filtered = games.filter((game) => game.seller === "Battle");
        renderListGame(filtered);
    } else {
        const filtered = games.filter((game) => game.seller === "Rockstar");
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
        const value = event.target.value.toLowerCase();
        if (value === "") {
            renderListGame(games);
        } else {
            const filteredName = games.filter((game) => game.name.toLowerCase().includes(value));
            if (filteredName.length === 0) {
                const ul = document.querySelector("#list");
                ul.innerHTML = `<p>No hay ningun videojuego que contenga la letra ${value}</p> `;
            } else {
                renderListGame(filteredName);
            }
        }
    })
}

const inputChange = () => {
    const firstInput = document.querySelector("#firstInput");
    const secondInput = document.querySelector("#secondInput");
    const btnSearchGame = document.querySelector(".btn");
    btnSearchGame.addEventListener("click", () => {
        const minValue = parseInt(firstInput.value);
        const maxvalue = parseInt(secondInput.value);
        const filteredGames = games.filter((game) => game.price >= minValue && game.price <= maxvalue);
        if (filteredGames.length === 0) {
            const ul = document.querySelector("#list");
            ul.innerHTML = `<p>No hay ningun videojuego que este entre ${minValue}€ y ${maxvalue}€</p> `;
        } else {
            renderListGame(filteredGames);
        }


    })

}

const filterPrice = () => {
    const firstInput = document.querySelector("#firstInput");
    const secondInput = document.querySelector("#secondInput");
    firstInput.addEventListener("input", inputChange);
    secondInput.addEventListener("input", inputChange);
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