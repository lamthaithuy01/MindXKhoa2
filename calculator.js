//hằng số Pi
let PI= 3.14;
console.log("Pi : " + PI);

//hàm sum
export function sum(a,b)
{
return a + b;
}

//hàm tính diện tích
export function calculateRectArea(a,b)
{
    let S = a * b
    console.log("Rect Area : " +S)
    return S
}
//hàm tính diện tích tròn
export function calculateCircleArea(r)
{
    let S = r * r * PI
    console.log("Circle Area: "+ S)
    return S
}
let info =
{
    'name' : 'Ni hao ma',
    'country' : 'China',
    'producer' : 'Nị ái ngộ',
    'year' : '2020',
}
export default info
