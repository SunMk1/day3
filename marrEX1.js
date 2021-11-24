const arr = [
    [90,87,140],
    [120,130,150],
    [180,240,200],
    [180,140,190]
]
const parr = []
//최고 분기 = 분기별 평균
let sum = 0
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum+=arr[i][j]
    }
    const avg = (sum/3).toFixed(2)
    parr.push(avg)
}
console.log(parr)

//최대 평균


//가장 높은 매출을 기록한 분기
// let sales = 0
// for (let i = 0; i < arr.length ; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j])
//         if (sales<arr[i][j])
//             sales = arr[i][j]
//     }
// }
// console.log(`최고매출은 ${sales}`)
//
// //최고 매출 월
// let ownqt= 0
// let twoqt= 0
// let threeqt= 0
// let fourqt= 0
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (i===0)
//             ownqt= arr[i][j]
//         if (i===1)
//            twoqt= arr[i][j]
//         if (i===2)
//             threeqt= arr[i][j]
//         if (i===3)
//             fourqt= arr[i][j]
//     }
// }
// console.log(`1월 최고매출은 ${ownqt}`)
// console.log(`2월 최고매출은 ${twoqt}`)
