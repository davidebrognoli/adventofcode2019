const values = [
    106404,140515,142745,120767,79665,54235,127391,72207,70799,79485,103994,129583,132791,95135,121194,129425,64861,123233,132805,87916,111395,126625,113045,61704,65413,145820,75988,74717,115137,85331,86833,86063,85464,139738,103372,101942,52741,77660,112745,103109,106301,141714,74546,55474,106747,140234,60426,145867,144810,94179,101606,77763,139291,104246,148513,126828,64624,139058,85839,86636,62198,137358,76711,87848,141711,114079,71639,95896,104522,61929,72199,142790,137736,123437,91872,127661,111179,51548,83452,91196,117798,84484,75517,83820,97407,89181,71428,72758,73076,109957,50601,74571,65556,129765,80626,126995,73480,71360,103288,85670
];

// FIRST IMPLEMENTATION //
const getFuel = (value) => {
    const fuel = Math.floor(value / 3) - 2;
    return fuel > 0 ? fuel : 0;
}

const moduleFuel = (value) => {
  let tot = getFuel(value);
  let returnValue = tot;
  while (tot > 0) {
    tot = getFuel(tot);
    returnValue = returnValue + tot;
  }
  return returnValue;
}

const result = values.reduce((total, item) => {
  const itemFuel = moduleFuel(item);
  return total + itemFuel;
}, 0);

// SECOND IMPLEMENTATION //
function getRecursiveFuel(module, accumulator) {
  const fuel = Math.floor(module / 3) - 2;
  if (fuel > 0) {
    return getRecursiveFuel(fuel, fuel + accumulator)  
  } 
  return accumulator
}

const recursiveResult = values.reduce((total, item) => {
  const itemFuel = getRecursiveFuel(item, 0);
  return total + itemFuel;
}, 0);

console.log('FIRST IMPLEMENTATION >>>> ', result);
console.log('SECOND IMPLEMENTATION >>>> ', recursiveResult);