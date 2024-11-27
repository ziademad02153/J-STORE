import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[600px] h-[100svh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="JAGUAR Fashion"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full container-custom px-4 sm:px-6">
        <div className="h-full flex flex-col justify-center items-center max-w-2xl mx-auto pt-16 sm:pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 text-center leading-tight
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            JAGUAR
          </h1>
          <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 font-light text-center max-w-lg
            drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
            <a
              href="#products"
              className="px-6 py-3 bg-white text-black hover:bg-black hover:text-white
                transition-colors duration-300 rounded-full font-medium
                flex items-center justify-center gap-2 min-w-[160px]"
            >
              {t('hero.shop')}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-black/20 backdrop-blur-sm border border-white/50
                text-white hover:bg-white hover:text-black transition-colors duration-300
                rounded-full font-medium text-center min-w-[160px]"
            >
              {t('hero.contact')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-[1px] h-16 bg-white/30 animate-pulse" />
      </div>
    </div>
  );
}