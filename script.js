var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector('#play')

//for when mouse enters the video
videocon.addEventListener("mouseenter",function(){
    // playbtn.style.opacity = 1
    // playbtn.style.scale = 1
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})

//for when mouse leaves the video
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

//to move along with the mouse
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x,
        top:dets.y
    })
})