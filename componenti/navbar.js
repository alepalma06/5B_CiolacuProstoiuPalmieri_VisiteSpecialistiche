const navbar = document.getElementById("navbar");

const NavBarComponent = (conf) => {
    let template = `
    <input type="radio" class="btn-check" name="btnradio" id="#ID" #CHECKED>
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
            let c = 0;
            conf["tipologie"].forEach(tip => {
                // GENERA CODICE
                if (c == 0) {
                    //PER IL CHECKED [SE è IL PRIMO ALLORA SARà CHECKED]
                    html += template.replace("#ID", ("radio" + c)).replace("#CAT", tip).replace("#CHECKED", "checked");
                } else {
                    html += template.replace("#ID", ("radio" + c)).replace("#CAT", tip).replace("#CHECKED", "");
                }
                c++;
            });
            parentElement.innerHTML = html;

        }
    }
}
fetch("conf.json").then(r => r.json()).then(conf => {
    const navBarComp = NavBarComponent(conf);
    navBarComp.setParentElement(navbar);
    navBarComp.render();
});