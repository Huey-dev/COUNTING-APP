// document.getElementById("count-emt").innerText = 5
// to build our passenger counter app we need some waay to store the data
// to store data we need to create a variable
// javascriptvariables are written in camel case
let countElement = document.getElementById("count-emt"); //pass an arguement

// we grab the save-emt paragraph and store it in a variable called saveElement

let saveElement = document.getElementById("save-emt");



// Initialize the count as 0

let count = 0;

// listen for clicks on the increment button by using the "on-click" event listener

function increment() {

// increment the count variable when the button is clicked

    count += 1;
    countElement.innerText = count;
}

// to change the "count-emt" in the html to reflect the new count

function save() {
    // create a variable that contains both the count and the dash separator, i.e. "13 - "
    let countStr = count + " " + " - ";
    // render the variable in the saveElement using the innerText
    saveElement.textContent += countStr
    console.log(count)
}



