import { loadData } from "../model/model.js";

const navLinks = document.querySelectorAll("nav a");

function setActiveLink(pageID) {
  const nav = document.querySelector("nav");
  if (!nav) return;

  if (pageID === "home") nav.classList.remove("dark-nav");
  else nav.classList.add("dark-nav");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${pageID}`) link.classList.add("active");
  });
}

function route() {
  const hash = window.location.hash || "#home";
  const pageID = hash.replace("#", "");
  setActiveLink(pageID);
  loadData(pageID);
}

function initListeners() {
  const hamburger = document.getElementById("hamburger-icon");
  if (!hamburger) return;

  hamburger.addEventListener("click", (e) => {
    if (e.target.closest(".mobile-menu a")) return; // don't retoggle when clicking a link
    hamburger.classList.toggle("open");
  });

  document.querySelectorAll("#hamburger-icon .mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", initListeners);
window.addEventListener("hashchange", route);
route();