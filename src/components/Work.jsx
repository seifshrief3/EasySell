import React from "react";
import { ExternalLink, ShoppingBag, ArrowUpRight } from "lucide-react";

// صورة افتراضية لموقع فاشون (يفضل تاخد سكرين شوت حقيقية من الموقع وتحطها)
const projectImage = "https://files.easy-orders.net/1762273580837103697.png";

// تكرار المشروع عشان نعمل تأثير الشريط المتحرك
const projects = [
  {
    id: 1,
    name: "Patra Fashion",
    desc: "متجر متكامل للأزياء الرجالية، تم تحويله من البيع عبر الرسائل إلى متجر إلكتروني منظم.",
    link: "https://patrafashion.com",
    category: "أزياء وموضة",
  },
  {
    id: 2,
    name: "Patra Fashion",
    desc: "متجر متكامل للأزياء الرجالية، تم تحويله من البيع عبر الرسائل إلى متجر إلكتروني منظم.",
    link: "https://patrafashion.com",
    category: "أزياء وموضة",
  },
  {
    id: 3,
    name: "Patra Fashion",
    desc: "متجر متكامل للأزياء الرجالية، تم تحويله من البيع عبر الرسائل إلى متجر إلكتروني منظم.",
    link: "https://patrafashion.com",
    category: "أزياء وموضة",
  },
  {
    id: 4,
    name: "Patra Fashion",
    desc: "متجر متكامل للأزياء الرجالية، تم تحويله من البيع عبر الرسائل إلى متجر إلكتروني منظم.",
    link: "https://patrafashion.com",
    category: "أزياء وموضة",
  },
];

const Work = () => {
  return (
    <section
      id="works"
      dir="rtl"
      className="py-20 bg-white overflow-hidden relative"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-gray-600 font-semibold tracking-wide uppercase mb-3">
          أعمالنا
        </h2>
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
          شركاء نجاح وثقوا في <span className="text-gray-600">Easy Sell</span>
        </h3>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Gradients to fade edges (تأثير ضبابي على الجوانب) */}
        <div className="absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent"></div>
        <div className="absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent"></div>

        {/* The Moving Track */}
        {/* group-hover:paused -> عشان لما العميل يقف بالماوس الشريط يقف يتفرج براحته */}
        <div className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused] py-4">
          {/* بنكرر القائمة مرتين عشان الحركة تبان لا نهائية */}
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[400px] flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={projectImage}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <ShoppingBag size={12} />
                  {project.category}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 text-right">
                <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-between">
                  {project.name}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition"
                  >
                    <ExternalLink size={20} />
                  </a>
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-600 hover:text-white transition-all duration-300"
                >
                  شاهد المتجر
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation Injection */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); } /* 50% عشان احنا كررنا الارراي مرتين، ولأننا RTL بنتحرك بالموجب */
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Work;
