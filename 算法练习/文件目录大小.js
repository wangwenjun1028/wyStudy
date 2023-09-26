/*
题目描述：
一个文件目录的数据格式为：目录id,本目录中文件大小，(子目录id列表)。
其中目录id全局唯一，取值范围[1,200],本目录中文件大小范围[1,1000],子目录id列表个数[0,10]例如：1 20 (2,3)表示目录1中文件总大小是20,有两个子目录，id分别是2和3
现在输入一个文件系统中所有目录信息，以及待查询的目录id,返回这个目录和及该目录所有子目录的大小之和。

输入描述
第一行为两个数字M,N,分别表示目录的个数和待查询的目录id,
·1≤M≤100
·1≤N≤200
接下来M行，每行为1个目录的数据：
目录id本目录中文件大小(子目录id列表)
子目录列表中的子目录id以逗号分隔。

输出描述
待查询目录及其子目录的大小之和

用例1：
输入
3 1
3 15 （）
1 20 （2）
2 10 （3）
输出
45

用例2：
输入：
4 2
4 20 （）
5 30 （）
2 10 （4，5）
1 40 （）
输出：
60
*/

const { test, expect } = require("./test")
const input1 = [3, 1], input2 = [4, 2];
const data1 = [[3, 15, '()'], [1, 20, '(2)'], [2, 10, '(3)']]
const data2 = [[4, 20, '()'], [5, 30, '()'], [2, 10, '(4,5)'], [1, 40, '()']]
const output1 = 45, output2 = 60;
const getResult = (input, data) => {
    const [count, id] = input
    let result = find(id, data)
    return result
}
const find = (id, data) => {
    let total = 0
    //递归查找
    for (let i = 0; i < data.length; i++) {
        const [currentId, currentSize, currentCate] = data[i]
        if (currentId === id) {
            total += currentSize
            const isHasChildCate = currentCate.slice(1, -1).split(",").length > 0
            if (isHasChildCate) {
                currentCate.slice(1, -1).split(",").forEach(item => {
                    total += find(Number(item), data)
                })
            } else {
                break
            }
        }
        continue

    }

    return total
}
test("文件目录大小", () => {
    expect(getResult(input2, data2)).toBe(output2)
})

