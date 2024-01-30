
// SCROLL TRIGGER GSAP
//GENERAL ANIMATION

gsap.registerPlugin(ScrollTrigger);
const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%",
        //markers: true
    })

});

gsap.registerPlugin(ScrollTrigger);
const images = gsap.utils.toArray('.photo__demo');
images.forEach((img, i) => {
    ScrollTrigger.create({
        trigger: img,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%",
        //markers: true
    })

});