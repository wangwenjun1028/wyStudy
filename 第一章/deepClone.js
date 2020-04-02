// 递归实现深拷贝
var deepClone=obj=>{
    let newObj=Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(var key in obj){
            if(obj.hasOwnProperty(key)){//是否没有继承过来的属性
                if(obj[key] && typeof obj[key]==="object"){
                    newObj[key]=deepClone(obj[key])
                }else{
                    newObj[key]=obj[key];
                }
            }
        }
        return newObj;
    }
}

// 测试一下
let wang={
    name:"wangwenjun",
    age:26,
    girlfriend:{
        name:"zhushan",
        age:24
    },
    son:undefined,
    info:function(){
        console.log("i am boy");
    }
}

let wang2=deepClone(wang);
wang2.girlfriend.name="朱珊";
wang2.info=function(){
    console.log("hello wrold");
}
console.log(wang,wang2)

