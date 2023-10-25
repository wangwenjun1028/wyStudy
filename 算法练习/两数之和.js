//求两数之和
// 空间换时间，只做一次遍历
const input = 9, data = [2, 7, 11, 15]
const output = [[0, 2], [1, 7]]
const getResult = (data, target) => {
    let result = new Map()
    for (let i = 0; i < data.length; i++) {
        if (result.has(target - data[i])) {
            return [result.get(target - data[i]), i]
        }
        result.set(data[i], i)
    }
    return false
}
console.log(getResult(data, input))