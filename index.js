// task1
function sayHello() {
    console.log("hello, world!")
}
sayHello()

// task2
function displayWarning() {
    console.log("Warning!System overload!")
}
displayWarning()

// task3
function printStatus() {
    console.log("System status:Active")
}
printStatus()

// task4
function initialize() {
    console.log("Initialization Complete")
    shutDown()
}
function shutDown() {
    console.log("process ended")
}
initialize()

// task5
function startProcess() {
    console.log("process started")
    endProcess()
}
function endProcess() {
    console.log("process ended")
}
startProcess()

// task6
function greetUser() {
    console.log("hello,+name+!")
}
greetUser("sathvika")
greetUser("sadhvika")

// task7
function calculateSum(x, y) {
    console.log("x+y!")
}
calculateSum(5,6)
calculateSum(2,3)

// task8
function countDown(){
    for(var i=5;i>=1;i--){
        console.log(i)
    }
}
countDown()

// task9
function checkEvenOdd(){
    var i = prompt("enter a number : ")
    if(i%2==0){
        console.log(i,"even")
    }
    else{
        console.log(i,"odd")
    }
}
checkEvenOdd()

// task10
function beginSession(){
    console.log("session started")
    endSession()
}
function endSession(){
    console.log("Session ended")
}
beginSession()