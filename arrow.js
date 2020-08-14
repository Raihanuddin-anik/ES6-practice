// function doubleIt(num) {
//    return num * 2;  
// }

// const doubleIt = function myfunk(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y = 10) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result3 = doMath(7, 5);
const result = give5();
console.log(result3);