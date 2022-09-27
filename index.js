// document.getElementById("count-emt").innerText = 5
// to build our passenger counter app we need some waay to store the data
// to store data we need to create a variable
// javascriptvariables are written in camel case
let countElement = document.getElementById("count-emt")

console.log(countElement)

// Initialize the count as 0

let count = 0

// listen for clicks on the increment button by using the "on-click" event listener

function increment() {

// increment the count variable when the button is clicked

    count += 1;
    countElement.innerText = count
}

// to change the "count-emt" in the html to reflect the new count

