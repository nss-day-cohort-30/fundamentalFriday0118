let students = ["Ryan", "Stephen", "Ali", "Meag", "Abbey", "Katerina", "Janet"]



//these can be used for ANYTHING, they just run a set number of times
for (let index = 0; index < students.length; index++) {
    element = students[index];
    console.log(element)
}

//this in an ARRAY METHOD - can only be used on arrays
students.forEach((name, index) => {
    console.log("index", index);
    console.log("name, index: ", name, index);
})

students.forEach(function(student, index){
    console.log(studnet)
})
//why are there so many (()) in the forEach?
//becuase we are invoking the forEach() mentod on the array
// students.forEach()


//for of loops can be used on anything that is iterable - strings, arrays
let sections = document.querySelectorAll("section")
for(let section of sections){
    console.log(section)
}


let meg = {
    name: "Meg",
    lastName: "Ducharme"
}
//for in loops can only be used for Objects
for(let key in meg){
    console.log(key)
    console.log(meg[key]) 
}


const sayHiToJenna = (message) => {
    let saying = message 
    return `Hey Jenna, ${saying}!!!`
}
let tacosssss = sayHiToJenna("lets get tacos!!!")
let lunch = sayHiToJenna("I'm hungry")
console.log(lunch)
console.log(tacosssss)
console.log(sayHiToJenna("lets get tacos!!!"))