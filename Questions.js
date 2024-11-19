// Q1: Print values from 1-100 


// for(let i = 1; i<=100; i++){
//     console.log(i)
// }


// q2: Print values from 100-1:


// for(let i = 100 ; i>=1; i--){
//     console.log(i)
// }




// q3: Print hello 10 times 


// for(let i = 1; i<=10; i++){
//      console.log("Hello World")
// }


// q4: print all numbers div by 5  from 1-100 


// 100 times:
// for(let i = 1; i<=100; i++){
//     //    console.log(i)
//     if(i%5 == 0){
//         console.log(i)
//         // console.log(i, "div by 5")
//     }
//     // else{
//     //     console.log(i, "not div by 5")
//     // }
// }


// for(let i = 5; i<=100; i = i+5){
//     console.log(i) // 5,10
// }














// q5: count all numbers div by 5  from 1-100

// let count = 0
// for(let i = 1; i<=100; i++){
//     if(i%5 == 0){
//          count = count+1
//     }
// }

// console.log(count) // 20








// q6: find sum of all numbers div by 5  from 1-100


let sum = 0
// for(let i = 1; i<=10; i++){
//     if(i%5 == 0){// i =  5,10
//         //  console.log(i)
//         // count = count+1
//         sum = sum + i // 5
//     }
// }


for(let i = 1; i<=5; i++){
     sum = sum+i 
    //  sum = 0 + 1 => 1
    // sum = sum+ i => 1 + 2 => 3
    // sum = sum + i => 3 + 3 => 6
    // sum = sum + i => 6 + 4 => 10
    // sum = sum + i => 10 + 5 => 15
}

console.log(sum) // 1050


