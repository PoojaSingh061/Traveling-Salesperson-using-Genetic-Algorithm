function mutate(order, mutationRate) {
    for (var i = 0; i < totalCities; i++) {
      if (random(1) < mutationRate) {
        var indexA = floor(random(order.length));
        var indexB = (indexA + 1) % totalCities;
        swap(order, indexA, indexB);
      }
    }
  }