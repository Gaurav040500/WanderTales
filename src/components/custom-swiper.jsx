import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import data from '@/constants/constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { Swiper as SwiperClass } from 'swiper';
import { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function CustomSwiper() {
  const { topStories } = data;
  const swiperRef = useRef<SwiperClass | null>(null);
  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      if (swiperRef.current.isEnd) {
        swiperRef.current.slideTo(0);
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      if (swiperRef.current.isBeginning) {
        swiperRef.current.slideTo(swiperRef.current.slides.length - 1);
      } else {
        swiperRef.current.slidePrev();
      }
    }
  };

  return (
    <div className='p-4 m-6'>
      <h2 className="text-3xl font-bold ml-6 mb-4">Top Stories</h2>
      <div className='flex items-center '>
                  <button
                    onClick={goToPrevSlide}
                    className='p-1 top-[calc(50%+10px)]'
                  >
                   <IoIosArrowDroprightCircle size={30} />
                  </button>
                  <button
                    onClick={goToNextSlide}
                    className='p-1 top-[calc(50%+10px)]'
                  >
                     <IoIosArrowDropleftCircle size={30} />
                  </button>
                </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 2,
          },
        }}
        style={{ border: 'none', paddingBottom: '0' }}
      >
        {topStories.map((story, index) => (
          <SwiperSlide key={index}>
            <div className=" items-center w-full h-auto m-4">
              <div className="relative w-11/12 h-48">
                <Image
                  src={story.imgSrc}
                  alt={story.heading}
                  className="object-cover rounded-lg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="px-4 py-2">
                <h3 className="font-semibold text-lg">{story.heading}</h3>
                <p className="text-sm text-gray-600 line-clamp-1">{story.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default CustomSwiper;
