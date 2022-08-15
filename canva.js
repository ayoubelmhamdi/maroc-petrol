
var data = [
    { x: '2022-11-06', y: '10' },
    { x: '2022-11-07', y: '08' },
    { x: '2022-11-08', y: '12' },
    // { x: '2022-11-09', y: '13' },
    // { x: '2022-11-10', y: '13' },
    // { x: '2022-11-11', y: '14' },
];

var gov = [
    { x: '2022-11-06', y: '11' },
    { x: '2022-11-07', y: '09' },
    { x: '2022-11-08', y: '13' },
    // { x: '2022-11-09', y: '13' },
    // { x: '2022-11-10', y: '13' },
    { x: '2022-11-11', y: '14' },
];

new Chart('myChart', {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'origin1',
            data: data,
            showLine: true,
            lineTension: 0.3,
            borderColor: "red",
        },
        {
            label: 'origin2',
            data: gov,
            showLine: true,
            lineTension: 0.3,
            borderColor: "green",
        },
        ],
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    displayFormats: {
                        day: 'D MMM yyyy'
                    }
                }
            },
        }
    }
});
