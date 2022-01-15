const navbar = document.querySelector(".navigation")
const hero = document.querySelector(".hero")
const back_to_top = document.querySelector(".back-to-top")

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
