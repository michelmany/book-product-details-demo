import {useState, useEffect} from 'react';
import {formatContributors, formatDate, formatPrice} from './utils/formatters';
import Header from './components/Header';
import Footer from './components/Footer';
import './scss/main.scss';

function App() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const productApiUrl = 'https://v3-static.supadu.io/radley-books-us/products/9732397900366.json';

    useEffect(() => {
        if (product) {
            document.title = `${product.title} | Book Details`;
        }
    }, [product]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(productApiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch product data');
                }

                const data = await response.json();
                setProduct(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    if (loading) return <div className="app__loading">Loading...</div>;
    if (error) return <div className="app__error">Error: {error}</div>;
    if (!product) return <div className="app__no-data">No product data available</div>;

    return (
        <>
            <Header/>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <main id="main-content" className="app">
                <ProductPage product={product}/>
            </main>
            <Footer/>
        </>
    );
}

const ProductPage = ({product}) => {
    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    return (
        <article className="product">
            <div className="product__container container">
                <header className="product__header">
                    <h1 className="product__title">{product.title}</h1>
                    {product.contributors && product.contributors.length > 0 && (
                        <p className="product__author">By <a href="#author"
                                                             className="product__author-link">{formatContributors(product.contributors)}</a>
                        </p>
                    )}
                </header>

                <div className="product__main">
                    <div className="product__image-wrapper">
                        {product.image && (
                            <img
                                src={`${product.image}&h=648`}
                                alt={`Cover of ${product.title}`}
                                className="product__image"
                            />
                        )}
                    </div>

                    <div className="product__details">
                        <section className="product__description">
                            <h2 className="product__section-title">Description</h2>
                            <div dangerouslySetInnerHTML={{__html: product.description}}/>
                        </section>

                        <section className="product__pricing">
                            <h2 className="product__section-title">Price</h2>
                            {product.prices && product.prices.length > 0 && (
                                <>
                                    <div className="product__currency-selector">
                                        <label htmlFor="currency-select">Currency: </label>
                                        <select
                                            id="currency-select"
                                            value={selectedCurrency}
                                            onChange={(e) => setSelectedCurrency(e.target.value)}
                                            className="product__currency-dropdown"
                                            aria-label="Select currency"
                                        >
                                            {product.prices.map(price => (
                                                <option key={price.locale} value={price.locale}>
                                                    {price.locale}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="product__price-container">
                                        {(() => {
                                            const currentPrice = product.prices.find(price => price.locale === selectedCurrency);
                                            if (!currentPrice) return null;

                                            return (
                                                <>
                                                    {currentPrice.discount && (
                                                        <span className="product__original-price">
                                                          {formatPrice(currentPrice.amount, selectedCurrency)}
                                                        </span>
                                                    )}
                                                    <span className="product__current-price">
                                                        {formatPrice(currentPrice.discount || currentPrice.amount, selectedCurrency)}
                                                    </span>
                                                </>
                                            );
                                        })()}
                                    </div>
                                </>
                            )}
                        </section>

                        <section className="product__release">
                            <h2 className="product__section-title">Sale Date</h2>
                            <p>{formatDate(product.sale_date.date)}</p>
                        </section>

                        <section className="product__retailers">
                            <h2 className="product__section-title">Buy Now</h2>
                            <div className="product__retailer-links">
                                {product.retailers && product.retailers.length > 0 ? (
                                    product.retailers.map((retailer, index) => (
                                        <a
                                            key={index}
                                            href={retailer.path}
                                            className="product__retailer-button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {retailer.label}
                                        </a>
                                    ))
                                ) : (
                                    <p>No retailers available</p>
                                )}
                            </div>
                        </section>
                    </div>
                </div>

                <section className="product__contributor-bio" id="author">
                    <h2 className="product__section-title">About the Author</h2>
                    {product.contributors && product.contributors.map((contributor, index) => (
                        <div key={index} className="product__bio">
                            {contributor.contributor && contributor.contributor.bio ? (
                                <div dangerouslySetInnerHTML={{__html: contributor.contributor.bio}}/>
                            ) : (
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. {contributor.contributor.name} is an acclaimed author known for creating
                                    captivating stories. Sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
                            )}
                        </div>
                    ))}
                </section>

                <section className="product__reviews">
                    <h2 className="product__section-title">Reviews</h2>
                    {product.reviews && product.reviews.length > 0 ? (
                        <div className="product__reviews-list">
                            {product.reviews.map((review, index) => (
                                <div key={index} className="product__review">
                                    <div className="product__review-header">
                                        <h3 className="product__review-source">{review.source}</h3>
                                        {review.star_rating && (
                                            <div className="product__review-rating">Rating: {review.star_rating}</div>
                                        )}
                                    </div>
                                    <blockquote className="product__review-text">
                                        <p>{review.text}</p>
                                        {review.author && <footer>— {review.author}</footer>}
                                    </blockquote>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No reviews available</p>
                    )}
                </section>
            </div>
        </article>
    );
};

export default App;
