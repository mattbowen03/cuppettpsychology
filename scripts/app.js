const toggleView = document.querySelector(".toggle-view");
const hiddenItems = document.querySelectorAll(".hidden-items");
const btn = document.querySelectorAll(".btn");

//toggle see more in our services
//bc queryselectorAll returns an array of elements, you have to use an iterative fn to apply the class changes to each item of the array
toggleView.addEventListener('click', () => {
  hiddenItems.forEach(item => {
    item.classList.toggle('hidden');
  })
  hiddenItems[0].classList.contains('hidden') ? toggleView.innerHTML = 'See full list...' : toggleView.innerHTML = 'Hide full list...';
})

btn.forEach(button => button.addEventListener('click', () => window.location.href = './appointment-form.html'))


//Hero Slider----------
let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides1, 12000); // Change image every 12 seconds
}



