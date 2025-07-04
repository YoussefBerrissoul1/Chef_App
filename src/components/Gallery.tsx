import React, { useState, useEffect } from 'react';
import { Play, Camera, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const galleryItems = [
    { id: 1, type: 'image', src: '/images/1.jpg', title: 'حلوى مغربية أصيلة' },
    { id: 2, type: 'image', src: '/images/2.jpg', title: 'كعك العيد' },
    { id: 3, type: 'image', src: '/images/3.jpg', title: 'بقلاوة شهية' },
    { id: 4, type: 'image', src: '/images/4.jpg', title: 'غريبة باللوز' },
    { id: 5, type: 'image', src: '/images/5.jpg', title: 'حلوى العسل' },
    { id: 6, type: 'image', src: '/images/6.jpg', title: 'شباكية رمضان' },
    { id: 7, type: 'image', src: '/images/7.jpg', title: 'معمول بالتمر' },
    { id: 8, type: 'image', src: '/images/8.jpg', title: 'حلوى اللوز' },
    { id: 9, type: 'image', src: '/images/9.jpg', title: 'قطائف محشوة' },
    { id: 10, type: 'image', src: '/images/10.jpg', title: 'كنافة بالقشطة' },
    { id: 11, type: 'image', src: '/images/11.jpg', title: 'حلوى السمسم' },
    { id: 12, type: 'image', src: '/images/12.jpg', title: 'معجنات حلوة' },
    { id: 13, type: 'image', src: '/images/13.jpg', title: 'حلوى الجوز' },
    { id: 14, type: 'image', src: '/images/14.jpg', title: 'تشكيلة متنوعة' },
  ];

  // Quintuple les images pour une boucle parfaite sans espaces vides
  const duplicatedItems = [...galleryItems, ...galleryItems, ...galleryItems, ...galleryItems, ...galleryItems];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            معرض الصور والفيديوهات
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            اكتشفوا مجموعة من أجمل إبداعاتي في عالم الحلويات التقليدية المغربية
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={togglePlayPause}
              className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Play className={`w-5 h-5 transition-transform ${isPlaying ? 'rotate-0' : 'rotate-90'}`} />
              {isPlaying ? 'إيقاف' : 'تشغيل'} العرض
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl p-6">
          <div className="overflow-hidden">
            <div 
              className={`flex space-x-6 ${isPlaying ? 'animate-scroll' : 'animate-pause'}`}
              style={{
                animationDuration: '60s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite'
              }}
            >
              {duplicatedItems.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`} 
                  className="gallery-item group relative flex-shrink-0 cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative w-72 h-64 bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-white/80 text-sm">اضغط للتكبير</span>
                          <ZoomIn className="w-5 h-5 text-white/80" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
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

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] animate-zoom-in">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-white font-semibold text-xl">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .animate-pause {
          animation-play-state: paused;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
        
        .animate-zoom-in {
          animation: zoom-in 0.3s ease-out;
        }
        
        .gallery-item {
          position: relative;
        }
        
        .gallery-item::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #f43f5e, #f59e0b, #ec4899, #f97316);
          border-radius: 14px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .gallery-item:hover::before {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Gallery;