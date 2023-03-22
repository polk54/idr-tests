// Set the data for the chart
var data = [
  { name: "Brazil", value: 112.4 },
  { name: "India", value: 96.3 },
  { name: "South Africa", value: 82.9 },
  { name: "Indonesia", value: 78.3 },
  { name: "Mexico", value: 67.6 },
  { name: "Russia", value: 60.4 },
  { name: "Turkey", value: 53.8 },
  { name: "Argentina", value: 47.0 },
  { name: "China", value: 44.6 },
  { name: "Thailand", value: 42.3 },
];

// Set the dimensions and margins of the chart
var margin = { top: 20, right: 30, bottom: 40, left: 100 },
  width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// Set the ranges
var x = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.value)])
  .range([0, width]);

var y = d3
  .scaleBand()
  .range([height, 0])
  .domain(data.map((d) => d.name))
  .padding(0.1);

// Create the SVG element and append it to the div
var svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Add the X axis
svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add the Y axis
svg.append("g").call(d3.axisLeft(y));

// Add the bars
svg
  .selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", 0)
  .attr("y", (d) => y(d.name))
  .attr("width", (d) => x(d.value))
  .attr("height", y.bandwidth())
  .attr("fill", "#69b3a2");
