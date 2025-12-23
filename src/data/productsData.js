/* X-MARKET - Products Data - Complete Product Catalog */

export const productsData = [
    // Electronics - Smartphones
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "Electronics",
        subcategory: "Smartphones",
        brand: "Apple",
        price: 1199,
        originalPrice: 1299,
        rating: 4.9,
        reviews: 2847,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
        images: [
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
            "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400"
        ],
        description: "The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system.",
        colors: ["#1C1C1E", "#F5F5F7", "#4A4A4C", "#3B3B3D"],
        stock: 150,
        badges: ["new", "hot"],
        featured: true,
        bestseller: true
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        category: "Electronics",
        subcategory: "Smartphones",
        brand: "Samsung",
        price: 1099,
        originalPrice: 1199,
        rating: 4.8,
        reviews: 1923,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        images: [],
        description: "Galaxy AI is here. Search like never before, Icons unleash Icons enhanced creativity.",
        colors: ["#1C1C1E", "#E8DCC4", "#9E8B7C"],
        stock: 200,
        badges: ["new"],
        featured: true,
        bestseller: true
    },
    {
        id: 3,
        name: "Google Pixel 8 Pro",
        category: "Electronics",
        subcategory: "Smartphones",
        brand: "Google",
        price: 899,
        originalPrice: 999,
        rating: 4.7,
        reviews: 1456,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
        images: [],
        description: "The best of Google AI, now in a phone. Incredible photos and videos.",
        colors: ["#1C1C1E", "#F5E6D3", "#B4D4E7"],
        stock: 120,
        badges: ["sale"],
        featured: true
    },
    // Electronics - Laptops
    {
        id: 4,
        name: "MacBook Pro 16\" M3 Max",
        category: "Electronics",
        subcategory: "Laptops",
        brand: "Apple",
        price: 2499,
        originalPrice: 2699,
        rating: 4.9,
        reviews: 987,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        images: [],
        description: "The most powerful MacBook Pro ever. M3 Max chip with up to 128GB unified memory.",
        colors: ["#1C1C1E", "#F5F5F7"],
        stock: 75,
        badges: ["new", "hot"],
        featured: true,
        bestseller: true
    },
    {
        id: 5,
        name: "Dell XPS 15 OLED",
        category: "Electronics",
        subcategory: "Laptops",
        brand: "Dell",
        price: 1799,
        originalPrice: 1999,
        rating: 4.6,
        reviews: 654,
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400",
        images: [],
        description: "Stunning 3.5K OLED display, 13th Gen Intel Core, perfected for creators.",
        colors: ["#F5F5F7", "#1C1C1E"],
        stock: 90,
        badges: ["sale"],
        featured: true
    },
    // Electronics - Audio
    {
        id: 7,
        name: "Sony WH-1000XM5",
        category: "Electronics",
        subcategory: "Audio",
        brand: "Sony",
        price: 349,
        originalPrice: 399,
        rating: 4.8,
        reviews: 3421,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        images: [],
        description: "Industry-leading noise cancellation with exceptional sound quality.",
        colors: ["#1C1C1E", "#F5E6D3"],
        stock: 300,
        badges: ["bestseller"],
        featured: true,
        bestseller: true
    },
    {
        id: 8,
        name: "AirPods Pro (2nd Gen)",
        category: "Electronics",
        subcategory: "Audio",
        brand: "Apple",
        price: 249,
        originalPrice: null,
        rating: 4.7,
        reviews: 5678,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400",
        images: [],
        description: "Rebuilt from the sound up with 2x more Active Noise Cancellation.",
        colors: ["#F5F5F7"],
        stock: 500,
        badges: ["hot"],
        featured: true,
        bestseller: true
    },
    // Electronics - Smartwatches
    {
        id: 10,
        name: "Apple Watch Ultra 2",
        category: "Electronics",
        subcategory: "Smartwatches",
        brand: "Apple",
        price: 799,
        originalPrice: null,
        rating: 4.9,
        reviews: 2156,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        images: [],
        description: "The most rugged and capable Apple Watch, designed for extreme adventures.",
        colors: ["#E5DDD3", "#FF6B00", "#2D3748"],
        stock: 120,
        badges: ["new", "hot"],
        featured: true,
        bestseller: true
    },
    // Fashion - Footwear
    {
        id: 20,
        name: "Nike Air Jordan 1 Retro High OG",
        category: "Fashion",
        subcategory: "Footwear",
        brand: "Nike",
        price: 180,
        originalPrice: null,
        rating: 4.9,
        reviews: 4567,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        images: [],
        description: "The iconic Air Jordan 1, reimagined for today.",
        colors: ["#8B0000", "#1C1C1E", "#F5F5F7"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        stock: 150,
        badges: ["hot", "bestseller"],
        featured: true,
        bestseller: true
    },
    {
        id: 21,
        name: "Adidas Ultraboost 23",
        category: "Fashion",
        subcategory: "Footwear",
        brand: "Adidas",
        price: 190,
        originalPrice: 220,
        rating: 4.7,
        reviews: 2345,
        image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400",
        images: [],
        description: "Ultimate comfort with responsive Boost cushioning.",
        colors: ["#1C1C1E", "#F5F5F7", "#4A6FA5"],
        sizes: ["7", "8", "9", "10", "11", "12"],
        stock: 280,
        badges: ["sale"],
        featured: true
    },
    // Home & Living
    {
        id: 23,
        name: "Modern Velvet Sofa",
        category: "Home & Living",
        subcategory: "Furniture",
        brand: "West Elm",
        price: 1899,
        originalPrice: 2199,
        rating: 4.6,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
        images: [],
        description: "Luxurious velvet sofa with mid-century modern design.",
        colors: ["#2D5016", "#4A6FA5", "#E8DCC4", "#8B0000"],
        stock: 30,
        badges: ["sale"],
        featured: true
    },
    {
        id: 24,
        name: "Ergonomic Office Chair",
        category: "Home & Living",
        subcategory: "Furniture",
        brand: "Herman Miller",
        price: 1395,
        originalPrice: null,
        rating: 4.9,
        reviews: 1876,
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400",
        images: [],
        description: "The Aeron chair, redesigned for modern work.",
        colors: ["#1C1C1E", "#2D3748"],
        stock: 50,
        badges: ["bestseller"],
        featured: true,
        bestseller: true
    },
    // Kitchen
    {
        id: 28,
        name: "KitchenAid Artisan Stand Mixer",
        category: "Home & Living",
        subcategory: "Kitchen",
        brand: "KitchenAid",
        price: 449,
        originalPrice: 499,
        rating: 4.9,
        reviews: 8765,
        image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=400",
        images: [],
        description: "The iconic stand mixer that does it all.",
        colors: ["#8B0000", "#1C1C1E", "#F5F5F7", "#4A6FA5"],
        stock: 200,
        badges: ["bestseller"],
        featured: true,
        bestseller: true
    },
    // Sports & Outdoors
    {
        id: 32,
        name: "Theragun PRO",
        category: "Sports & Outdoors",
        subcategory: "Fitness",
        brand: "Therabody",
        price: 599,
        originalPrice: null,
        rating: 4.8,
        reviews: 1876,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
        images: [],
        description: "Professional-grade percussive therapy device.",
        colors: ["#1C1C1E", "#F5F5F7"],
        stock: 200,
        badges: ["bestseller"],
        featured: true,
        bestseller: true
    },
    // Beauty
    {
        id: 35,
        name: "La Mer Crème de la Mer",
        category: "Beauty",
        subcategory: "Skincare",
        brand: "La Mer",
        price: 380,
        originalPrice: null,
        rating: 4.7,
        reviews: 3456,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
        images: [],
        description: "The legendary moisturizer with Miracle Broth.",
        colors: [],
        stock: 100,
        badges: ["bestseller"],
        featured: true,
        bestseller: true
    },
    {
        id: 36,
        name: "Dyson Airwrap Complete",
        category: "Beauty",
        subcategory: "Hair Care",
        brand: "Dyson",
        price: 599,
        originalPrice: null,
        rating: 4.6,
        reviews: 2345,
        image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=400",
        images: [],
        description: "Multi-styler for multiple hair types and styles.",
        colors: ["#F5E6D3", "#E8B4B8"],
        stock: 80,
        badges: ["hot"],
        featured: true
    },
    // Books
    {
        id: 38,
        name: "Atomic Habits by James Clear",
        category: "Books",
        subcategory: "Self-Help",
        brand: "Penguin",
        price: 18,
        originalPrice: 27,
        rating: 4.9,
        reviews: 98765,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
        images: [],
        description: "Tiny changes, remarkable results. #1 New York Times bestseller.",
        colors: [],
        stock: 1000,
        badges: ["bestseller"],
        featured: true,
        bestseller: true
    },
    // Gaming
    {
        id: 42,
        name: "PlayStation 5 Console",
        category: "Toys & Games",
        subcategory: "Gaming",
        brand: "Sony",
        price: 499,
        originalPrice: null,
        rating: 4.8,
        reviews: 12345,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400",
        images: [],
        description: "Experience lightning-fast loading with an ultra-high speed SSD.",
        colors: ["#F5F5F7"],
        stock: 100,
        badges: ["hot"],
        featured: true,
        bestseller: true
    }
];

export const getProductById = (id) => {
    return productsData.find(product => product.id === parseInt(id));
};

export const getFeaturedProducts = () => {
    return productsData.filter(product => product.featured);
};

export const getProductsByCategory = (category) => {
    return productsData.filter(product => product.category === category);
};

export const getBestsellers = () => {
    return productsData.filter(product => product.bestseller);
};

export const getProductsOnSale = () => {
    return productsData.filter(product => product.originalPrice !== null);
};

export default productsData;
