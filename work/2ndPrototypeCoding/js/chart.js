var data2 = [2, 3, 5, 6, 3, 4];
var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

// var body = d3.select("body");
// var div = body.append("div");
// div.html("Hello, world!");

// d3.select(".mood5")
//   .selectAll("div")
//     .data(data5)
//   .enter().append("div")
//     .style("width", function(d) { return x(d) + "px"; })
//     .text(function(d) { return d; });

// d3.select(".mood4")
//   .selectAll("div")
//     .data(data4)
//   .enter().append("div")
//     .style("width", function(d) { return x(d) + "px"; })
//     .text(function(d) { return d; });

// d3.select(".mood3")
//   .selectAll("div")
//     .data(data3)
//   .enter().append("div")
//     .style("width", function(d) { return x(d) + "px"; })
//     .text(function(d) { return d; });

d3.select(".mood2")
  .selectAll("div")
    .data(data2)
  .enter().append("div")
    .style("height", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });

d3.select(".mood1")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("height", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });


