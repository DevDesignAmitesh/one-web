const body = document.querySelector("body");
const cursor = document.querySelector("#cursor");
const blurCrsr = document.querySelector("#blur-cursor");
const h4s = document.querySelectorAll("#nav h4");
const small = document.querySelectorAll("#page4 .small");

small.forEach((elem) => {
  elem.addEventListener("mousemove", () => {
    cursor.style.scale = 3;
    cursor.style.border = "2px solid #fff";
    cursor.style.backgroundColor = "transparent"
  });
  elem.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "0px";
    cursor.style.backgroundColor = "#91B508"
  });
});

h4s.forEach((elem) => {
  elem.addEventListener("mousemove", () => {
    cursor.style.scale = 3;
    cursor.style.border = "2px solid #fff";
    cursor.style.backgroundColor = "transparent"
  });
  elem.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "0px";
    cursor.style.backgroundColor = "#91B508"
  });
});

body.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      display: "block",
      left: dets.x  + 'px',
      top: dets.y + 'px'
    });
    gsap.to(blurCrsr, {
      display: "block",
      left: dets.x - 175 + 'px',
      top: dets.y - 175 + 'px'
    });
  });
body.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      display: "none"
    });
    gsap.to(blurCrsr, {
      display: "none"
    });
  });


gsap.to("#nav", {
  height: "6.5vw",
  backgroundColor : "black",
  duration: "0.7",
  scrollTrigger: {
    trigger: "#nav",
    scroll: "body",
    // markers: true,
    start: "top -10%",
    end: "top -12%",
    scrub: 1
  }
});

gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start : "top -25%",
    end : "top -75%",
    scrub: 1
  }
});


gsap.from("#about-us", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 70%",
    scrub: 1
  }
});

gsap.from(".card", {
  scale: 0.7,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 70%",
    scrub: 1
  }
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end : "top 55%",
    scrub: 3
  }
}, "anim");
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end : "top 60%",
    scrub: 3
  }
}, "anim");

gsap.from("#page4 h1", {
  y: 80,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 70%",
    scrub: 3
  }
});