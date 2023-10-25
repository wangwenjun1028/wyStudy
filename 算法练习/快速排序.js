//时间复杂度：n*log(n)
var arr = [3, 2, 5, 8, 6, 5, 1, 9, 8]
function quicklySort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let tempIndex = Math.floor(arr.length / 2)
    let temp = arr.splice(tempIndex, 1)
    console.log(temp)
    console.log(arr)
    // let left = arr.slice(0, tempIndex)
    // let right = arr.slice(tempIndex)
    // console.log(left, right)
    let left = [], right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= temp[0]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quicklySort(left).concat(temp, quicklySort(right))

}
console.log(quicklySort(arr))