import { useTranslation } from 'react-i18next';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src="/logo.png" alt="Jaguar Store" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {t('storeName')}
            </span>
          </div>

          {/* Contact Info */}
          <div className="w-full max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {t('contactUs')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 group">
                <div className="p-3 bg-white dark:bg-gray-600 rounded-full shadow-sm group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {t('email')}
                  </span>
                  <a 
                    href="mailto:contact@jaguarstore.com" 
                    className="text-base text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300"
                  >
                    contact@jaguarstore.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 group">
                <div className="p-3 bg-white dark:bg-gray-600 rounded-full shadow-sm group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {t('phone')}
                  </span>
                  <a 
                    href="tel:+201234567890" 
                    className="text-base text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300"
                  >
                    +20 123 456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}