import { simpleGameCard } from "./gameCard.js";

document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      title: "Game title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "/assets/imgs/lj.png",
    },
  ];

  const projectsDOM = document.getElementById("projects");
  let idx = 0;
  projectsDOM.innerHTML = projects
    .map((e) => {
      idx++;
      return simpleGameCard(`game${idx}`, e.img);
    })
    .join("");
});
