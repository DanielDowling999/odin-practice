function getAverageAge(arr){
    sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum+= arr[i].age;
        console.log(arr[i].age)
    }
    return sum/arr.length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let jack = {name: "Jack", age:61};

let arr = [ john, pete, mary, jack ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28