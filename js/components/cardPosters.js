import { renderStarsRate } from "../utils/helpers.js";

export function createCardTemplateGallery(object) {
  return `
     <div id="movie-gallery-poster">
         <img id="img-gallery" loading="lazy" src="${object.Poster}" alt="${object.Title}">
             <div>        
                 <span>${object.Title.length >= 7 ? object.Title.substring(0, 7) + "..." : object.Title } - ${object.Year}</span>
                 <span>${renderStarsRate(object.imdbRating)}</span>
                 <button id="${
                   object.Title
                 }" class="btn-add"><i class="fa-solid fa-cart-plus"></i>
                 </button>
             </div>
         
      </div>
   `;
}
