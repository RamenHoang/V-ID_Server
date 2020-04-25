const tf = require('@tensorflow/tfjs');
require("tfjs-node-save");
const { dbVals } = require('../config/app');

module.exports.suggestStolenStatus = (req, res) => {
  let distance = +req.query.distance;
  let speed = +req.query.speed;

  let loadModel = async () => {
    let model = await tf.loadLayersModel('file://./src/modelML.json/model.json');
    return model;
  }

  loadModel()
    .then(model => {
      let inputTensor = tf.tensor2d([[(distance - dbVals.min_d) / (dbVals.max_d - dbVals.min_d), (speed - dbVals.min_s) / (dbVals.max_s - dbVals.min_s)]]);
      let result = model.predict(inputTensor);

      let resultPredict = result.argMax(1).dataSync()[0];

      if (resultPredict === 0) {
        return res.status(200).send('Không bị trộm');
      } else if (resultPredict === 1) {
        return res.status(200).send('Bị trộm');
      }

      return res.status(500).send('Error');
    });
}
