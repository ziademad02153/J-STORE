import { X, Minus, Plus, ShoppingBag, Truck, Check } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useState } from 'react';

interface DeliveryInfo {
  name: string;
  phone: string;
  address: string;
  city: string;
}

export default function Cart() {
  const { items, isCartOpen, toggleCart, removeItem, updateQuantity } = useCartStore();
  const [checkoutStep, setCheckoutStep] = useState<number>(1);
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    name: '',
    phone: '',
    address: '',
    city: ''
  });

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(' ج.م', ''));
    return sum + price * item.quantity;
  }, 0);

  const handleDeliveryInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryInfo({
      ...deliveryInfo,
      [e.target.name]: e.target.value
    });
  };

  const isDeliveryInfoComplete = () => {
    return (
      deliveryInfo.name.trim() !== '' &&
      deliveryInfo.phone.trim() !== '' &&
      deliveryInfo.address.trim() !== '' &&
      deliveryInfo.city.trim() !== ''
    );
  };

  const handleCheckout = () => {
    const orderDetails = items
      .map((item) => `${item.name} (${item.quantity}x)`)
      .join('\n');
    const message = `
🚗 طلب جديد من متجر جاكوار
---------------------------
الطلبات:
${orderDetails}
---------------------------
معلومات التوصيل:
الاسم: ${deliveryInfo.name}
الهاتف: ${deliveryInfo.phone}
العنوان: ${deliveryInfo.address}
المدينة: ${deliveryInfo.city}
---------------------------
طريقة الدفع: الدفع عند الاستلام
الإجمالي: ${total} ج.م
    `;
    window.open(
      `https://wa.me/201001375582?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (!isCartOpen) return null;

  const renderStep = () => {
    switch (checkoutStep) {
      case 1:
        return (
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
                <ShoppingBag className="h-16 w-16 mb-4" />
                <p className="text-lg">سلة التسوق فارغة</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 space-x-reverse bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.price}</p>
                      <div className="flex items-center space-x-2 space-x-reverse mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                        >
                          <Minus className="h-4 w-4 dark:text-white" />
                        </button>
                        <span className="dark:text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                        >
                          <Plus className="h-4 w-4 dark:text-white" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
                    >
                      <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">معلومات التوصيل</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم الكامل"
                  value={deliveryInfo.name}
                  onChange={handleDeliveryInfoChange}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="رقم الهاتف"
                  value={deliveryInfo.phone}
                  onChange={handleDeliveryInfoChange}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="العنوان التفصيلي"
                  value={deliveryInfo.address}
                  onChange={handleDeliveryInfoChange}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="المدينة"
                  value={deliveryInfo.city}
                  onChange={handleDeliveryInfoChange}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">طريقة الدفع</h3>
              <div className="space-y-4">
                <div className="w-full p-4 border dark:border-gray-700 rounded-lg flex items-center gap-3 bg-gray-50 dark:bg-gray-800">
                  <Check className="h-5 w-5 text-black dark:text-white" />
                  <Truck className="h-5 w-5 text-black dark:text-white" />
                  <span className="text-gray-900 dark:text-white">الدفع عند الاستلام</span>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    سيتم الدفع نقداً عند استلام الطلب
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">ملخص الطلب</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white">المنتجات:</h4>
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between py-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {item.name} (×{item.quantity})
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {parseFloat(item.price.replace(' ج.م', '')) * item.quantity} ج.م
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white">معلومات التوصيل:</h4>
                  <p className="text-gray-700 dark:text-gray-300">الاسم: {deliveryInfo.name}</p>
                  <p className="text-gray-700 dark:text-gray-300">الهاتف: {deliveryInfo.phone}</p>
                  <p className="text-gray-700 dark:text-gray-300">العنوان: {deliveryInfo.address}</p>
                  <p className="text-gray-700 dark:text-gray-300">المدينة: {deliveryInfo.city}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white">طريقة الدفع:</h4>
                  <p className="text-gray-700 dark:text-gray-300">الدفع عند الاستلام</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50">
      <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b dark:border-gray-800">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                {checkoutStep === 1 && <ShoppingBag className="h-5 w-5" />}
                {checkoutStep === 2 && <Truck className="h-5 w-5" />}
                {checkoutStep === 3 && <Check className="h-5 w-5" />}
                {checkoutStep === 4 && <Check className="h-5 w-5" />}
                {checkoutStep === 1 && 'سلة التسوق'}
                {checkoutStep === 2 && 'معلومات التوصيل'}
                {checkoutStep === 3 && 'طريقة الدفع'}
                {checkoutStep === 4 && 'ملخص الطلب'}
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            <div className="flex justify-between mt-4">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-2 flex-1 mx-1 rounded ${
                    step <= checkoutStep ? 'bg-black dark:bg-white' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {renderStep()}

          {items.length > 0 && (
            <div className="border-t dark:border-gray-800 p-4 bg-white dark:bg-gray-900 mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 dark:text-gray-300">الإجمالي:</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  {total.toFixed(2)} ج.م
                </span>
              </div>
              {checkoutStep < 4 ? (
                <button
                  onClick={() => setCheckoutStep((prev) => prev + 1)}
                  disabled={checkoutStep === 2 && !isDeliveryInfoComplete()}
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  متابعة
                </button>
              ) : (
                <button
                  onClick={handleCheckout}
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="h-5 w-5" />
                  إتمام الطلب عبر واتساب
                </button>
              )}
              {checkoutStep > 1 && (
                <button
                  onClick={() => setCheckoutStep((prev) => prev - 1)}
                  className="w-full mt-2 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  رجوع
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}