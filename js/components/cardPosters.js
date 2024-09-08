import { renderStarsRate } from "../utils/helpers.js";

export function createCardTemplateGallery(object) {
  return `
     <div id="movie-gallery-poster">
         <img id="img-gallery" loading="lazy" src="${object.Poster}" alt="${object.Title}">
             <div>        
                 <span>${object.Title} - ${object.Year}</span>
                 <span>${renderStarsRate(object.imdbRating)}</span>
                 <button id="${
                   object.Title
                 }" class="btn-add-poster"><i class="fa-solid fa-cart-plus"></i>
                 </button>
             </div>
         
      </div>
   `;
}
