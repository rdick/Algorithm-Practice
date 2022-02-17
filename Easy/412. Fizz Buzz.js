var fizzBuzz = function(n) {
    let arr = []
    for(i= 1; i < n+1; i++){
        let str = ""
        if (i % 3 == 0) {
            str = str + 'Fizz'
        }
        if (i % 5 == 0) {
            str = str + 'Buzz'
        }
        
        if(str == ""){
            str = str + i
        }
        arr.push(str)
    }
    return arr
};