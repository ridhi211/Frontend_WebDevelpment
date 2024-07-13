const anagramm = (str1, str2) => {
    if(str1.length !== str2.length){
        return false
    }

    const strr1 = str1.toLowerCase()
    const strr2 = str2.toLowerCase()

    if( strr1 === strr2)
        return false

    const sortStr1 = strr1.split("").sort().join("")
    const sortStr2 = strr2.split("").sort().join("")

    return sortStr1 === sortStr2
}