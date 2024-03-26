"use client"
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import Card from "@/components/propertyListing/Card/Card";
import ArticleCard from "@/components/faq/ArticleCard";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
// import ArticleCard from ";

const ReadMore = ({
  isFullScreen, header
}) => {
  const newsData = [
    {
      id: 1,
      title: "Lorem Ipsum News Magma",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "September 1, 2023",
    },
    {
      id: 2,
      title: "Aenean Pulvinar Magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "August 28, 2023",
    },
    {
      id: 3,
      title: "Sed Tincidunt Euismod",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "August 25, 2023",
    },
    {
      id: 4,
      title: "Lorem Ipsum News Dollar",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "September 1, 2023",
    },
    {
      id: 5,
      title: "Aenean Pulvinar Magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "August 28, 2023",
    },
    {
      id: 6,
      title: "Sed Tincidunt Euismod",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "August 25, 2023",
    },
  ];

  return (
    <div className={`${isFullScreen ? '' : 'px-4 sm:px-8 md:px-16 lg:px-32 space-y-8 mt-10 py-5'}}`}>
      <h2 className="text-2xl sm:text-4xl lg:text-3xl font-bold py-4">
        {header ? header : 'Interesting Readings'}
      </h2>
      <Swiper
        wrapperClass="pb-1 sm:pb-2 md:pb-8 relative "
        spaceBetween={46}
        slidesPerView={1}
        modules={[Pagination, Navigation]}

        pagination={{ clickable: true, horizontalClass: 'rentSwiperDots' }}
        navigation={{
          prevEl: '.prevArrow',
          nextEl: '.nextArrow',
          disabledClass: '.disabledArrow'
        }}
        breakpoints={{

          330: {
            slidesPerView: 1.5,
            spaceBetween: 10,

          },
          540: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 10,
            navigation: false
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
      >
        {newsData.map((newsItem) => (
          <SwiperSlide className="z-[5]" key={newsItem.id}>
            <ArticleCard
              title={newsItem.title}
              date={newsItem.date}
            />
          </SwiperSlide>
        ))}

        <div className="nextArrow bg-blue-500 text-white w-[48px] h-[48px] p-4 hidden md:flex items-center justify-center rounded-[100%] -right-4 top-[40%] mb-8 -translate-x-1/2 absolute z-10">
          <FaArrowRightLong size={20} />
        </div>
        <div className="prevArrow bg-blue-500 text-white w-[48px] h-[48px] p-4 hidden md:flex items-center justify-center rounded-[100%] mb-8 -translate-x-1/2 left-8 top-[40%] absolute z-10 cursor-pointer pointer-events-auto">
          <FaArrowLeftLong size={20} />
        </div>

      </Swiper>
    </div>
  );
};

export default ReadMore;
