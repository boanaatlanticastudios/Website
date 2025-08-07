import { gameCard } from "./gameCard.js";

document.addEventListener("DOMContentLoaded", function () {
  const projects = Array(2).fill({
    title: "Game title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  });
  const projectsDOM = document.getElementById("projects");
  let idx = 0;
  projectsDOM.innerHTML = projects
    .map((e) => {
      idx++;
      return gameCard(`game${idx}`, e.title, e.desc, idx % 2 == 0);
    })
    .join("");
});
