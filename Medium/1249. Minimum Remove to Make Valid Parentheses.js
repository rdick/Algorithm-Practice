var minRemoveToMakeValid = function(s) {
    let stack = []
    let sSplit = s.split("")
    for(let i = 0; i< sSplit.length; i++) {
        if(sSplit[i] == "(") {
            stack.push(i)
        }
        if(sSplit[i] == ")") {
            if(stack.length) {stack.pop()}
            else (sSplit[i] = "")
        }
    }
    
    console.log(stack)
    for(let x of stack){
        sSplit[x] = ""
    }
    return sSplit.join("")
             
};