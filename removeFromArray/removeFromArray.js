const removeFromArray = function() {
    //separating array arguments
    let arr = arguments[0];
    let remove = [];
    //creating array of the remaining arguments
    for(let i = 1; i<arguments.length;i++){
        remove.push(arguments[i]);
    }

    //comparing each element of remove[]
    for(let i=0;i<remove.length;i++){ 
        //to each element of arr[] and
        for(let j=0;j<arr.length;j++){ 
            //removing matching elements from arr[]
            if(remove[i] == arr[j]){
                arr.splice(j,1);
            }
        }
    }

    return arr;

}

console.log(removeFromArray([1,2,3,"hiya"], "hiya",1,3));
module.exports = removeFromArray
