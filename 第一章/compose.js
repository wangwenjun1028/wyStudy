// 复合函数
// 计算(10+10)*10
let add = x => x + 10;
let mul = x => x * 10;
// function compose(f, g) {
//     return function (x) {
//         return f(g(x))
//     }
// }
// let result = compose(mul, add);
function compose() {
    let args = [].slice.call(arguments);
    return function (x) {
        return args.reduceRight(function (res, cb) {//从右往左执行
            return cb(res);
        }, x)
    }

}
console.log(compose(mul, add)(10));