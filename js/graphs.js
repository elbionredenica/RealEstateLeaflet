var options = {
  chart: {
    width: 700,
    type: 'area'
  },
  series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
  // more customizable https://apexcharts.com/javascript-chart-demos/area-charts/basic/
}


var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

var options = {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            series: [44, 55, 13, 43, 22],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }

        var chart1 = new ApexCharts(
            document.querySelector("#chart1"),
            options
        );

        chart1.render();
