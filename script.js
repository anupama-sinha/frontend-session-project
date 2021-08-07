console.log("Hello World From External JS Script")

let msg='Hello India';
console.log(msg);

let number=2;
// const number=2;
number=8;
console.log(number);

//Object Types
let book = {
    id : 1,
    name : 'The Power of Now'
};
console.log(book);
book.name='Stillness Speaks';
book['id']=2;
console.log(book);
let key='name';
book[key]='Master of Zen';
console.log(book);

function sum(a,b){
    // var a=1;
    // var b=2;
    console.log("Sum: " , a+b);
};

sum(11,6);

// document.getElementById('obj').innerHTML = msg;