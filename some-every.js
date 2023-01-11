
function hasOddNumber(arr) {
   return arr.some(function(val) {
        return val % 2 === 1 || val === 1 
    })
};


function hasAZero(num) {
    return Array.from(String(num)).some(function(val) {
        return val == 0
    })
};



function hasOnlyOddNumbers(arr) {
    return arr.every(function(val) {
        return val % 2 === 1 || val === 1
    })
};


function hasNoDuplicates(arr) {
    return arr.every(function(val) {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
};



function hasCertainKey(arr, key) {
    return arr.every(function (val) {
        if(val[key]) {
            return true
        }
    })
};


function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(val) {
        if(val[key] === searchValue) {
            return true
        }
    })
};
