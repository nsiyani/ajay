var tl = gsap.timeline({
    scrollTrigger:{
        trigger: "body",
        
    }
})

tl.from("#mid h1, button",{
    x:100,
    duration:1 
})
.from("#s1 h1",{
    x:100,
    scale:1,
    duration:1 
})
