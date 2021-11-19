/*
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function num(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    }
    else if (b < a && b < c){
        console.log(b);
    }
    else{
        console.log(c);
    }
}

num(6, 8, 3);*/

//------------------------------------------------------------

/*
//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function num(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > a && b > c){
        console.log(b);
    }
    else{
        console.log(c);
    }
}

num(6, 8, 3);*/

//------------------------------------------------------------

/*
//- створити функцію яка повертає найбільше число з масиву
let arr = [25,36,95,14,2,74,88];

function array(arr){
    let maxValue = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxValue){
            maxValue = arr[i];
        }
    }
    return maxValue;
}

array(arr);*/

//------------------------------------------------------------

/*
//- створити функцію яка повертає найменьше число з масиву
let arr = [25,36,95,14,2,74,88];

function array(arr){
    let minValue = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < minValue){
            minValue = arr[i];
        }
    }
    return minValue;
}

array(arr);*/

//------------------------------------------------------------

/*
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arr = [25,36,95,14,2,74,88];

function array(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

array(arr);*/

//------------------------------------------------------------

/*
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arr = [25,36,95,14,2,74,88];

function array(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg = sum / arr.length;

    return avg;
}

array(arr);*/

//------------------------------------------------------------

/*
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function num(arr){
    let maxValue = arguments[0];
    let minValue = arguments[0];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxValue){
            maxValue = arr[i];
        }
        if (arr[i] < minValue){
            minValue = arr[i];
        }
    }
    console.log(maxValue);
    return minValue;
}

num([5,69,87,15,6,74]);*/

//------------------------------------------------------------

/*
//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomArr(arr) {
    for (let i = 0; i < 5; i++){
        arr[i] = Math.round(Math.random()*100);
    }
}*/

//------------------------------------------------------------

/*
//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomArr(arr, limit) {
    for (let i = 0; i < 5; i++){
        arr[i] = Math.round(Math.random()*limit);
    }
}*/

/*
//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arr = [26,59,456,55,41];

function Array(arr){
    let revArr = arr.reverse();
    console.log(revArr);
}

Array(arr);*/

