/* eslint-disable */

import { routes } from './routes.js';


const rootDiv = document.getElementById('root');
const ViewFunction = routes[window.location.pathname];
ViewFunction(rootDiv);
