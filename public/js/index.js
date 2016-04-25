(function(d3) {
  "use strict";

  var data = [
    { name: "Lolita's", rating: 7.5 },
    { name: "Lucha Libre", rating: 8 },
    { name: "Puesto", rating: 9.5 },
    { name: "Rubio's", rating: 4 },
    { name: "Taco Bell", rating: 3 },
    { name: "Taco Stand", rating: 8.5 },
    { name: "Taco's, El Gordo", rating: 9 },
    { name: "Oscar's", rating: 9 },
    { name: "Rigoberto's", rating: 6 },
    { name: "Galaxy Taco", rating: 6.5 },
  ];

  // Defining the margins and chart size
  // See margin conventions for more information
  var margin = {top: 20, right: 10, bottom: 100, left: 40},
      width = 960 - margin.right - margin.left,
      height = 500 - margin.top - margin.bottom;

  var innerWidth  = width  - margin.left - margin.right;
  var innerHeight = height - margin.top  - margin.bottom;

  // TODO: Input the proper values for the scales
  var xScale = d3.scale.ordinal().rangeRoundBands([0, innerWidth], 0);
  var yScale = d3.scale.linear().range([innerHeight, 0]);
  var MaxRange = d3.max (data.map (function (d) { return d.rating; }));

  // Define the chart
  var chart = d3
                .select(".chart")
                .append("svg")
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" +  margin.left + "," + margin.right + ")");

  // Render the chart
  xScale.domain(data.map(function (d){ return d.name; }));

  // TODO: Fix the yScale domain to scale with any ratings range
  yScale.domain([0, MaxRange]);

  // Note all these values are hard coded numbers
  // TODO:
  // 1. Consume the taco data
  // 2. Update the x, y, width, and height attributes to appropriate reflect this
  chart
    .selectAll(".bar")
    .data(data.map(function(d){ return d.rating; }))
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d, i) { return ((innerWidth / data.length) * i) + 20; })
    .attr("width", (innerWidth / data.length) - 20)
    .attr("y", function(d) { return innerHeight - (innerHeight * (d/MaxRange)); })
    .attr("height", function(d) { return innerHeight * (d/MaxRange); });

  // Orient the x and y axis
  var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
  var yAxis = d3.svg.axis().scale(yScale).orient("left");
  console.log(yAxis);

  // TODO: Append X axis
  chart
    .append("g")
    .call(xAxis)
    .attr("transform", "translate(" + 0 + "," + innerHeight + ")")
    .selectAll("text")
    .attr("transform", "rotate(" + -45 + ")")
    .style("text-anchor", "end");


  // TODO: Append Y axis
  chart
    .append("g")
    .call(yAxis);


  // ASSIGNMENT PART 1B
  // Grab the delphi data from the server
  d3.json("/delphidata", function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Data.gender: ", data[0].gender);
    console.log("Data.num: ", data[0]);
    var data = [
      { gender: data[0].gender, number: data[0].number_of_respondents },
      { gender: data[2].gender, number: data[2].number_of_respondents },
      { gender: data[1].gender, number: data[1].number_of_respondents}
    ];

      var margin = {top: 20, right: 10, bottom: 100, left: 70},
      width = 960 - margin.right - margin.left,
      height = 500 - margin.top - margin.bottom;

  var innerWidth  = width  - margin.left - margin.right;
  var innerHeight = height - margin.top  - margin.bottom;

  // TODO: Input the proper values for the scales
  var xScale = d3.scale.ordinal().rangeRoundBands([0, innerWidth], 0);
  var yScale = d3.scale.linear().range([innerHeight, 0]);
  var MaxRange = d3.max (data.map (function (d) { return d.number; }));

  // Define the chart
  var chart = d3
                .select(".chart2")
                .append("svg")
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" +  margin.left + "," + margin.right + ")");

  // Render the chart
  xScale.domain(data.map(function (d){ return d.gender; }));

  // TODO: Fix the yScale domain to scale with any ratings range
  yScale.domain([0, MaxRange]);

  // Note all these values are hard coded numbers
  // TODO:
  // 1. Consume the taco data
  // 2. Update the x, y, width, and height attributes to appropriate reflect this
  chart
    .selectAll(".bar")
    .data(data.map(function(d){ return d.number; }))
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d, i) { return ((innerWidth / data.length) * i) + 20; })
    .attr("width", (innerWidth / data.length) - 20)
    .attr("y", function(d) { return innerHeight - (innerHeight * (d/MaxRange)); })
    .attr("height", function(d) { return innerHeight * (d/MaxRange); })
    .attr("fill", "teal");;

  // Orient the x and y axis
  var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
  var yAxis = d3.svg.axis().scale(yScale).orient("left");
  console.log(yAxis);

  // TODO: Append X axis
  chart
    .append("g")
    .call(xAxis)
    .attr("transform", "translate(" + 0 + "," + innerHeight + ")")
    .selectAll("text")
    .attr("transform", "rotate(" + -45 + ")")
    .style("text-anchor", "end");




  // TODO: Append Y axis
  chart
    .append("g")
    .call(yAxis);




  });

})(d3);