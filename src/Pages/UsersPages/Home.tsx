
import HeroSlider from '@/myComponents/Banner/Banner';
import HotDeals from './HotDeals/HotDeals';
import NewArivels from '@/myComponents/NewArivels/NewArivels';
const Home = () => {
    return (
        <div className='bg-secondary'>
          <HeroSlider/>
          <HotDeals/>
          <NewArivels/>
        </div>
    );
}

export default Home;
