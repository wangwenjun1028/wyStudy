/*
题目描述
IGMP协议中响应报文和查询报文，是维系组播通路的两个重要报文，在一条已经建立的组播通路中两个相邻的 HOST 和 ROUTER,ROUTER 会给 HOST 发送查询报文，HOST 收到查询报文后给 ROUTER 回复一个响应报文，以维持相之间的关系，一旦关系断裂，那么这条组播涌路就异常了。现通过某种手段，抓取到了 HOST和 ROUTER 两者通讯的所有响应报文和查询报文，请分析该组播通路是否“正常”

输入描述
第一行抓到的报文数量 
 ，后续C行依次输入设备节点D1和D2，表示从D1到D2发送了单向的报文，D1和D2用空格隔开

 输出描述
组播通路是否“正常”，正常输出True， 异常输出False。

用例1
输入：
5
1 2 
2 3
3 2
1 2
2 1
输出
true

用例2
输入
1 3 
3 2
2 3
*/
const { test, expect } = require("./test")
const input = 3;
const data = [[1, 3], [3, 2], [2, 3]]
const output = true
const getResult = (input, data) => {
    const tepArr = [data[0]]
    for (let i = 1; i < data.length; i++) {
        if (data[i][0] === tepArr[tepArr.length - 1][1]) {
            tepArr.push(data[i])
        }
    }
    let result = tepArr[0][0] === tepArr[tepArr.length - 1][1] ? true : false
    return result;
}
test('报文回路测试', () => {
    expect(getResult(input, data)).toBe(output)
})