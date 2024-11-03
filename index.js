const tabella = document.getElementById("tabella");
const precendente = document.getElementById("precedente");
const successiva = document.getElementById("successiva");
let starDay = 0;
const navbar = document.getElementById("navbar");
const formElement = document.getElementById("form");

import {tableComponent} from './componenti/table.js';
import {NavBarComponent} from './componenti/navbar.js';
import {createForm} from './componenti/form.js';
//import {generateFetchComponent} from './componenti/fetch_component.js';


fetch("conf.json").then(r => r.json()).then(conf => {
    const form = createForm(formElement);
    const table1 = tableComponent();
    const navBarComp = NavBarComponent(conf);
    //console.log(fetchComp)
    console.log("CONF:", conf);
    table1.setParentElement(tabella);
    table1.render(starDay);
    console.log("Renderizzatoe");
    precendente.onclick = () => {
        starDay -= 7;
        table1.start(starDay)
        table1.render();
    }

    successiva.onclick = () => {
        starDay += 7;
        table1.start(starDay)
        table1.render();
    }
    navBarComp.setParentElement(navbar);
    navBarComp.render(form,table1);
    form.render(table1)
});
