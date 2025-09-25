import { useState } from 'react';
import { Search, Filter, ShoppingCart, Star, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

// Import images
import basketImage from '@/assets/handicraft-basket.jpg';
import jewelryImage from '@/assets/handicraft-jewelry.jpg';
import potteryImage from '@/assets/handicraft-pottery.jpg';
import textileImage from '@/assets/handicraft-textile.jpg';
import tribalMaskImage from '@/assets/tribal-mask.jpg';
import tribalDrumsImage from '@/assets/tribal-drums.jpg';
import brassVesselsImage from '@/assets/brass-vessels.jpg';
import tribalShawlImage from '@/assets/tribal-shawl.jpg';
import beadJewelryImage from '@/assets/bead-jewelry.jpg';
import woodCarvingsImage from '@/assets/wood-carvings.jpg';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const products = [
    {
      id: 1,
      name: 'Handwoven Bamboo Basket',
      price: '₹1,250',
      originalPrice: '₹1,500',
      image: basketImage,
      category: 'baskets',
      rating: 4.8,
      description: 'Traditional tribal bamboo basket with intricate weaving patterns. Perfect for home decor and storage.',
      artisan: 'Santhal Tribal Cooperative',
      inStock: true
    },
    {
      id: 2,
      name: 'Silver Tribal Necklace',
      price: '₹3,200',
      originalPrice: '₹4,000',
      image: jewelryImage,
      category: 'jewelry',
      rating: 4.9,
      description: 'Authentic silver necklace with traditional tribal motifs and natural stones.',
      artisan: 'Munda Artisan Guild',
      inStock: true
    },
    {
      id: 3,
      name: 'Terracotta Pottery Vase',
      price: '₹850',
      originalPrice: '₹1,100',
      image: potteryImage,
      category: 'pottery',
      rating: 4.6,
      description: 'Handcrafted terracotta vase with traditional tribal patterns and earthy colors.',
      artisan: 'Oraon Potter Collective',
      inStock: true
    },
    {
      id: 4,
      name: 'Tribal Handloom Textile',
      price: '₹2,800',
      originalPrice: '₹3,500',
      image: textileImage,
      category: 'textiles',
      rating: 4.7,
      description: 'Premium handwoven fabric with geometric tribal patterns using natural dyes.',
      artisan: 'Kharia Weaver Society',
      inStock: false
    },
    {
      id: 5,
      name: 'Mini Bamboo Storage Set',
      price: '₹750',
      originalPrice: '₹950',
      image: basketImage,
      category: 'baskets',
      rating: 4.5,
      description: 'Set of 3 small bamboo containers ideal for organizing spices and small items.',
      artisan: 'Santhal Tribal Cooperative',
      inStock: true
    },
    {
      id: 6,
      name: 'Tribal Earrings Set',
      price: '₹1,200',
      originalPrice: '₹1,500',
      image: jewelryImage,
      category: 'jewelry',
      rating: 4.8,
      description: 'Beautiful pair of traditional tribal earrings with intricate metalwork.',
      artisan: 'Munda Artisan Guild',
      inStock: true
    },
    {
      id: 7,
      name: 'Wooden Tribal Mask',
      price: '₹2,400',
      originalPrice: '₹3,000',
      image: tribalMaskImage,
      category: 'art',
      rating: 4.9,
      description: 'Authentic carved wooden mask representing tribal deities and spiritual beliefs.',
      artisan: 'Ho Carver Collective',
      inStock: true
    },
    {
      id: 8,
      name: 'Traditional Tribal Drums',
      price: '₹4,500',
      originalPrice: '₹5,500',
      image: tribalDrumsImage,
      category: 'instruments',
      rating: 4.7,
      description: 'Handmade tribal drums with leather surface, perfect for cultural performances.',
      artisan: 'Santal Music Makers',
      inStock: true
    },
    {
      id: 9,
      name: 'Brass Vessel Collection',
      price: '₹3,800',
      originalPrice: '₹4,800',
      image: brassVesselsImage,
      category: 'pottery',
      rating: 4.6,
      description: 'Set of traditional brass and copper vessels with etched tribal patterns.',
      artisan: 'Oraon Metal Works',
      inStock: true
    },
    {
      id: 10,
      name: 'Handwoven Tribal Shawl',
      price: '₹2,200',
      originalPrice: '₹2,800',
      image: tribalShawlImage,
      category: 'textiles',
      rating: 4.8,
      description: 'Warm tribal shawl with geometric patterns in natural organic cotton.',
      artisan: 'Kharia Weaver Society',
      inStock: true
    },
    {
      id: 11,
      name: 'Colorful Bead Jewelry Set',
      price: '₹1,600',
      originalPrice: '₹2,000',
      image: beadJewelryImage,
      category: 'jewelry',
      rating: 4.5,
      description: 'Vibrant beadwork jewelry including bracelets and anklets with glass beads.',
      artisan: 'Munda Artisan Guild',
      inStock: true
    },
    {
      id: 12,
      name: 'Wooden Sculpture Set',
      price: '₹3,200',
      originalPrice: '₹4,000',
      image: woodCarvingsImage,
      category: 'art',
      rating: 4.9,
      description: 'Hand-carved wooden figurines representing tribal animals and deities.',
      artisan: 'Ho Carver Collective',
      inStock: true
    },
    {
      id: 13,
      name: 'Ceramic Tea Set',
      price: '₹1,800',
      originalPrice: '₹2,300',
      image: potteryImage,
      category: 'pottery',
      rating: 4.7,
      description: 'Beautiful ceramic tea set with traditional tribal motifs, perfect for serving.',
      artisan: 'Oraon Potter Collective',
      inStock: true
    },
    {
      id: 14,
      name: 'Tribal Wall Hanging',
      price: '₹1,400',
      originalPrice: '₹1,800',
      image: textileImage,
      category: 'textiles',
      rating: 4.6,
      description: 'Decorative wall hanging with traditional tribal patterns and natural fibers.',
      artisan: 'Kharia Weaver Society',
      inStock: true
    },
    {
      id: 15,
      name: 'Large Storage Basket',
      price: '₹1,800',
      originalPrice: '₹2,200',
      image: basketImage,
      category: 'baskets',
      rating: 4.4,
      description: 'Large capacity bamboo basket for storage and laundry, durable construction.',
      artisan: 'Santhal Tribal Cooperative',
      inStock: true
    },
    {
      id: 16,
      name: 'Silver Tribal Bracelet',
      price: '₹2,400',
      originalPrice: '₹3,000',
      image: jewelryImage,
      category: 'jewelry',
      rating: 4.8,
      description: 'Elegant silver bracelet with traditional engravings and tribal symbols.',
      artisan: 'Munda Artisan Guild',
      inStock: false
    },
    {
      id: 17,
      name: 'Decorative Tribal Pot',
      price: '₹1,100',
      originalPrice: '₹1,400',
      image: potteryImage,
      category: 'pottery',
      rating: 4.5,
      description: 'Ornamental pottery with intricate tribal designs, perfect for plant displays.',
      artisan: 'Oraon Potter Collective',
      inStock: true
    },
    {
      id: 18,
      name: 'Traditional Dance Mask',
      price: '₹2,800',
      originalPrice: '₹3,500',
      image: tribalMaskImage,
      category: 'art',
      rating: 4.9,
      description: 'Ceremonial dance mask used in tribal festivals, authentic cultural artifact.',
      artisan: 'Ho Carver Collective',
      inStock: true
    },
    {
      id: 19,
      name: 'Bamboo Wind Chime',
      price: '₹650',
      originalPrice: '₹800',
      image: basketImage,
      category: 'baskets',
      rating: 4.3,
      description: 'Musical wind chime made from natural bamboo with soothing sounds.',
      artisan: 'Santhal Tribal Cooperative',
      inStock: true
    },
    {
      id: 20,
      name: 'Tribal Textile Runner',
      price: '₹1,900',
      originalPrice: '₹2,400',
      image: textileImage,
      category: 'textiles',
      rating: 4.7,
      description: 'Table runner with traditional tribal patterns, handwoven with natural dyes.',
      artisan: 'Kharia Weaver Society',
      inStock: true
    },
    {
      id: 21,
      name: 'Copper Water Vessel',
      price: '₹2,100',
      originalPrice: '₹2,600',
      image: brassVesselsImage,
      category: 'pottery',
      rating: 4.6,
      description: 'Traditional copper water storage vessel with health benefits and tribal engravings.',
      artisan: 'Oraon Metal Works',
      inStock: true
    },
    {
      id: 22,
      name: 'Tribal Nose Ring Set',
      price: '₹900',
      originalPrice: '₹1,200',
      image: jewelryImage,
      category: 'jewelry',
      rating: 4.4,
      description: 'Traditional tribal nose jewelry in silver with authentic cultural significance.',
      artisan: 'Munda Artisan Guild',
      inStock: true
    },
    {
      id: 23,
      name: 'Wooden Tribal Spoon Set',
      price: '₹450',
      originalPrice: '₹600',
      image: woodCarvingsImage,
      category: 'art',
      rating: 4.5,
      description: 'Hand-carved wooden spoons with tribal motifs, eco-friendly dining accessories.',
      artisan: 'Ho Carver Collective',
      inStock: true
    },
    {
      id: 24,
      name: 'Tribal Festival Bag',
      price: '₹1,300',
      originalPrice: '₹1,600',
      image: textileImage,
      category: 'textiles',
      rating: 4.6,
      description: 'Traditional shoulder bag with tribal embroidery, perfect for festivals.',
      artisan: 'Kharia Weaver Society',
      inStock: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'baskets', label: 'Baskets & Storage' },
    { value: 'jewelry', label: 'Jewelry' },
    { value: 'pottery', label: 'Pottery & Vessels' },
    { value: 'textiles', label: 'Textiles & Fabrics' },
    { value: 'art', label: 'Art & Sculptures' },
    { value: 'instruments', label: 'Musical Instruments' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-1000', label: 'Under ₹1,000' },
    { value: '1000-2000', label: '₹1,000 - ₹2,000' },
    { value: '2000-5000', label: '₹2,000 - ₹5,000' },
    { value: 'above-5000', label: 'Above ₹5,000' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    
    let matchesPrice = true;
    if (priceFilter !== 'all') {
      const price = parseInt(product.price.replace('₹', '').replace(',', ''));
      switch (priceFilter) {
        case 'under-1000':
          matchesPrice = price < 1000;
          break;
        case '1000-2000':
          matchesPrice = price >= 1000 && price < 2000;
          break;
        case '2000-5000':
          matchesPrice = price >= 2000 && price < 5000;
          break;
        case 'above-5000':
          matchesPrice = price >= 5000;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleBuyProduct = (productName: string) => {
    setSelectedProduct(productName);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Tribal Handicrafts Marketplace</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Support local artisans and discover authentic tribal handicrafts made with traditional techniques
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search handicrafts, artisans, or materials..."
              className="pl-10 form-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </p>
          <div className="text-sm text-muted-foreground">
            🤝 Supporting {new Set(products.map(p => p.artisan)).size} artisan groups
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 right-2 flex justify-between">
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Save {Math.round(((parseInt(product.originalPrice.replace('₹', '').replace(',', '')) - parseInt(product.price.replace('₹', '').replace(',', ''))) / parseInt(product.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded ml-auto">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* Wishlist */}
                <button className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                </button>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-accent fill-current mr-1" />
                  <span className="text-sm text-muted-foreground">{product.rating}</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary font-bold text-xl">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <p className="text-xs text-accent font-medium mb-4">By {product.artisan}</p>

                <Button 
                  className={`w-full ${product.inStock ? 'btn-accent' : 'opacity-50 cursor-not-allowed'}`}
                  onClick={() => product.inStock && handleBuyProduct(product.name)}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Buy Now' : 'Out of Stock'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛍️</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all products
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
                setPriceFilter('all');
              }}
              className="btn-hero"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Impact Section */}
        <div className="bg-forest-light rounded-lg p-8 mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Purchase Makes a Difference</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every purchase directly supports tribal artisans and helps preserve traditional craftsmanship for future generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-semibold text-foreground mb-1">200+ Artisans</h3>
              <p className="text-sm text-muted-foreground">Supported across Jharkhand</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏡</div>
              <h3 className="font-semibold text-foreground mb-1">15 Villages</h3>
              <p className="text-sm text-muted-foreground">Connected to global markets</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-semibold text-foreground mb-1">Traditional Crafts</h3>
              <p className="text-sm text-muted-foreground">Preserved for future generations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-2xl font-bold mb-4">Purchase Confirmation</h3>
            <p className="text-muted-foreground mb-6">
              Great choice! You're about to purchase "{selectedProduct}". 
              This will support local artisans directly.
            </p>
            <div className="text-center text-6xl mb-4">✅</div>
            <p className="text-center text-green-600 font-semibold mb-6">
              Purchase Successful!
            </p>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Your order will be processed and shipped within 3-5 business days. 
              You'll receive a tracking confirmation via email.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowBookingModal(false)}
              >
                Continue Shopping
              </Button>
              <Button
                className="btn-hero flex-1"
                onClick={() => setShowBookingModal(false)}
              >
                View Order
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;