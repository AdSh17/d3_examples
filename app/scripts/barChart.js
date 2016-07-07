
        //var dataset = [ 5, 10, 15, 2, 7, 20, 10, 9 ,25, 15 , 40 ];

var dataset = [];                        //Initialize empty array
var h =  500 , w = 500;
for (var i = 0; i < 25; i++) 
    {      //Loop 25 times
		var newNumber = Math.round(Math.random() * 30);  //New random number (0-25)
		dataset.push(newNumber);             //Add new number to array
	}

    d3.select("body")
      .selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", function(d) {
            var barHeight = d * 5;
            return barHeight + "px";
       });   


    
     
  

        