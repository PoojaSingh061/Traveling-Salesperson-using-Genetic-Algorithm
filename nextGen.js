function pickOne(list, prob) {
    var index = 0;
    var r = random(1);
  
    while (r > 0) {
      r = r - prob[index];
      index++;
    }
    index--;
    return list[index].slice();
  }

function nextGeneration() {
    var newPopulation = [];
    for (var i = 0; i < population.length; i++) {
      var orderA = pickOne(population, fitness);
      var orderB = pickOne(population, fitness);
      var order = crossOver(orderA, orderB);
      mutate(order, 0.01);
      newPopulation[i] = order;
    }
    population = newPopulation;
  }
    