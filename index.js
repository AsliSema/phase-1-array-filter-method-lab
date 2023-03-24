// Code your solution here
/* function findMatching(names, name){
    const findMatchingNames = function (param){
        return param.toLowerCase().match(name.toLowerCase())
    }
    return names.filter(findMatchingNames)
} */

function findMatching(arr, name){
    return arr.filter((param) => param.toLowerCase().match(name.toLowerCase()))
}

function fuzzyMatch(arr, beginWith){
    return arr.filter((param) => param.charAt(0).includes(beginWith.charAt(0)) && param.charAt(1).includes(beginWith.charAt(1)))
}

function matchName(arr, str){
    return arr.filter((param) => param.name == str)
}

