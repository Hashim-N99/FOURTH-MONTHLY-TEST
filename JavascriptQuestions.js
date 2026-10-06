// // 1. Remove Duplicate Values
// let a = [1, 2, 2, 3, 4, 4, 5]
// let n = []
// for (let i=0;i<a.length;i++){
//     let isDuplicate = false
//     for (let j=0;j<n.length;j++){
//         if (a[i] == n[j]){
//             isDuplicate = true
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         n.push(a[i])
//     }
// }
// console.log(n);



// // 2. Find Duplicate Number
// let b = [1, 3, 4, 2, 2]
// for (let i=0;i<b.length;i++){
//     isunique = true
//     for (let j=0;j<b.length;j++){
//         if (i != j && b[i] == b[j]){
//             isunique = false
//             break
//         }
//     }
//     if (isunique == false){
//         console.log(b[i]);
        
//     }
// }



// // 3. Find Common Elements
// const a = [1, 2, 3, 4, 5];
// const b = [3, 4, 5, 6, 7];
// const n = []
// for (let i=0; i<a.length; i++){
//     for (let j=0; j<b.length; j++){
//         if (a[i] == b[j]) {
//             n.push(a[i])
//         }
//     }
// }
// console.log(n);



// 4. Asynchronous Summation
function sumAsync(a, b){
    return a + b
}
(async () => {
    const sum = await sumAsync(10, 20);
    console.log(sum);
})()