

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

export type SlidersProps = {
    children: ReactNode
    settings: SwiperProps
}

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/scrollbar';


// Import Swiper styles


// Import Swiper styles
import 'swiper/css';
import { ReactNode } from 'react';
import { A11y, Navigation, Pagination } from 'swiper';

export function Sliders({ settings, children }: SlidersProps) {
    return (
        <div className='w-full '>
            <div className='animation-transition-top'>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    {...settings}
                >
                    {children}
                </Swiper>
            </div>
        </div>
    )
}