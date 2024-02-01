import './style.css'
import './Header/header.css'
import './Buttons/buttons.css'
import './Games/games.css'
import './Filter/filter.css'
import './Aside/aside.css'
import './Login/login.css'

import { renderListGame, renderUL, games } from './Games/games';
import { renderHeader } from './Header/header'
import { btnLogin, btnSearchFunction } from './Buttons/buttons';


renderHeader();
btnSearchFunction();
btnLogin();
renderUL();
renderListGame(games);