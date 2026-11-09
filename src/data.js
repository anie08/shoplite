// All texts from the ShopLite Figma design (all 9 pages).
// Product images live in /public/images/products/<category>/ — use the path as-is: <img src={item.image} />

/* ============================================================
   SHARED (used on every page)
   ============================================================ */

export const topInfo = [
  { id: 1, text: "Need help? Call us", link: { label: "112233344455", href: "tel:112233344455" } },
  { id: 2, text: "Summer sale discount off 60% off!", link: { label: "Shop Now", to: "/shop" } },
  { id: 3, text: "2-3 business days delivery & free returns", link: null },
];
export const logo = "ShopLite";


export const features = [
  { id: 1, title: "Free delivery", text: "Consectetur adipi elit lorem ipsum dolor sit amet." },
  { id: 2, title: "Quality guarantee", text: "Dolor sit amet orem ipsu mcons ectetur adipi elit." },
  { id: 3, title: "Daily offers", text: "Amet consectetur adipi elit loreme ipsum dolor sit." },
  { id: 4, title: "100% secure payment", text: "Rem Lopsum dolor sit amet, consectetur adipi elit." },
];

export const customerReviews = {
  title: "Customers reviews",
  reviews: [
    {
      id: 1,
      name: "Emma Chamberlin",
      text: "I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!",
    },
    {
      id: 2,
      name: "Thomas John",
      text: "This tech store is my go-to for all things tech! Whether it's a new smartphone, accessories, or even troubleshooting advice, they've always got me covered. The staff is friendly, and their expertise is unmatched. Trust me; you won't regret shopping here!",
    },
    {
      id: 3,
      name: "Kevin Bryan",
      text: "I recently purchased a smartwatch from this tech store, and I'm absolutely thrilled with my purchase! Not only did they have an extensive selection to choose from, but their team helped me find the perfect fit for my lifestyle.",
    },
  ],
};

export const brands = ["techlight", "MiniStore.", "Ultras", "Swanky", "Emily"];

export const instagram = {
  title: "instagram #shoplite",
};

export const footer = {
  logo: "ShopLite",
  about:
    "Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.",
  quickLinks: {
    title: "Quick links",
    links: [
      { name: "Home", to: "/" },
      { name: "About", to: "/about" },
      { name: "Shop", to: "/shop" },
      { name: "Blogs", to: "/blog" },
      { name: "Contact", to: "/contact" },
    ],
  },
  helpInfo: {
    title: "Help & info",
    links: [
      { name: "Track Your Order", to: "#" },
      { name: "Returns policies", to: "#" },
      { name: "Shipping + Delivery", to: "#" },
      { name: "Contact Us", to: "/contact" },
      { name: "Faqs", to: "#" },
    ],
  },
  contactUs: {
    title: "Contact us",
    emailText: "Do you have any queries or suggestions?",
    email: "yourinfo@gmail.com",
    phoneText: "If you need support? Just give us a call.",
    phone: "+55 111 222 333 44",
  },
  shipWith: "We ship with:",
  paymentOptions: "Payment options:",
  paymentIcons: ["visa", "mastercard", "paypal"],
  copyright: "© Copyright 2024 ShopLite. Design by TemplatesJungle",
};

/* ============================================================
   PRODUCTS (Shop page grid, Best selling, Related items)
   ============================================================ */

export const products = [
  { id: 1, name: "iPad (9th Gen)", price: 870, category: "tablets", brand: "Apple", tags: ["modern"], image: "/images/products/tablets/ipad-9th-gen.png" },
  { id: 2, name: "Drone With Camera", price: 600, category: "electronics", brand: "Green", tags: ["modern"], image: "/images/products/electronics/drone-with-camera.png" },
  { id: 3, name: "Apple Watch (2nd Gen)", price: 400, category: "watches", brand: "Apple", tags: ["mobile"], image: "/images/products/watches/apple-watch-2nd-gen.png" },
  { id: 4, name: "Ultra HD TV", price: 2000, category: "electronics", brand: "Samsung", tags: ["modern"], image: "/images/products/electronics/ultra-hd-tv.png" },
  { id: 5, name: "Wireless Headphones", price: 600, category: "audio", brand: "Samsung", tags: ["white"], image: "/images/products/audio/wireless-headphones.png" },
  { id: 6, name: "Smart Speaker", price: 400, category: "audio", brand: "Apple", tags: ["modern"], image: "/images/products/audio/smart-speaker.png" },
  { id: 7, name: "Studio Speaker", price: 2000, category: "audio", brand: "Green", tags: ["white"], image: "/images/products/audio/studio-speaker.png" },
  { id: 8, name: "Bluetooth Speaker", price: 75, category: "audio", brand: "Green", tags: ["white", "cheap"], image: "/images/products/audio/bluetooth-speaker.png" },
  { id: 9, name: "AirPods Pro", price: 600, category: "audio", brand: "Apple", tags: ["white", "mobile"], image: "/images/products/audio/airpods-pro.png" },
  { id: 10, name: "MacBook Pro", price: 400, category: "laptops", brand: "Apple", tags: ["modern"], image: "/images/products/laptops/macbook-pro.png" },
  { id: 11, name: "iPhone 11 Pro", price: 2000, category: "phones", brand: "Apple", tags: ["mobile"], image: "/images/products/phones/iphone-11-pro.png" },
  { id: 12, name: "Apple Watch Nike", price: 75, category: "watches", brand: "Apple", tags: ["cheap", "mobile"], image: "/images/products/watches/apple-watch-nike.png" },
];

