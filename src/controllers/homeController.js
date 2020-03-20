let getHome = (req, res) => {
  return res.send({
    name: 'Anh',
    age: 21
  });
}

module.exports = {
  getHome: getHome
}
