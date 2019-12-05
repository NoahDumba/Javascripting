function evenNumbers(number){
  return(number % 2 === 0)
}

function myfunction(array){
  var filtered = array.filter(evenNumbers)
  return(filtered)
}

var manta = [1,2,3,4,5,6,7,8,9,10]

console.log(myfunction(manta))