arr=[1,"sathvika",3,function name(){console.log("js")},5]
console.log(arr)

// 2
console.log(arr[2])

// 3
arr[1]="sadhvika"
console.log(arr[1])
console.log(arr)

// 4
console.log(arr.length)

// 5
arr[arr.length]=6
console.log(arr)

// 6
arr.pop()
console.log(arr)

// 7
for(var element of arr){
    console.log(element)
}

// 8
if(arr.includes("sadhvika")){
    console.log("present")
}else{
    console.log("not present")
}

// 9
arr1=[1,"sathvika",3,function name(){console.log("js")},5]
copiedArr=arr1.slice()
console.log(copiedArr)

// 10
array=[1,2,3,4,5]
arrayString=array.join()
console.log(array)