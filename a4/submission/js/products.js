/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "p1",
    title: "Clean and Compact Gear Box",
    description:
      "This Clean and Compact Gear Box features expertly curated outdoor gear to get you well on your way to keeping hygienic and condensed on your next adventure. Your hand-picked assortment includes: Matador Packable Water Bottle · Fozzils Scrubberz Bottle Brush · Crud Cloth Crud Cloth",
    price: 54.95,
    discontinued: false,
    categories: ["c1", "c4"]
  },
  {
    id: "p2",
    title: "Cotopaxi Luzon 18L Gear Box",
    description:
      "This Cotopaxi Luzon 18L Gear Box features expertly curated outdoor gear to get you well on your way to staying fueled and exploring all day. Your hand-picked assortment includes: Cotopaxi Luzon Day Pack - Del Dia (18L) · Humangear GoBites Quattro · Honey Stinger Gluten Free Organic Vanilla Chocolate Waffle · Honey Stinger Gluten Free Salted Caramel Waffle",
    price: 64.95,
    discontinued: false,
    categories: ["c1", "c4"]
  },
  {
    id: "p3",
    title: "Outside & Proud Tank - Men's",
    description:
      "Not only do these tank tops look sharp and feel soft, but 100% of the proceeds from every purchase will go to the Venture Out Project, a non-profit organization that leads backpacking and wilderness trips and conducts inclusion workshops for the queer and transgender community.",
    price: 24.99,
    discontinued: true,
    categories: ["c2"]
  },
  {
    id: "p4",
    title: "Black Spider Hoody - Women's",
    description:
      "The black spider hoody is a great stand alone or layer option for all types of weather. We especially love the long sleeves and torso which won't ride up during any activity.",
    price: 130.0,
    discontinued: true,
    categories: ["c3"]
  },
  {
    id: "p5",
    title: "Growler Hydro Flask 64 oz.",
    description:
      "Whether you're looking to make less trips to the cooler at the office or you're on a multi-day car camping trip, the Outside Wide Mouth Hydro Flask 64oz. bottle makes sure there's more than enough refreshment to go around.",
    price: 64.87,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p6",
    title: "Monochromatic Logo Cotton Tee - Men's",
    description:
      "Clean and uncomplicated, the Outside Men's Monochromatic Logo Cotton Tee is a true essential.",
    price: 190.0,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "p7",
    title: "20four7 Track Jacket - Men's",
    description:
      "Made for transitional runs for when resistance to the elements is called for. Warm-up, warm-down or go all-day in our track jacket - tailored using organic and recycled Italian nylon fabrics, that feel unmistakably premium. A versatile and timeless essential that can be worn anytime, yet perform when needed.",
    price: 220.0,
    discontinued: false,
    categories: ["c2", "c4"]
  },
  {
    id: "p8",
    title: "5 Panel Woven Label Hat",
    description:
      "The Outside 5-Panel Hat is an everyday accessory that gives a nod to Outside's rich heritage.",
    price: 19.67,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p9",
    title: "A1 Helmet Drone",
    description:
      "After years of research and development, the Troy Lee Designs Team introduced the A1 mountain bike helmet in 2013 with best-in-class protection. At Troy Lee Designs, styling, graphics, fit, function and safety are key in everything they create.",
    price: 104.25,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "p10",
    title: "20four7 Track Jacket - Women's",
    description:
      "Made for transitional runs for when resistance to the elements is called for. Warm-up, warm-down or go all-day in our track jacket - tailored using organic and recycled Italian nylon fabrics, that feel unmistakably premium. A versatile and timeless essential that can be worn anytime, yet perform when needed.",
    price: 161.0,
    discontinued: false,
    categories: ["c4", "c3"]
  },
  {
    id: "p11",
    title: "Abisko Stretch Shorts - Women's",
    description:
      "Minimalistic and functional shorts in comfortable stretch fabric. Designed for excellent freedom of movement and comfort on light treks and warm summer days. Two hand pockets and a coin pocket at the waist, as well as a zippered security pocket on the left hip. There is also a back pocket with a buttoned flap and a small loop at the waist for attaching equipment. Well-fitting, feminine cut and leg endings with rolled hems.",
    price: 90.0,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "p12",
    title: "Backcountry Bed (20°F) - Women's",
    description:
      "The award-winning BCB features a new contoured shape & updated materials to create a more thermally-efficient backcountry experience...all at a lower weight.",
    price: 259.65,
    discontinued: false,
    categories: ["c3", "c4"]
  },
  {
    id: "p13",
    title: "Camper Cap",
    description:
      "A classic five-panel cap that looks good in camp, on route, and at the pub for celebratory beers.",
    price: 34.95,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p14",
    title: "Alpine Start Hoody - Men's",
    description:
      "An ultralight softshell designed to shield weight-conscious climbers from ridgeline gusts and light weather, the Black Diamond Alpine Start Hoody features Schoeller stretch-woven fabric to provide highly breathable and highly packable weather resistance. A gusseted construction offers unrestricted freedom of movement, while the adjustable hood fits over a climbing helmet. The jacket also stuffs into its own chest pocket, which features an internal carabiner clip loop for attaching to your harness.",
    price: 164.99,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "p15",
    title: "18mm Nylon Runner",
    description:
      "Versatile sewn runners for building anchors, slinging natural features and extending placements on wandering routes, Black Diamond Nylon Runners offer durable and classic functionality. Each size is also color-coded for quick and easy identification on your harness",
    price: 5.95,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p16",
    title: "Dirt Jacket - Men's",
    description:
      "With a straight fit, overbuilt stitching, and a utility patch pocket with side entry, the Dirt Jacket (part of our sustainably-built Dirt Collection) easily becomes a soft yet durable three-season contender. The garment dyed wash softens both the color and fabric, making it feel like an old favorite from its first wear. The Dirt Jacket can handle whatever you throw at it. Made from organic cotton with just the right amount of stretch, this piece has a casual look that performs equally as well on morning errands, an afternoon in the yard, or a nightly stroll through town.",
    price: 129.0,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "p17",
    title: "Mountain Pack 16L",
    description:
      "Made with super strong, lightweight recycled nylon, the Mountain Pack 16L fits all the essentials in a streamlined carry, blending modern mountain design with style and utility. Technical trims and and practical features make it an excellent outdoor adventure piece. With an internal laptop/tablet sleeve, this companion works as hard on the commute to work or school, as it does hitting the trail. The Mountain Pack is a more comfortable and stylish carry option on the way up to climb, hauling daily essentials around town or navigating the trail. Organization pockets make it easy to get through TSA, while large side pockets fit a 32oz Nalgene. Four compression straps adjust to the load size, while durable daisy chain webbing is perfect for securing extra gear or attaching a bike light.",
    price: 118.95,
    discontinued: false,
    categories: ["c1", "c2", "c3", "c4"]
  },
  {
    id: "p18",
    title: "Dirt Pants - Women's",
    description:
      "With a straight fit, classic detailing and both side seam and back patch pockets, the Dirt Pants (part of our sustainably-built Dirt Collection) will quickly become one of your go-to bottoms. The garment dyed wash softens both the color and fabric, making it feel like an old favorite from its first wear. The Dirt Pants can handle whatever you throw at them. Made from organic cotton with just the right amount of stretch, this pant has a casual look that performs equally as well on morning errands, an afternoon in the yard, or a nightly stroll through town.",
    price: 1100.0,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "p19",
    title: "Bandana - Print",
    description:
      "You can't go wrong with a classic bandana. In a custom Topo Designs print, this cotton bandana is a perfect accessory for your pack (or your pocket). Their in-house design team created the custom print for this bandana. This cotton handkerchief has a soft feel that makes it an instant favorite, and its traditional look is completed with a rolled edge finish.",
    price: 18.85,
    discontinued: true,
    categories: ["c1"]
  },
  {
    id: "p20",
    title: "Vardag Beanie",
    description:
      "Knitted hat in soft recycled polyester. Perfect for both everyday use and outdoor life as it wicks away moisture. Knitted in two layers with a straight cut and a logo on the front.",
    price: 21.97,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p21",
    title: "Abisko Lite Shorts - Men's",
    description:
      "Light, airy trekking shorts in comfortable stretch fabric that gives you maximum freedom of movement. The fabric is well ventilated, dries fast and does not take much space when packed – practical for trekking in the summer mountains or in warmer climates. Zippered leg pocket on the right side with an inside mesh pocket for mobile phone, plus two hand pockets and a back pocket. Regular fit with a mid waist that is a little higher at the back so the shorts sit comfortably when carrying a backpack.",
    price: 100.0,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "p22",
    title: "Adventure Easy Carry Outdoor Cooler",
    description:
      "This Adventure Easy Carry Outdoor Cooler is ideal for tailgates, fishing trips, and post-adventure celebrations. It’s roomy enough to hold your favorite brew or soda and can keep ice frozen for over a day. There’s even an adjustable bungee system for securing your favorite Stanley bottle to the lid.",
    price: 35.97,
    discontinued: false,
    categories: ["c1"]
  }
];
