"cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu"

var validPalindrome = function(s) {
    start = 0 
    end = s.length - 1
    oddLength = s.length % 2 == 1
    count = 0
    stopLength = oddLength ? [Math.floor(s.length / 2), Math.ceil(s.length/2)] : [s.length / 2,s.length / 2]
    
    if(s.length == 3 && s[0] !== s[2]){
        return false
    }
    
    while(start < stopLength[0] && end > stopLength[1]) {
        console.log(s[start] != s[end], s[start], s[end])
        if(s[start] != s[end]){
            count = count + 1
            if(count > 1){
                return false
            }
            if(s[start+1] == s[end]){
                start ++
            } else if (s[start] == s[end - 1]) {
                end --
            } else {
                return false
            }
        }
        start ++
        end --
    }
    return true
};

