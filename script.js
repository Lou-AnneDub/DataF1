import gsap from 'gsap'

gsap.from('header h1', {
    x:-200,
    opacity: 0,
    scale:10,
    duration: 3,
    ease:'elastic',
    color:'red'
})

gsap.fromTo('.rond',{
    opacity:1,
},{
    opacity:0,
    duration:2
})