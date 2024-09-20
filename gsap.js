window.addEventListener("load",()=>{
  const loader = document.querySelector(".loader");
  loader.style.display="none";

 navbarAnimation();
})

function loader() {
  gsap.from(".loader span",{
    opacity:0,
    stagger:0.1,
    repeat:-1
  },"0.1")
  gsap.from(".loader img",{
    opacity:0,
    duration:0.5,
    x:-20,
  },"0.1")
}
loader()


var tl = gsap.timeline({defaults:{ease:"power2.inOut"}});
function navbarAnimation() {
    tl.from(".img-logo", {
        opacity: 0,
        x: -100,
        duration:0.7
      });
      
      tl.from(
        "#search",
        {
          opacity: 0,
          width: 0,
          duration:0.7
        },
        "<"
      );
      
      tl.from(
        ".li",
        {
          opacity: 0,
          y: -10,
          duration: 0.4,
          stagger: 0.1
        },
        "-=0.4"
      );       
}


var tl2 = gsap.timeline({defaults:{ease:"power2.inOut",opacity:0,delay:1}});


tl2.from(".h1-with-span span",{
    duration:0.5,
    stagger:0.1,
})

tl2.from(".rohit-img",{
    x:"100%",
    duration:0.5
},0)

// section2 scroll animation ****************
const cardsContainer = document.querySelector('.cards-container');
const containerWidth = cardsContainer.scrollWidth;  // Get total width of the container

var tl3 = gsap.timeline();


tl3.to(cardsContainer, {
  x: -(containerWidth - window.innerWidth + 20),  // Scroll with an additional 20px buffer
  ease: "none",
  scrollTrigger: {
    trigger: ".section2",
    scrub: 1,
    pin: true,
    start: "top top",  // Start when .section2 hits the top of the viewport
    end: () => `+=${containerWidth}`,  // Calculate based on total width of cards
  }
});

tl3.from(".container-section3 img",{
  opacity:0,
  y:-20,
  duration:1,
  ease:"power2.inOut"
})

gsap.to(".section-adidas-video video",{
width:"70%",
duration:1,
scrollTrigger:{
  trigger:".section-adidas-video",
  scroller:"body",
  scrub:1,
  // markers:true,
  start:"top 70%",
  end:"top 10%"
}
})

// text moving animation 
window.addEventListener("wheel",(e)=>{
  if(e.deltaY > 0){
      gsap.to(".marque",{
          transform:"translateX(-200%)",
          duration:2.5,
          repeat:-1,
          ease:"none"
      })

      gsap.to(".marque h2",{
          rotate:180
      })
  }else{
      gsap.to(".marque",{
          transform:"translateX(0%)",
          duration:2.5,
          repeat:-1,
          ease:"none"
      })

      gsap.to(".marque h2",{
          rotate:0
      })
  }
})