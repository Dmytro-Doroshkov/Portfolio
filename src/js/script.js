const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeBtn = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});


const ratingScores = document.querySelectorAll('.skills__rating-score'),
      ratingLines = document.querySelectorAll('.skills__rating-line span');



ratingScores.forEach((item, i) => {
    console.log(item);
    ratingLines[i].style = `width: ${item.textContent}`;
    // ratingLines[i].style.width = item.innerHTML;
    console.log(item.textContent)
});

