// Your code goes here
/*

	* [ ] `mouseover`
	* [x] `keydown`
	* [x] `wheel`
	* [x] `drag`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [x] `click`
	* [ ] `select`
	* [x] `dblclick`

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