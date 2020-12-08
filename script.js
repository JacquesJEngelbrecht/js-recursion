function countDown(n) {
    for(let i = n; i > 0; i--) {
        console.log(i)
    }
    console.log("Hooray")
}

function countDownRecursive(n) {
    if(n <= 0) {
        console.log("Breakout")
        return
    }
    console.log(n)
    countDownRecursive(n - 1)
}

function printChildrenRecursive(t) {
    if(t.children.length === 0) {
        return
    }
    t.children.forEach(child => {
        console.log(child.name)
        printChildrenRecursive(child)        
    });
}

const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: [] },
                { name: 'Sophia', children: [] }
            ]
        }
    ]
}