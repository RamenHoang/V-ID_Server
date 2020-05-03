const tf = require('@tensorflow/tfjs');
require("tfjs-node-save");
const { dbVals } = require('../config/app');

let loadModel = async () => {
  let model = await tf.loadLayersModel('file://./src/modelML.json/model.json');
  return model;
}

let suggestStolenStatus = async (req, res) => {
  let distance = +req.query.distance;
  let speed = +req.query.speed;

  const status = await isStolenSuggestion(distance, speed);

  if (status === 0) {
    return res.status(200).send('Không bị trộm');
  } else {
    return res.status(200).send('Bị trộm');
  }
}


let isStolenSuggestion = async (distance, speed) => {
  const model = await loadModel();

  let inputTensor = tf.tensor2d([[(distance - dbVals.min_d) / (dbVals.max_d - dbVals.min_d), (speed - dbVals.min_s) / (dbVals.max_s - dbVals.min_s)]]);
  let result = model.predict(inputTensor);

  let resultPredict = result.argMax(1).dataSync()[0];

  return resultPredict;
}

module.exports = {
  suggestStolenStatus: suggestStolenStatus,
  isStolenSuggestion: isStolenSuggestion
}
