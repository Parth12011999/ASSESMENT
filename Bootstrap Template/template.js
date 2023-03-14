<<<<<<< HEAD
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

=======
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

>>>>>>> 640f6b2 (first commit)
window.addEventListener("scroll", fade);