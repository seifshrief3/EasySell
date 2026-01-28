import React from "react";
// قمت بتغيير اسم المتغير لـ pricingImg عشان يكون واضح
import pricingImg from "../../public/pricing.jpeg";
import logo from "../../public/EasySell-removebg-preview.png";

const Pricing = () => {
  return (
    <section id="pricing" dir="rtl" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 1. اللوجو */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Easy Sell Logo"
            className="h-20 md:h-24 w-auto object-contain scale-[2.3] transition-transform duration-300"
          />
        </div>

        {/* 2. العنوان والوصف */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          باقات إنشاء المتاجر الإلكترونية{" "}
          <span className="text-gray-600">الاحترافية</span>
        </h2>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          اختر الباقة المناسبة لبدء مشروعك الرقمي. نوفر لك حلولاً متكاملة تشمل
          التصميم، الاستضافة، والدعم الفني بأسعار تنافسية وبدون أي عمولات خفية.
        </p>

        {/* 3. صورة الأسعار */}
        <div className="relative group">
          {/* تأثير توهج خفيف خلف الصورة (اختياري) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <img
            src={pricingImg}
            alt="قائمة أسعار باقات Easy Sell"
            className="relative w-full h-auto rounded-2xl shadow-2xl border border-gray-100 transform transition duration-500 hover:scale-[1.01]"
          />
        </div>

        {/* زرار اختياري تحت الصورة */}
        <div className="mt-10">
          <a
            href="https://wa.me/+201142900845"
            target="_blank"
            className="inline-block bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition duration-300 shadow-lg"
          >
            اطلب باقتك الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
