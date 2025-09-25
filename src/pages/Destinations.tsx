import { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Clock, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DestinationCard from '@/components/DestinationCard';

// Import images
import netarhatImage from '@/assets/netarhat.jpg';
import betlaImage from '@/assets/betla-park.jpg';
import hundruImage from '@/assets/hundru-falls.jpg';
import deogarImage from '@/assets/deoghar.jpg';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [show360Modal, setShow360Modal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');

  const destinations = [
    {
      id: 1,
      name: 'Netarhat',
      location: 'Latehar District',
      image: netarhatImage,
      category: 'hill-station',
      description: 'Queen of Chotanagpur, famous for sunrise and sunset views from the hilltop. Perfect for nature lovers and photographers.',
      duration: '2-3 days',
      rating: 4.7,
      highlights: ['Sunrise Point', 'Sunset Point', 'Pine Forests', 'Cool Climate']
    },
    {
      id: 2,
      name: 'Betla National Park',
      location: 'Palamau District',
      image: betlaImage,
      category: 'wildlife',
      description: 'Wildlife sanctuary home to tigers, elephants, and diverse flora and fauna. Ideal for wildlife enthusiasts and safari lovers.',
      duration: '3-4 days',
      rating: 4.5,
      highlights: ['Tiger Safari', 'Elephant Spotting', 'Bird Watching', 'Nature Trails']
    },
    {
      id: 3,
      name: 'Hundru Falls',
      location: 'Ranchi District',
      image: hundruImage,
      category: 'waterfall',
      description: '320 feet waterfall cascading down rocky cliffs, a spectacular natural wonder. Great for adventure seekers.',
      duration: '1 day',
      rating: 4.8,
      highlights: ['320ft Waterfall', 'Rock Climbing', 'Photography', 'Picnic Spots']
    },
    {
      id: 4,
      name: 'Deoghar',
      location: 'Deoghar District',
      image: deogarImage,
      category: 'temple',
      description: 'Sacred pilgrimage site with ancient temples and rich spiritual heritage. Perfect for spiritual journeys.',
      duration: '2 days',
      rating: 4.6,
      highlights: ['Baidyanath Temple', 'Naulakha Mandir', 'Spiritual Experience', 'Local Culture']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Destinations' },
    { value: 'hill-station', label: 'Hill Stations' },
    { value: 'wildlife', label: 'Wildlife' },
    { value: 'waterfall', label: 'Waterfalls' },
    { value: 'temple', label: 'Temples' }
  ];

  const filteredDestinations = useMemo(() => {
    return destinations.filter(destination => {
      const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          destination.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          destination.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || destination.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter]);

  const handleView360 = (destination: string) => {
    setSelectedDestination(destination);
    setShow360Modal(true);
  };

  const handleAddToItinerary = (destination: string) => {
    const existingItinerary = JSON.parse(localStorage.getItem('itinerary') || '[]');
    if (!existingItinerary.includes(destination)) {
      existingItinerary.push(destination);
      localStorage.setItem('itinerary', JSON.stringify(existingItinerary));
    }
    alert(`${destination} added to your itinerary!`);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Explore Destinations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the hidden gems of Jharkhand - from pristine waterfalls to ancient temples
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search destinations, locations, or activities..."
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
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-accent fill-current" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="btn-hero flex-1"
                      onClick={() => handleView360(destination.name)}
                    >
                      360° View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground"
                      onClick={() => handleAddToItinerary(destination.name)}
                    >
                      Add to Trip
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{destination.name}</h3>
                <div className="flex items-center justify-between text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{destination.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.slice(0, 3).map((highlight, index) => (
                    <span 
                      key={index}
                      className="bg-forest-light text-forest text-xs px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏞️</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No destinations found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or explore all destinations
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
              }}
              className="btn-hero"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

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
                <div className="text-center">
                  <div className="text-6xl mb-4">🥽</div>
                  <p className="text-muted-foreground text-lg">
                    Immersive 360° Virtual Tour
                    <br />
                    <span className="text-sm">Coming soon with AR/VR integration</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;