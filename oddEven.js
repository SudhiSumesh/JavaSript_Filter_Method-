// program to find odd and even number in an array using filter method
const array=[1,2,3,4,5,6,7,8,9,]
const oddArray=array.filter((item)=>item%2!==0)
const evenArray =array.filter((item)=>item%2===0)
console.log(oddArray)
console.log(evenArray)