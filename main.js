let students = ["Ryan", "Stephen", "Ali", "Meag", "Abbey", "Katerina", "Janet"]



//for loops can be used for ANYTHING, they just run a set number of times
for (let index = 0; index < students.length; index++) {
    element = students[index];
    console.log(element)
}

//forEach loops in an ARRAY METHOD - can only be used on arrays
students.forEach((name, index) => {
    console.log("index", index);
    console.log("name, index: ", name, index);
})

students.forEach(function(student, index){
    console.log(studnet)
})
//why are there so many (())s in the forEach syntax?
//becuase we are invoking the forEach() mentod on the array and passing it a function that has parameters hugged by the ()s
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

//returning a value from a function is a way to break it free from the function scope. When we return something from a function we MUST capture that value somewhere, whether in a variable or (here) a console.log
const sayHiToJenna = (message) => {
    let saying = message 
    return `Hey Jenna, ${saying}!!!`
}
let tacosssss = sayHiToJenna("lets get tacos!!!")
let lunch = sayHiToJenna("I'm hungry")
console.log(lunch)
console.log(tacosssss)
console.log(sayHiToJenna("lets get tacos!!!"))
