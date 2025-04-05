

// 1. selection
let img = document.querySelector('img');


let imgArr = [
    'https://plus.unsplash.com/premium_photo-1676977396095-07e0648d92df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1741986947217-d1a0ecc39149?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1734700920704-1e8000437a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1680100255906-09ffdc2eeaaf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D'
]

// 2. manipulation

let i = 0;
let idd = setInterval(function(){
    img.setAttribute('src' , imgArr[i])
    i = (i+1) % imgArr.length
} , 2000)


setTimeout(function(){
    clearInterval(idd)
} , 30000)

