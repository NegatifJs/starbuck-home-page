const body = document.querySelector('body')
const lightMode = document.querySelector('.light-button')
const darkMode = document.querySelector('.dark-button')
const changeImg = document.querySelector('.change-img')
const navResponsive = document.querySelector('.header__nav--link')
const responsiveBtn = document.querySelector('.header__nav--responsive')
const imgMenuResponsive = document.querySelector('.header__nav--responsive i')

lightMode.addEventListener('click' ,() =>{
    lightMode.classList.add('active')
    body.classList.remove('dark')
    darkMode.classList.remove('active')
    changeImg.src='assets/white-starbuck.png'
})
darkMode.addEventListener('click' ,() =>{
    
    lightMode.classList.remove('active')
    darkMode.classList.add('active')
    body.classList.add('dark')
    changeImg.src='assets/chocolate-starbuck.png'

})

responsiveBtn.addEventListener('click', () => {
    navResponsive.classList.toggle('responsive-nav');
    
})