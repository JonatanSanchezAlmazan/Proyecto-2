import { btnBack } from "../Buttons/buttons";


// GAMES
const games = [{
        name: "Palworld",
        price: 45,
        cover: "/game1.jpg",
        description: " ¿Quieres vivir tranquilamente con estas misteriosas criaturas, los Pals, o prefieres lanzarte a la aventura y luchar contra cazadores furtivos? Los Pals pueden luchar, procrear, ayudarte en las labores agrícolas y trabajar en fábricas. También puedes venderlos, despedazarlos y comértelos. Supervivencia Un lugar hostil, sin comida suficiente... y plagado de cazadores furtivos. Este mundo está lleno de peligros y sobrevivir será difícil.",
        star: 3,
        seller: "Steam",
        category: "AllGames"
    },
    {
        name: "Ready or Not",
        price: 40,
        cover: "/game2.jpg",
        description: "Los Sueños. El LSPD informa de un gran aumento de los delitos en toda el área metropolitana de Los Sueños. Se ha enviado a los SWAT (equipos de armas y tácticas especiales) para solventar diversas situaciones de alto riesgo, como toma de rehenes, amenazas de bomba activas, sospechosos atrincherados y otras conductas delictivas. Se recomienda a los ciudadanos permanecer en casa o tener cuidado al recorrer la ciudad. A pesar de que Los Sueños sigue siendo percibida como una ciudad con gente adinerada, es evidente que para muchos otros las cosas con más calidad de la vida son cada vez más difíciles de conseguir. «La ciudad está atestada de altos edificios de apartamentos sin espacio y cada vez hay menos viviendas asequibles, algo de lo que las organizaciones criminales se han aprovechado como si de un parásito maligno se trataran», afirma el jefe de policía Galo Álvarez. «En una ciudad en la que la población se limita a tratar de sobrevivir, la intervención del LSPD y de su equipo de SWAT sigue siendo esencial para evitar que el deteriorado tejido social de esta ciudad se desgarre ante el caos actual. Como respuesta a la intensa oleada de crímenes en la que está inmersa Los Sueños, el jefe Álvarez del LSPD cuenta con el fiel apoyo de David Beaumont, apodado «el Juez», como comandante del equipo de SWAT del LSPD. Poco después de anunciarlo, el LSPD también ha informado de que se encuentra en proceso de incorporar a más miembros a esta unidad especializada con el objetivo de devolver la paz a la ciudad.",
        star: 4,
        seller: "Battle",
        category: "AllGames"

    },
    {
        name: "Football Manager 2024",
        price: 50,
        cover: "/game3.jpg",
        description: "Football Manager 2024 para PC es un juego de estrategia y gestión deportiva: el número 20 de la emblemática serie que lleva mucho tiempo siendo una de las favoritas de los aficionados al fútbol, a la gestión de equipos y a las estrategias de creación de equipos.",
        star: 4,
        seller: "Rockstar",
        category: "AllGames"
    },
    {
        name: "Tekken 8",
        price: 43,
        cover: "/game4.jpg",
        description: "Tekken 8 para PC es el último de una larga lista de juegos de Tekken: es el octavo juego principal y el décimo lanzamiento en general. Pero es sólo el segundo juego disponible para PC: el primero fue Tekken 7. Tekken (la palabra proviene del japonés Tetsu no ken, que significa 'puño de hierro') es un juego de lucha, y en este juego los desarrolladores han perfeccionado su comprensión de lo que sus jugadores quieren.",
        star: 3,
        seller: "Battle",
        category: "AllGames"
    },
    {
        name: "Lies Of P",
        price: 46,
        cover: "/game5.jpg",
        description: "Eres una marioneta creada por Geppetto, atrapada en una red de mentiras junto a monstruos inimaginables y personajes poco fiables que se interpondrán en tu camino mientras trata de resolver los sucesos que han ocurrido en el mundo de Lies of P.      Te despierta una voz misteriosa que te guía a través de Krat, una ciudad antaño bulliciosa que ahora ha sido infestada por la locura y la sed de sangre. En este juego soulslike deberás adaptarte y ajustar tus armas para enfrentarte a horrores indescriptibles, desentrañar los secretos inconmensurables de la élite de la ciudad y elegir si enfrentarte a los dilemas con la verdad o con mentiras para superarlos y descubrir quién eres.",
        star: 4,
        seller: "Rockstar",
        category: "AllGames"
    },
    {
        name: "Resident Evil 4",
        price: 38,
        cover: "/game6.jpg",
        description: "La misión requería un secreto total. El fracaso no era una alternativa. Antes de que ningún agente estadounidense pisara aquel pueblo maldito, ella ya estaba allí. ¿Su objetivo? Recuperar el secreto más oscuro de la secta: el Ámbar. Separate Ways —el eslabón perdido de la historia principal— es una apasionante aventura de survival-horror protagonizada por Ada Wong. Descubre la historia desde otra perspectiva a través de sus ojos, donde su misión y su destino se entrecruzarán una vez más con los de Leon Kennedy.",
        star: 4,
        seller: "Battle",
        category: "AllGames"
    },
    {
        name: "Metal Gear Solid 1",
        price: 35,
        cover: "/game7.jpg",
        description: "La misión requería un secreto total. El fracaso no era una alternativa. Antes de que ningún agente estadounidense pisara aquel pueblo maldito, ella ya estaba allí. ¿Su objetivo? Recuperar el secreto más oscuro de la secta: el Ámbar. Separate Ways —el eslabón perdido de la historia principal— es una apasionante aventura de survival-horror protagonizada por Ada Wong. Descubre la historia desde otra perspectiva a través de sus ojos, donde su misión y su destino se entrecruzarán una vez más con los de Leon Kennedy.",
        star: 4,
        seller: "Battle",
        category: "AllGames"
    },
    {
        name: "Ride 5",
        price: 55,
        cover: "/game8.jpg",
        description: "Revoluciona el motor y prepárate para salir a pista en RIDE 5, un juego que ofrece una experiencia tan realista que sentirás que vas a toda velocidad en el circuito. ¡Subidón de adrenalina garantizado! Descubre tus motos favoritas y echa un vistazo a las nuevas en el juego de motos definitivo. Compite en más de 35 circuitos y hazte con 200 motos de los fabricantes más importantes del mundo. Cada elemento del juego está diseñado para que sientas que pilotas una moto de verdad.",
        star: 5,
        seller: "Rockstar",
        category: "AllGames"
    },
    {
        name: "Stalker 2",
        price: 28,
        cover: "/game9.jpg",
        description: "La Zona de Exclusión de Chornóbil cambió radicalmente tras la segunda explosión en 2006. Los mutantes violentos, las anomalías letales y las facciones enfrentadas hacen de la Zona un lugar en el que sobrevivir es todo un reto. Sin embargo, los valiosísimos artefactos atraen a gente de todo el mundo. Apodados Stalkers, se adentran en la zona por su cuenta y riesgo en busca de fortuna o posiblemente de la verdad que esconde el Corazón de Chornóbil.",
        star: 3,
        seller: "Steam",
        category: "AllGames"
    },
    {
        name: "God Of War",
        price: 45,
        cover: "/game10.jpg",
        description: "God of War para PC fue objeto de rumores durante meses, desde aproximadamente la mitad de 2021 hasta que los desarrolladores finalmente sacaron a los jugadores de su lenta espera y confirmaron el lanzamiento en PC para enero de 2022. Es la versión para PC del juego God of War de 2018, que inicialmente solo estaba disponible en PlayStation. El título permite a los jugadores de PC disfrutar del intenso juego de acción y aventuras del dios nórdico. Este título es el octavo de toda la serie multiplataforma y tiene lugar en un contexto que, si bien no es realmente un mundo abierto y más una serie de ubicaciones enlazadas, sigue siendo amplio y explorable dentro de esas ubicaciones. Rara vez te sientes limitado a pesar de la progresión lineal del juego.",
        star: 5,
        seller: "Steam",
        category: "AllGames"
    }
]

