function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
    getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


}

init();

gsap.to("#navbar",{
    backgroundColor : "#000",
    duration: 0.5,
    height:"50px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"#main",
        // markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#fff",
    scrollTrigger:{
        trigger:"#main",
        scroller:"main",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})

var cursorBlur = document.querySelector("#cursor-blur");
var cursor = document.querySelector("#cursor");
document.addEventListener("mousemove",function(details){
    cursor.style.left = details.x + "px";
    cursor.style.top = details.y + "px";
    cursorBlur.style.left = details.x - 200+ "px";
    cursorBlur.style.top = details.y - 200 + "px";

})



gsap.from("#page2-text",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2-text",
        scroller:"#main",
      
        start:"top 60%",
        end:"top 65%",
        scrub:3
    }
})

gsap.from(".ourteams h1",{
    y:50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".ourteams",
        scroller:"#main",
      
        start:"top 60%",
        end:"top 65%",
        scrub:3
    }
})
gsap.from("#dev",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#dev",
        scroller:"#main",
      
        start:"top 60%",
        end:"top 65%",
        scrub:3
    }
})
gsap.to(".cards",{
    scale:1.2,
    opacity:1,
    duration:0.8,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2-text",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top 60%",
        scrub:1
    }
})
gsap.from(".slide",{
    scale:1.1,
    opacity:0,
    duration:2,
    stagger:0.9,
    scrollTrigger:{
        trigger:"#slides",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top 60%",
        scrub:4
    }
})
gsap.from(".img-container",{
    scale:1.1,
    opacity:0,
    duration:3,
    stagger:0.6,
    scrollTrigger:{
        trigger:"#team-scroller",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top 60%",
        scrub:6
    }
})
gsap.from("button",{
    y:100,
    scale:1.1,
    opacity:0.4,
    duration:1,
    scrollTrigger:{
        trigger:".btndiv",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 95%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"#main",
        start:"top 45%",
        end:"top 45%",
        scrub:4

    }
})
gsap.from("#colon2",{
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"#main",
        start:"top 45%",
        end:"top 45%",
        scrub:4
    }
})



