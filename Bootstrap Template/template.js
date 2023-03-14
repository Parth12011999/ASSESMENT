function fade() {
    var fadeIn = document.querySelectorAll(".fade-in");

    for(var i=0; i < fadeIn.length; i++)
    {
        var windowHeight = window.innerHeight;
        var elementTop = fadeIn[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight -elementVisible) {
           fadeIn[i].classList.add("active");
        } else {
            fadeIn[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", fade);