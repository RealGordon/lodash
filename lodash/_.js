/*
In this project, 
some of the most exciting functionality from
the widely-popular lodash.js library which
provides many methods that add new
functionality for numbers, strings, objects, and arrays are implemented.
* __author: gordon.amamoo@amalitech.org
*fscp-javascript-syntax-part-ii
*/
const _={
 
 clamp(number,lower,upper){
   const lowerClampedValue=Math.max(number,lower);
  const clampedValue=Math.min(lowerClampedValue,upper);
 
 return clampedValue
 },
 inRange(number,start,end){
 /*  if `end` is undefined, set `end` equal to `start`.
 Then set `start` equal to 0
 */
end=(end===undefined) ?start:end;
if(start===end)start=0;

/*
*if start is `bigger` than `end`,
* swap `start` and `end` values
*/
//using ECMAScript2015 destructing to swap variables : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
if (start>end)  [start,end]=[end,start];

if (number<start || number>=end)return false;
return true
 },
 words(word){
return word.split(' ')
 },
 pad(string,length){
if (length<=string.length)return string;
const startPaddingLength=Math.floor((length-string.length)/2);
const endPaddingLength=length-string.length-startPaddingLength;
const paddedString=' '.repeat(startPaddingLength)+string+' '.repeat(endPaddingLength);
return paddedString
 },
 has(object,key){
   return  (key in object)

 },
 invert(object){
  const invertedObject={};
   let originalValue;
for(var key in object){
  originalValue=object[key];
  invertedObject[originalValue]=key;
}
  return invertedObject
 },
 findKey(object,predicate){
   let value;
   let predicateReturnValue;
for(var key in object){
value=object[key];
predicateReturnValue=predicate(value);
if (predicateReturnValue)return key
}
return undefined
 },
 drop(array,n){
   n=(n===undefined)?1:n;
   const droppedArray=array.slice(n);
   return droppedArray

 },
dropWhile(array,predicate){
  let item;
  const dropNumber=array.findIndex((element,index)=>{
    
   return !predicate(element,index,array) 
  
  });
const droppedArray=this.drop(array,dropNumber);
return droppedArray
},
chunk(array,size){
size=(size===undefined)?1:size;
const arrayChunks=[];
const length=array.length;
let arrayChunk;
for(var i=0;i<length;i+=size){
arrayChunk=array.slice(i,i+size);
arrayChunks.push(arrayChunk);
}
return arrayChunks
}

};



// Do not write or modify code below this line.
module.exports = _;