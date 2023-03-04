var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result)
// Asia continet rest countries
function Asia(i){
  return i.region ==='Asia'
  
}
   var asia=result.filter(Asia)
   console.log(asia)

// population less then two lakhs

function population(i){
  return i.population<=200000
}
var populations = result.filter(population )
console.log(populations)
// useing forEach method print countries name,capital,flag
result.forEach(i => console.log(`Name:${i.name}`));
result.forEach(i => console.log( `Capital:${i.capital}`));
result.forEach(i => console.log( `flag:${i.flag}`));
// total population map functions
function population(i){
  try {
    
  } catch  {
    
  }
  return i.population
}
var populations = result.map(population )
console.log(populations)
// print US Dollars countries
function currency(i){
  try {
    return i.currencies[0].code==='USD'
  } catch  {
    
  }

}

var currenci=result.filter(currency)
console.log(currenci)
for(let i of currenci){
  console.log(`US Dollars: ${i.name}`)
}

}