// RECURSIVE METHOD
function factorial(num){

    if (num == 0 || num == 1) return 1
    else return num * factorial(num - 1)

}
console.log(`The factorial of 4 using recursive method is ${factorial(4)}`);
console.log(`The factorial of 8 using recursive method is ${factorial(8)}`);



// ITERATIVE METHOD
function factorialTwo(number){
    let output = 1;

    if (number == 0 || number == 1){
        return output
    } else {
        for (let i = number; i >= 1; i--){
            output = output * i;
        }
        return output
    }
}
console.log(`The factorial of 4 using iterative method is ${factorialTwo(4)}`);
console.log(`The factorial of 8 using iterative method is ${factorialTwo(8)}`);