
function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3 ]));

 //  \\?\D:\frontendmasters lessons\data structures algorithms\[FreeCourseSite.com] Udemy - JavaScript Algorithms and Data Structures Masterclass\[FreeCourseSite.com] Udemy - JavaScript Algorithms and Data Structures Masterclass\[FreeCourseSite.com] Udemy - JavaScript Algorithms and Data Structures Masterclass\7. Recursion