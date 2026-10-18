import type { Product } from "../types/product";



export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Maize",
    category: "Grains",
    price: "₦65,000",
    quantity: "50kg Bag",
    image: "/images/maize.jpg",
    description: "High-quality white maize suitable for homes and industries.",
  },
  {
    id: 2,
    name: "Rice",
    category: "Grains",
    price: "₦85,000",
    quantity: "50kg Bag",
    image: "/images/rice.jpg",
    description: "Premium locally sourced Nigerian rice.",
  },
  {
    id: 3,
    name: "Tomatoes",
    category: "Vegetables",
    price: "₦15,000",
    quantity: "Basket",
    image: "/images/tomatoes.jpg",
    description: "Fresh tomatoes harvested directly from trusted farms.",
  },
];
