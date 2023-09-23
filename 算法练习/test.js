const expect = result => {
    return {
        toBe: function (actual) {
            if (result != actual) {
                throw new Error("期望值与实际值不等")
            }
        }
    }
}
const test = (decs, fn) => {
    try {
        fn()
        console.log(`恭喜你，${decs}通过`)
    } catch (e) {

        console.log(`${decs}没有通过`)
        console.log(e)
    }
}

module.exports = { test, expect }