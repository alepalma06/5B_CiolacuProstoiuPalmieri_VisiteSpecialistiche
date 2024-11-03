const navbar = document.getElementById("navbar");

const NavBarComponent = (conf) => {
    let template = `
    <input type="radio" class="btn-check" name="btnradio" value="#TIPO" id="#ID" #CHECKED>
    <label class="btn btn-outline-info btn-lg" for="#ID">#CAT</label>`
    let parentElement;
    return{
        setParentElement: (pr) => {
            // FUNZIONA CHE DETERMINA DOVE POSIZIONARE LA RENDER
            parentElement = pr;
        }
        ,render: () => {
            // FUNZIONE CHE INIETTA DENTRO IL CONTAINER IL CSS
            let html = "";
            conf["tipologie"].forEach((tip,index) => {
                // GENERA CODICE
                let radioId = "radio" + index;
                if ( index === 0) {
                    //PER IL CHECKED [SE è IL PRIMO ALLORA SARà CHECKED]
                    html += template.replace(/#ID/g, radioId).replace("#CAT", tip).replace("#TIPO", tip) .replace("#CHECKED", "checked");
                } else {
                    html += template.replace(/#ID/g,radioId) .replace("#CAT", tip).replace("#TIPO", tip).replace("#CHECKED", "");
                }
            });
            parentElement.innerHTML = html;

            document.querySelectorAll(".btn-check").forEach((radio) => {
                radio.onclick = () => {
                    form.setType(radio.value)
                    console.log("Selected value:", radio.value);//scelta che abbiamo selezionato
                };
            });

        }
    }
}
fetch("conf.json").then(r => r.json()).then(conf => {
    const navBarComp = NavBarComponent(conf);
    navBarComp.setParentElement(navbar);
    navBarComp.render();
    //console.log(fetchComp)
});