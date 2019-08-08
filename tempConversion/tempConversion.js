const ftoc = function(farenheight) {
  farenheight = ((farenheight - 32)*0.55555555556);
  farenheight = Math.round( farenheight * 10) / 10;
  return farenheight;

}

const ctof = function(celcius) {
  celcius = ((celcius * 1.8)+32);
  celcius = Math.round(celcius * 10) / 10;
  return celcius;
}
console.log(ftoc(32));
console.log(ctof(163.8));
module.exports = {
  ftoc,
  ctof
}
