import { obtenerDatos } from "./api.js";
import { createCardTemplate } from "../components/card.js";
import { saveToLocalStorage } from "./storage.js";
import { getRandomInt } from "./helpers.js";
import { arrayCart, renderArrayCart } from "./cart.js";
import { renderLoader } from "./loader.js";
import {
  arrayAll,
  arrayAccion,
  arrayCienciaFiccion,
  arrayComedia,
  arrayDrama,
  arrayRomance,
  arrayTerror,
  arrayThriller,
  arrayWestern,
} from "../data/arrays.js";

// FUNCTION TO RENDER MOVIES
export async function renderMovie(place, array) {
  array = array;

  for (const movie of array) {
    try {
      const movieToRender = await obtenerDatos(movie);
      if (movieToRender) {
        place.innerHTML += createCardTemplate(movieToRender);
      } else {
        console.log(`No se pudo renderizar la película: ${movie}`);
      }
    } catch (error) {
      console.error(`Error al renderizar la película ${movie}:`, error);
    }
  }
  addEventListenersToButtons();
}

// FUNCTIONS TO SEARCH MOVIES
export async function searchMovie() {
  document.querySelector("#search-button").addEventListener("click", () => {
    let input = document.querySelector("#input-search-movie");
    let searchMoviesHTML = document.querySelector("#container-search-movies");
    searchMoviesHTML.innerHTML = "";
    obtenerDatos(input.value).then((data) => {
      searchMoviesHTML.innerHTML = renderLoader();
      if (!data) {
        searchMoviesHTML.innerHTML = `<p>La película que buscó no ha sido encontrada, por favor vuelva a intentarlo.</p>`;
      }
      if (data.Poster === "N/A") {
        searchMoviesHTML.innerHTML = `
        <span>${data.Title} no es una película, por favor ingrese un nombre válido</span>`;
        return;
      }
      searchMoviesHTML.innerHTML = `${createCardTemplate(data)}`;
      addEventListenersToButtons();
    });
  });
}

// FUNCTION TO FILTER MOVIES FOR CATEGORIES
export function filterMovies() {
  let filterBtn = document.querySelector("#filter-button");
  let containerMainMovies = document.querySelector("#list-main-movies");
  filterBtn.addEventListener("click", () => {
    let genreSelect = document.querySelector("#genre-select");
    let selectedValue = genreSelect.value;

    switch (selectedValue) {
      case "All":
        containerMainMovies.innerHTML = "";
        renderMovie(containerMainMovies, arrayAll);
        break;
      case "Accion":
        containerMainMovies.innerHTML = "";
        renderMovie(containerMainMovies, arrayAccion);
        break;
      case "Ciencia Ficcion":
        containerMainMovies.innerHTML = "";
        renderMovie(containerMainMovies, arrayCienciaFiccion);
        break;
      case "Comedia":
        containerMainMovies.innerHTML = "";
        renderMovie(containerMainMovies, arrayComedia);
        break;
      case "Drama":
        containerMainMovies.innerHTML = "";
        renderMovie(containerMainMovies, arrayDrama);
        break;
      case "Romance":
        containerMainMovies.innerHTML = "";
        renderMovie(containerMainMovies, arrayRomance);
        break;
      case "Western":
        containerMainMovies.innerHTML = "";
        renderMovie(containerMainMovies, arrayWestern);
        break;
      case "Terror":
        containerMainMovies.innerHTML = "";
        renderMovie(containerMainMovies, arrayTerror);
        break;
      case "Thriller":
        containerMainMovies.innerHTML = "";
        renderMovie(containerMainMovies, arrayThriller);
        break;
      default:
        containerMainMovies.innerHTML = "";
        console.log("Género no reconocido");
    }
  });
}

// FUNCTIONS GALLERY POSTERS
export function addEventListenersToPosters() {
  let posters = document.querySelectorAll(".poster");
  posters.forEach((poster) => {
    poster.addEventListener("click", (e) => {
      let movieSelect = e.target.id;
      let searchMoviesHTML = document.querySelector("#container-search-movies");
      let section = document.getElementById("search-movies");
      searchMoviesHTML.innerHTML = "";

      obtenerDatos(movieSelect).then((data) => {
        if (!data) {
          return;
        }
        searchMoviesHTML.innerHTML = `${createCardTemplate(data)}`;
        addEventListenersToButtons();
        section.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
}

// FUNCTION TO ADD MOVIE TO ARRAY CART
export function addEventListenersToButtons() {
  const btnAdd = document.querySelectorAll(".btn-add");
  const btnAddPosters = document.querySelectorAll(".btn-add-poster");
  btnAdd.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const movieTitle = e.currentTarget.id;
      obtenerDatos(movieTitle).then((data) => {
        if (!data) return;
        let existingMovie = arrayCart.find(
          (movie) => movie.Title === data.Title
        );
        if (!existingMovie) {
          let price = getRandomInt(2000, 10000);
          data.price = price;
          data.cantidad = 1;
          arrayCart.push(data);
        } else {
          console.log("La película ya se encuentra en el carrito.");
        }
        saveToLocalStorage("arrayCart", arrayCart);
        renderArrayCart();
      });
    });
  });
  btnAddPosters.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const movieTitle = e.currentTarget.id;
      obtenerDatos(movieTitle).then((data) => {
        if (!data) return;
        let existingMovie = arrayCart.find(
          (movie) => movie.Title === data.Title
        );
        if (!existingMovie) {
          let price = getRandomInt(2000, 10000);
          data.price = price;
          data.cantidad = 1;
          arrayCart.push(data);
        } else {
          console.log("La película ya se encuentra en el carrito.");
        }
        saveToLocalStorage("arrayCart", arrayCart);
        renderArrayCart();
      });
    });
  });
}