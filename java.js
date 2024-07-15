let main = document.querySelector(".main")
let cursor = document.querySelector(".cursor")
let page1 = document.querySelector(".page1")
main.addEventListener("mousemove",(e)=>{
    gsap.to(cursor,{
        x: e.x,
        y:e.y,
        duration:.2,
    })
})
page1.addEventListener("mouseenter",(e)=>{
    cursor.innerHTML="Scroll Down"
    gsap.to(cursor,{
        x: e.x,
        y:e.y,
        scale:4,
    })
})
page1.addEventListener("mouseleave",(e)=>{
    cursor.innerHTML=""
    gsap.to(cursor,{
        x: e.x,
        y:e.y,
        scale:1,
    })
})