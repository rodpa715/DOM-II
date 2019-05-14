// Your code goes here
/*

    1 - click
    2 - double click
    3 - drag
    4 - wheel
    5 - keyDown
    6 - mouseenter
    7 - load
    8 - resize
    9 - copy
   10 - cut

Using the 10 unique events, 
find ways to update the DOM 
in creative ways. For example 
you could change colors, animate 
objects, remove objects, etc.
*/

// 1 click
const imgFunBus = document.querySelector(".intro img");
imgFunBus.addEventListener("click", function(){
    event.target.style.transform = "scale(0.7,0.7)";
    event.target.style.transition = "3s ease-in-out";
})
// 2 double click
const paragraphs = document.querySelectorAll(".text-content p");
paragraphs.forEach(p => p.addEventListener("dblclick", highlight))

function highlight(event){
    console.log(event.target);
    event.target.style.backgroundColor = "yellow"
}
//3 drag
const imgAdventure = document.querySelector('img[src="img/adventure.jpg"]')
imgAdventure.addEventListener("drag", dissapear)

function dissapear(){
    event.target.style.display = "none"
}
//4 wheel
const imgBoats = document.querySelector('.img-fluid')
imgBoats.addEventListener("wheel", resizeImg)

function resizeImg(){
    event.preventDefault();
    let scale = 1;
    if (event.deltaY < 0) {
        scale += 0.2
    }
    else {
        scale -= 0.2
    }
    event.target.style.transform = `scale(${scale},${scale})`;
}
// 5 KeyDown
const bgColor = document.querySelector("body")
bgColor.addEventListener("keydown", changeBgColor)
function changeBgColor(){
    event.preventDefault();
    if (event.code == "ArrowUp"){
        event.target.style.backgroundColor = "antiquewhite"
    }else if(event.code == "ArrowDown"){
        event.target.style.backgroundColor = "mistyrose"
    }
}
// 6 mouseenter
const buttons = document.querySelectorAll(".destination .btn")
buttons[0].addEventListener("mouseenter", rainbowButton)
function rainbowButton(e){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`
    e.target.style.backgroundColor = rgb;
    e.target.textContent = "Skittles!!"
}
buttons[0].addEventListener("mouseleave", resetColor)
function resetColor(e){
    e.target.textContent = "Sign Me Up!"
    e.target.style.backgroundColor = "#17A2B8"
}
// 7 load
const body = document.querySelector("body")
window.addEventListener("load", skittles)
function skittles(e){
    setInterval(() => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let rgb = `rgba(${r}, ${g}, ${b}, 0.7)`
        body.style.backgroundColor = rgb;
        body.style.transition = "1.5s ease-in-out"
    }, 2000);
}

// 8 resize 
const modalDiv = document.createElement("div")
body.prepend(modalDiv)
modalDiv.textContent = "THIS WEBPAGE IS NOT \n SUPPORTED BY PESKY MOBILES"
modalDiv.style.fontSize = "26px"
modalDiv.style.padding = "200px"
modalDiv.style.position = "absolute"
modalDiv.style.zIndex = "1"
modalDiv.style.top = "0";
modalDiv.style.height = "1950px"
modalDiv.style.width = "100%"
modalDiv.style.transform = "translate(-50%, -50%) !important";
modalDiv.style.backgroundColor = "rgba(0,0,0,0.9)"
modalDiv.style.color = "white"
modalDiv.style.display = "none"

window.addEventListener('resize', modalShow);
function modalShow(e){
    if(window.innerWidth < 700){
        modalDiv.style.display = "unset"
    }else{
        modalDiv.style.display = "none"
    }
}

//9 copy & cut 
//prevents from copying 
window.addEventListener("cut copy", function(e){
    e.preventDefault();
})

//10 mouseup
buttons[1].addEventListener("mouseup", deleteEverything)
buttons[1].textContent = "DON'T LET GO OF ME"
buttons[1].style.backgroundColor = "red"
buttons[1].style.color = "yellow"
function deleteEverything(){
    let saveHtml = body.innerHTML
    body.innerHTML = "<div><br><h2>ALL YOU HAD TO DO WAS HOLDING ON <br>UNTIL THE BOMB SQUAD ARRIVED<br>Wait for a few seconds...</h2></div>"
    setTimeout(() => {
        body.innerHTML = saveHtml
    }, 7000)
}

// stop propagation

//parent div
const destination = document.querySelectorAll(".destination")
destination.forEach(div => div.addEventListener("click", changeTxtColor))
function changeTxtColor(e){
    console.log("hello")
    e.target.style.color = "white" 
    e.target.style.cursor = "wait"
    e.target.style.backgroundColor = "rgba(121, 85, 72, 0.2)"
}

//child button
buttons[2].addEventListener("click",scale)
function scale(e){
    e.stopPropagation();
    e.target.style.transform = "scale(1.2,1.2)"
}


// nav items stop refresh
const navItems = document.querySelectorAll("nav a")
navItems.forEach(a => a.addEventListener("click", function(e){
    e.preventDefault();
}))

