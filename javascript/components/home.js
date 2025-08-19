import { gameCard } from "./gameCard.js";

document.addEventListener("DOMContentLoaded", function () {
  const carrousel = document.getElementById("carrousel");
  const passButton = document.getElementById("pass");
  const retroButton = document.getElementById("retro");
  const change0Button = document.getElementById("change1");
  const change1Button = document.getElementById("change2");
  const change2Button = document.getElementById("change3");
  const games = [
    {
      id: "game1",
      desc: "Little John Adventures Teaser 1",
      img: "/assets/imgs/lj.png",
      teaser: "https://www.youtube.com/watch?v=P3sWA8ncn_c",
    },
    {
      id: "game2",
      desc: "Little John Adventures Teaser 2",
      img: "/assets/imgs/lj.png",
      teaser: "https://www.youtube.com/watch?v=P3sWA8ncn_c",
    },
    {
      id: "game3",
      desc: "Little John Adventures Teaser 3",
      img: "/assets/imgs/lj.png",
      teaser: "https://www.youtube.com/watch?v=P3sWA8ncn_c",
    },
  ];
  let idx = 0;

  function removeGameCard() {
    removeHighlightBtn();
    document.getElementById(games[idx].id).remove();
  }

  function addGameCard() {
    carrousel.innerHTML += gameCard(
      games[idx].id,
      games[idx].desc,
      games[idx].img,
      games[idx].teaser
    );
    addHighlightBtn();
  }

  function changeByButton(button) {
    removeGameCard();
    idx = button;
    addGameCard();
  }

  function removeHighlightBtn() {
    const btn = document.getElementById(`change${idx + 1}`);
    btn.classList.add("w-4");
    btn.classList.remove("w-6");
  }

  function addHighlightBtn() {
    const btn = document.getElementById(`change${idx + 1}`);
    btn.classList.add("w-6");
    btn.classList.remove("w-4");
  }

  addGameCard();

  passButton.addEventListener("click", () => {
    removeGameCard();
    idx = idx < games.length - 1 ? idx + 1 : 0;
    addGameCard();
  });
  retroButton.addEventListener("click", () => {
    removeGameCard();
    idx = idx > 0 ? idx - 1 : games.length - 1;
    addGameCard();
  });

  change0Button.addEventListener("click", () => changeByButton(0));
  change1Button.addEventListener("click", () => changeByButton(1));
  change2Button.addEventListener("click", () => changeByButton(2));
});
