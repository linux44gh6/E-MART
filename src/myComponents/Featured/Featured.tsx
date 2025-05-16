/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "@/Redux/Features/ProductMangement/getAllProdcuts";


import { Button } from "@/components/ui/button";
import { TProduct } from "@/Types/productsType";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "./ProductCard";
const Featured = () => {
  const navigate = useNavigate();
  const { data: product, isLoading } = useGetAllProductsQuery(undefined);
  console.log(product?.data);

  const searchQuery = useSelector((state: RootState) => state.search.query);
  const filter = useSelector((state: RootState) => state.filter.filter);

  const filteredProducts = product?.data
    ?.filter((p: TProduct) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filter.length === 0 || filter.includes(p.category)||filter.includes(p.brand))
    )

  const handleToShowDetails = (id: string) => {
    navigate(`/details/${id}`);
  };

  const handelToAllProducts = () => {
    navigate("/allProducts");
  };

  if (isLoading) {
    return (
    <div className=" grid grid-cols-4 gap-4">
  {
    filteredProducts?.map((_: any, index:number) => (
      <Skeleton key={index} className="w-52 h-52 rounded-lg" />
    ))
  }
</div>

    );
  }

  return (
    <div className="mt-2">
      <div>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2">
          {filteredProducts?.length ? (
            filteredProducts.map((product: TProduct) => (
              <ProductCard
                product={product}
                key={product._id}
                handleToShowDetails={handleToShowDetails}
              />
            ))
          ) : (
            <p className="text-center col-span-4">No products found!</p>
          )}
        </div>
      </div>
      <Button
        onClick={handelToAllProducts}
        className="mt-10 bg-black text-white flex justify-self-center"
      >
        View All Products
      </Button>
    </div>
  );
};

export default Featured;
