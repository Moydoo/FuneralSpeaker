function scrollFooter() {
    const footer = document.querySelector('.footer');
    (this.scrollY <= 2690) ? footer.classList.add('scrolled') : footer.classList.remove('scrolled')
}

window.addEventListener('scroll', scrollFooter)