import switchBg from "./modules/switchBg.js";
const poster = document.querySelector(".poster");
const img = poster.querySelector(".poster__img");

switchBg(img.src);