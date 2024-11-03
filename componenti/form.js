const createForm = (parentElement) => {
    let dato = {};
    let callback = null;
    let tipo="Cardiologia";
    return {
        setLabels: (labels) => { dato = labels; }, 
        onsubmit: (callbackInput) => { callback = callbackInput; },
        setType: (tip)=>{tipo=tip;console.log(tipo)},
        exportDiz: () => {
            
        },
        render: () => {
            //creazione input
            parentElement.innerHTML = 
                `<div>Data<br/><input id="data" type="date" class="form-label form-control"/></div>` +
                `<div>Ora<br/><select id="ora" name="ora" class="form-select"><option value=8>8</option><option value=9>9</option><option value=10>10</option><option value=11>11</option><option value=12>12</option></select></div>` +
                `<div>Nome<br/><input id="nome" type="text" class="form-label form-control"/></div>`+
                `<div id="outputform"></div>`
            //lettura valori inseriti
            document.querySelector("#Prenota").onclick = () => {
                const data = document.querySelector("#data").value;
                const ora = document.querySelector("#ora").value;
                const nome = document.querySelector("#nome").value;
                const outputform = document.getElementById("outputform");

                if (data === "" || ora === "" || nome === "") {
                    outputform.innerHTML = "KO";
                } else {
                    // AGGIUNTA DELLA DATA NEL DIZIONARIO
                    const datasenzatrattini = data.split("-").join("");
                    let chiave = tipo+"-"+datasenzatrattini+"-"+ora;
                    dato[chiave] = nome;
                    outputform.innerHTML = "OK";
                    console.log(dato);
                }

                const result = { data, ora, nome };
                if (callback) { 
                    callback(result);  
                }
            };

        }
    };
};
//creazione
const formElement = document.getElementById("form");
const form = createForm(formElement);

form.onsubmit((resultform) => { // 
    console.log(resultform, table1.data);
    //table1.remove(resultform);
    document.querySelector("#data").value = "";
    document.querySelector("#ora").value = "";
    document.querySelector("#nome").value = "";
    /*dataProva = new Date();
    dataProvaStr = dataProva.getFullYear() + "-" + (dataProva.getMonth() + 1) + "-" + dataProva.getDate()  
    console.log(dataProvaStr);*/
    
    
});

form.render();