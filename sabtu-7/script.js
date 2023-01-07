var carousel = document.getElementById("carousel");
var slides = carousel.getElementsByClassName("slide");
var gambar = document.querySelector("img");
var currentSlide = 0;

var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

// slides[1].style.zIssndex = "2";

var namaGambar = [
    "/sabtu-7/img1.jpg",
    "/sabtu-7/img2.jpg",
    "/sabtu-7/img3.jpg"
];
function showNextSlide(){
if(currentSlide == 3){
    currentSlide = 0;
}
console.log(currentSlide);
  gambar.src = namaGambar[currentSlide];
  currentSlide++;
}

    
    var timer = setInterval(showNextSlide, 5000);

gambar.addEventListener("mouseover", function(){
    // clearInterval()
    clearInterval(timer);
});
gambar.addEventListener("mouseout", function(){
    timer = setInterval(showNextSlide, 5000);
});

next.addEventListener("click", function(){
    currentSlide++;
    if(currentSlide == 3){
        currentSlide = 0;
    }
    gambar.src = namaGambar[currentSlide];
});

prev.addEventListener("click", function(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = 2;
    }
    gambar.src = namaGambar[currentSlide];
});