//toggle
const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.onclick = function(){
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
}


//slider
const sliders = document.querySelectorAll('.sliders')
const dots = document.querySelectorAll('.dot')

function setActive(i) {
    for (slider of sliders)
    slider.classList.remove("active")
    sliders[i].classList.add("active")
    for (dot of dots)
    dot.classList.remove("active")
    dots[i].classList.add("active")
}

for (let j = 0; j < dots.length; j++) {
    dots[j].addEventListener('click', function () {
        setActive(j)
    })
}