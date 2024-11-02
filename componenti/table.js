
fetch("conf.json").then(r => r.json()).then(conf => {
    console.log("CONF : ", conf);
    let istFetch = generateFetchComponent(conf); // CREZIONE ISTANZA FETCH
    console.log("IST  : ", istFetch);

    
 });


