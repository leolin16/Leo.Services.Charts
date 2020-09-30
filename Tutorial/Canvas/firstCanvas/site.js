(
    async () => {
        var apiData = await getApiData();
        
        // get the canvas as an object to be able to actually draw on it
        const ctx = document.getElementById('chart')
            // .getContext('2d')
            ;
        // ctx.moveTo(0,0);
        // ctx.lineTo(200,100);
        // ctx.stroke();
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Seattle", "Portland", "Monterey", "San Francisco", "San Diego"],
                datasets: [
                    {
                        backgroundColor: "red",
                        label: "Revenues last year",
                        data: [64532, 77543, 33422, 24532, 64323]
                    },
                    {
                        backgroundColor: "purple",
                        label: "Revenues per branch",
                        data: [43223, 64332, 53322, 67743, 51132]
                    }
                ]
            }
        });

        async function getApiData() {
            const apiResult = await fetch("https://chartjsapi.azurewebsites.net/branch/revenues");
            const json = await apiResult.json();
            // async await - ES2017/ES8
            return json;
        }
    }
)();

// self executing function is to prevent from pollution of js' global namespace