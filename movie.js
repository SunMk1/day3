//영화 데이터 배열 []
const arr = [
    {name:'베놈',action: 9,comedy: 4},
    {name:'007',action: 10, comedy: 2},
    {name:'극한직업',action: 3,comedy: 10},
    {name:'프리가이',action: 6,comedy: 7 }
]
//타겟 지정
const target = {action:7,comedy:3}
//영화 (((((정렬))))
arr.sort((a,b)=>
{
    const A = (a.action-target.action)+(a.comedy-target.comedy)
    const B = (b.action-target.action)+(b.comedy-target.comedy)

    return A-B
})
//배열속 영화 조사 (액션신, 키스신 등) => 장르 판단
console.log(arr)