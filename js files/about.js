
var cursorBlur = document.querySelector("#cursor-blur");
var cursor = document.querySelector("#cursor");
document.addEventListener("mousemove",function(details){
    cursor.style.left = details.x + "px";
    cursor.style.top = details.y + "px";
    cursorBlur.style.left = details.x - 200+ "px";
    cursorBlur.style.top = details.y - 200 + "px";

})



gsap.to("#navbar",{
    backgroundColor : "#000",
    duration: 0.5,
    height:"50px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("footer",{
    opacity:1,
    duration:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:".last",
        scroller:"body",
        // markers:true,
        start:"top top",
        end:"bottom bottom",
        scrub:0.5
    }
})