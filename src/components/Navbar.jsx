import React, { useState } from "react";
// تأكد أن المسار صحيح، يفضل وضع الصور في folder داخل src اسمه assets
import logo from "../../public/EasySell-removebg-preview.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // يقفل الموبايل مينو بعد الضغط
    }
  };

  return (
    <nav
      dir="rtl"
      className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-lg shadow-sm z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo Section */}
        <div
          className="cursor-pointer flex items-center"
          onClick={() => handleScroll("home")}
        >
          <img
            src={logo}
            alt="Easy Sell Logo"
            className="h-16 w-auto object-contain scale-[2.1] transition-transform duration-300"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          <li
            className="cursor-pointer hover:text-gray-500 hover:-translate-y-0.5 transition duration-200"
            onClick={() => handleScroll("home")}
          >
            الرئيسية
          </li>
          <li
            className="cursor-pointer hover:text-gray-500 hover:-translate-y-0.5 transition duration-200"
            onClick={() => handleScroll("about")}
          >
            من نحن
          </li>
          <li
            className="cursor-pointer hover:text-gray-500 hover:-translate-y-0.5 transition duration-200"
            onClick={() => handleScroll("works")}
          >
            أعمال سابقة
          </li>
          <li
            className="cursor-pointer hover:text-gray-500 hover:-translate-y-0.5 transition duration-200"
            onClick={() => handleScroll("pricing")}
          >
            الأسعار
          </li>
          <li>
            <a
              href="https://wa.me/+201142900845"
              target="_blank"
              onClick={() => handleScroll("contact")}
              className="bg-black text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
            >
              ابدأ الآن
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-gray-600 text-3xl cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-lg w-full text-gray-700 font-medium space-y-4 py-4">
          <li
            className="cursor-pointer hover:text-indigo-600 transition"
            onClick={() => handleScroll("home")}
          >
            الرئيسية
          </li>
          <li
            className="cursor-pointer hover:text-indigo-600 transition"
            onClick={() => handleScroll("about")}
          >
            من نحن
          </li>
          <li
            className="cursor-pointer hover:text-indigo-600 transition"
            onClick={() => handleScroll("works")}
          >
            أعمال سابقة
          </li>
          <li
            className="cursor-pointer hover:text-indigo-600 transition"
            onClick={() => handleScroll("pricing")}
          >
            الأسعار
          </li>
          <li>
            <a
              href="https://wa.me/+201142900845"
              target="_blank"
              onClick={() => handleScroll("contact")}
              className="bg-black text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
            >
              ابدأ الآن
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
