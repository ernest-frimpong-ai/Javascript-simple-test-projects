let myImage=document.getElementById("myImage");

let myButton=document.getElementById("myButton");

myButton.addEventListener("click", function() {
    if (myButton.innerText==="Turn on") {
        turnOn()
    }
    else if (myButton.innerText=="Turn off"){
        turnOff()
    }
})

// myButton.addEventListener("click", function(){
//     myImage.src="off.png"
//     myButton.innerText='Turn On'
// })


// Light on function
function turnOn(){
    myImage.src="on.png"
    myButton.innerText="Turn off"
}


// Light of function
function turnOff(){
    myImage.src="off.png"
    myButton.innerText="Turn on"
}


