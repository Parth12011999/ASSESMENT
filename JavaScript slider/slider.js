const slides = document.querySelector(".img-show");
var slideIndex = 0;
const sliderImg = document.querySelector('.active-img')
const Source = {
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
    "https://picsum.photos/id/12/200/100"
    ]
}

Source.src.map(src=>{

    // Creating Img tag using create elemnent
    let ImgTag = document.createElement("img");
    ImgTag.src = src;
    console.log(ImgTag)
    slides.appendChild(ImgTag)
})
let Images = document.querySelectorAll('.img-show img')
console.log(Images)

function blur(){
    Images.forEach(img=>{
        img.style.opacity = 0.3
    })
}
blur()

let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');

// By default showing image
Images[slideIndex].style.opacity = 1;
sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`

// Next button
nextButton.addEventListener('click', ()=>{
    slideIndex++
    if (slideIndex > Images.length - 1) {
        slideIndex = 0
    }


    blur()
    Images[slideIndex].style.opacity = 1;
    sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`
})

// Prev button
prevButton.addEventListener('click', ()=>{
    slideIndex --
    if (slideIndex < 0) {
        slideIndex = Images.length - 1 
    }
    blur()
    Images[slideIndex].style.opacity = 1;
    sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`

})

Images.forEach(img=>{
    img.addEventListener('click',()=>{
        blur()
        img.style.opacity = 1;
        sliderImg.style.backgroundImage = `url(${img.src})`
    })
})

