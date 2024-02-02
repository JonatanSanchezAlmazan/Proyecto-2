import { renderListGame, games } from "../Games/games";


const changeOption = (option) => {
    if (option === "AllGames") {
        renderListGame(games);
        console.log(games);
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
        const value = event.target.value.toLowerCase();
        if (value === "") {
            const filteredName = games.filter((game) => game.seller === selectedOption);
            renderListGame(filteredName);
        } else {
            const filteredName = games.filter((game) => game.seller === selectedOption && game.name.toLowerCase().includes(value));
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