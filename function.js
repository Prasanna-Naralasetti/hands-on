
//higher order functions - A function which takes another function as an argument or returns a function as a value is called as a higher order function

//function passes as an argument of a function being returned from a function is called as callback function

const numbers=[10,20,30]
numbers.forEach(function(ele){
    console.log(ele)
})

function sum(){
    return (a,b)=>{
        return a+b
    }
}
sum()(10,15)//25

//interview question
