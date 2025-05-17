/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,

} from "@/components/ui/card";
import { useState } from "react";
const ProductCard = ({ product, handleToShowDetails }: { product: any, handleToShowDetails: any }) => {

  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .9, ease: "easeOut"}}
      className="group relative">
      <Card
        key={product._id}
        className="overflow-hidden transition-all duration-300 bg-secondary border border-[#4A90E220] hover:shadow-lg"
      >
        {/* Product Image Section */}
        <CardHeader className="relative p-0">
          {/* Image */}
          <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Button className="bg-accent hover:bg-accent text-text font-semibold px-4 py-2 rounded-md shadow transition-transform duration-200">
                    Add to Cart
                  </Button>
                </motion.div>
              )}
            </div>
          </div>


          {/* Overlay (triggered on card hover) */}


          {/* Sale Badge */}
          {product.onSale && (
            <div className="absolute top-2 right-2 bg-accent text-text px-3 py-1 rounded-full text-sm font-medium">
              Sale
            </div>
          )}
        </CardHeader>

        {/* Info Section */}
        <CardContent className="p-4 space-y-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold truncate text-text">
              {product.title}
            </h3>
            <div className="text-xl font-bold text-primary">
              ${product.price}
            </div>
          </div>

          {/* Star Ratings */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-lg ${i < product.rating ? 'text-accent' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
        </CardContent>

        {/* View Details Button */}
        <CardFooter className="p-4 pt-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Button
            onClick={() => handleToShowDetails(product?._id)}
            className="w-full bg-primary text-white font-medium py-2 rounded-md hover:scale-[1.02] transition-transform duration-200 hover:bg-primary"
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>


  );
};

export default ProductCard;