/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,

} from "@/components/ui/card";
const ProductCard = ({product, handleToShowDetails}: {product: any, handleToShowDetails: any}) => {
    return (
        <div>
            <Card 
  key={product._id}
  className="group relative overflow-hidden hover:shadow-lg transition-all duration-300"
  style={{
    backgroundColor: '#F5F7FA', 
    borderColor: '#4A90E220'
  }}
>
  <CardHeader className="p-0 relative">
    <img 
      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
      src={product.image} 
      alt={product.title} 
    />
    {product.onSale && (
      <div 
        className="absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium"
        style={{ backgroundColor: '#FFD166', color: '#2D2D2D' }} // accent
      >
        Sale
      </div>
    )}
  </CardHeader>
  
  <CardContent className="p-4 space-y-3">
    <div className="flex justify-between items-start">
      <h3 
        className="text-lg font-semibold truncate"
        style={{ color: '#2D2D2D' }} 
      >
        {product.title}
      </h3>
      <div 
        className="text-xl font-bold ml-2"
        style={{ color: '#4A90E2' }}
      >
        ${product.price}
      </div>
    </div>

    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < product.rating ? 'text-accent' : 'text-gray-300'}`}
          style={{ color: i < product.rating ? '#FFD166' : '#CBD5E1' }}
        >
          ★
        </span>
      ))}
    </div>
  </CardContent>

  <CardFooter className="p-4 pt-0">
    <Button
      onClick={() => handleToShowDetails(product?._id)}
      className="w-full hover:scale-[1.02] transition-transform duration-200"
      style={{
        backgroundColor: '#4A90E2', // primary
        color: '#FFFFFF',
      }}
    >
      View Details
    </Button>
  </CardFooter>
</Card>
        </div>
    );
};

export default ProductCard;