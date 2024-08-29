export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  export function renderStarsRate(rated) {
    switch (true) {
      case rated >= 0 && rated <= 1:
        return `⭐`;
      case rated > 1 && rated <= 3:
        return `⭐⭐`;
      case rated > 3 && rated <= 7:
        return `⭐⭐⭐`;
      case rated > 7 && rated <= 9:
        return `⭐⭐⭐⭐`;
      case rated > 9:
        return `⭐⭐⭐⭐⭐`;
      case rated == "N/A":
        return `❗`;
      default:
        return `❗`;
    }
  }