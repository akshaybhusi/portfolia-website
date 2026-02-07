// Navbar Animation
gsap.from(".navbar", {
  y: -80,
  opacity: 0,
  duration: 1
});

// Hero Text Animation
gsap.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".hero-subtitle", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.8
});

gsap.from(".btn", {
  scale: 0,
  opacity: 0,
  duration: 0.8,
  delay: 1.2
});

// About Section Animation
gsap.from(".about", {
  scrollTrigger: ".about",
  y: 100,
  opacity: 0,
  duration: 1
});

// Project Cards Animation
gsap.from(".card", {
  scrollTrigger: ".projects",
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});
