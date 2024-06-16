"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
        >

            {serviceData.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className="flex flex-col md:flex-row px-6 py-8  md:h-[190px] sm:w-[270px] md:w-auto rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] md:bg-transparent gap-y-6 md:gap-y-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                    <div className="mb-4 text-2xl text-secondary">{item.icon}</div>
                        <div>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                            <p className="mb-1 sm:text-xs break-normal">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderServices;