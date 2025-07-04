import React from 'react';
import { Play, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'حلويات تقليدية مغربية',
      description: 'مجموعة متنوعة من الحلويات التقليدية'
    },
    {
      id: 2,
      type: 'video',
      title: 'طريقة تحضير الشباكية',
      description: 'فيديو توضيحي لطريقة التحضير'
    },
    {
      id: 3,
      type: 'image',
      title: 'قرن غزال',
      description: 'حلوى تقليدية مغربية شهيرة'
    },
    {
      id: 4,
      type: 'image',
      title: 'فقاص باللوز',
      description: 'حلوى لذيذة ومقرمشة'
    },
    {
      id: 5,
      type: 'video',
      title: 'تحضير الغريبة',
      description: 'خطوات تحضير الغريبة المغربية'
    },
    {
      id: 6,
      type: 'image',
      title: 'حلويات العيد',
      description: 'تشكيلة خاصة بالمناسبات'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            معرض الصور والفيديوهات
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اكتشفوا مجموعة من أجمل إبداعاتي في عالم الحلويات التقليدية المغربية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image/Video Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-amber-200 to-rose-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 to-rose-600/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === 'image' ? (
                    <ImageIcon className="text-white group-hover:scale-110 transition-transform duration-300" size={48} />
                  ) : (
                    <Play className="text-white group-hover:scale-110 transition-transform duration-300" size={48} />
                  )}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-300">
                    {item.type === 'image' ? (
                      <ImageIcon className="text-white" size={24} />
                    ) : (
                      <Play className="text-white" size={24} />
                    )}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-right">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-right leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            المزيد من الصور والفيديوهات متوفرة على صفحاتي في مواقع التواصل الاجتماعي
          </p>
          <a
            href="#social"
            className="inline-block bg-gradient-to-r from-rose-500 to-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            تابعونا على مواقع التواصل
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;