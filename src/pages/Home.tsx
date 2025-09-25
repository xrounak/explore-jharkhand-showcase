import { Search, ArrowRight, Star, Users, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DestinationCard from '@/components/DestinationCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import heroImage from '@/assets/hero-jharkhand.jpg';
import netarhatImage from '@/assets/netarhat.jpg';
import betlaImage from '@/assets/betla-park.jpg';
import hundruImage from '@/assets/hundru-falls.jpg';
import deogarImage from '@/assets/deoghar.jpg';
import patratuImage from '@/assets/patratu-dam.jpg';
import parashnathImage from '@/assets/parashnath-hill.jpg';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [show360Modal, setShow360Modal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');
  const navigate = useNavigate();

  const featuredDestinations = [
    {
      name: 'Netarhat',
      location: 'Latehar District',
      image: netarhatImage,
      description: 'Queen of Chotanagpur, famous for sunrise and sunset views from the hilltop.'
    },
    {
      name: 'Patratu Dam',
      location: 'Ramgarh District',
      image: patratuImage,
      description: 'Serene artificial lake surrounded by rolling hills, perfect for boating and peaceful getaways.'
    },
    {
      name: 'Parashnath Hills',
      location: 'Giridih District',
      image: parashnathImage,
      description: 'Highest peak in Jharkhand with ancient Jain temples and panoramic views.'
    },
    {
      name: 'Hundru Falls',
      location: 'Ranchi District',
      image: hundruImage,
      description: '320 feet waterfall cascading down rocky cliffs, a spectacular natural wonder.'
    }
  ];

  const stats = [
    { icon: MapPin, number: '24', label: 'Districts to Explore' },
    { icon: Users, number: '50K+', label: 'Happy Travelers' },
    { icon: Award, number: '15', label: 'Awards Won' },
    { icon: Star, number: '4.8', label: 'Average Rating' }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/destinations?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleView360 = (destination: string) => {
    setSelectedDestination(destination);
    setShow360Modal(true);
  };

  const handleAddToItinerary = (destination: string) => {
    // Store in localStorage for now
    const existingItinerary = JSON.parse(localStorage.getItem('itinerary') || '[]');
    if (!existingItinerary.includes(destination)) {
      existingItinerary.push(destination);
      localStorage.setItem('itinerary', JSON.stringify(existingItinerary));
    }
    alert(`${destination} added to your itinerary!`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            Explore Jharkhand
          </h1>
          <p className="text-xl md:text-2xl mb-8 fade-in opacity-90">
            Discover pristine waterfalls, dense forests, and rich tribal heritage
          </p>
          
          {/* Search Bar */}
          <div className="search-bar max-w-2xl mx-auto mb-8 fade-in">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search destinations, activities, or experiences..."
              className="flex-1 border-0 bg-transparent placeholder:text-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button className="btn-hero" onClick={handleSearch}>
              Search
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <Button 
              className="btn-hero"
              onClick={() => navigate('/destinations')}
            >
              Explore Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline text-white border-white hover:bg-white hover:text-foreground"
              onClick={() => navigate('/itinerary')}
            >
              Plan Your Trip
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-forest-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scale-in">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the most breathtaking locations that showcase Jharkhand's natural beauty and cultural richness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination, index) => (
              <DestinationCard
                key={index}
                name={destination.name}
                image={destination.image}
                description={destination.description}
                location={destination.location}
                onView360={() => handleView360(destination.name)}
                onAddToItinerary={() => handleAddToItinerary(destination.name)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="btn-hero"
              onClick={() => navigate('/destinations')}
            >
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 360° Preview Modal */}
      {show360Modal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">360° View: {selectedDestination}</h3>
                <Button
                  variant="outline"
                  onClick={() => setShow360Modal(false)}
                >
                  Close
                </Button>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-lg">
                  360° Virtual Tour Coming Soon...
                  <br />
                  <span className="text-sm">This would integrate with VR/AR technology</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;