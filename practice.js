// recursion
// a process (a function) that calls itself 

// call stack
// it si a stack data structure 
// any time a function is invoked it is placed(pushed) on the top 
// of the call stack
// when javascript sees the return keyword or when the function ends,
// the compiler will remove(pop)


function takeShower(){
    return 'showering';
}

function eatBreakfast(){
    let meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood(){
    let items =['oatmeal', 'eggs', 'protein shake'];
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp(){
    takeShower();
    eatBreakfast();
    console.log('ok ready to go to work!');
}

wakeUp();