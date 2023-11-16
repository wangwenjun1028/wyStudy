let pro = [{
    name: "中国",
    id: 1,
    parentId: null,
    children: [
        {
            name: "广东",
            id: 2,
            parentId: 1,
            children: [
                {
                    name: '深圳',
                    id: 21,
                    parentId: 2
                }, {
                    name: '广州',
                    id: 4,
                    parentId: 22
                }
            ]
        }, {
            name: "湖北",
            id: 3,
            parentId: 1,
            children: [
                {
                    name: '黄冈',
                    id: 31,
                    parentId: 3
                },
                {
                    name: '武汉',
                    id: 32,
                    parentId: 3
                },
                {
                    name: '荆州',
                    id: 33,
                    parentId: 3
                },

            ]
        }
    ]
}]

//将树形数据展开为以为数组
const flatTree = (arr) => {
    let result = []
    arr.forEach(item => {
        result.push({
            name: item.name,
            id: item.id,
            parentId: item.parentId
        })
        if (item?.children?.length) {
            result = result.concat(flatTree(item.children))
        }
    })
    return result
}
let arr = flatTree(pro)

const getTree = (arr, parentId = null) => {
    let result = []
    arr.forEach(item => {
        // if (!parentId) {
        //     item.children = getTree(arr, item.id)
        //     result.push(item)
        // }
        if (item.parentId === parentId) {
            const children = getTree(arr, item.id);
            if (children?.length) {
                item.children = children
            }
            result.push(item)
        }

    })
    return result
}
let tree = getTree(arr)
console.log(tree)
