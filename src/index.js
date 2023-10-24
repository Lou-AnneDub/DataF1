import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'

const maTimeline = gsap.timeline()

gsap.from('header img', {
    x: 800,
    rotation: 360,
    duration:5,
    opacity: .1,
    ease: 'bounce',
    borderWidth: '60px'
})

gsap.from('header h1', {
    x:-200,
    opacity: 0,
    scale:10,
    duration: 3,
    ease:'elastic',
    color:'red'
})

gsap.from('header h2', {
    y:5
})

const title = document.querySelector('#about h1').textContent
gsap.fromTo(
    '#about h1',
    { text: ''},
    { text: title, duration: 3}
)
