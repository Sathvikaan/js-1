// Scenario 1: Online Food Delivery

function orderFood(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Order Recieved")},1000)
    })
}
function preparingFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("preparing food");
        },3000)
    })
}
function packingFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("packing food")
        },2000)
    })
}
function assigningDeliveryPerson(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Assigned a delivery person")
        },2000)
    })
}
function deliveringFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Delivering food")
        },4000)
    })
}

orderFood()
.then(res=>{console.log(res);return preparingFood();})
.then(res=>{console.log(res);return packingFood();})
.then(res=>{console.log(res);return assigningDeliveryPerson();})
.then(res=>{console.log(res);return deliveringFood();})
.then(res=>{console.log(res);})

// Scenario 2: Movie Ticket Booking

function selectingSeats(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("selecting seats")},2000)
    })
}
function processingPayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("processing payment");
        },3000)
    })
}
function generatingTicket(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Generating Ticket")
        },1000)
    })
}
function sendingMail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("sending confirmation email")
        },2000)
    })
}
selectingSeats()
.then(res=>{console.log(res);return processingPayment();})
.then(res=>{console.log(res);return generatingTicket();})
.then(res=>{console.log(res);return sendingMail();})
.then(res=>{console.log(res);})

// Scenario 3: Car Service Center

function carCheckin(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Car check-in ")},1000)
    })
}
function oilchange(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Oil change");
        },2000)
    })
}
function engineCheck(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Engine Check")
        },3000)
    })
}
function carWash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Car Wash")
        },2000)
    })
}
function finalqualityCheck(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Final Quality Check")
        },2000)
    })
}
carCheckin()
.then(res=>{console.log(res);return oilchange();})
.then(res=>{console.log(res);return engineCheck();})
.then(res=>{console.log(res);return carWash();})
.then(res=>{console.log(res);return finalqualityCheck();})
.then(res=>{console.log(res);})

//  Scenario 4: Laptop Repair Service

function diagnosingIssue(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{resolve("Diagnosing issue ")},3000)
        })
    }
    function replacingParts(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Replacing faulty parts");
            },4000)
        })
    }
    function updatingSoftware(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Updating software ")
            },2000)
        })
    }
    function finalTesting(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Final testing")
            },2000)
        })
    }
    function returningToCustomer(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Returning to customer ")
            },1000)
        })
    }
    diagnosingIssue()
    .then(res=>{console.log(res);return replacingParts();})
    .then(res=>{console.log(res);return updatingSoftware();})
    .then(res=>{console.log(res);return finalTesting();})
    .then(res=>{console.log(res);return returningToCustomer();})
    .then(res=>{console.log(res);})

// Scenario 5: Online Course Enrollment

function checkingAvailability(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(" Checking course availability ")},1000)
    })
}
function processingPayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" Processing payment ");
        },3000)
    })
}
function generatingEnrollment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" Generating enrollment ID ")
        },1000)
    })
}
function sendingCourse(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" Sending course materials ")
        },2000)
    })
}
function grantingAccess(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" Granting access to live classes ")
        },2000)
    })
}
checkingAvailability()
.then(res=>{console.log(res);return processingPayment();})
.then(res=>{console.log(res);return generatingEnrollment();})
.then(res=>{console.log(res);return sendingCourse();})
.then(res=>{console.log(res);return grantingAccess();})
.then(res=>{console.log(res);})