// 利用promise实现以下功能
// 红灯3s;绿灯2s;黄灯1s;
function light(color,seconds){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(color);
            resolve();
        },seconds*1000)
    })
}
let list=[
    {color:"red",seconds:3},
    {color:"green",seconds:2},
    {color:"yellow",seconds:1}
]

function lightList(list){
    let promise=Promise.resolve();
    list.forEach(elem=>{
        return promise=promise.then(()=>{
            return light(elem.color,elem.seconds);
        })
    })
    promise.then(()=>{
        return  lightList(list)
    })
}

lightList(list)