
//Dummy data
var data = [
     { name:"India",      income:153000, life: 78, pop:6378, color: "green"},
     { name:"Nepal",      income:273000, life: 87, pop:5084, color: "red" },
     { name:"Brazil",     income:300000, life: 87, pop:5084, color: "yellow" },
     { name:"Hongkong",   income:893000, life: 87, pop:5084, color: "pink" },
     { name:"Italy",      income:953000, life: 87, pop:5084, color: "blue" },
     { name:"Bangladesh", income:597000, life: 50, pop:3407, color: "grey" }
  ];
// Create SVG container
  var svg = d3.select("#mySVG").append("svg")
        .attr("width", 1000)
        .attr("height", 1000)
        .style("fill", "#D0D0D0");
// Create SVG elements from data !
    svg.selectAll("circle")                  // create virtual circle template
      .data(data)                            // bind data
      .enter()                                 // for each row in data...
      .append("circle")                      // bind circle & data row such that... 
        .attr("id", function(d) { return d.name })           // set the circle's id according to the country name
        .attr("cx", function(d) { return d.income /1000  })  // set the circle's horizontal position according to income 
        .attr("cy", function(d) { return d.life })           // set the circle's vertical position according to life expectancy 
        .attr("r",  function(d) { return d.pop /1000 *2 })   // set the circle's radius according to country's population 
        .attr("fill",function(d){ return d.color });         // set the circle's color according to country's color
    