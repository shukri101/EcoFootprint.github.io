function calculate() {
  // Get user input
  var distance = document.getElementById("distance").value;
  var fuel = document.getElementById("fuel").value;
  var equipment = document.getElementById("equipment").value;
  var casing = document.getElementById("casing").value;

  // Calculate carbon footprint
  var carbonFootprint = (distance * 1) + (fuel * 10) + (equipment * 2000) + (casing * 4);

  // Calculate number of trees needed to offset carbon footprint
  var trees = carbonFootprint / 25;
  var tbh = (trees /20) / 20;

  // Update carbon and tree count in HTML
  document.getElementById("carbon").innerHTML = carbonFootprint + " kg CO2";
  document.getElementById("tbh").innerHTML = tbh;
}
