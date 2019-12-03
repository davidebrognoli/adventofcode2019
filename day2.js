const originalInput = [
  1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,6,27,1,9,27,31,1,31,10,35,2,13,35,39,1,39,10,43,1,43,9,47,1,47,13,51,1,51,13,55,2,55,6,59,1,59,5,63,2,10,63,67,1,67,9,71,1,71,13,75,1,6,75,79,1,10,79,83,2,9,83,87,1,87,5,91,2,91,9,95,1,6,95,99,1,99,5,103,2,103,10,107,1,107,6,111,2,9,111,115,2,9,115,119,2,13,119,123,1,123,9,127,1,5,127,131,1,131,2,135,1,135,6,0,99,2,0,14,0
];

const retrieveIndexes = (currentIndex, input) => {
  return [input[currentIndex + 1], input[currentIndex + 2], input[currentIndex + 3]]
}

const add = (currentIndex, input) => {
  const [a, b, total] = retrieveIndexes(currentIndex, input);
  input[total] = input[a] + input[b];
  return input;
}

const multiply = (currentIndex, input) => {
  const [a, b, total] = retrieveIndexes(currentIndex, input);
  input[total] = input[a] * input[b];
  return input;
}

const makeARound = (input) => {
  let currentIndex = 0;
  while (currentIndex < input.length - 1) {
    const operationCode = input[currentIndex];
    let proceed = true;
    switch (operationCode) {
      case 1:
        add(currentIndex, input);
        break;
      case 2:
        multiply(currentIndex, input);
        break;
      case 99:
        proceed = false;
        break;
      default: 
        console.log('EXIT', currentIndex);
        proceed = false;
        break;
    }
    if (proceed) {
      currentIndex = currentIndex + 4;
    } else {
      break;
    }
  }
  return input[0];
}

for (i = 0; i < 100; i++) {
  for (j = 0; j < 100; j++) {
    const input = [...originalInput];
    input[1] = i;
    input[2] = j;
    let result = makeARound(input);
    if (result === 19690720) {
      console.log(i, j);
      console.log(100 * i + j);
    }
  }
}