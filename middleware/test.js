module.exports = function (err, req, res, next) {
  console.log('middleware work!');
  res.send('product \n widdleware work!');
};