/* ============================================================
   HOME PAGE
   ============================================================ */

export const home = {
  heroSlides: [
    { id: 1, title: "GoPro hero9 Black", text: "Limited stocks available. Grab it now!", button: "Shop collection", to: "/shop" },
    { id: 2, title: "Apple Watch 2nd Gen", text: "New colors are here. Order today!", button: "Shop collection", to: "/shop" },
  ],
  categories: {
    title: "Categories",
    items: ["Phones", "PlayStations", "Digital watches", "Joysticks", "EarPods", "Laptops"],
  },
  bestSelling: {
    title: "Best selling items",
    productIds: [1, 2, 3, 4, 8],
  },
  limitedSale: {
    title: "30% Discount on apple collection",
    timer: { days: 21, hours: 22, minutes: 19, seconds: 30 },
    timerLabels: ["Days", "Hrs", "Min", "Sec"],
    button: "Shop collection",
  },
  itemLists: [
    {
      title: "Featured",
      items: [
        { name: "Wireless headset", price: 500 },
        { name: "Iphone x Pro Max", price: 820 },
        { name: "Iphone 11 Pro", price: 960 },
      ],
    },
    {
      title: "Latest items",
      items: [
        { name: "Apple airPod", price: 450 },
        { name: "Screen touch watch", price: 750 },
        { name: "Digital watch", price: 660 },
      ],
    },
    {
      title: "Best reviewed",
      items: [
        { name: "Wireless Joysticks", price: 350 },
        { name: "Apple White AirPod", price: 330 },
        { name: "Gimbal stabilizer", price: 920 },
      ],
    },
    {
      title: "On sale",
      items: [
        { name: "Iphone 15 pro max", oldPrice: 1666, price: 999 },
        { name: "White AirPods", oldPrice: 500, price: 410 },
        { name: "Security CCTV camera", oldPrice: 600, price: 500 },
      ],
    },
  ],
};

/* ============================================================
   ABOUT PAGE
   ============================================================ */

export const about = {
  title: "About us",
  breadcrumbs: "Home > About us",
  heading: "Best Digital Store BasicStore",
  text: "Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra eros at. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et.",
  button: "Go to Shop",
};

/* ============================================================
   SHOP PAGE
   ============================================================ */

export const shop = {
  title: "Shop",
  breadcrumbs: "Home > Shop",
  resultsText: "Showing 1–9 of 55 results",
  sortOptions: ["Default sorting"],
  searchPlaceholder: "Search",
  pagination: { prev: "Prev", next: "Next" },
  sidebar: {
    categories: {
      title: "Categories",
      items: ["All", "Phones", "Accessories", "Tablets", "Watches"],
    },
    tags: {
      title: "Tags",
      items: ["White", "Cheap", "Mobile", "Modern"],
    },
    brands: {
      title: "Brands",
      items: ["Apple", "Samsung", "Green"],
    },
    price: {
      title: "Filter by price",
      items: [
        { label: "Less than $10", min: 0, max: 10 },
        { label: "$10- $20", min: 10, max: 20 },
        { label: "$20- $30", min: 20, max: 30 },
        { label: "$30- $40", min: 30, max: 40 },
        { label: "$40- $50", min: 40, max: 50 },
      ],
    },
  },
};

/* ============================================================
   PRODUCT PAGE
   ============================================================ */

