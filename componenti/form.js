const createForm = (parentElement) => {
    let data = {};
    let callback = null;

    return {
        setLabels: (labels) => { data = labels; }, 
        onsubmit: (callbackInput) => { callback = callbackInput; },
        render: () => {
            //creazione input
            parentElement.innerHTML = 
                `<div>Data<br/><input id="data" type="date" class="form-label form-control"/></div>` +
                `<div>Ora<br/><input id="ora" type="dropdown" class="form-label form-control"/></div>` +
                `<div>Nome<br/><input id="nome" type="text" class="form-label form-control"/></div>` +
                `<button type='button' id='submit' class="btn btn-primary">Conferma</button>`;
                `<button type='button' id='annulla' class="btn btn-primary">Annulla</button>`;
            //lettura valori inseriti
            document.querySelector("#submit").onclick = () => {
                const result = {
                    data: document.querySelector("#data").value,
                    ora: document.querySelector("#ora").value,
                    nome: document.querySelector("#nome").value,
                };
                callback(result);  
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