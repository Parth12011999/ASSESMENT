const slides = document.querySelector(".img-show");
var slideIndex = 0;
const sliderImg = document.querySelector('.active-img')
const img = {
    src : [
    "https://picsum.photos/id/1/200/100",
    "https://picsum.photos/id/2/200/100",
    "https://picsum.photos/id/3/200/100",
    "https://picsum.photos/id/4/200/100",
    "https://picsum.photos/id/5/200/100",
    "https://picsum.photos/id/6/200/100",
    "https://picsum.photos/id/7/200/100",
    "https://picsum.photos/id/8/200/100",
    "https://picsum.photos/id/9/200/100",
    "https://picsum.photos/id/10/200/100",
    "https://picsum.photos/id/11/200/100",
    "https://picsum.photos/id/12/200/100",
    ]
}

img.src.map(src=>{

    // Creating Img tag using create elemnent
    let ImgTag = document.createElement("img");
    ImgTag.src = src;

    // Appending img tages in container
    slides.appendChild(ImgTag)
})



const Images = slides.querySelectorAll('img')
let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');

// By default showing image
Images[slideIndex].classList.add('active')
sliderImg.appendChild(Images[slideIndex])

// Next button
nextButton.addEventListener('click', ()=>{
    if (slideIndex < img.src.length - 1) {
        slideIndex++
    }
    else{
        slideIndex = 0
    }
    // let ImgTag2 = sliderImg.createElement('img')
    // ImgTag2.src = Images.src
    let slide = Images[slideIndex]
    slide.classList.add('active')
    sliderImg.appendChild(slide)
    slide.previousSibling.remove()
})

// Prev button
prevButton.addEventListener('click', ()=>{
    if (slideIndex > 0) {
        slideIndex--
    }
    else{
        slideIndex = img.src.length - 1 
    }

    let slide = Images[slideIndex]
    sliderImg.appendChild(slide)
    slide.classList.add('active')
    slide.previousSibling.remove()

})

