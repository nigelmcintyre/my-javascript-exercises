const leapYears = function(years) {

    if(years % 400 == 0){
        return true;
    } else if(years % 100 != 0 && years % 4 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(leapYears(800));
module.exports = leapYears
