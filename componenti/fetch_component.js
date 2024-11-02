const generateFetchComponent = () => {
    // GRAZIE CECIRE
    return {
        setData: (data) => {
            return new Promise((resolve, reject) => {
                fetch("https://ws.cipiaceinfo.it/cache/set", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "key": conf["cacheToken"]
                    },
                    body: JSON.stringify({
                        key: conf["key"],
                        value: JSON.stringify(data)
                    })
                })
                .then(r => r.json())
                .then(data => resolve(data.result))
                .catch(err => reject(err.result));
            });
        },
        getData: () => {
            return new Promise((resolve, reject) => {
                fetch("https://ws.cipiaceinfo.it/cache/get", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "key": conf["cacheToken"]
                    },
                    body: JSON.stringify({
                        key: conf["key"]
                    })
                })
                .then(r => r.json())
                .then(data => resolve(data.result))
                .catch(err => reject(err.result));
            })
        }
    }
};

fetch("conf.json").then(r => r.json()).then(conf => {
    const istFetch = generateFetchComponent();
});