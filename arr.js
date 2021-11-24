const arr = [54,22,14,64,95,85]

// 평균 점수합 / 개수
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum+=arr[i]
    console.log(`sum:${sum}`)
}
let avg = (sum/arr.length).toFixed(3)
console.log(`avg:${avg}`)

// 최저
let min = 100
for (let i = 0; i < arr.length; i++) {
    const score = arr[i]
    if (score<=min)
        min=score
}
console.log(`min:${min}`)

// 최고
let max = 0
for (let i = 0; i < arr.length; i++) {
    const score = arr[i]
    if (score>=max)
        max=score
}
console.log(`max:${max}`)
