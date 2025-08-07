import { gameCard } from "./gameCard.js";

document.addEventListener("DOMContentLoaded", function () {
  const carrousel = document.getElementById("carrousel");
  const passButton = document.getElementById("pass");
  const retroButton = document.getElementById("retro");
  let actuallyGame = "game1";
  carrousel.innerHTML += gameCard(
    "game1",
    "Highlight #1",
    "A little description"
  );

  passButton.addEventListener("click", () => {
    document.getElementById(actuallyGame).remove();
    actuallyGame = "game2";
    carrousel.innerHTML += gameCard(
      "game2",
      "Highlight #2",
      "A little description"
    );
  });
  retro.addEventListener("click", () => {
    document.getElementById(actuallyGame).remove();
    actuallyGame = "game1";
    carrousel.innerHTML += gameCard(
      "game1",
      "Highlight #1",
      "A little description"
    );
  });
});
