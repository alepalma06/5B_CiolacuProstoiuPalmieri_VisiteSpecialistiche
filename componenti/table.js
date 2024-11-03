const tabella = document.getElementById("tabella");
const precendente = document.getElementById("precedente");
const successiva = document.getElementById("successiva");
let starDay = 0;

const tableComponent = () => {
    let templateGiorni = `
        <tr class="tbl1">
            <td>Giorni:</td>
            <td>#D</td>
            <td>#D</td>
            <td>#D</td>
            <td>#D</td>
            <td>#D</td>
        </tr>
    `;
    let parentElement;

    return {
        setParentElement: (pr) => {
            parentElement = pr;
        },
        render: (PrecedenteSuccessiva) => {
            const exportData = (date) => {
                // FUNZIONE CHE FORMATTA LA DATA
                let d = date.getDate().toString().padStart(2, '0'); // SE LEN MINORE DI 2 AGGIUNGE "0"
                let m = (date.getMonth() + 1).toString().padStart(2, '0');
                let y = date.getFullYear();
                return y + "-" + m + "-" + d;
            };

            const lisSett = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];
            const ore = ["8:00", "9:00", "10:00", "11:00", "12:00"];
            let html = templateGiorni;
            let date = new Date();
            let giornoCorrente = date.getDay() - PrecedenteSuccessiva; // serve per i bottoni precendente e succssivo

            // SE E' DOMENICA [0] OPPURE SABATO [6] passa al lunedì dopo
            if (giornoCorrente === 6) {
                date.setDate(date.getDate() + 2); 
            } else if (giornoCorrente === 0) {
                date.setDate(date.getDate() + 1); 
            } else {
                date.setDate(date.getDate() - (giornoCorrente - 1)); //PER TORNARE SEMPRE A LUNEDì 
            }

            
            lisSett.forEach((day, index) => {
                //CAMBIO HTML
                let giornoTab = day + "<br>" + exportData(date);
                html = html.replace("#D", giornoTab);

                date.setDate(date.getDate() + 1);  //GIORNO DOPO

                //AGGIUNGI CHIAVE
            });
            ore.forEach(ora => {
                html += `<tr><td>${ora}</td>`;
                for (let i = 0; i < lisSett.length; i++) {
                    html += `<td>#PR</td>`; // Celle vuote o con contenuto da aggiungere
                }
                html += `</tr>`;
            });
            
            parentElement.innerHTML = html;
        }
    }
};



fetch("conf.json").then(r => r.json()).then(conf => {
    console.log("CONF:", conf);
    const table1 = tableComponent();
    table1.setParentElement(tabella);
    table1.render(starDay);
    console.log("Renderizzatoe");
    precendente.onclick = () => {
        starDay -= 7;
        table1.render(starDay);
    }

    successiva.onclick = () => {
        starDay += 7;
        table1.render(starDay);
    }
});

