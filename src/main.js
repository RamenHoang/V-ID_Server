const tf = require('@tensorflow/tfjs');
require("tfjs-node-save");

/**
 * Prepare data to train model
 * distance (m)
 * speed (m/s)
 */
let data =
  [
    { distance: 24, speed: 9, status: 'stolen' },
    { distance: 1, speed: 0, status: 'no_stolen' },
    { distance: 19, speed: 12, status: 'stolen' },
    { distance: 3, speed: 2, status: 'no_stolen' },
    { distance: 29, speed: 9, status: 'stolen' },
    { distance: 1, speed: 0, status: 'no_stolen' },
    { distance: 2, speed: 1, status: 'no_stolen' },
    { distance: 17, speed: 6, status: 'stolen' },
    { distance: 3, speed: 0, status: 'no_stolen' },
    { distance: 23, speed: 8, status: 'stolen' },
    { distance: 25, speed: 9, status: 'stolen' },
    { distance: 36, speed: 13, status: 'stolen' },
    { distance: 2, speed: 0, status: 'no_stolen' },
    { distance: 1, speed: 0, status: 'no_stolen' },
    { distance: 3, speed: 1, status: 'no_stolen' },
    { distance: 2, speed: 1, status: 'no_stolen' },
    { distance: 3, speed: 1, status: 'no_stolen' },
    { distance: 29, speed: 10, status: 'stolen' },
    { distance: 22, speed: 9, status: 'stolen' },
    { distance: 30, speed: 11, status: 'stolen' },
    { distance: 29, speed: 12, status: 'stolen' },
    { distance: 20, speed: 7, status: 'stolen' },
    { distance: 25, speed: 9, status: 'stolen' },
    { distance: 12, speed: 3, status: 'stolen' },
    { distance: 13, speed: 4, status: 'stolen' },
    { distance: 14, speed: 3, status: 'stolen' },
    { distance: 10, speed: 3, status: 'stolen' },
    { distance: 11, speed: 4, status: 'stolen' },
    { distance: 9, speed: 3, status: 'stolen' },
    { distance: 1, speed: 1, status: 'no_stolen' },
    { distance: 33, speed: 11, status: 'stolen' },
    { distance: 23, speed: 8, status: 'stolen' },
    { distance: 29, speed: 11, status: 'stolen' },
    { distance: 23, speed: 8, status: 'stolen' },
    { distance: 14, speed: 14, status: 'stolen' },
    { distance: 4, speed: 2, status: 'no_stolen' },
    { distance: 29, speed: 12, status: 'stolen' },
    { distance: 30, speed: 11, status: 'stolen' },
    { distance: 20, speed: 8, status: 'stolen' },
    { distance: 23, speed: 8, status: 'stolen' },
    { distance: 29, speed: 11, status: 'stolen' },
    { distance: 33, speed: 11, status: 'stolen' },
    { distance: 3, speed: 2, status: 'no_stolen' },
    { distance: 2, speed: 1, status: 'no_stolen' },
    { distance: 15, speed: 6, status: 'stolen' },
    { distance: 1, speed: 0, status: 'no_stolen' },
    { distance: 18, speed: 7, status: 'stolen' },
    { distance: 2, speed: 1, status: 'no_stolen' },
    { distance: 30, speed: 11, status: 'stolen' },
    { distance: 1, speed: 1, status: 'no_stolen' },
    { distance: 1, speed: 0, status: 'no_stolen' },
    { distance: 30, speed: 13, status: 'stolen' },
    { distance: 2, speed: 0, status: 'no_stolen' },
    { distance: 3, speed: 0, status: 'no_stolen' },
    { distance: 2, speed: 1, status: 'no_stolen' },
    { distance: 15, speed: 6, status: 'stolen' },
    { distance: 15, speed: 6, status: 'stolen' },
    { distance: 25, speed: 9, status: 'stolen' },
    { distance: 33, speed: 11, status: 'stolen' },
    { distance: 2, speed: 0, status: 'no_stolen' },
    { distance: 21, speed: 8, status: 'stolen' },
    { distance: 20, speed: 7, status: 'stolen' },
    { distance: 30, speed: 10, status: 'stolen' },
    { distance: 26, speed: 9, status: 'stolen' },
    { distance: 22, speed: 8, status: 'stolen' },
    { distance: 5, speed: 2, status: 'no_stolen' },
    { distance: 35, speed: 12, status: 'stolen' },
    { distance: 25, speed: 9, status: 'stolen' },
    { distance: 2, speed: 2, status: 'no_stolen' },
    { distance: 0, speed: 0, status: 'no_stolen' },
    { distance: 34, speed: 11, status: 'stolen' },
    { distance: 10, speed: 3, status: 'stolen' },
    { distance: 13, speed: 3, status: 'stolen' },
    { distance: 12, speed: 3, status: 'stolen' },
    { distance: 10, speed: 4, status: 'stolen' },
    { distance: 15, speed: 4, status: 'stolen' },
    { distance: 9, speed: 3, status: 'stolen' },
    { distance: 0, speed: 2, status: 'no_stolen' },
    { distance: 23, speed: 8, status: 'stolen' },
    { distance: 0, speed: 2, status: 'no_stolen' },
    { distance: 2, speed: 0, status: 'no_stolen' },
    { distance: 32, speed: 11, status: 'stolen' },
    { distance: 22, speed: 7, status: 'stolen' },
    { distance: 36, speed: 12, status: 'stolen' },
    { distance: 0, speed: 2, status: 'no_stolen' },
    { distance: 3, speed: 0, status: 'no_stolen' },
    { distance: 0, speed: 2, status: 'no_stolen' },
    { distance: 25, speed: 8, status: 'stolen' },
    { distance: 29, speed: 9, status: 'stolen' },
    { distance: 2, speed: 0, status: 'no_stolen' },
    { distance: 26, speed: 7, status: 'stolen' },
    { distance: 16, speed: 7, status: 'stolen' },
    { distance: 25, speed: 8, status: 'stolen' },
    { distance: 3, speed: 1, status: 'no_stolen' },
    { distance: 36, speed: 0, status: 'stolen' },
    { distance: 31, speed: 1, status: 'stolen' },
    { distance: 50, speed: 1, status: 'stolen' },
    { distance: 29, speed: 0, status: 'stolen' },
    { distance: 43, speed: 0, status: 'stolen' },
    { distance: 27, speed: 1, status: 'stolen' },
    { distance: 24, speed: 0, status: 'stolen' },
    { distance: 28, speed: 1, status: 'stolen' },
    { distance: 15, speed: 1, status: 'stolen' },
    { distance: 18, speed: 0, status: 'stolen' },
    { distance: 17, speed: 0, status: 'stolen' },
    { distance: 18, speed: 1, status: 'stolen' }
  ];

