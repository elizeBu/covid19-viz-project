$.get('./time_series_covid19_confirmed_global.csv', function (data){
    var ctx = document.getElementById('bar_chart').getContext('2d');

    ctx.canvas.parentNode.style.height='400px';
    ctx.canvas.parentNode.style.width='400px';

    var lines = data.split('\n');

    var result = [];
    var province = [];
    for (var i = 1; i < 10; ++i) {            // i < lines.length
        var columns = lines[i].split(',');

        // 4.21 confirmed global
        let id = i-1;

        // label: province
        province[id] = [columns[0] + ' ' + columns[1]];
        // data: result
        result[id] = Number(columns[columns.length-1]);
        
    }

    // console.log(result);

    var bar_chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: province,
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
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
            
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