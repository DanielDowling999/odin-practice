function sumSalaries(obj){
    let sum = 0;
    for(person in salaries){
        sum+=obj[person]
    }
    return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

console.log(sumSalaries(salaries))