const repeatString = function(times) {
    
    let string = "hey";
    let repeatedString = "";
    if(times < 0 ){
        console.log("ERROR");
    } else {
        while (times > 0) {
            repeatedString += string;
            time--;
        }
    }
    

    return repeatedString;    

}
console.log(repeatString(-1));
module.exports = repeatString
