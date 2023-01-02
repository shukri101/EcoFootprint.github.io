function calculate() {
  // Get user input
  var distance = document.getElementById("distance").value;
  var fuel = document.getElementById("fuel").value;
  var equipment = document.getElementById("equipment").value;
  var casing = document.getElementById("casing").value;

  // Calculate carbon footprint
  var carbonFootprint = (distance * 1) + (fuel * 10) + (equipment * 2000) + (casing * 4);

  // Calculate number of years needed to grow trees to offset carbon footprint
  // Assume tree has a carbon capture rate of 25 kg CO2 when it matures at 10 years,
  // and a carbon capture rate of 20% of 25 kg CO2 for the first 10 years
  var treeLifetime = 60;
  var treeCarbonCapture = 25;
  var treeYoungCapture = treeCarbonCapture * 0.2;
  var treeCaptureRate = (treeYoungCapture * 10) + (treeCarbonCapture * (treeLifetime - 10));
  var yearsNeeded = carbonFootprint / treeCaptureRate;

  // Calculate number of trees needed to offset carbon footprint
  var trees = carbonFootprint / 25;
  var tbh = (trees /20) / 30;

  // Update carbon, tree count, and years needed in HTML
  document.getElementById("carbon").innerHTML = carbonFootprint + " kg CO2";
  document.getElementById("tbh").innerHTML = tbh;
  document.getElementById("years").innerHTML = yearsNeeded + " years";

  // Update calculations section in HTML
  document.getElementById("distance-calc").innerHTML = distance;
  document.getElementById("fuel-calc").innerHTML = fuel;
  document.getElementById("equipment-calc").innerHTML = equipment;
  document.getElementById("casing-calc").innerHTML = casing;
  document.getElementById("carbon-calc").innerHTML = carbonFootprint + " kg CO2";
}

function showCalculations() {
  var calculations = document.getElementById("calculations");
  if (calculations.style.display === "none") {
    calculations.style.display = "block";
  } else {
    calculations.style.display = "none";
  }
}

