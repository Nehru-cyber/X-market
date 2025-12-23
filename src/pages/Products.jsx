import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductCard from '../components/products/ProductCard';
import { productsData } from '../data/productsData';
import './Products.css';

const Products = () => {
    const [searchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState('featured');
    const [priceRange, setPriceRange] = useState([0, 3000]);

    const categoryFilter = searchParams.get('category');
    const filterType = searchParams.get('filter');

    const filteredProducts = useMemo(() => {
        let result = [...productsData];

        // Category filter
        if (categoryFilter) {
            result = result.filter(p => p.category === categoryFilter);
        }

        // Special filters
        if (filterType === 'sale') {
            result = result.filter(p => p.originalPrice !== null);
        } else if (filterType === 'new') {
            result = result.filter(p => p.badges?.includes('new'));
        } else if (filterType === 'bestseller') {
            result = result.filter(p => p.bestseller);
        }

        // Price filter
        result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // Sorting
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                result = result.filter(p => p.badges?.includes('new')).concat(result.filter(p => !p.badges?.includes('new')));
                break;
            default:
                result = result.filter(p => p.featured).concat(result.filter(p => !p.featured));
        }

        return result;
    }, [categoryFilter, filterType, sortBy, priceRange]);

    const categories = [...new Set(productsData.map(p => p.category))];

    return (
        <div className="products-page">
            <Header />

            <main className="products-main">
                <div className="container">
                    <div className="products-header">
                        <div className="products-title">
                            <h1>{categoryFilter || 'All Products'}</h1>
                            <span className="product-count">{filteredProducts.length} products</span>
                        </div>
                        <div className="products-sort">
                            <label>Sort by:</label>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="featured">Featured</option>
                                <option value="newest">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Best Rating</option>
                            </select>
                        </div>
                    </div>

                    <div className="products-layout">
                        <aside className="products-filters">
                            <div className="filter-section">
                                <h3>Categories</h3>
                                <ul className="filter-list">
                                    <li><a href="/products" className={!categoryFilter ? 'active' : ''}>All</a></li>
                                    {categories.map(cat => (
                                        <li key={cat}>
                                            <a href={`/products?category=${cat}`} className={categoryFilter === cat ? 'active' : ''}>
                                                {cat}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="filter-section">
                                <h3>Price Range</h3>
                                <div className="price-inputs">
                                    <input
                                        type="number"
                                        value={priceRange[0]}
                                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                                        placeholder="Min"
                                    />
                                    <span>to</span>
                                    <input
                                        type="number"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 3000])}
                                        placeholder="Max"
                                    />
                                </div>
                            </div>

                            <div className="filter-section">
                                <h3>Quick Filters</h3>
                                <div className="quick-filters">
                                    <a href="/products?filter=sale" className={`filter-chip ${filterType === 'sale' ? 'active' : ''}`}>On Sale</a>
                                    <a href="/products?filter=new" className={`filter-chip ${filterType === 'new' ? 'active' : ''}`}>New Arrivals</a>
                                    <a href="/products?filter=bestseller" className={`filter-chip ${filterType === 'bestseller' ? 'active' : ''}`}>Best Sellers</a>
                                </div>
                            </div>
                        </aside>

                        <div className="products-content">
                            {filteredProducts.length > 0 ? (
                                <div className="products-grid">
                                    {filteredProducts.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="no-products">
                                    <i className="fas fa-search"></i>
                                    <h3>No products found</h3>
                                    <p>Try adjusting your filters or search terms</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Products;
