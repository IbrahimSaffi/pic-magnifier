let img = document.querySelector(".product")
let magnifierContainer =document.querySelector(".magnifier-container")
let magnifier =document.querySelector(".magnifier")
img.addEventListener("mouseenter",()=>{
   magnifierContainer.style.display ="flex"
})
img.addEventListener("mouseleave",()=>{
    magnifierContainer.style.display ="none"
 })
img.addEventListener("mousemove",(e)=>{
   let size = e.target.getBoundingClientRect()
   magnifier.style.backgroundPositionX = `-${e.clientX-size.left}px` 
   magnifier.style.backgroundPositionY = `-${e.clientY-size.top}px`
 })