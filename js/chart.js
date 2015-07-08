/*draw Bar Chart Year on Revenue */
function drawBarChart() {
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
    series: {
      1: {
        type: "line"
      }
    },
    vAxis: {
      title: 'Year',
      titleTextStyle: {
        color: 'red'
      }
    },
    colors: ['red', 'black']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('barChart'));
  chart.draw(data, options);
}

/* Draw line chart */
function drawLineChart() {

  var data = google.visualization.arrayToDataTable([
    ['Year', 'Max score (100%)', 'MOL Group Total score', 'Best score', 'Industry average', 'Threshold'],
    ['2007', 100, 63, 77, 53, 68],
    ['2008', 100, 65, 80, 49, 68],
    ['2009', 100, 68, 82, 49, 69],
    ['2010', 100, 75, 77, 49, 70],
    ['2011', 100, 68, 86, 51, 68],
    ['2012', 100, 69, 85, 53, 72],
    ['2013', 100, 66, 83, 48, 69],
    ['2014', 100, 68, 87, 49, 68]
  ]);

  var options = {
    title: 'DJSI performance of MOL Group',
    curveType: 'function'
  };

  var chart = new google.visualization.LineChart(document.getElementById('lineGraph'));
  chart.draw(data, options);
}

google.load("visualization", "1", {
  packages: ["corechart"]
});
google.setOnLoadCallback(drawBarChart);
google.setOnLoadCallback(drawLineChart);