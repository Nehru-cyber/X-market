# 🛒 X-Market - Premium 3D E-Commerce Website

A modern, feature-rich e-commerce website with stunning 3D effects and immersive shopping experience. Built with pure HTML5, CSS3, and JavaScript.

![X-Market Banner](https://img.shields.io/badge/X--Market-Premium%20Shopping-6366f1?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design & UI
- **3D Visual Effects**: CSS transforms, perspective effects, and 3D card animations
- **Modern Glassmorphism**: Frosted glass effects with backdrop blur
- **Smooth Animations**: Page transitions, hover effects, and micro-interactions
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark/Light Theme Ready**: CSS variables for easy theming

### 🛍️ E-Commerce Features
- **Product Catalog**: 48+ products across 6 categories
- **Advanced Filtering**: By category, price, rating, and availability
- **Smart Search**: Real-time product search functionality
- **Shopping Cart**: Add, remove, update quantities with persistence
- **Wishlist**: Save favorite items for later
- **Multi-step Checkout**: 4-step checkout process with validation

### 👤 User Features
- **Authentication**: Login and registration system
- **User Profile**: Complete dashboard with account management
- **Order History**: View and track past orders
- **Address Book**: Manage multiple shipping addresses
- **Payment Methods**: Save and manage payment options
- **Security Settings**: Password change, 2FA, session management

### 📱 Pages Included
1. **Homepage** (`index.html`) - Hero, categories, featured products
2. **Products** (`pages/products.html`) - Full catalog with filtering
3. **Product Detail** (`pages/product-detail.html`) - 3D product viewer
4. **Categories** (`pages/categories.html`) - Browse by category
5. **Cart** (`pages/cart.html`) - Shopping cart management
6. **Checkout** (`pages/checkout.html`) - Multi-step checkout
7. **Wishlist** (`pages/wishlist.html`) - Saved items
8. **Login** (`pages/login.html`) - User authentication
9. **Register** (`pages/register.html`) - New user registration
10. **Profile** (`pages/profile.html`) - User dashboard
11. **About** (`pages/about.html`) - Company information
12. **Contact** (`pages/contact.html`) - Contact form and info

## 📁 Project Structure

```
x-Market/
├── index.html              # Main homepage
├── README.md               # This file
├── css/
│   ├── style.css           # Main stylesheet
│   ├── 3d-effects.css      # 3D transforms and effects
│   ├── animations.css      # Keyframe animations
│   ├── auth.css            # Authentication pages styles
│   ├── products.css        # Products page styles
│   ├── product-detail.css  # Product detail styles
│   ├── cart-page.css       # Cart page styles
│   ├── checkout.css        # Checkout styles
│   ├── wishlist.css        # Wishlist styles
│   ├── profile.css         # Profile dashboard styles
│   ├── categories.css      # Categories page styles
│   └── pages.css           # About/Contact pages styles
├── js/
│   ├── products-data.js    # Product database (48 products)
│   ├── main.js             # Core functionality
│   ├── cart.js             # Cart management
│   ├── products.js         # Products page logic
│   ├── product-detail.js   # 3D viewer functionality
│   ├── cart-page.js        # Cart page interactions
│   ├── checkout.js         # Checkout process
│   ├── wishlist-page.js    # Wishlist management
│   ├── profile.js          # Profile dashboard
│   └── auth.js             # Authentication logic
└── pages/
    ├── login.html
    ├── register.html
    ├── products.html
    ├── product-detail.html
    ├── categories.html
    ├── cart.html
    ├── checkout.html
    ├── wishlist.html
    ├── profile.html
    ├── about.html
    └── contact.html
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for best experience)

### Installation

1. **Clone or download the project**
   ```bash
   git clone https://github.com/yourusername/x-market.git
   cd x-market
   ```

2. **Open with Live Server (recommended)**
   - Install VS Code Live Server extension
   - Right-click on `index.html` → "Open with Live Server"

3. **Or open directly**
   - Simply open `index.html` in your browser

### Demo Credentials
For testing the login functionality:
- **Email**: demo@example.com
- **Password**: any password (static demo)

## 💡 Key Technologies

- **HTML5**: Semantic markup, accessibility features
- **CSS3**: 
  - CSS Grid & Flexbox
  - CSS Custom Properties
  - 3D Transforms (perspective, rotateX/Y)
  - CSS Animations & Transitions
  - Backdrop Filter (glassmorphism)
- **JavaScript (ES6+)**:
  - LocalStorage for persistence
  - DOM Manipulation
  - Event Handling
  - Form Validation

## 🎯 Product Categories

| Category | Products | Description |
|----------|----------|-------------|
| 💻 Electronics | 8 | Smartphones, laptops, audio, cameras |
| 👕 Fashion | 8 | Clothing, shoes, accessories |
| 🏠 Home & Living | 8 | Furniture, decor, kitchen |
| ⚽ Sports & Fitness | 8 | Equipment, apparel, outdoor |
| 💄 Beauty & Care | 8 | Skincare, makeup, haircare |
| 📚 Books & Media | 8 | Fiction, non-fiction, education |

## 🔧 Customization

### Adding New Products
Edit `js/products-data.js`:
```javascript
{
    id: 49,
    name: "Your Product Name",
    category: "electronics",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 100,
    image: "product-image.jpg",
    badge: "New",
    description: "Product description here",
    inStock: true,
    features: ["Feature 1", "Feature 2"]
}
```

### Changing Theme Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary: #6366f1;      /* Primary brand color */
    --secondary: #a855f7;    /* Secondary accent */
    --text-primary: #1e293b; /* Main text color */
    --text-secondary: #64748b; /* Secondary text */
}
```

## 📱 Responsive Breakpoints

| Breakpoint | Device |
|------------|--------|
| 1200px | Large Desktop |
| 992px | Desktop |
| 768px | Tablet |
| 480px | Mobile |

## 🔐 LocalStorage Keys

| Key | Purpose |
|-----|---------|
| `xmarket_cart` | Shopping cart items |
| `xmarket_wishlist` | Wishlisted product IDs |
| `xmarket_user` | User authentication data |
| `xmarket_checkout` | Checkout form data |

## ⚡ Performance Features

- Lazy loading ready
- Optimized CSS selectors
- Minimal JavaScript footprint
- No external dependencies (except icons/fonts)
- CSS hardware acceleration for animations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Poppins font family
- [Unsplash](https://unsplash.com/) - Placeholder images inspiration

---

<p align="center">
  Made with ❤️ by X-Market Team
</p>

<p align="center">
  <a href="#top">⬆️ Back to Top</a>
</p>
