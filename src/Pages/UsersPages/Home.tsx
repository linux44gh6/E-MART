
import HeroSlider from '@/myComponents/Banner/Banner';
import HotDeals from './HotDeals/HotDeals';
import NewArivels from '@/myComponents/NewArivels/NewArivels';
import NewLatter from '@/myComponents/NewsLatter/NewLatter';
const Home = () => {
    return (
        <div className='bg-secondary'>
          <HeroSlider/>
          <HotDeals/>
          <NewArivels/>
          <NewLatter/>
        </div>
    );
}

export default Home;
