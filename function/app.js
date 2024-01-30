// function doSomething () {
//     console.log("I am just doing somethings -> void");
// }

//void 

const numbers = [10, 20, 30, 40, 50];

for (const num of numbers){
    console.log(num);
}
console.log(numbers);

function doSomething (someParm) {
    console.log("I do somethings");
    console.log("I do somethings");

    someParm()

    console.log("I do somethings");
    console.log("I do somethings");
}

doSomething(function(){console.log("I am callback")})