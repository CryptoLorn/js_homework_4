/*
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area(a, b){
    let s = a * b;
    return s;
}

console.log(area(5, 7));*/

//-----------------------------------------------------------------------

/*
//- створити функцію яка обчислює та повертає площу кола з радіусом r
const p = 3.14;

function circle (r){
    let s = p * Math.pow(r, 2);
    return s;
}

console.log(circle(4));*/

//-----------------------------------------------------------------------

/*
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const p = 3.14;

function cylinder(r, h){
    let s = 2 * p * r * h;
    return s;
}

console.log(cylinder(6, 8));*/

//-----------------------------------------------------------------------

/*
//- створити функцію яка приймає масив та виводить кожен його елемент
let arr = [5,36,98,52,64];

function array(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

array(arr);*/

//-----------------------------------------------------------------------

/*
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

paragraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');*/

//-----------------------------------------------------------------------

/*
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function elements(text){
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

elements('Contrary to popular belief, Lorem Ipsum is not simply random text.');*/

//-----------------------------------------------------------------------

/*
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function elements(text, num){
    document.write(`<ul>`);
    for (let i = 0; i < num; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

elements('Contrary to popular belief, Lorem Ipsum is not simply random text.', 5);*/

//-----------------------------------------------------------------------

/*
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [5,69,'Hello',true,'World',47,false];

function array(arr){
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++){
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}

array(arr);*/

//-----------------------------------------------------------------------

/*
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr = [
    {id: 6456,
    name: 'Andrii',
    age: 27},

    {id: 2598,
    name: 'Vasia',
    age: 18},

    {id: 1568,
    name: 'Tania',
    age: 20}]

function persons (arr){
    for (let i = 0; i < arr.length; i++){
        document.write(`<div>${arr[i].id} - ${arr[i].name}: ${arr[i].age}</div>`);
    }
}

persons(arr);*/