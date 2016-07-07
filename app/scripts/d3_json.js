    //d3.json("data1.json",function(data){ 
 d3.json("data.json",function(data){
 var svg = d3.select("div").append("svg")
           .attr("width", 500)
           .attr("height", 500)

 svg.selectAll("div")                  // create virtual rectangle template
    .data(data)                            // bind data
    .enter()                                 // for each row in data...
    .append("div")                      // bind rect & data row such that... 
    .attr("width", function(d) {return d})
    .attr("height", 48)  // 
    .attr("x", function(d,i) { return i * 70 ;})           
    .attr("fill","green");   
})