export const productPage = {
  name: "Iphone 15 Pro Max",
  price: "$2000.00",
  shortText:
    "Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus.",
  colors: { title: "Color", items: ["Orange", "Green", "Blue", "Black"] },
  sizes: { title: "Size", items: ["XL", "L", "M", "S"] },
  stock: "2 in stock",
  buttons: { orderNow: "Order now", addToCart: "Add to cart" },
  sku: "SKU: 1223",
  category: "Category: Phone, Screen Touch",
  tags: "Tags: Classic, Modern",
  tabs: ["Description", "Additional information", "Reviews (2)"],
  description:
    "Product Description Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Donec nec justo eget felis facilisis fermentum. Suspendisse urna viverra non, semper suscipit pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.",
  reviews: [
    {
      id: 1,
      name: "Emma Chamberlin",
      date: "11/22/2022",
      text: "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis",
    },
    {
      id: 2,
      name: "Thompson J.",
      date: "11/22/2022",
      text: "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis",
    },
  ],
  reviewForm: {
    title: "Add a review",
    note: "Your email address will not be published. Required fields are marked *",
    ratingLabel: "Your rating *",
    photoLabel: "Choose your photo",
    fileButton: "Choose your file",
    reviewPlaceholder: "Write your review here *",
    namePlaceholder: "Write your name here *",
    emailPlaceholder: "Write your email here *",
    checkbox: "Save my name, email, and website in this browser for the next time.",
    button: "Submit",
  },
  related: {
    title: "Related items",
    productIds: [1, 2, 3, 4, 8],
  },
};

/* ============================================================
   CART PAGE
   ============================================================ */

export const cart = {
  columns: ["Product", "Quantity", "Subtotal"],
  exampleItems: [
    { name: "Iphone 15 pro max", price: 2000, quantity: 1 },
    { name: "Apple Watch (2nd Gen)", price: 400, quantity: 1 },
  ],
  totals: {
    title: "Cart totals",
    subtotal: "Subtotal",
    total: "Total",
  },
  buttons: {
    update: "Update cart",
    continue: "Continue shopping",
    checkout: "Proceed to checkout",
  },
};

/* ============================================================
   CHECKOUT PAGE
   ============================================================ */

export const checkout = {
  billing: {
    title: "Billing Details",
    fields: [
      { name: "firstName", label: "First name *" },
      { name: "lastName", label: "Last name *" },
      { name: "company", label: "Company name (optional)" },
      { name: "country", label: "Country / Region *", placeholder: "United States (US)" },
      { name: "street", label: "Street address *", placeholder: "House number and street name" },
      { name: "apartment", label: "", placeholder: "Appartments, suite, etc." },
      { name: "city", label: "Town / City *" },
      { name: "state", label: "State *", placeholder: "Florida" },
      { name: "zip", label: "ZIP Code *" },
      { name: "phone", label: "Phone *" },
      { name: "email", label: "Email address *" },
    ],
  },
  additional: {
    title: "Additional Information",
    label: "Order notes (optional)",
    placeholder: "Notes about your order. Like special notes for delivery.",
  },
  totals: {
    title: "Cart totals",
    subtotal: "Subtotal",
    total: "Total",
  },
  paymentOptions: ["Direct bank transfer", "Check payments", "Cash on delivery", "PayPal"],
  button: "Place an order",
};

/* ============================================================
   BLOG (Home "Latest posts", Blog page, Blog post page)
   ============================================================ */

export const posts = [
  {
    id: 1,
    category: "Gadgets",
    date: "feb 22, 2023",
    title: "5 Must-Have Gadgets for the Modern Home",
    text: "Dive into the world of cutting-edge technology with our latest blog post, where we highlight five essential gadgets every modern home should have. From smart assistants to home security systems, discover how these innovations can enhance your daily life and bring convenience to your fingertips.",
  },
  {
    id: 2,
    category: "Phones",
    date: "feb 22, 2023",
    title: "Eco-Friendly Innovations Making a Difference",
    text: "Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative eco-friendly technologies revolutionizing various industries, from renewable energy solutions to recyclable electronics. Discover how these advancements are paving the way for a more sustainable future.",
  },
  {
    id: 3,
    category: "Tech",
    date: "feb 22, 2023",
    title: "The Future of Wearable Tech: Trends to Watch",
    text: "Stay ahead of the curve with our insightful look into the rapidly evolving landscape of wearable technology. Explore the latest trends, from health monitoring devices to fashion-forward wearables, and learn how these advancements are shaping the future of personal technology",
  },
  {
    id: 4,
    category: "Digital Watch",
    date: "feb 22, 2023",
    title: "Top Apps and Tools for Remote Work",
    text: "In today's remote work environment, productivity is key. Discover the top apps and tools that can help you stay organized, focused, and efficient while working from home. From project management platforms to time-tracking apps, find out which tools are essential for maximizing your productivity.",
  },
];

