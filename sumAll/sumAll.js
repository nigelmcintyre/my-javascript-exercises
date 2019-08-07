const sumAll = function(num1, num2) {
    let numIt = 0;
    let pos = 0;
    try {
        let error = "ERROR";
        //throw error if either input is negative
        if(num1<0 || num2<0){
            throw(error);
        //throw error if anything other than intergers passed in as arguments
        } else if (Number.isInteger(num1) == false ||
            Number.isInteger(num2) == false){
            throw(error);
        } else {
            //if first number if bigger switch them
            if(num1>num2){
                numIt = num1;
                pos = num2;
            } else {
                numIt = num2;
                pos = num1;
            }
            
            let sum = 0;
            //add n to n+1 to n+2 etc.
            while(pos<=numIt){
                sum+=pos;
                pos++;
            }
            
            return sum;
        }
    } catch (error) {
        return error;
    }
    
}
sumAll(2, "4");
module.exports = sumAll
