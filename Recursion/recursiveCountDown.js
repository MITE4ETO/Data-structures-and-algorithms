
function countDown(num){
    if(num <= 0){
        console.log("All done");
        return; // We have to use return in order to stop it, otherwise it will continue the recursion.
    }
    console.log(num);
    num--;
    countDown(num)
}


console.log(countDown(5));


// Non-recursive way
/*
function countDown(num){
    for(let i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done");
}
*/




