import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div id="contact" className="relative bg-gradient-to-b from-gray-900 to-black text-white py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-400">{t('contact.subtitle')}</p>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* WhatsApp */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <a 
              href="https://wa.me/201001375582" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex flex-col items-center p-6 bg-black rounded-2xl leading-none"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-0.5 mb-4 transform group-hover:scale-110 transition-transform duration-200">
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.495 0 .16 5.334.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.693 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.181-1.237-6.167-3.489-8.413z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-200">{t('contact.whatsapp')}</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-200">+201001375582</p>
            </a>
          </div>

          {/* Instagram */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-500 to-orange-400 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <a 
              href="https://www.instagram.com/jaguarr.eg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex flex-col items-center p-6 bg-black rounded-2xl leading-none"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 p-0.5 mb-4 transform group-hover:scale-110 transition-transform duration-200">
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="url(#instagram-gradient)" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#833AB4"/>
                        <stop offset="50%" stopColor="#FD1D1D"/>
                        <stop offset="100%" stopColor="#FCB045"/>
                      </linearGradient>
                    </defs>
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-200">Instagram</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-200">@jaguarr.eg</p>
            </a>
          </div>

          {/* Facebook */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <a 
              href="https://www.facebook.com/jaguarstore00" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex flex-col items-center p-6 bg-black rounded-2xl leading-none"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-0.5 mb-4 transform group-hover:scale-110 transition-transform duration-200">
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">Facebook</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-200">@jaguarstore00</p>
            </a>
          </div>

          {/* Location */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=بنها+كلية+التجارة"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col items-center p-6 bg-black rounded-2xl leading-none"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-red-600 p-0.5 mb-4 transform group-hover:scale-110 transition-transform duration-200">
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                  <MapPin className="w-8 h-8 text-red-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-200">{t('contact.location')}</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-200">بنها - كلية التجارة</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}