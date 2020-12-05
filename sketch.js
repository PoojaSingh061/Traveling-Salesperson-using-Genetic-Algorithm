var cities = [];
var totalCities = 15;

var popSize = 500;
var population = [];
var fitness = [];

var recordDistance = Infinity;
var bestEver;
var currentBest;

var statusP;

function setup() {
  createCanvas(1600, 900);
  var order = [];
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(random(width / 2), random(height));
    cities[i] = v;
    order[i] = i;
  }

  for (var i = 0; i < popSize; i++) {
    population[i] = shuffle(order);
  }
  statusP = createP('').style('font-size', '32pt');
}

function draw() {
  background(0);

  calculateFitness();
  normalizeFitness();
  nextGeneration();

  stroke(255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (var i = 0; i < bestEver.length; i++) {
    var n = bestEver[i];
    vertex(cities[n].x, cities[n].y);
    ellipse(cities[n].x, cities[n].y, 16, 16);
  }
  endShape();

  translate(width/2, 0);
  stroke(255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (var i = 0; i < currentBest.length; i++) {
    var n = currentBest[i];
    vertex(cities[n].x, cities[n].y);
    ellipse(cities[n].x, cities[n].y, 16, 16);
  }
  endShape();
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points, order) {
  var sum = 0;
  for (var i = 0; i < order.length - 1; i++) {
    var cityAIndex = order[i];
    var cityA = points[cityAIndex];
    var cityBIndex = order[i + 1];
    var cityB = points[cityBIndex];
    var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
    sum += d;
  }
  return sum;
}

// Calculate distance in km between 2 coordinates
function distance(latA, longA, latB, longB) {
    latA = radians(latA)
    longA = radians(longA)
    latB = radians(latB)
    longB = radians(longB)

    dlon = longB - longA  
    dlat = latB - latA
    a = Math.sin(dlat / 2)**2 + Math.cos(latA) * Math.cos(latB) * Math.sin(dlon / 2)**2
  
    c = 2 * Math.asin(Math.sqrt(a))  
     
    // Radius of earth in kilometers. Use 3956 for miles 
    r = 6371
       
    return(c * r) 

}

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}
