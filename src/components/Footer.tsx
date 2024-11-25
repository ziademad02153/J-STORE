import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center pt-4 border-t border-gray-200 dark:border-gray-700 w-full">
            &copy; {new Date().getFullYear()} {t('allRightsReserved')}
          </div>
        </div>
      </div>
    </footer>
  );
}