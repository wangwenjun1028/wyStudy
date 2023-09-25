/*
根据Promise,A+规范实现promise,使用promise-aplua-tests插件验证
*/
//步骤一：了解promise
//步骤二：根据规范来实现promise
//步骤三：测试用例
const statusMap = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}
//将promise设置为fulfilled状体
function fulfilledPromise(promise, value) {
    //promise只能从pengding->fulfilled
    if (promise.status !== statusMap.PENDING) return
    promise.status = statusMap.FULFILLED
    promise.value = value
    runCb(promise.fulFilledCbs, value)
}
//将promise状体设置为rejected
function rejectedPromise(promise, reason) {
    if (promise.status !== statusMap.PENDING) return
    promise.status = promise.status
    promise.reason = reason
    runCb(promise.rejectedCbs, reason)

}
function isPromise(promise) {
    return promise instanceof Promise;
}
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
//判断是否是一个函数
function isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]' ? true : false
}
//
function resolvePromise(promise, x) {
    //todo  决议过程
    //x与promise相同
    if (promise === x) {
        rejectedPromise(promise, new TypeError("cant be the same"))
        return
    }
    //x是promise
    if (isPromise(x)) {
        if (x.status === statusMap.FULFILLED) {
            fulfilledPromise(promise, x.value)
        }
        if (x.status === statusMap.REJECTED) {
            rejectedPromise(promise, x.reason)
        }
        if (x.status === statusMap.PENDING) {
            x.then(() => {
                fulfilledPromise(promise, x.value)
            }, () => {
                rejectedPromise(promise, x.reason)
            })
        }
        return
    }
    //对象或函数
    if (isObject(x) || isFunction(x)) {
        let then;
        try {
            then = x.then
        } catch (err) {
            rejectedPromise(promise, err)
            return
        }
        if (isFunction(then)) {
            then.call(x, (y) => {
                resolvePromise(promise, y)
            }, (r) => {
                rejectedPromise(promise, r)
            })
        }
    } else {

    }
}
function runCb(cbs, value) {
    cbs.forEach(cb => {
        cb(value)
    })
}
class Promise {
    constructor(fn) {
        this.status = statusMap.PENDING
        this.value = undefined
        this.reason = undefined
        this.fulFilledCbs = []//then
        this.rejectedCbs = []
        fn((value) => {
            fulfilledPromise(this, value)
        }, (reason) => {
            rejectedPromise(this, reason)
        })
    }
    //then方法有两个参数
    then(onFulfilled, onRejected) {
        const promise1 = this;
        const promise2 = new promise(() => { });
        if (promise1.status === statusMap.FULFILLED) {
            if (isFunction(onFulfilled)) {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(promise1.value)
                        resolvePromise(promise2, x)
                    } catch (error) {
                        rejectedPromise(promise2, error)
                    }

                }, 0)

            } else {
                return promise1
            }
        }

        if (promise1.status === statusMap.REJECTED) {
            if (isFunction(onRejected)) {
                setTimeout(() => {
                    try {
                        const x = onRejected(promise1.value)
                        resolvePromise(promise2, x)
                    } catch (error) {
                        rejectedPromise(promise2, error)
                    }

                }, 0)

            } else {
                return promise1
            }
        }

        if (promise1.status === statusMap.PENDING) {
            promise1.fulFilledCbs.push(setTimeout(() => {
                try {
                    const x = onFulfilled(promise1.value)
                    fulfilledPromise(promise2, x)

                } catch (error) {
                    rejectedPromise(promise2, x)
                }
            }), 0)
            promise1.rejectedCbs.push(setTimeout(() => {
                try {
                    const x = onRejected(promise1.value)
                    resolvePromise(promise2, x)
                } catch (error) {
                    rejectedPromise(promise2, error)
                }
            }), 0)
        }
        return promise2;

    }
}