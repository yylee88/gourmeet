
const menuMap = {
  pho: {
    theme: "Steam & street corner stories",
    wine: "Gewürztraminer",
    cocktail: "Lime & lemongrass gin fizz",
    playlist: "Vietnamese soul + ambient jazz",
    song: "Nhớ Mùa Thu Hà Nội – Hồng Nhung",
    appetizers: [
      { name: "Shrimp summer rolls", url: "https://www.seriouseats.com/vietnamese-shrimp-summer-rolls-recipe" },
      { name: "Green papaya salad", url: "https://www.seriouseats.com/green-papaya-salad-recipe" }
    ],
    sides: [
      { name: "Pickled vegetables", url: "https://www.seriouseats.com/vietnamese-daikon-carrot-pickles-do-chua-recipe" },
      { name: "Scallion oil rice", url: "https://www.vickypham.com/blog/com-hanh-mo-hanh-vietnamese-scallion-oil-rice" }
    ],
    dessert: { name: "Che ba mau (3 color dessert)", url: "https://www.hungryhuy.com/che-ba-mau-recipe/" },
    wildcard: "Ask someone to share their most comforting childhood soup memory."
  },
  padthai: {
    theme: "Bangkok night market table",
    wine: "Off-dry Riesling",
    cocktail: "Tamarind margarita",
    playlist: "Thai funk + electro",
    song: "Ying Yang – Khana Bierbood",
    appetizers: [
      { name: "Fried tofu with peanut sauce", url: "https://www.seriouseats.com/fried-tofu-peanut-sauce-recipe" },
      { name: "Thai fish cakes", url: "https://hot-thai-kitchen.com/tod-man-pla/" }
    ],
    sides: [
      { name: "Som tum (green papaya salad)", url: "https://hot-thai-kitchen.com/som-tum/" },
      { name: "Sticky rice with scallions", url: "https://www.seriouseats.com/thai-sticky-rice-recipe" }
    ],
    dessert: { name: "Mango sticky rice", url: "https://hot-thai-kitchen.com/mango-sticky-rice/" },
    wildcard: "Serve the meal with tiny woven bamboo baskets for rice."
  },
  // ... 18 more dishes skipped in preview for brevity
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
  }
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