// CREATE GAME
const createGame = (game) => {
        const liGame = document.createElement("li");
        const imgGame = document.createElement("img");
        const sectionInfo = document.createElement("section");
        const titleGame = document.createElement("h2");
        const priceGame = document.createElement("h3");
        let sectionStars = document.createElement("section");
        sectionStars.classList.add("section-star")
        liGame.classList.add("game");
        imgGame.src = `${game.cover}`;
        imgGame.alt = `Videpjuego ${game.name}`;
        titleGame.textContent = game.name;
        priceGame.textContent = `${game.price}€`;
        liGame.appendChild(imgGame);
        liGame.appendChild(sectionInfo);
        sectionInfo.appendChild(titleGame);
        sectionInfo.appendChild(priceGame);
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("div");
            star.classList.add("star");
            sectionStars.appendChild(star);
            if (i <= game.star) {
                star.classList.add("fill-star")
            }
        }
        liGame.appendChild(sectionStars);
        imgGame.addEventListener("click", () => renderInfoGame(game));
        return liGame;

    }
    // Render ul

const renderUL = () => {
        const divApp = document.querySelector("#app");
        const mainApp = document.createElement("main");
        const ul = document.createElement("ul");
        ul.id = "list";
        ul.innerHTML = "";
        divApp.appendChild(mainApp);
        mainApp.appendChild(ul);

    }
    // Render list games
const renderListGame = (list) => {

    const main = document.querySelector("main");
    const ul = document.querySelector("#list");
    ul.innerHTML = "";
    const gamesOrdened = list.sort(function(a, b) {
        return a.price - b.price
    });
    gamesOrdened.forEach((game) => ul.appendChild(createGame(game)));
    main.appendChild(ul);

}


// GAME
const renderGame = (game) => {
    const divApp = document.querySelector("#app");
    const divGame = document.createElement("div");
    const imgGame = document.createElement("img");
    const sectionInfoGame = document.createElement("section");
    const titleGame = document.createElement("h2");
    const priceGame = document.createElement("h3");
    const sectionDescription = document.createElement("section");
    const pDescription = document.createElement("p");
    divGame.classList.add("div-info");
    sectionInfoGame.classList.add("info-game");
    sectionDescription.classList.add("description");
    imgGame.src = `${game.cover}`;
    imgGame.alt = game.name
    titleGame.textContent = game.name;
    priceGame.textContent = `${game.price}€`;
    pDescription.textContent = game.description;
    divApp.appendChild(divGame);
    divGame.appendChild(imgGame);
    divGame.appendChild(sectionInfoGame);
    divGame.appendChild(sectionDescription);
    sectionInfoGame.appendChild(titleGame);
    sectionInfoGame.appendChild(priceGame);
    sectionDescription.appendChild(pDescription);
    divApp.appendChild(divGame);

}

const renderInfoGame = (game) => {
    const divApp = document.querySelector("#app");
    divApp.innerHTML = "";
    renderGame(game);
    btnBack();

}

export { games, createGame, renderListGame, renderUL };