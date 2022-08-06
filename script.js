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
   console.log(e.clientX-size.left,e.clientY-size.top)
   //Subtracted
   magnifier.style.backgroundPositionX = `-${e.clientX-size.left}px` 
   // e.clientX-size.left
   magnifier.style.backgroundPositionY = `-${e.clientY-size.top}px`
   //  e.clientY-size.top
 })