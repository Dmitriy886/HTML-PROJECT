/** Navbar for mobile devices */
const navbar = document.querySelector("#navbar")
const navbarButton = document.querySelector("#navbar-btn")
const navbarItems = document.querySelectorAll(".navbar-item")

let navbarState = false

const toggleNavbarItems = () => {
  const navbarItemDisplay = navbarState ? "none" : "initial"

  if (!navbarState) {
    navbar.style.flexDirection = "column"
    navbarButton.style.marginRight = "auto"
    navbarButton.src = "./assets/images/svg/close-line.svg"
  } else {
    navbar.style.flexDirection = "row"
    navbarButton.style.marginRight = "40px"
    navbarButton.src = "./assets/images/svg/menu-line.svg"
  }

  for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].style.display = navbarItemDisplay
  }

  navbarState = !navbarState
}

navbarButton.addEventListener("click", toggleNavbarItems)