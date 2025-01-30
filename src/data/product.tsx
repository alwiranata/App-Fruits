// src/data/products.ts
export const products = [
    { name: "Durian", price: 20000, src: "/durian.png",view:"durian", description: "Durian is a tropical fruit known as the 'king of fruits'." },
    { name: "Banana", price: 10000, src: "/banana.png", view: "banana", description: "Bananas are high in potassium and perfect for snacking." },
    { name: "Apple", price: 12000, src: "/apple.png", view: "apple", description: "Apples are crisp, sweet, and great for a healthy diet." },
    { name: "Watermelon", price: 8000, src: "/watermelon.png",view: "watermelon", description: "Watermelons are refreshing, juicy, and great for hydration." },
    { name: "Strawberry", price: 25000, src: "/strawberry.png",view: "strawberry", description: "Strawberries are sweet, juicy, and full of antioxidants." },
    { name: "Blueberry", price: 30000, src: "/bluebey.png",view: "blueberry" ,description: "Blueberries are tiny but packed with nutrients and antioxidants." }
];

export type ProductType = typeof products[number]; 
