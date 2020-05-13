$.get('./time_series_covid19_confirmed_global.csv', function (data){
    var ctx = document.getElementById('line_chart').getContext('2d');

    ctx.canvas.parentNode.style.height='400px';
    ctx.canvas.parentNode.style.width='400px';

    var lines = data.split('\n');
    var first_row = lines[0].split(',')
    var hubei = lines[63];
    var result = [];
    var date = [];

    for (var i = 4; i < 13; ++i) {            // i < lines.length
        var columns = hubei.split(',');

        // 10 Days - Confirmed in Hubei
        let id = i-4;

        // label: date
        date[id] = first_row[i];
        // data: result
        result[id] = Number(columns[i]);
        
    }

    // console.log(result);
    // console.log(date);

    var line_chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: date,
            datasets: [{
                label: '# of the Confirmed',
                data: result,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                fill: false,
                lineTension: 0
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    
                }]
            },
            
        }
    });


    
});


// layout:{
            //     padding:{
            //         left: 100,
            //         right: 100,
            //         top: 100,
            //         bottom: 100
            //     }
            // }