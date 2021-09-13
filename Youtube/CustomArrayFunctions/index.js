console.log('CustomArrayFunctions');

// indexOf
function indexOf(array, value) {
    console.log('My indexOf');
    for(let index = 0; index < array.length; index++) {
        if(array[index] === value) return index;
    }
    return -1;
}

let testIo = ['one', 'two', 'three', 'four', 'five'];
console.log(indexOf(testIo, 'three'));

// valueOf
function valueOf(array, index) {
    console.log('My valueOf');
    return array[index];
}

let testVo = ['one', 'two', 'three', 'four', 'five'];
console.log(valueOf(testVo, 3));

// forEach
function forEach(array, callback) {
    console.log('My forEach');
    for(let index = 0; index < array.length; index++) {
        callback(array[index]);
    }
}

let testFe = ['one', 'two', 'three', 'four', 'five'];
forEach(testFe, function(value) {
    console.log(value);
});
