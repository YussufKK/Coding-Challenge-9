const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
d3.select("#container")
  .selectAll(".data-point")
  .data(data)
  .enter()
  .append("div")
  .attr("class", "data-point")
  .on("mouseover", function(event) {
      d3.select(this)
        .style("background-color", "firebrick");
  })
  .on("mouseout", function(event) {
      d3.select(this)
        .style("background-color", "steelblue");
  });