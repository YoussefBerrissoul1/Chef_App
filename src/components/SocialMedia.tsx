import React from 'react';
import { Facebook, Instagram, Video, ExternalLink } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    {
      platform: 'Facebook',
      username: 'Couisin Chaf',
      url: 'https://www.facebook.com/share/1C1Bzg5SLK/?mibextid=wwXIfr',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      platform: 'Instagram',
      username: '@couisin_chaf',
      url: 'https://www.instagram.com/couisin_chaf?igsh=MXNtdjU4eHZtcHJ1NA%3D%3D&utm_source=qr',
      icon: Instagram,
      color: 'from-pink-600 to-purple-600',
      hoverColor: 'hover:from-pink-700 hover:to-purple-700'
    },
    {
      platform: 'TikTok',
      username: '@fatimaddh7',
      url: 'https://www.tiktok.com/@fatimaddh7?_t=ZS-8xklArmbify&_r=1',
      icon: Video,
      color: 'from-gray-800 to-gray-900',
      hoverColor: 'hover:from-gray-900 hover:to-black'
    }
  ];

  return (
    <section id="social" className="py-20 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            تابعونا على مواقع التواصل الاجتماعي
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            تابعوا آخر إبداعاتي وتعلموا طرق تحضير الحلويات التقليدية المغربية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} ${social.hoverColor} mb-6 transition-all duration-300 group-hover:scale-110`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {social.platform}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {social.username}
                </p>
                
                <div className="flex items-center justify-center space-x-2 space-x-reverse text-gray-500 group-hover:text-gray-700 transition-colors">
                  <ExternalLink size={16} />
                  <span className="text-sm">زيارة الصفحة</span>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed">
              🌟 لا تفوتوا فرصة متابعة آخر الوصفات والنصائح المفيدة في عالم الحلويات المغربية التقليدية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;