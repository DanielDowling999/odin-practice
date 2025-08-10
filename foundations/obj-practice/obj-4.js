function multiplyNumeric(obj){
    for (key in obj){
        val = obj[key]
        if (Number.isFinite(val)){
            obj[key] = val*2;
        }
    }

}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu.width);
console.log(menu.height)