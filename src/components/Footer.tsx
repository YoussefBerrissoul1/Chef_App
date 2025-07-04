import React from 'react';
import { Heart, MapPin, Phone, ChefHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-2 space-x-reverse mb-4">
              <ChefHat className="text-amber-400" size={24} />
              <h3 className="text-xl font-bold">فاطمة ديدوح</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              معلمة في الحلويات التقليدية المغربية
              <br />
              نصنع الحلويات بحب وإتقان
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-amber-400">
              معلومات الاتصال
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <MapPin className="text-amber-400" size={16} />
                <span className="text-gray-300">فاس، المغرب</span>
              </div>
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <Phone className="text-amber-400" size={16} />
                <a 
                  href="tel:+212613516173"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  +212 613-516173
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-amber-400">
              روابط سريعة
            </h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-amber-400 transition-colors">
                الرئيسية
              </a>
              <a href="#gallery" className="block text-gray-300 hover:text-amber-400 transition-colors">
                معرض الصور
              </a>
              <a href="#social" className="block text-gray-300 hover:text-amber-400 transition-colors">
                تابعونا
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-amber-400 transition-colors">
                اتصل بنا
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
            <Heart className="text-rose-400 fill-current" size={16} />
            <p className="text-gray-300">
              شكراً لكم على ثقتكم، نتطلع لخدمتكم دائماً
            </p>
            <Heart className="text-rose-400 fill-current" size={16} />
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 فاطمة ديدوح - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;