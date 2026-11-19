let userName = prompt('enter your name') 
hello(userName)

function ppow(base, exp){
    let result = base
    for (let i = 1; i < exp; i++) {
        result = result * base;

    }
    console.log(result)

}
let x = Number(prompt('base'))
let y = Number(prompt('exp'))
ppow(x, y)

x = Number(prompt('base'))
y = Number(prompt('exp'))
ppow(x, y)

x = Number(prompt('base'))
y = Number(prompt('exp'))
ppow(x, y)  

