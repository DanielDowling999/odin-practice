function sortByAge(arr){
    for (let i = 0; i < arr.length - 1; i++){
        let minid = i;
        for (let j = i+1; j< arr.length; j++){
            if (arr[j].age < arr[minid].age){
                minid = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minid]
        arr[minid] = temp;
    }
}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete