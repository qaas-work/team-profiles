// find the sum of all the multiples of 3 or 5 below 1000.

function multiplication(limit){
    let sum = 0
    let array = []
    for (let i = 0; i <= 1000; i++){
        if(i%3 === 0 || i%5 === 0){
            array.push(i)
            sum = sum + i;
        }
         }
        //  return array
         return sum ;
};
console.log(multiplication());