/*
 * 1. Normalize data
 */

let min_d = data[0].distance,
    min_s = data[0].speed, 
    max_d = min_d, 
    max_s = min_s;

for (let i = 1; i < data.length; i++) {
  if (min_d > data[i].distance) {
    min_d = data[i].distance;
  }
  if (min_s > data[i].speed) {
    min_s = data[i].speed;
  }
  if (max_d < data[i].distance) {
    max_d = data[i].distance;
  }
  if (max_s < data[i].speed) {
    max_s = data[i].speed;
  }
}

// console.log(min_d, max_d, min_s, max_s);

let normalizedData = []; //raw input
let status = []; //  raw output
let statusName = ['no_stolen', 'stolen'];


data.map(item => {
  normalizedData.push([
    (item.distance - min_d) / (max_d - min_d),
    (item.speed - min_s) / (max_s - min_s)
  ]);

  status.push(statusName.indexOf(item.status));
});

// console.log('data', iData);
// console.log('-----------------------');
// console.log('status', status);


let tfInput = tf.tensor2d(normalizedData); // tensorflow datatype input

let tfStatusTensor = tf.tensor1d(status, 'int32');

let tfOutput = tf.oneHot(tfStatusTensor, 2);

/**
 * 2. Create model
 */
var model = tf.sequential() // input -> output

// Make layers
let hiddenLayer = tf.layers.dense({
  units: 59,
  activation: 'sigmoid',
  inputDim: 2
});

let outputLayer = tf.layers.dense({
  units: 2,
  activation: 'softmax'
});

model.add(hiddenLayer);
model.add(outputLayer);

model.compile({
  optimizer: tf.train.sgd(1),
  loss: 'meanSquaredError'
});

// loss: 'meanSquaredError',

/**
 * 3. Train and save model
 */

let train = async () => {
  let option = {
    epochs: 1000,
    validationSplit: 0.1,
    shuffle: true
  };

  let result = await model.fit(tfInput, tfOutput, option);
  return result;
}

train().then(async data => {
  console.log('Learning rate:', 1);
  console.log('Loss function: ', 'meanSquaredError');
  console.log(data.history.loss.reverse()[0]);
  await model.save('file://./src/modelML.json');
});




// let calcDistance = (lat1, lng1, lat2, lng2) => {
//   var R = 6371e3; // metres
//   var φ1 = lat1.toRadians();
//   var φ2 = lat2.toRadians();
//   var Δφ = (lat2 - lat1).toRadians();
//   var Δλ = (lon2 - lon1).toRadians();

//   var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//     Math.cos(φ1) * Math.cos(φ2) *
//     Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   return R * c / 1000;
// }



// let loadModel = async () => {
//   let model = await tf.loadLayersModel('file://./src/modelML.json/model.json');
//   return model;
// }

// loadModel()
// .then(model => {
//   let inputTensor = tf.tensor2d([[(10 - min_d) / (max_d - min_d), (3 - min_s) / (max_s - min_s)]]);
//   let result = model.predict(inputTensor);

//   console.log(result.argMax(1).dataSync());
// })
