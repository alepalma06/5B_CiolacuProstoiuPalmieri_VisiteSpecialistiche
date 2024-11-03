const tabella = document.getElementById("tabella");
const tableComponent = (conf) => {
    let templateGiorni = `
     <tr class="tbl1">
                <td>Giorni:</td>
                <td>#LUNEDI</td>
                <td>#MARTED</td>
                <td>#MERCOL</td>
                <td>#GIOVED</td>
                <td>#VENERD</td>
            </tr>
    `
    let templateRow;
    let parentElement;
    let dizPrenotazioni = {};
    return{
        setParentElement: (pr) => {
            // FUNZIONA CHE DETERMINA DOVE POSIZIONARE LA RENDER
            parentElement = pr;
        }
        ,render: () => {
            // FUNZIONE CHE INIETTA DENTRO IL CONTAINER IL CSS
            let html = "";
            

        }
    }
}




fetch("conf.json").then(r => r.json()).then(conf => {
    console.log("CONF : ", conf);
    const fetchComp = generateFetchComponent();
    fetchComp.caricaDati(conf);
    
 });


