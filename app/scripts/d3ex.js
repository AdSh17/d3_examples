var width = 900, height = 300, pad = 20, left_pad = 100;
var x = d3.scale.ordinal().rangeRoundBands([left_pad, width - pad],0.1);
var y = d3.scale.linear().range([height-pad, pad]);