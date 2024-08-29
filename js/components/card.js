import { renderStarsRate } from "../utils/helpers.js";
export function createCardTemplate(object) {
     
    return `
      <div id="movie">
          <img loading="lazy" src="${object.Poster}" alt="${object.Title}">
          <div>
              <div>        
                  <span>${object.Title} - ${object.Year}</span>
                  <span>${renderStarsRate(object.imdbRating)}</span>
                  <button id="${object.Title}" class="btn-add"><i class="fa-solid fa-cart-plus"></i>
                  </button>
              </div>
          </div>
       </div>
    `;
  }
  