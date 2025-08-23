import { simpleGameCard } from "./gameCard.js";

document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      title: "Little John Adventures",
      img: "/assets/imgs/lj.png",
    },
    {
      title: "????",
      img: "",
    },
  ];

  const projectsDOM = document.getElementById("projects");
  let idx = 0;
  projectsDOM.innerHTML = projects
    .map((e) => {
      idx++;
      return simpleGameCard(`game${idx}`, e.title, e.img);
    })
    .join("");
});
