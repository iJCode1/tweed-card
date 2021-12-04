let nVeces = 0;
const likes = document.querySelector(".grid__heart > p");
const heart = document.querySelector(".heart");
heart.addEventListener("click", () => animacion());
const animacion = () => {
  heart.classList.toggle("heart__animation");
  nVeces++;
  if (nVeces % 2 == 0) {
    likes.textContent = "250";
  } else {
    likes.textContent = "251";
  }
};
