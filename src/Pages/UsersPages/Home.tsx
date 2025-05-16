
import Featured from '@/myComponents/Featured/Featured';
import FilterSidebar from '@/myComponents/Filter/Filter';

const Home = () => {
    return (
        <div>
          <div className='flex gap-4'>
            <div className='w-1/4 blocked lg:block hidden mt-2'>
              <FilterSidebar/>
            </div>
            <div className=' w-3/4'>
              <Featured />
            </div>
          </div>

        </div>
    );
}

export default Home;
