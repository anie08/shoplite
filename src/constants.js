export const NAVIGATION = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Shop", to: "/shop" },
    { name: "Blogs", to: "/blog" },
    {
        name: "Pages",
        to: null,
        children: [
            { name: "Product", to: "/shop/1" },
            { name: "Cart", to: "/cart" },
            { name: "Checkout", to: "/checkout" },
            { name: "Blog post", to: "/blog/1" },
        ],
    },
    { name: "Contact", to: "/contact" },
];
export const HEADER_ICONS = [
    { name: "search", icon: "solar:magnifer-outline", label: "Search", to: null },
    { name: "user", icon: "solar:user-outline", label: "Account", to: "/account" },
    { name: "wishlist", icon: "solar:heart-outline", label: "Wishlist", to: "/wishlist" },
    { name: "cart", icon: "solar:cart-large-minimalistic-outline", label: "Cart", to: "/cart" },
];