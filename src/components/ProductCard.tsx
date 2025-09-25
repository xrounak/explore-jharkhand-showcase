import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  description?: string;
  onBuy?: () => void;
}

const ProductCard = ({ name, image, price, description, onBuy }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-primary font-bold text-xl mb-2">{price}</p>
        {description && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        )}
        <Button 
          className="btn-accent w-full"
          onClick={onBuy}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;