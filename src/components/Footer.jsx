import React from "react";
import logo from "../../public/EasySell-removebg-preview.png";

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-black/50 py-8 border-t border-gray-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* اللوجو (تم استخدام فلتر لجعله أبيض ليناسب الخلفية الداكنة) */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Easy Sell Logo"
            className="h-14 w-auto brightness-0 scale-[2.1] opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* حقوق الملكية */}
        <p className="text-white text-sm font-medium">
          © {new Date().getFullYear()} Easy Sell. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
