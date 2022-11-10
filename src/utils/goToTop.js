export const goToTop = () => {
  document.body.scrollIntoView({
    behavior: 'smooth'
  })
}

const showOnPx = 100

const scrollContainer = () => {
  return document.documentElement || document.body
}

document.addEventListener('scroll', () => {
  const backToTopButton = document.querySelector('.back-to-top')
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove('hidden')
  } else {
    backToTopButton.classList.add('hidden')
  }
})
