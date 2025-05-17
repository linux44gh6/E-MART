import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/Redux/Features/ProductMangement/getAllProdcuts";
import { NavLink, useNavigate } from "react-router-dom";
import ProductCard from "../Featured/ProductCard";
import type { ProductData } from "@/Types/productsType";

const NewArivels = () => {
    const navigate=useNavigate()
    const {data:products}=useGetAllProductsQuery(undefined)
    const handleToShowDetails = (id: string) => {
        navigate(`/details/${id}`);
    }
    return (
        <div className="px-5 mt-20 bg-secondary">
           <div className="flex justify-between items-center">
             <h1 className="text-4xl font-bold text-text">Featured Product</h1>
            <NavLink to={'/allProducts'}> <Button variant={"outline"} className=" border border-primary px-10 rounded-full bg-primary/20">All Product</Button></NavLink>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
            {
                products?.data?.slice(0,10).map((product:ProductData)=>(
                    <ProductCard key={product._id} product={product} handleToShowDetails={handleToShowDetails} />
                   
                ))
            }
           </div>
        </div>
    );
};

export default NewArivels;