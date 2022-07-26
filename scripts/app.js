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



