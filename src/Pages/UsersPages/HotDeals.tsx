import { Button } from "@/components/ui/button";
import ProductCard from "@/myComponents/Featured/ProductCard";
import { useGetAllProductsQuery } from "@/Redux/Features/ProductMangement/getAllProdcuts";
import type { TProduct } from "@/Types/productsType";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
const HotDeals = () => {
    const navigate=useNavigate()
    const {data:products}=useGetAllProductsQuery(undefined)
    console.log(products);
   const handleToShowDetails = (id:string) => {
       navigate(`/details/${id}`);
    }

    console.log(products?.data);
    return (
        <div>
            <h1 className="text-3xl font-bold p-5 uppercase my-5"><span className="text-red-500">hot</span> Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 p-5">
                {
                    products?.data?.slice(0,15).map((product:TProduct)=>(
                         <ProductCard product={product} key={product._id} handleToShowDetails={handleToShowDetails}/>
                    ))
                }
            </div>
            <motion.div
             initial={{opacity:0,y:50}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:1}}
            className="flex justify-center items-center mt-5">
                <Button className="bg-primary px-10 hover:bg-primary/80 transition-all duration-300 ease-in-out">View All</Button>
            </motion.div>
        </div>
    );
};

export default HotDeals;