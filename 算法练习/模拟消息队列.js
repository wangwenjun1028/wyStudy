/*
题目描述：
让我们来模拟一个消息队列的运作，有一个发布者和若干消费者，发布者会在给定的时刻向消息队列发送消息若此时消息队列有消费者订阅，这个消息会被发送到订阅的消费者中优先级最高(输入中消费者按优先级升序排列)的一个。
若此时没有订阅的消费者，该消息被消息队列丢弃。消费者则会在给定的时刻订阅消息队列或取消订阅。当消息发送和订阅发生在同一时刻时，先处理订阅操作，即同一时刻订阅的消费者成为消息发送的候选。.当消息发送和取消订阅发生在同一时刻时，先处理取消订阅操作，即消息不会被发送到同一时刻取消订阅的消费者

输入描述
输入为两行
第一行为2N个正整数，代表发布者发送的N个消息的时刻和内容为方便解折，消息内容也用正整数表示)。第一个数字是第一人消息的发送时刻，第二个数字是第一个消息的内容，以此类推。用例保证发送时刻不会重复，但注意消息并没有按照发送时刻排列。
第二行为2M个正整数，代表M个消费者订阅和取消订阅的时刻。第一个数字是第一个消费者订阅的时刻，第二个数字是第一人消费者取消订阅的时刻，以此类推。用例保证每个消费者的取消订阅时刻大于订阅时刻，消费者按优先级 升序排列
两行的数字都由空格分隔。N不超过100，M不超过10，每行的长度不超过1000字符.

输出描述
输出为M行，依次为M个消费者收到的消息内容，消息内容按收到的顺序排列，且由空格分隔:若某个消费者没有收到任何消息，则对应的行输出-1.

测试用例1：
输入：
2 22 1 11 4 44 5 55 3 33
1 7 2 3
输出
11 33 44 55
22
测试用例2：
输入
5 64 11 64 9 97
9 11 4 9
输出
97
64
*/
const { expect, test } = require("./test")
const input1 = ['2 22 1 11 4 44 5 55 3 33', '1 7 2 3'], input2 = ['5 64 11 64 9 97', '9 11 4 9']
const output1 = ['11 33 44 55', '22'], output2 = ['97', '64'];
const getResult = (input) => {
    const arr = [], result = []
    const [msg, custom] = input
    const msgArr = msg.split(" "), customArr = custom.split(" ");
    for (let i = 0; i < customArr.length / 2; i++) {
        arr[i] = []
    }
    for (let i = 0; i < msgArr.length / 2; i++) {
        let time = Number(msgArr[2 * i]), str = msgArr[2 * i + 1];
        for (let j = customArr.length / 2 - 1; j >= 0; j--) {
            let subTime = Number(customArr[j * 2]), disSubTime = Number(customArr[j * 2 + 1]);
            if (subTime <= time && time < disSubTime) {
                arr[j].push(str)
                break
            }
        }

    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length) {
            result.push(arr[i].sort((a, b) => a - b).join(" "))
            continue
        }
        result.push(-1)
    }
    console.log(result)
    return result

}
test("模拟消息队列", () => {
    expect(getResult(input2).join(" ")).toBe(output2.join(" "))
})