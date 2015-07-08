$(document).ready(function() {

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Revenue');
    data.addColumn('number', 'Average Revenue');
    data.addRows([
      ['2004', 1000, 630],
      ['2005', 1170, 630],
      ['2006', 660, 630],
      ['2007', 1030, 630]
    ]);
    
    var options = {
      title: 'Revenue by Year',
      seriesType: "bars",
      series: {1: {type: "line"}},  
      vAxis: {title: 'Year',
              titleTextStyle:{color: 'red'}},
        colors:['red','black']
    };
    
    var chart = new google.visualization.ComboChart(document.getElementById('chart'));
    chart.draw(data, options);
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

});