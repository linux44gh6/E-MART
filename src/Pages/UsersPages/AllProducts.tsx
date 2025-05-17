// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Skeleton } from '@/components/ui/skeleton';
import Featured from '@/myComponents/Featured/Featured';
import FilterSidebar from '@/myComponents/Filter/Filter';
// import { useGetAllProductsQuery } from '@/Redux/Features/ProductMangement/getAllProdcuts';
// import { RootState } from '@/Redux/Store';
// import { TProduct } from '@/Types/productsType';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
    // const navigate = useNavigate();
    // const {data:product,isLoading}=useGetAllProductsQuery(undefined)
    // console.log(product?.data);
    // const searchQuery=useSelector((state:RootState)=>state.search.query)
    // const handleToShowDetails = (id:string) => {
    //     console.log('Show Details');
    //     console.log(id);
    //    navigate(`/details/${id}`);
    // }
  //   if (isLoading) {
  //     return (
  //         <div className="space-y-2">
  //             <Skeleton className="w-full h-[40px] rounded-lg" />
  //             <Skeleton className="w-full h-[40px] rounded-lg" />
  //             <Skeleton className="w-full h-[40px] rounded-lg" />
  //             <Skeleton className="w-full h-[40px] rounded-lg" />
  //             <Skeleton className="w-full h-[40px] rounded-lg" />
  //             <Skeleton className="w-full h-[40px] rounded-lg" />
  //         </div>
  //     );
  // }
    return (
         <div className='flex gap-4'>
            <div className='w-1/4 blocked lg:block hidden mt-2'>
              <FilterSidebar/>
            </div>
            <div className=' w-3/4'>
              <Featured />
            </div>
          </div>
    );
};

export default AllProducts;