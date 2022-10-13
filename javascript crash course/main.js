console.log("hello")
let age=30
console.log(age)

const salary=10000
console.log(salary)

//const salary=0
//salary=10000
//console.log(salary)

//let sum=2
//sum=3
//console.log(sum)

const name='javascript'

const person={
    'firstname':'java',
     'age':30,
}
console.log(person.firstname)

const oddnumbers=[1,3,5]
console.log(oddnumbers[2])

let x=2
let y=5
console.log(x+y)

console.log('java' + 'script')

//implicit conversions
console.log(2+'3')
console.log('2'-'2')
console.log(2-2)
console.log('java'-'script')
console.log(4-null)

//explicit conversions
console.log(Number('2'))
console.log(Number('false'))
console.log(Number())
console.log(String(undefined))
console.log(String(5))
console.log((500).toString())
console.log(String(null))


const var1=10
const var2="10"
console.log(var1==var2)
console.log(var1===var2)

//conditional statements
const num =0
if(num > 0){
    console.log('number is positive')
} else if (num < 0){
    console.log('negitive')
}else{
    console.log('zero')
}

const color="blue"
switch(color){
    case"red":
        console.log("color is red")
        break
    case"green":
        console.log("color is red")
        break
    default:
        console.log("not")
}

//for loop
//for(let i=1;i<=5; i++){
 //  console.log('iteration Number'+ i)
//}

//while loop
//let i=1
//while(i<=7){
  //  console.log('iteration number'+ i)
  //  i++
//}

//do while
let i = 1
do {
    console.log('iteration number' + i)
    i++
}while(i <= 5)

//for of loop
const numArray=[1,2,3,4]
for(const num of numArray){
    console.log('itreation number' + num)
}
//functions

function great(username){
    console.log('morning'+ username)
}
great('sai')
great('vamsi')

function add(a,b){
    return a+b
}
 const sum=add(1,2)
 console.log(sum)


 const arrowSum = (a,b) => a + b
 const Sum=arrowSum(1,2)
 console.log(sum)

 //scopes
 //block scope
 //if(true){
   // const myName='vamsi'
    //console.log(myName)
 //}  works with in the block only

 //function scope
 //function testFn(){
 //   const myName='vamsii'
   // console.log(myName)
 //}
 //testFn()

 //global scope
 const myNum=199

 if(true){
    const myName='vamsi'
    console.log(myName)
    console.log(myNum)
 }

 function testFn(){
    const myName='vamsii'
    console.log(myName)
    console.log(myNum)
 }
 testFn()
