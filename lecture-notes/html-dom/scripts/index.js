console.log('hello world 123')
function sayHello() {
    console.log('hello there')
}
console.log('printing from index.js')

let myYellow = document.getElementById("yellow")
let myButton = document.getElementById("my-button")
let myTextBox = document.getElementById("text-box1")
myButton.addEventListener("click", function(){
    let myText2 = document.getElementById("text-box2").value
    console.log("you have clicked the button")
    myTextBox.value = myText2
})
console.dir(myButton)