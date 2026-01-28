import React from "react";
import { Target, Users, Zap, ShieldCheck } from "lucide-react";

// صورة فريق عمل أو شخص بيشتغل بتركيز (تعطي طابع بشري للموقع)
const aboutImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";

const About = () => {
  return (
    <section id="about" dir="rtl" className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- الجانب الأيمن: الصورة --- */}
          <div className="relative order-2 lg:order-1">
            {/* الصورة الرئيسية */}
            <div className="relative md:block hidden rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition duration-500">
              <img
                src={aboutImage}
                alt="فريق Easy Sell"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
            </div>

            {/* زخرفة خلفية (Dots) */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-dots-pattern opacity-20"></div>
          </div>

          {/* --- الجانب الأيسر: المحتوى --- */}
          <div className="order-1 lg:order-2 text-right">
            <h2 className="text-gray-600 font-semibold tracking-wide uppercase mb-3">
              من نحن؟
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              إحنا هنا عشان نسهل عليك <br />
              <span className="text-gray-600">رحلة التجارة الإلكترونية</span>
            </h3>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              بدأت فكرة{" "}
              <span className="font-bold text-gray-800">Easy Sell</span> لما
              لاحظنا إن رواد الأعمال بيضيعوا وقت كبير جداً في الرد على الرسايل
              وتنظيم الطلبات يدوياً، بدل ما يركزوا على تطوير منتجاتهم. هدفنا مش
              بس نقدملك متجر، هدفنا نكون شريك نجاحك التقني.
            </p>

            {/* قائمة المميزات (Values) */}
            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "التركيز على النتائج",
                  desc: "أدواتنا مصممة عشان تزود مبيعاتك مش مجرد شكل جمالي.",
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  icon: Zap,
                  title: "سرعة في التنفيذ",
                  desc: "تقدر تستلم متجرك كامل وجاهز للبيع في أقل من 24 ساعة.",
                  color: "bg-yellow-100 text-yellow-600",
                },
                {
                  icon: ShieldCheck,
                  title: "أمان وموثوقية",
                  desc: "بياناتك وبيانات عملائك مؤمنة بأحدث تقنيات التشفير.",
                  color: "bg-green-100 text-green-600",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className={`p-3 rounded-lg ${item.color} mt-1`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
