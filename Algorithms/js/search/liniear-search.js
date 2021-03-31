'use strict'

function linearSearch (arr, num, options) {

    let result = [];

    if (options === "end") {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === num) {
                return i;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num && options === "first") {
            return i;
        } else if (arr[i] === num) {
            result.push(i);
        }
    }
    if (result == 0) {
        return "Совпадений не найдено"
    } else if (result.length === 1) {
        return result[0];
    } else {
        return result;
    }
}

let arr = [55,2,4,4,5,6,7,8,4];
console.log(linearSearch(arr, 888, "first"));