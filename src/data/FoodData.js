const FoodData = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5",
      name: "Onion Pizza",
      price: 150,
      desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
      category: "Lunch",
      rating: 4.5,
    },
    {
      id: 2,
      img: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
      name: "Margherita Pizza",
      price: 130,
      desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
      category: "Lunch",
      rating: 4.2,
    },
    {
      id: 3,
      img: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
      name: "Pepperoni Pizza",
      price: 160,
      desc: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce. A popular choice that's perfect for satisfying your pizza cravings.",
      category: "Lunch",
      rating: 4.6,
    },
    {
      id: 4,
      img: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
      name: "Mushroom and Spinach Pizza",
      price: 140,
      desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers a balanced and satisfying taste.",
      category: "Lunch",
      rating: 4.2,
    },
    {
      id: 5,
      img: "https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png",
      name: "BBQ Chicken Pizza",
      price: 170,
      desc: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight your taste buds.",
      category: "Lunch",
      rating: 4.8,
    },
    {
      id: 6,
      img: "https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png",
      name: "Classic Pancakes",
      price: 80,
      desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
      category: "Breakfast",
      rating: 4.5,
    },
    {
      id: 7,
      img: "https://w7.pngwing.com/pngs/645/475/png-transparent-croissant-bread-croissant-muffin-brunch-bacon-egg-and-cheese-sandwich-bread-croissants-baked-goods-food-baking-thumbnail.png",
      name: "Egg and Bacon Croissant",
      price: 110,
      desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
      category: "Breakfast",
      rating: 4.2,
    },
    {
      id: 8,
      img: "https://w7.pngwing.com/pngs/683/103/png-transparent-frozen-yogurt-parfait-breakfast-yoghurt-fruit-salad-yogurt-frutti-di-bosco-food-breakfast-thumbnail.png",
      name: "Greek Yogurt Parfait",
      price: 95,
      desc: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
      category: "Breakfast",
      rating: 4.1,
    },
    {
      id: 9,
      img: "https://w7.pngwing.com/pngs/400/603/png-transparent-toast-tostytosty-la-tosteria-menu-food-dish-avocado-toast-food-toast-avocado-toast-thumbnail.png",
      name: "Avocado Toast",
      price: 120,
      desc: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
      category: "Breakfast",
      rating: 4.6,
    },
    {
      id: 10,
      img: "https://w7.pngwing.com/pngs/20/725/png-transparent-grain-bowl-breakfast-cereal-muesli-corn-flakes-bowl-granola-food-breakfast-recipe-thumbnail.png",
      name: "Fruit and Nut Oatmeal",
      price: 85,
      desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
      category: "Breakfast",
      rating: 4.5,
    },
    {
      id: 11,
      img: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
      name: "Grilled Salmon",
      price: 190,
      desc: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables. A healthy and flavorful dinner option that's rich in omega-3 fatty acids.",
      category: "Dinner",
      rating: 4.5,
    },
    {
      id: 12,
      img: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
      name: "Chicken Alfredo Pasta",
      price: 160,
      desc: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
      category: "Dinner",
      rating: 4.8,
    },
    {
      id: 13,
      img: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
      name: "Vegetable Stir-Fry",
      price: 130,
      desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
      category: "Dinner",
      rating: 4.2,
    },
    {
      id: 14,
      img: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
      name: "Grilled Chicken Burrito Bowl",
      price: 160,
      desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
      category: "Dinner",
      rating: 4.6,
    },
    {
      id: 15,
      img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
      name: "Mushroom Risotto",
      price: 175,
      desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
      category: "Dinner",
      rating: 4.5,
    },
    {
      id: 16,
      img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
      name: "Cheese and Crackers Platter",
      price: 120,
      desc: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts. A delightful snack option for sharing or indulging in on your own.",
      category: "Snacks",
      rating: 4.3,
    },
    {
      id: 17,
      img: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
      name: "Crispy Chicken Wings",
      price: 130,
      desc: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection. Choose your favorite sauce, from tangy BBQ to spicy buffalo, for a flavorful snacking experience.",
      category: "Snacks",
      rating: 4.4,
    },
    {
      id: 18,
      img: "https://w7.pngwing.com/pngs/816/163/png-transparent-grilled-skewered-meat-bakery-paneer-tikka-indian-cuisine-vegetarian-cuisine-cake-food-baking-cake-decorating-thumbnail.png",
      name: "Paneer Tikka Skewers",
      price: 130,
      desc: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection. Served with mint chutney, these paneer tikka skewers offer a flavorful and aromatic Indian snack experience.",
      category: "Snacks",
      rating: 4.9,
    },
    {
      id: 19,
      img: "https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png",
      name: "Hummus and Veggie Platter",
      price: 90,
      desc: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread. A nutritious and satisfying option for a light and refreshing snack.",
      category: "Snacks",
      rating: 4.4,
    },
    {
      id: 20,
      img: "https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png",
      name: "Fruit Skewers",
      price: 70,
      desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
      category: "Snacks",
      rating: 4.8,
    },

