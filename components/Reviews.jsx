"use client";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Gia Nghi",
    job: "Doanh nhân",
    review:
      "Website chuẩn SEO, giao diện chuyên nghiệp, tốc độ tải nhanh. Rất ấn tượng!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Hương Giang",
    job: "Chuyên viên Marketing",
    review:
      "Dịch vụ tận tâm, website tối ưu giúp tăng traffic tự nhiên đáng kể!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Minh Ngọc",
    job: "Nhà sáng lập Start-up",
    review: "Giao diện đẹp, UX/UI mượt mà, đội ngũ hỗ trợ nhiệt tình!",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Minh Thư",
    job: "Chủ cửa hàng online",
    review: "Website giúp tăng 40% doanh thu, tích hợp thanh toán tiện lợi!",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Minh Tuấn",
    job: "Blogger & Content Creator",
    review:
      "Tối ưu SEO tốt, bài viết nhanh chóng lên top Google. Rất hài lòng!",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Nguyễn Hoa",
    job: "Chuyên gia đào tạo",
    review:
      "Giao diện thân thiện, tốc độ nhanh, dễ quản lý. Dịch vụ hỗ trợ tốt!",
  },
  {
    avatar: "/reviews/avatar-7.png",
    name: "Nguyễn Ninh",
    job: "Chủ doanh nghiệp",
    review: "Website chuyên nghiệp, chuẩn SEO, giúp tối ưu kinh doanh online!",
  },
  {
    avatar: "/reviews/avatar-8.png",
    name: "Trường Giang",
    job: "Nhà đầu tư",
    review: "Tốc độ tải nhanh, thiết kế đẹp, tối ưu trải nghiệm người dùng!",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}
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
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
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
