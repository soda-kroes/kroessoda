"use client";
// //import swripper react component
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const reviewsData = [
  {
    avatar: "/certificate/1.jpg",
  },
  {
    avatar: "/certificate/4.jpg",
  },
  {
    avatar: "/certificate/c1.png",
  },
  {
    avatar: "/certificate/c2.png",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto dark:text-white">
          My Certificate
        </h2>
        {/* Slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    {/* image */}
                    <div className="flex items-center justify-center">
                      <Image
                        src={person.avatar}
                        width={300}
                        height={300}
                        alt=""
                        className=""
                      />
                    </div>
                  </CardHeader>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default Reviews;
