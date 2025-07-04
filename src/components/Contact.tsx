import React from 'react';
import { MapPin, Phone, Mail, Send, User, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح. سنتواصل معك قريباً!');
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            اتصل بنا
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            لا تترددوا في التواصل معي لأي استفسار أو طلب خاص
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-right">
                معلومات الاتصال
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">العنوان</p>
                    <p className="text-gray-600">فاس، المغرب</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">الهاتف</p>
                    <a 
                      href="tel:+212613516173"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      +212 613-516173
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">البريد الإلكتروني</p>
                    <p className="text-gray-600">أو استخدم النموذج المجاور</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4 text-right">
                ساعات العمل
              </h4>
              <div className="space-y-2 text-right">
                <p className="text-gray-600">
                  <span className="font-medium">الإثنين - الجمعة:</span> 9:00 - 19:00
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">السبت:</span> 9:00 - 17:00
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">الأحد:</span> بالموعد المسبق
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-right">
              أرسل رسالة
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-right">
                  الاسم الكامل *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-right"
                    placeholder="أدخل اسمك الكامل"
                  />
                  <User className="absolute right-4 top-3.5 text-gray-400" size={20} />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-right">
                  رقم الهاتف *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-right"
                    placeholder="أدخل رقم هاتفك"
                  />
                  <Phone className="absolute right-4 top-3.5 text-gray-400" size={20} />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-right">
                  الرسالة *
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-right resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                  <MessageCircle className="absolute right-4 top-3.5 text-gray-400" size={20} />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Send size={20} />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;