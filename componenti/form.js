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
                `<div>Ora<br/><select id="ora" name="ora" class="form-select"><option value=8>8</option><option value=9>9</option><option value=10>10</option><option value=11>11</option><option value=12>12</option></select></div>` +
                `<div>Nome<br/><input id="nome" type="text" class="form-label form-control"/></div>`
            //lettura valori inseriti
            document.querySelector("#Prenota").onclick = () => {
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