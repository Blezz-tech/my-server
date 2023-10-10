module.exports = function (req, res, next) {
  console.log('middleware work!');
  res.send('product <br> widdleware work! <br>');
};
