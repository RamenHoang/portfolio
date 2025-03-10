"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
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
  {
    image: "/work/4.png",
    category: "next js",
    name: "JBMEDIA STUDIO",
    description:
      "Nền tảng truyền thông chuyên nghiệp, cung cấp dịch vụ thiết kế, sản xuất nội dung số và truyền thông thương hiệu.",
    link: "https://demo1.datamedia.com.vn/jbmedia/",
    github: "https://demo1.datamedia.com.vn/jbmedia/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Portfolio MIATHAN",
    description:
      "Website cá nhân giới thiệu dự án, kỹ năng và kinh nghiệm design UX/UI, tối ưu tốc độ và bảo mật.",
    link: "miathan.com",
    github: "miathan.com",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Agency Tây Nguyên",
    description:
      "Dịch vụ marketing tổng thể, thiết kế website, quảng cáo và phát triển thương hiệu chuyên nghiệp.",
    link: "https://agencytaynguyen.com/",
    github: "https://agencytaynguyen.com/",
  },
  {
    image: "/work/5.png",
    category: "fullstack",
    name: "Portfolio MEASHAM",
    description:
      "Website cá nhân giới thiệu dự án, kỹ năng và kinh nghiệm design UX/UI, tối ưu tốc độ và bảo mật.",
    link: "https://www.awwwards.com",
    github: "https://www.awwwards.com",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
