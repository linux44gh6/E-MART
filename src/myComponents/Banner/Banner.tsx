
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: '/hero1.jpg',
      title: 'Mega Summer Sale',
      subtitle: 'Up to 70% Off Selected Items',
      cta: 'Shop Now',
      color: 'text-orange-300'
    },
    {
      id: 2,
      image: '/hero2.jpg',
      title: 'Fresh Styles In',
      subtitle: 'Discover Our New Collection',
      cta: 'Explore',
      color: 'text-blue-200'
    },
    {
      id: 3,
      image: '/hero3.jpg',
      title: 'Tech Revolution',
      subtitle: 'Latest Gadgets & Devices',
      cta: 'Browse',
      color: 'text-purple-200'
    }
  ];

  return (
    <div className="relative group">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        speed={800}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !w-3 !h-3 !mx-1.5 !bg-white/50 hover:!bg-white/80 transition-all"></span>`;
          }
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        followFinger={true}
        className="h-[600px] md:h-[700px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-90"
                loading="lazy"
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                <div className="container mx-auto h-full flex items-center px-4 md:px-8">
                  <div className="max-w-2xl space-y-6">
                    <h2 className={`text-4xl md:text-6xl font-bold ${slide.color} animate-fadeInUp`}>
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 font-medium animate-fadeInUp delay-100">
                      {slide.subtitle}
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 animate-fadeInUp delay-200">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
     
      </Swiper>
    </div>
  );
};

export default HeroSlider;