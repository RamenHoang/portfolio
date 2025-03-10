"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, PhoneCall, ArrowRightIcon, MessageSquare } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success("Cảm ơn bạn đã liên hệ!");
        setFormData({ name: "", email: "", message: "" }); // Clear form input
      } else {
        toast.error("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
      }
    } catch (error) {
      toast.error("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        {/* input */}
        <div className="relative flex items-center">
          <Input type="text" id="name" placeholder="Họ Và Tên" value={formData.name} onChange={handleChange} />
          <User className="absolute right-6" size={20} />
        </div>
        {/* input */}
        <div className="relative flex items-center">
          <Input type="email" id="email" placeholder="Số điện thoại" value={formData.email} onChange={handleChange} />
          <PhoneCall className="absolute right-6" size={20} />
        </div>
        {/* textarea */}
        <div className="relative flex items-center">
          <Textarea id="message" placeholder="Nhập tin nhắn của bạn tại đây." value={formData.message} onChange={handleChange} />
          <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>
        <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
          Gửi Ngay
          <ArrowRightIcon size={20} />
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
