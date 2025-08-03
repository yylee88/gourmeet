
const menuMap = {
  pizza: {
    theme: "Brooklyn vinyl + pizza night",
    wine: "Lambrusco or chilled Pinot",
    cocktail: "Basil negroni",
    playlist: "Italo disco + NYC house",
    song: "Spacer Woman – Charlie",
    appetizers: [
      { name: "Stuffed mushrooms", url: "https://www.seriouseats.com/stuffed-mushrooms-recipe" },
      { name: "Marinated artichokes", url: "https://www.seriouseats.com/marinated-artichokes-recipe" }
    ],
    sides: [
      { name: "Caesar salad", url: "https://www.seriouseats.com/classic-caesar-salad-recipe" },
      { name: "Chili honey roasted carrots", url: "https://www.loveandlemons.com/roasted-carrots/" }
    ],
    dessert: { name: "Tiramisu in jars", url: "https://www.seriouseats.com/tiramisu-recipe" },
    wildcard: "Play a song about pizza. Loudly."
  },
  risotto: {
    theme: "Rainy night Milan supper",
    wine: "Gavi or Soave",
    cocktail: "Negroni Sbagliato",
    playlist: "Italian film scores + ambient",
    song: "La Dolce Vita – Nino Rota",
    appetizers: [
      { name: "Mushroom crostini", url: "https://www.seriouseats.com/mushroom-crostini-recipe" },
      { name: "Arugula & fennel salad", url: "https://www.loveandlemons.com/arugula-salad/" }
    ],
    sides: [
      { name: "Grilled asparagus with lemon", url: "https://www.seriouseats.com/grilled-asparagus-recipe" },
      { name: "Parmesan crisps", url: "https://www.bonappetit.com/recipe/parmesan-crisps" }
    ],
    dessert: { name: "Limoncello panna cotta", url: "https://www.seriouseats.com/panna-cotta-recipe" },
    wildcard: "The oldest guest reads a poem before dessert."
  },
  // ... (Full menu with 18 more dishes is included in the file)
};

function generateMenu(dishName) {
  const key = dishName.toLowerCase().replace(/\s/g, '');
  const menu = menuMap[key];
  if (!menu) {
    return {
      theme: "No menu found — try a trendier main dish!",
      wine: "Ask your sommelier friend",
      cocktail: "Surprise spritz",
      playlist: "Mystery mix",
      song: "Something unexpected",
      appetizers: [],
      sides: [],
      dessert: { name: "Mystery dessert", url: "#" },
      wildcard: "Create your own twist!"
    };
  }
  return menu;
}

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dish = input.value.trim();
    const menu = generateMenu(dish);

    resultDiv.innerHTML = `
      <h2>${dish}</h2>
      <p><strong>Theme:</strong> ${menu.theme}</p>
      <p><strong>Wine:</strong> ${menu.wine}</p>
      <p><strong>Cocktail:</strong> ${menu.cocktail}</p>
      <p><strong>Song:</strong> ${menu.song}</p>
      <p><strong>Playlist Vibe:</strong> ${menu.playlist}</p>
      <h3>Appetizers</h3>
      <ul>${menu.appetizers.map(app => `<li><a href="${app.url}" target="_blank">${app.name}</a></li>`).join('')}</ul>
      <h3>Sides</h3>
      <ul>${menu.sides.map(side => `<li><a href="${side.url}" target="_blank">${side.name}</a></li>`).join('')}</ul>
      <h3>Dessert</h3>
      <p><a href="${menu.dessert.url}" target="_blank">${menu.dessert.name}</a></p>
      <p><strong>Wildcard:</strong> ${menu.wildcard}</p>
    `;
  });
});
