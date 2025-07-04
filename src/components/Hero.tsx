import React from 'react';
import { ChefHat, Star, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 pt-20 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right space-y-6 animate-fade-in">
            <div className="flex items-center justify-center lg:justify-end space-x-2 space-x-reverse">
              <ChefHat className="text-amber-600" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                فاطمة ديدوح
              </h1>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl text-amber-700 font-semibold">
                معلمة في الحلويات التقليدية المغربية
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                مرحباً بكم في عالم الحلويات التقليدية المغربية الأصيلة. أنا فاطمة ديدوح، 
                أتقن صناعة الحلويات المغربية التقليدية بخبرة تمتد لسنوات طويلة. 
                أقدم لكم أجمل وألذ الحلويات المغربية المصنوعة بحب وإتقان.
              </p>
              
              <div className="flex items-center justify-center lg:justify-end space-x-6 space-x-reverse">
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="text-gray-600 font-medium">خبرة واسعة</span>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Heart className="text-rose-500 fill-current" size={20} />
                  <span className="text-gray-600 font-medium">صنع بحب</span>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <a
                href="#gallery"
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                اكتشف أعمالي
              </a>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-amber-200 to-rose-200 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-rose-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <ChefHat className="text-white mx-auto" size={80} />
                  <p className="text-white text-lg font-semibold">
                    الحلويات التقليدية المغربية
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-300 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-300 rounded-full opacity-50 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;