{
    id: 21,
    img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    name: "Pesto Pasta Primavera",
    price: 180,
    desc: "Fresh basil pesto tossed with seasonal vegetables and al dente pasta, topped with shaved Parmesan and pine nuts.",
    category: "Dinner",
    rating: 4.7,
},
{
    id: 22,
    img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40",
    name: "Mediterranean Quinoa Bowl",
    price: 165,
    desc: "Protein-rich quinoa with roasted vegetables, feta cheese, olives, and herb-infused olive oil dressing.",
    category: "Lunch",
    rating: 4.6,
},
{
    id: 23,
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    name: "Buddha Bowl",
    price: 170,
    desc: "Nourishing bowl of brown rice, avocado, roasted chickpeas, sweet potato, and tahini dressing.",
    category: "Lunch",
    rating: 4.8,
},
{
    id: 24,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    name: "Rainbow Salad",
    price: 140,
    desc: "Vibrant mix of fresh vegetables, seeds, and superfoods with apple cider vinaigrette.",
    category: "Lunch",
    rating: 4.5,
},
{
    id: 25,
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    name: "Pad Thai Noodles",
    price: 155,
    desc: "Rice noodles with tofu, bean sprouts, crushed peanuts in traditional Thai sauce.",
    category: "Dinner",
    rating: 4.7,
},
{
    id: 26,
    img: "https://images.unsplash.com/photo-1525518392674-39ba1febe881",
    name: "Smoothie Bowl",
    price: 120,
    desc: "Açai blend topped with fresh fruits, coconut flakes, and house-made granola.",
    category: "Breakfast",
    rating: 4.6,
},
{
    id: 27,
    img: "https://images.unsplash.com/photo-1490457843367-34b21b6ccd85",
    name: "Power Breakfast Toast",
    price: 135,
    desc: "Multigrain toast topped with smashed avocado, poached eggs, and microgreens.",
    category: "Breakfast",
    rating: 4.8,
},
{
    id: 28,
    img: "https://images.unsplash.com/photo-1515516969-d4008cc6241a",
    name: "Falafel Wrap",
    price: 140,
    desc: "Homemade falafel with hummus, tabbouleh, and tahini sauce in warm pita bread.",
    category: "Lunch",
    rating: 4.6,
},
{
    id: 29,
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
    name: "Mushroom Wellington",
    price: 190,
    desc: "Portobello mushrooms and spinach wrapped in crispy puff pastry.",
    category: "Dinner",
    rating: 4.7,
},
{
    id: 30,
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a",
    name: "Gourmet Mac & Cheese",
    price: 160,
    desc: "Four-cheese blend with truffle oil and crispy breadcrumb topping.",
    category: "Dinner",
    rating: 4.8,
},
{
    id: 31,
    img: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
    name: "Mango Sticky Rice",
    price: 110,
    desc: "Sweet coconut rice with fresh mango and toasted sesame seeds.",
    category: "Dessert",
    rating: 4.9,
},
{
    id: 32,
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    name: "Tempura Vegetables",
    price: 130,
    desc: "Crispy battered seasonal vegetables with ponzu dipping sauce.",
    category: "Starters",
    rating: 4.5,
},
{
    id: 33,
    img: "https://images.unsplash.com/photo-1519996529931-28324d5a630e",
    name: "Truffle Risotto",
    price: 200,
    desc: "Creamy Arborio rice with wild mushrooms and fresh truffle shavings.",
    category: "Dinner",
    rating: 4.8,
},
{
    id: 34,
    img: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d",
    name: "Mediterranean Platter",
    price: 175,
    desc: "Assortment of hummus, baba ganoush, falafel, and warm pita bread.",
    category: "Starters",
    rating: 4.6,
},
{
    id: 35,
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
    name: "Dragon Bowl",
    price: 165,
    desc: "Pitaya smoothie base topped with coconut, chia seeds, and fresh fruits.",
    category: "Breakfast",
    rating: 4.7,
},
{
    id: 36,
    img: "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
    name: "Caprese Stack",
    price: 145,
    desc: "Layered fresh mozzarella, tomatoes, and basil with balsamic glaze.",
    category: "Starters",
    rating: 4.5,
},
{
    id: 37,
    img: "https://images.unsplash.com/photo-1517244683847-7456b63c5969",
    name: "Wild Mushroom Soup",
    price: 120,
    desc: "Creamy blend of forest mushrooms with truffle oil and herbs.",
    category: "Starters",
    rating: 4.6,
},
{
    id: 38,
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    name: "Chocolate Lava Cake",
    price: 130,
    desc: "Warm chocolate cake with molten center and vanilla ice cream.",
    category: "Dessert",
    rating: 4.9,
},
{
    id: 39,
    img: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5",
    name: "Spring Rolls",
    price: 110,
    desc: "Fresh rice paper rolls with vegetables and peanut dipping sauce.",
    category: "Starters",
    rating: 4.4,
},
{
    id: 40,
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    name: "Matcha Green Tea Cake",
    price: 125,
    desc: "Light and fluffy matcha sponge cake with white chocolate ganache.",
    category: "Dessert",
    rating: 4.7,
}

  ];
  export default FoodData;