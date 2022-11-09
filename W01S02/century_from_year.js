function century(year) {
    let yearInt = float2int(year/100) // 17
    return yearInt == year/100 ? year/100 : yearInt + 1
}
  
function float2int (value) {
    return value | 0;
}

console.log(century(1705)) // 'Testing for year 1705'
console.log(century(1900)) // 'Testing for year 1900');
console.log(century(1601)) // Testing for year 1601');
  