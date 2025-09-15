// Mobile menu toggle
let isMenuOpen = false

function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen
  const mobileNav = document.querySelector(".mobile-nav")
  const menuIcon = document.querySelector(".menu-icon")
  const closeIcon = document.querySelector(".close-icon")

  if (isMenuOpen) {
    mobileNav.classList.remove("hidden")
    menuIcon.classList.add("hidden")
    closeIcon.classList.remove("hidden")
  } else {
    mobileNav.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
    // Close mobile menu if open
    if (isMenuOpen) {
      toggleMobileMenu()
    }
  }
}

// Form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form")
  const successMessage = document.getElementById("success-message")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(form)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    console.log("Form submitted:", data)

    // Show success message
    form.classList.add("hidden")
    successMessage.classList.remove("hidden")

    // Reset form after 3 seconds
    setTimeout(() => {
      form.classList.remove("hidden")
      successMessage.classList.add("hidden")
      form.reset()
    }, 3000)
  })

  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    { threshold: 0.1 },
  )

  // Observe all fade-in elements
  const fadeElements = document.querySelectorAll(".fade-in")
  fadeElements.forEach((el) => observer.observe(el))
})
