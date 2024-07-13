function a(arr){
    return [...new Set(arr)]
}

const retval = a([1,2,2,4])
console.log(retval)

//