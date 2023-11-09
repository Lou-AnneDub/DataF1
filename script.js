import gsap from 'gsap'

gsap.from('header h1', {
    x:-200,
    opacity: 0,
    scale:10,
    duration: 3,
    ease:'elastic',
    color:'red'
})

const maTimeline = gsap.timeline({
    defaults: {
        opacity:0,
        duration:1
    }
})
    .to('.f11',{})
    .to('.f22',{})
    .to('.f33',{})
    .to('.f44',{})
    .to('.f55',{})


