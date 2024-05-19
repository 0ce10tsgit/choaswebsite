import * as float from './ftmath.js'
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function do_math(r,y,source){
  var y = y
  let y_vals = []
  let iteration = []
  for(let i = 0; i < 50; i++){
    y_vals.push(y)
    iteration.push(i)
    y = float.multiply(float.multiply(r,y),(float.subtract(1,y)))
  }
  var data = [{
    x: iteration,
    y: y_vals,
    mode: "lines",
    type: "scatter"
  }];
  var layout = {
    xaxis: {title: "Iteration"},
    yaxis: {title: "Point value"},
    title: "Iteration and point value"
  };
  Plotly.newPlot(source, data, layout);
}
function submit(){
  let params = document.getElementById("params").split(':')
  do_math(parseFloat(params[0]),parseFloat(params[1]))
}
function the_end(){
  let num = 0.9
  var data_x = []
  var data_r = []
  while (num != 4){
    let y = 0.40
    let final = []
    for(let i = 0; i < 100; i++){
      y = float.multiply(float.multiply(num,y),(float.subtract(1,y)))
      if (i > 60){
        data_x.push(y)
        data_r.push(num)
      }
    }
    num = float.add(num,0.0025);
    }
  var data = [{
  x: data_r,
  y: data_x,
  mode: 'markers',
  marker: {
    size: 2
  },
  type: "scatter"
  }];
  var layout = {
    xaxis: {title: "R - growth rate"},
    yaxis: {title: "Point value"},
    title: ""
  }
  Plotly.newPlot("final", data, layout);
  }
do_math(2.6,0.40,'point_graph')
do_math(3.2,0.40,'point_graph1')
do_math(3.5,0.40,'point_graph12')
do_math(3.9,0.40,'point_graph2')
the_end()