function n(x){

    if( x < 2 ){
        return 1
    } 
    else {
        return n(x-2) + n(x-1)
    }
}

const retval = n(3)


console.log(retval)