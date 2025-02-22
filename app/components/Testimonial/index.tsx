"use client";
import SectionHeader from "@/app/components/Common/SectionHeader";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  return (
    <section>
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Title Start */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `TESTIMONIALS`,
              subtitle: `Client’s Testimonials`,
              description: `OUR CUSTOMER REVIEW`,
            }}
          />
        </div>
        {/* Section Title End */}
      </div>

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
      >
        {/* Slider main container */}
        <div className="swiper testimonial-01 mb-20 pb-22.5">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true, // Enable clickable pagination bullets
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              // Responsive breakpoints
              0: {
                slidesPerView: 1, // 1 slide on mobile
              },
              768: {
                slidesPerView: 2, // 2 slides on tablets and larger screens
              },
            }}
          >
            {testimonialData.map((review) => (
              <SwiperSlide key={review?.id}>
                <SingleTestimonial review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;