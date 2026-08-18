/* Cat-z - Products Data - Complete Product Catalog */

export const productsData = [
    {
        id: 1,
        name: "Half Hand T-Shirt",
        category: "Fashion",
        subcategory: "Men",
        brand: "X-Brand",
        price: 1499,
        originalPrice: 1999,
        rating: 4.8,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"],
        description: "Comfortable half hand t-shirt for everyday wear.",
        colors: ["White", "Black", "Navy"],
        stock: 50,
        badges: ["bestseller"],
        featured: true,
        bestseller: true
    },
    {
        id: 2,
        name: "Casual Pants",
        category: "Fashion",
        subcategory: "Men",
        brand: "X-Brand",
        price: 2499,
        originalPrice: null,
        rating: 4.5,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400",
        images: ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400"],
        description: "Stylish and comfortable casual pants.",
        colors: ["Khaki", "Black", "Navy"],
        stock: 30,
        badges: [],
        featured: false,
        bestseller: false
    },
    {
        id: 3,
        name: "Classic Hoodie",
        category: "Fashion",
        subcategory: "Men",
        brand: "X-Brand",
        price: 2999,
        originalPrice: 3999,
        rating: 4.9,
        reviews: 210,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
        images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"],
        description: "Warm and cozy classic hoodie.",
        colors: ["Grey", "Black", "Red"],
        stock: 45,
        badges: ["hot", "sale"],
        featured: true,
        bestseller: true
    },
    {
        id: 4,
        name: "Sports Socks",
        category: "Fashion",
        subcategory: "Accessories",
        brand: "X-Brand",
        price: 499,
        originalPrice: null,
        rating: 4.7,
        reviews: 56,
        image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400",
        images: ["https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400"],
        description: "Breathable sports socks for active lifestyle.",
        colors: ["White", "Black"],
        stock: 100,
        badges: [],
        featured: false,
        bestseller: false
    },
    {
        id: 5,
        name: "Full Hand Sweat T-Shirt",
        category: "Fashion",
        subcategory: "Men",
        brand: "X-Brand",
        price: 1999,
        originalPrice: null,
        rating: 4.6,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400",
        images: ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400"],
        description: "Comfortable full hand sweat t-shirt.",
        colors: ["Black", "Grey", "Blue"],
        stock: 60,
        badges: ["new"],
        featured: true,
        bestseller: false
    },
    {
        id: 6,
        name: "Athletic Tights",
        category: "Fashion",
        subcategory: "Women",
        brand: "X-Brand",
        price: 1299,
        originalPrice: 1599,
        rating: 4.8,
        reviews: 150,
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400",
        images: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400"],
        description: "Flexible and breathable athletic tights.",
        colors: ["Black", "Navy"],
        stock: 40,
        badges: ["sale", "bestseller"],
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
