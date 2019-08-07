const reverseString = function(string) {

    let stringArr = string.split("");
    
    let flippedArr = [];
    for(let i=1;i<stringArr.length+1;i++){
        let pos = stringArr.length-i;
        
        flippedArr.push(stringArr[pos]);
        
    }

    return flippedArr.join("");
    
}
console.log(reverseString("123 ."));
module.exports = reverseString