export const blog = {
  latestPostsTitle: "Latest posts",
  readMore: "Read more",
  resultsText: "Showing 1–9 of 55 results",
  sortOptions: ["Latest"],
  searchPlaceholder: "Search",
  pagination: { prev: "Prev", next: "Next" },
  sidebar: {
    categories: { title: "Categories", items: ["All", "Phones", "Accessories", "Tablets", "Watches"] },
    tags: { title: "Tags", items: ["White", "Cheap", "Mobile", "Modern"] },
    social: { title: "Social links", items: ["Facebook", "Instagram", "Twitter", "Youtube", "Pinterest"] },
  },
};

export const blogPost = {
  meta: "feb 22, 2023 - technology",
  title: "5 Must-Have Gadgets for the Modern Home",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur facilisis vivamus massa magna. Blandit mauris libero condimentum commodo morbi consectetur sociis convallis sit. Magna diam amet justo sed vel dolor et volutpat integer. Iaculis sit sapien hac odio elementum egestas neque. Adipiscing purus euismod orci sem amet, et. Turpis erat ornare nisi laoreet est euismod. Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis. Urna in sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit ornare. Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent imperdiet vitae eu, eu tincidunt nunc integer sit.",
  ],
  quote:
    "Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel.",
  sections: [
    {
      title: "Is this great ?",
      text: "Blandit mauris libero condimentum commodo sociis convallis sit. Magna diam amet justo sed vel dolor et volutpat integer. Laculis sit sapien hac odio elementum egestas neque. Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis. Urna in sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit ornare. Purus ut ipsum, enim lacus. Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus. Nunc tempus feugiat massa laoreet ultrices diam magna quam. Congue auctor auctor luctus neque. Enim lorem ultrices diam donec. Sed id placerat consectetur faucibus.",
    },
    {
      title: "Velit, praesent pharetra malesuada",
      text: "Id pulvinar amet. Consequat potenti mollis massa iaculis et, dolor, eget lectus. Aliquam pellentesque molestie felis fames sed eget non euismod eget. Et eget ullamcorper urna, elit ac diam tellus viverra lacus. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus malesuada et pellentesque maecenas. Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam.",
    },
  ],
  lastParagraph:
    "Velit, praesent pharetra malesuada id pulvinar amet. Consequat potenti mollis massa iaculis et, dolor, eget lectus. Aliquam pellentesque molestie felis fames sed eget non euismod eget. Et eget ullamcorper urna, elit ac diam tellus viverra lacus. Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus.",
  shareLabel: "Share:",
  previous: { label: "Previous", title: "Best digital watches to buy in this year" },
  next: { label: "Next", title: "Best airpod that you must get it" },
  commentsTitle: "3 Comments",
  comments: [
    { id: 1, name: "Sam smith", date: "Jul 10", text: "Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus. Tortor diam dignissim amet, in interdum aliquet. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam.", isReply: false },
    { id: 2, name: "Santie mary", date: "Jul 10", text: "Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus. Tortor diam dignissim amet, in interdum aliquet. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam.", isReply: true },
    { id: 3, name: "Analisa nora", date: "Jul 10", text: "Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus. Tortor diam dignissim amet, in interdum aliquet. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam.", isReply: false },
  ],
  replyButton: "Reply now",
  commentForm: {
    title: "Leave a comment",
    note: "Your email address will not be published. Required fields are marked *",
    commentPlaceholder: "Write your comment here *",
    namePlaceholder: "Write your name here *",
    emailPlaceholder: "Write your email here *",
    checkbox: "Save my name, email, and website in this browser for the next time.",
    button: "Post comment",
  },
};

/* ============================================================
   CONTACT PAGE
   ============================================================ */

export const contact = {
  info: {
    title: "Contact info",
    text: "Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.",
    items: [
      { title: "Office", address: "730 Glenstone Ave 65802, Springfield, US", phone: "+123 222 333 44", email: "info@yourinfo.com" },
      { title: "Management", address: "730 Glenstone Ave 65802, Springfield, US", phone: "+123 666 777 88", email: "info@yourinfo.com" },
    ],
  },
  form: {
    title: "Any questions?",
    text: "Use the form below to get in touch with us.",
    fields: [
      { name: "name", placeholder: "Your full name *" },
      { name: "email", placeholder: "Write your email here *" },
      { name: "phone", placeholder: "Phone number" },
      { name: "subject", placeholder: "Write your subject here" },
      { name: "message", placeholder: "Write your message here *" },
    ],
    button: "Submit",
  },
  stores: {
    title: "Our stores",
    text: "You can also directly buy products from our stores.",
    items: [
      { country: "USA", address: "730 Glenstone Ave 65802, US", phone: "+123 666 777 88", email: "info@yourinfo.com" },
      { country: "France", address: "13 Rue Montmartre 75001, Paris, France", phone: "+123 222 333 44", email: "info@yourinfo.com" },
    ],
  },
};
