import { MapPin, Eye, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DestinationCardProps {
  name: string;
  image: string;
  description: string;
  location: string;
  onView360?: () => void;
  onAddToItinerary?: () => void;
}

const DestinationCard = ({ 
  name, 
  image, 
  description, 
  location, 
  onView360, 
  onAddToItinerary 
}: DestinationCardProps) => {
  return (
    <div className="destination-card group cursor-pointer">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button
              size="sm"
              className="btn-hero flex-1"
              onClick={(e) => {
                e.stopPropagation();
                onView360?.();
              }}
            >
              <Eye className="h-4 w-4 mr-1" />
              360° View
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground"
              onClick={(e) => {
                e.stopPropagation();
                onAddToItinerary?.();
              }}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;