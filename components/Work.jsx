"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/tgv.png",
    category: "react js",
    name: "Top Giáo Viên",
    description:
      "Nền tảng kết nối giáo viên chất lượng với học viên trên toàn quốc, hỗ trợ tìm kiếm và đặt lịch học dễ dàng.",
    link: "https://topgiaovien.vn",
    github: "https://topgiaovien.vn",
  },
  {
    image: "/work/vk.png",
    category: "react js",
    name: "VKING-Kiến Trúc",
    description:
      "Website chuyên về kiến trúc và thiết kế nội thất, cung cấp các giải pháp xây dựng và tư vấn thiết kế hiện đại.",
    link: "https://vking.vn",
    github: "https://vking.vn",
  },
  {
    image: "/work/xs.png",
    category: "next js",
    name: "Xổ Số Trực Tiếp",
    description:
      "Trang web cập nhật kết quả xổ số trực tiếp và phân tích thống kê, giúp người chơi có thông tin nhanh chóng và chính xác.",
    link: "https://xosotructiep.online",
    github: "https://xosotructiep.online",
  },
  {
    image: "/work/kh.png",
    category: "next js",
    name: "Khai Hoàn Phú Quốc",
    description:
      "Website chính thức của thương hiệu nước mắm Khai Hoàn Phú Quốc, giới thiệu sản phẩm nước mắm tại Phú Quốc.",
    link: "https://khaihoanphuquoc.com.vn",
    github: "https://khaihoanphuquoc.com.vn",
  },
  {
    image: "/work/dlc.png",
    category: "next js",
    name: "Deluca",
    description:
      "Thương hiệu thời trang golf cao cấp, cung cấp các sản phẩm áo golf chất lượng, thiết kế sang trọng và phong cách thể thao.",
    link: "https://deluca.vn",
    github: "https://deluca.vn",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Dự án mới nhất</h2>
          <p className="subtitle mb-8">
            Dự án mới với thiết kế đẹp, hiệu suất cao.
          </p>
          <Link href="/projects">
            <Button>Tất cả dự án</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 5).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
