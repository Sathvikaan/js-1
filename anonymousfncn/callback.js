// question-1: 

function processNumbers(a,b,callback){
    return callback(a,b)
}
processNumbers(3,4,function(x,y){
    return console.log(x+y);
})

//  question-3:

function calculate(a,b,callback){
    callback(a,b)
}
calculate(10,5,function(x,y){
    var dif= x-y
    console.log("difference : ",dif)
})

// question-2:

function greet(callback){
    callback("Alice")
}
greet(function(name){
    var res="Hello, "+name+"!"
    console.log(res)
})