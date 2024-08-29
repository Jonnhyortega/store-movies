import { obtenerDatos } from "../utils/api.js";
import { addEventListenersToButtons, addEventListenersToPosters } from "../utils/events.js";
import { createCardTemplateGallery } from "./cardPosters.js";

// FUNCTION TO RENDER POSTER IN HERO SECTION
export async function renderGallery(array) {
    let numberArrayToRender = 0;
  
    const renderImages = async (movieArray) => {
      document.querySelector("#gallery-poster").innerHTML = "";
      for (const movie of movieArray) {
        try {
          const movieToRender = await obtenerDatos(movie);
          if (movieToRender) {
            document.querySelector("#gallery-poster").innerHTML += `
              ${createCardTemplateGallery(movieToRender)}
            `;
          } else {
            console.log(`No se pudo renderizar la película: ${movie} en gallery`);
          }
        } catch (error) {
          console.error(
            `Error al renderizar la película en gallery ${movie}:`,
            error
          );
        }
      }
      addEventListenersToPosters();
      addEventListenersToButtons()
    };
  
    const changeArray = () => {
      numberArrayToRender = (numberArrayToRender + 1) % array.length;
      renderImages(array[numberArrayToRender]);
      addEventListenersToPosters();
    };
  
    renderImages(array[numberArrayToRender]);
    setInterval(changeArray, 100000);
  }
  // FUNCTION TO RENDER 