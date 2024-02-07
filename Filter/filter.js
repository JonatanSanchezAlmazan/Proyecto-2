import { renderListGame, games } from "../Games/games";

// Función donde le llega una opción del select y filtra por cada opción.
const changeOption = (option) => {
    if (option === "AllGames") {
        renderListGame(games);
    } else {
        const filtered = games.filter((game) => game.seller === option);
        renderListGame(filtered);
    }
}

// Función que selecciona el select y coje el valor de la etiqueta y llama a la función changeOption.
const filterSelect = () => {
    const elementSelect = document.querySelector("select");
    elementSelect.addEventListener("change", (event) => {
        const value = event.target.value;
        changeOption(value);
    });
}

// Función que recoje el input para filtrar por nombre, está función realiza el filtrado dependiendo de si se escoje todos los juegos, o una plataforma en concreto, también realiza la comprobación de si el array de juegos esta vació muestra un mensaje en el documento de que no se ha podido encontrar ningún videojuego que contenga la letra escrita por el ususario y cuando se borra el input muestra los juegos de la plataforma donde se encuentre.
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

// Función encargada de filtrar por precio, recoje los valores de los dos inputs, y la plataforma por la que se quiere filtrar, a estos valores si por defecto el usuario no escribe un valor en el input se le da un valor por defecto en el caso del valor minímo se le asigna el valor 0, y al valor máximo se coje el listado de videojuegos y se mapea con los precios para asignale el valor del precio más alto. Por último también comprueba si el listado de videojuegos esta vacío se le muestra al usuario que no existe un videojuego entre los rangos de ese precio.
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

// Función encrgada de ejecutar el filtrado de precio dependiendo de la plataforma.
const filterPrice = () => {
    inputChange();
}

// Función encargada de limpiar todos los valores de los filtros, esta recoje los inputs y el select y en el caso de los inputs vacia los valores, y en el select deja por defecto el valor de todos los videojuegos, se comprueba que si el valor del input de filtrado de nombre es diferente a null que vacie ese input también.
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