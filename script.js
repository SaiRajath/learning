// ****** Finding the largest element in the array ******//
/*function bigEleinArr(){
   var arr = [1,-3,-4,-5,7,]
  var lar = arr[0];
  for(let i = 0 ; i<=arr.length-1;i++){
     if(arr[i]>lar){
        lar = arr[i];
     }
  }
  return lar;
}
var c = bigEleinArr()
console.log(c)*/

// ****** Finding the largest element in the array in ES6  ******//
const largerElement = () =>{
   var arr = [10,20,-50,1000]
   var lar = arr[0];
   for(let i = 0 ; i<=arr.length-1;i++){
      if(arr[i]>lar){
         lar = arr[i];
      }
   }
   return lar;
 }
 var c = largerElement()
 console.log(c)

 