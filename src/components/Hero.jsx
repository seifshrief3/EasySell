import React from "react";
import { ArrowLeft, ShoppingBag, CheckCircle } from "lucide-react";
// استدعاء ملف الـ Chart
import DashboardPreview from "./DashboardPreview";

const Hero = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      dir="rtl"
      className="relative bg-white pt-32 pb-12 lg:pt-40 lg:pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* --- الجانب الأيمن: النصوص --- */}
          <div className="w-full lg:w-1/2 text-center lg:text-right z-10">
            {/* الشارة العلوية */}
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              الحل الأمثل للبيع أونلاين
            </div>

            {/* العنوان الرئيسي */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              حوّل تجارتك من رسايل <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-gray-600 to-black/40">
                لمتجر إلكتروني احترافي
              </span>
            </h1>

            {/* الوصف */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              كفاية تضيع وقت في الرد على "بكام؟" و "متاح؟". مع Easy Sell، امتلك
              متجرك الخاص، نظم طلباتك، وشوف إحصائياتك بتتحرك قدام عينك في لحظات.
            </p>

            {/* الأزرار */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="https://wa.me/+201142900845"
                target="_blank"
                className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                ابدأ متجرك الآن
                <ArrowLeft size={20} />
              </a>
              <a
                onClick={() => handleScroll("works")}
                className="w-full sm:w-auto cursor-pointer bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition flex items-center justify-center gap-2"
              >
                <ShoppingBag size={20} />
                شاهد اعمالنا السابقة
              </a>
            </div>

            {/* مميزات سريعة */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" />
                <span>لوحة تحكم بالعربي</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" />
                <span>دعم فني 24/7</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" />
                <span>تقارير مبيعات ذكية</span>
              </div>
            </div>
          </div>

          {/* --- الجانب الأيسر: الـ Chart --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            {/* خلفية ضبابية جمالية (Blur Blobs) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-60 -z-10"></div>

            {/* استدعاء مكون لوحة التحكم */}
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
