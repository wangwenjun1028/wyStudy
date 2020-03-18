let add = (a, b) => a + b;

let expect = (result) => {
    return {
        toBe: function (actual) {
            if (actual !== result) {
                throw new Error("期望值与实际值不等")
            }

        }
    }
}

let test = function (desc, fn) {
    try {
        fn();
    } catch (e) {
        console.log(`${desc}没有通过`)
    }
}

test('加法测试', () => {
    expect(add(1, 2)).toBe(4)
})