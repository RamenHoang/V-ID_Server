let getHome = (req, res) => {
  console.log("Get Home");
  return res.status(200).send({
    name: 'Anh',
    age: 21
  });
}

module.exports = {
  getHome: getHome
}
