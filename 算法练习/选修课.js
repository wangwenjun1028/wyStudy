/*
题目描述：
现有两门选修课，每门选修课都有一部分学生选修，每个学生都有选修课的成绩，需要你找出同时选修了两门选修课的学生，先按照班级进行划分，班级编号小的先输出，每个班级按照两门选修课成绩和的降序排序，成绩相同时按照学生的学号升序排序。

输入
第一行为第一门选修课学生的成绩，

第二行为第二门选修课学生的成绩，每行数据中学生之间以英文分号分隔，每个学生的学号和成绩以英文逗号分隔，学生学号的格式为8位数字(2位院系编号+入学年份后2位+院系内部1位专业编号+所在班级3位学号),学生成绩的取值范围为 [0,100] 之间的整数，两门选修课选修学生数的取值范围为 [1-2000] 之间的整数

输出
同时选修了两门选修课的学生的学号，如果没有同时选修两门选修课的学生输出 NULL, 否则，先按照班级划分，班级编号小的先输出，每个班级先输出班级编号(学号前五位),

然后另起一行输出这个班级同时选修两门选修课的学生学号，学号按照要求排序(按照两门选修课成绩和的降序，成绩和相同时按照学号升序),学生之间以英文分号分隔。
*/
const { expect, test } = require("./test")
const input1 = "01202021,75;01201033,95;01202008,80;01203006,90;01203088,100"
const input2 = "01202008,70;01203088,85,01202111,80;01202021,75;01201100,88";
const getResult = (input1, input2) => {
    const arr1 = input1.split(";")
    const arr2 = input2.split(";")
    // 保存结果
    const result = [];
    arr1.forEach(student1 => {
        const [studentId1, studentScore1] = student1.split(",")
        arr2.forEach(student2 => {
            const [studentId2, studentScore2] = student2.split(",")
            if (studentId1 === studentId2) {
                result.push({
                    id: studentId1,
                    score1: studentScore1,
                    score2: studentScore2
                })
            }
        })
    })
    if (!result.length) return 'NUll'
    result.sort((a, b) => {
        return Number(a.id.slice(0, 5)) - Number(a.id.slice(0, 5))

    })
    const classMates = []
    result.forEach(student => {
        const classId = student.id.slice(0, 5)
        let flag = false
        classMates.forEach(p => {
            if (p.id === classId) {
                flag = true
                p.student.push({
                    id: student.id,
                    score: Number(student.score1) + Number(student.score2),
                })
            }
        })
        if (!flag) {
            classMates.push({
                id: classId,
                student: [{
                    id: student.id,
                    score: Number(student.score1) + Number(student.score2),

                }]
            })
        }
    })
    console.log(classMates)
    classMates.forEach(p => {
        console.log(p.id)
        let student = p.student
        student.sort((a, b) => {
            if (a.score == b.score) {
                return Number(a.id) - Number(b.id)
            } else {
                return b.score - a.score
            }
        })
        let str = []
        student.forEach(p => {
            str.push(p.id)
        })
        console.log(str.join(";"))

    })
}
getResult(input1, input2)