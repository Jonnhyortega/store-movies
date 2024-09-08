import { renderArrayCart } from "./utils/cart.js";
import { renderGallery } from "./components/gallery.js";
import { renderMovie, searchMovie, filterMovies, toggleMenu } from "./utils/events.js";
import {
  recommendedMovies,
  galleryPostersArray,
  arrayAll,
} from "./data/arrays.js";
document.addEventListener("DOMContentLoaded", () => {
  
  toggleMenu()
  renderMovie(document.querySelector("#list-recommended"), recommendedMovies);
  renderArrayCart();
  renderGallery(galleryPostersArray);
  renderMovie(document.querySelector("#list-main-movies"), arrayAll);
  searchMovie();
  filterMovies();
});
