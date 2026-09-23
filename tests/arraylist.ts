const fruit=['apple','banana','kiwi','Guava']

//Iterate throught the array

fruit.forEach((item,index)=>{ //syntax 
console.log(`${index}: ${item}`)
//console.log(index+":"+item)

})

//Add element at the end of array

//const splic=fruit.splice(0,2)
//console.log(splic)
//console.log(fruit)

/*

fruit.push('litchi')
//console.log("push data"+" "+fruit)// output:[apple,banana, kiwi, litchi]
//get the element by indexing

console.log(fruit[2]) // print kiwi

//unshift to add element at very first
const firstfruit=fruit.unshift('papaya')
console.log(firstfruit) // output= ['papaya', 'apple','banana','kiwi']
console.log("unshift"+" "+fruit)

//Remove last elemetnt from the arrylist

const removelast=fruit.pop()
console.log("pop"+" "+removelast)// give new length of array
console.log(fruit)

//Remove first elemetnt from the shift

const shiftfirst=fruit.shift()
console.log("shift"+" "+shiftfirst)// give new length of array
console.log(fruit)

//find the indext of apple
const index=fruit.indexOf('apple')
console.log("apple index is"+" "+index)
//remove first and 
console.log("Before Splice"+fruit)
fruit.push('litchi')*/
