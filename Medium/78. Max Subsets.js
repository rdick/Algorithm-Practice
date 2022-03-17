var subsets = function(nums) {
    result = []
    
    const dfs = (current,index) => { 
        result.push(current)
        console.log(current)
        for(let i = index; i < nums.length; i++){            
            dfs(current.concat(nums[i]),i+1)
        }
    }
    
        
    
    dfs([],0)
    return result
    
};


// STATEMENT 1
// Every student eats every menu item - everytime each student eats a meal they recieve a like

for(let student = 0; student < AllStudents.length; student++) {
    for(let meal = 0; meal < AllItemsOnMenu.length; meal++) {
        student eats meal <=> recieve 1 Like
     }
}

Likes = total students X total meal options

// STATEMENT 2
// Every student eats every menu item - everytime a student finishes eating the whole menu that student recieves a like

for(let student = 0; student < AllStudents.length; student++) {
        student eats AllItemsOnMenu <=> recieve 1 Like
}

Likes   = total students X Menu 
        = total students X 1

// STATEMENT 3
// Every student eats every menu item  - When all students eat all menu items they recieve 1 like

All Students Eat All Menu Items <=> Receive 1 Like

Likes   = 1