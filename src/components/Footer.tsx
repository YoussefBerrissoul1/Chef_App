import React from 'react';
import { Heart, MapPin, Phone, ChefHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="text-center md:text-right" dir="ltr">
            <div className="flex items-center justify-center md:justify-end gap-2 mb-4">
              <ChefHat className="text-amber-400" size={28} />
              <h3 className="text-2xl font-bold tracking-wide">فاطمة ديدوح</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              معلمة في الحلويات التقليدية المغربية<br />
              نصنع الحلويات بحب وإتقان
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-amber-400">
              معلومات الاتصال
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-center items-center gap-2">
                <MapPin className="text-amber-400" size={18} />
                <span className="text-gray-300">فاس، المغرب</span>
              </li>
              <li className="flex justify-center items-center gap-2">
                <Phone className="text-amber-400" size={18} />
                <a
                  href="tel:+212613516173"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  +212 613-516173
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4 text-amber-400">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors text-gray-300">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors text-gray-300">
                  معرض الصور
                </a>
              </li>
              <li>
                <a href="#social" className="hover:text-amber-400 transition-colors text-gray-300">
                  تابعونا
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors text-gray-300">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 flex-wrap text-sm text-gray-300">
            <Heart className="text-rose-400 fill-current" size={16} />
            شكراً لكم على ثقتكم، نتطلع لخدمتكم دائماً
            <Heart className="text-rose-400 fill-current" size={16} />
          </div>
          <p className="text-gray-500 text-xs">
            © 2024 فاطمة ديدوح - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
