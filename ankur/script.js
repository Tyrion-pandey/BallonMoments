function openmenu() {
    document.getElementById("menu").style.display = "block";

}
function closemenu() {
    document.getElementById("menu").style.display = "none";
}
function showreviews() {
    let rev = document.querySelector(".reviews");
    let des = document.querySelector(".description");
    let revbtn =  document.querySelector(".revee");
    let descbtn =  document.querySelector(".desc");
    rev.style.display = "block";
    des.style.display = "none";
    revbtn.classList.add("active");
    descbtn.classList.remove("active");

}

function showdescription() {
    let rev = document.querySelector(".reviews");
    let des = document.querySelector(".description");
    rev.style.display = "none";
    des.style.display = "block";
    let revbtn =  document.querySelector(".revee");
    let descbtn =  document.querySelector(".desc");
    revbtn.classList.remove("active");
    descbtn.classList.add("active");
}
var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }