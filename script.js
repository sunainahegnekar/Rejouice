

function cursorEffect(){
    var page1Content = document.querySelector(".page1-content");
var cursor = document.querySelector(".cursor");

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y:dets.y
    })
})

page1Content.addEventListener("mouseenter",function(dets){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

}
cursorEffect();

function page2h1(){
    gsap.from(".page-2 h1",{
        scale:0.1,
        delay:1,
        duration:0.1,
        scrollTrigger:{
            trigger:".page-2 ",
            scroller:"body",
            start:"top 60%",
            // markers:true,
            scrub:2
        }
    })
}
page2h1();


function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}
swiper();


function timeline(){
    var t1 = gsap.timeline()

    t1.from(".loader h3", {
        x:40,
        opacity:0,
        duration:1,
        stagger:0.1
    })
    
    t1.to(".loader h3",{
        x:-10,
        opacity:0,
        duration:1,
        stagger:0.1
    })
    
    t1.to(".loader",{
        opacity:0
    })
    
    t1.to(".loader",{
        display:"none"
    })
    
    t1.from(".page1-content h1 span" , {
        y:100,
        opacity:0,
        stagger:0.1,
        duration:0.5,
        delay:-0.5
    })

    // t1.from(".page6 .nav-3 h1 span" , {
    //     y:-100,
    //     opacity:0,
    //     stagger:0.1,
    //     duration:0.5,
    //     delay:-0.5
    // })
}
timeline();

function para(){
    gsap.from(".page-2 .para p",
        {
            x:-100,
            stagger:0.1,
            delay:-0.1,
            opacity:0,
            // scale:0,
            scrollTrigger:{
                trigger:".page-2 p",
                scroller:"body",
                // markers:true,
                start:"top 60%",
                scrub:2
            }
        }
    )
}
para();

function page3(){
    gsap.from(".page3 h2",{

        opacity:0,
        stagger:0.2,
        scrollTrigger:{
            trigger:".page3 h2",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            scrub:2
        }
    })
}
page3();

gsap.registerPlugin(ScrollTrigger);

const spans = gsap.utils.toArray(".page7 span");

gsap.from(spans, {
    x:200,
  opacity: 0,
  scale:0,
  stagger: 0.1,
  duration:1,
  delay:0.5,
  scrollTrigger: {
    trigger: ".page7",
    start: "top 100%",
    end: "bottom top",
    scrub: 2,
  },
});



//     gsap.from(spans, {
//       duration: 1,           // Animation duration
//       opacity: 0,           // Start from transparent
//       y: 100,               // Move in from below
//       stagger: 0.1,         // Stagger each letter by 0.1 seconds
//       ease: "back.out(1.7)" // Easing function for a nice bounce effect
//     });
    
//     // Optional: Add a hover effect for each span
//     spans.forEach(span => {
//       span.addEventListener('mouseover', () => {
//         gsap.to(span, {
//           scale: 1.5,
//           color: '#FFD700', // Change color on hover
//           duration: 0.3,
//           ease: "power1.out"
//         });
//       });
    
//       span.addEventListener('mouseout', () => {
//         gsap.to(span, {
//           scale: 1,
//           color: 'white', // Reset color
//           duration: 0.3,
//           ease: "power1.out"
//         });
//       });
//     });
// }
// last();

// function last2(){
//     const spans = document.querySelectorAll('.page7 span');

//   // Create a timeline for the animation
//   const tl = gsap.timeline({ paused: true });

//   // Add animations to the timeline
//   spans.forEach((span, index) => {
//     tl.fromTo(span, 
//       { scale: 1, opacity: 0 }, 
//       { scale: 1.5, opacity: 1, duration: 0.6, ease: "bounce.out", delay: index * 0.1 }, 
//       0
//     );
//   });

//   // Play the animation when the page loads
//   window.onload = () => {
//     tl.play();
//   };

//   // Add hover effect to each span
//   spans.forEach(span => {
//     span.addEventListener('mouseenter', () => {
//       gsap.to(span, { scale: 1.3, duration: 0.3, ease: "power1.out" });
//     });
//     span.addEventListener('mouseleave', () => {
//       gsap.to(span, { scale: 1, duration: 0.3, ease: "power1.out" });
//     });
//   });
// }
// last2();

// function page7(){
//     gsap.to(".page7 span",{
//         y:100,
//         delay:-0.1,
//         duration:1,
//         stagger:0.1,  
//         opacity:0,  
//         scrollTrigger:{
//             trigger:".page7",
//             scroller:"body",
//             start:"top 70%",
//             markers:true,
//             scrub:1,

//         }
//     })
// }
// page7();