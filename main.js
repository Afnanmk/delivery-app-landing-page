const navbar = document.querySelector(".navigation")
const hero = document.querySelector(".hero")
const back_to_top = document.querySelector(".back-to-top")

const sliders = document.querySelectorAll(".slide-up")

// Show navbar and back-to-top button on scroll
scrollObserverOptions = {
  threshold: 0.5,
}

const scrollObserver = new IntersectionObserver(function (
  entries,
  scrollObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbar.classList.add("sticky-navbar")
      back_to_top.classList.add("back-to-top--intersecting")
      //   back_to_top.style.opacity = 1
      //   back_to_top.style.visibility = "visible"
    } else {
      navbar.classList.remove("sticky-navbar")
      back_to_top.classList.remove("back-to-top--intersecting")
    }
  })
},
scrollObserverOptions)

scrollObserver.observe(hero)

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
}
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add("appear")
      appearOnScroll.unobserve(entry.target)
    }
  })
},
appearOptions)

sliders.forEach((slider) => {
  appearOnScroll.observe(slider)
})
