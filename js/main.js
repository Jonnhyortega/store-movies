import { renderArrayCart } from "./utils/cart.js";
import { renderGallery } from "./components/gallery.js";
import { renderMovie, searchMovie, filterMovies } from "./utils/events.js";
import {
  recommendedMovies,
  galleryPostersArray,
  arrayAll,
} from "./data/arrays.js";
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("menu-toggle").addEventListener("click", () => {
    let menuMobile = document.getElementById("menu_mobile");
    menuMobile.style.display =
      menuMobile.style.display === "none" || menuMobile.style.display === ""
        ? "flex"
        : "none";
    console.log("menu movil");
  });

  renderMovie(document.querySelector("#list-recommended"), recommendedMovies);
  renderArrayCart();
  renderGallery(galleryPostersArray);
  renderMovie(document.querySelector("#list-main-movies"), arrayAll);
  searchMovie();
  filterMovies();
});
