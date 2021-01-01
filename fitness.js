function calculateFitness() {
    var currentRecord = Infinity;
    for (var i = 0; i < population.length; i++) {
      var d = calcDistance(cities, population[i]);
      if (d < recordDistance) {
        recordDistance = d;
        bestEver = population[i];
      }
      if (d < currentRecord) {
        currentRecord = d;
        currentBest = population[i];
      }
  
      fitness[i] = 1 / (pow(d, 8) + 1);
    }
  }
  
  function normalizeFitness() {
    var sum = 0;
    for (var i = 0; i < fitness.length; i++) {
      sum += fitness[i];
    }
    for (var i = 0; i < fitness.length; i++) {
      fitness[i] = fitness[i] / sum;
    }
  }