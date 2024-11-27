import { X, Minus, Plus, ShoppingBag, Truck, CreditCard, Check } from 'lucide-react';
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
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card'>('cash');

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
طريقة الدفع: ${paymentMethod === 'cash' ? 'كاش عند الاستلام' : 'بطاقة ائتمان'}
الإجمالي: ${total} ج.م
    `;
    window.open(
      `https://wa.me/201001375582?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const isDeliveryInfoComplete = () => {
    return Object.values(deliveryInfo).every(value => value.trim() !== '');
  };

  if (!isCartOpen) return null;

  const renderStep = () => {
    switch(checkoutStep) {
      case 1:
        return (
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <ShoppingBag className="h-16 w-16 mb-4" />
                <p className="text-lg">سلة التسوق فارغة</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-1 hover:bg-gray-200 rounded transition-colors disabled:opacity-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <X className="h-5 w-5" />
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
              <h3 className="text-lg font-semibold mb-4">معلومات التوصيل</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم الكامل"
                  value={deliveryInfo.name}
                  onChange={handleDeliveryInfoChange}
                  className="w-full p-2 border rounded-lg"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="رقم الهاتف"
                  value={deliveryInfo.phone}
                  onChange={handleDeliveryInfoChange}
                  className="w-full p-2 border rounded-lg"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="العنوان التفصيلي"
                  value={deliveryInfo.address}
                  onChange={handleDeliveryInfoChange}
                  className="w-full p-2 border rounded-lg"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="المدينة"
                  value={deliveryInfo.city}
                  onChange={handleDeliveryInfoChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">طريقة الدفع</h3>
              <div className="space-y-4">
                <button
                  onClick={() => setPaymentMethod('cash')}
                  className={`w-full p-4 border rounded-lg flex items-center gap-3 ${
                    paymentMethod === 'cash' ? 'border-black bg-gray-50' : ''
                  }`}
                >
                  {paymentMethod === 'cash' && <Check className="h-5 w-5" />}
                  <span>الدفع عند الاستلام</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full p-4 border rounded-lg flex items-center gap-3 ${
                    paymentMethod === 'card' ? 'border-black bg-gray-50' : ''
                  }`}
                >
                  {paymentMethod === 'card' && <Check className="h-5 w-5" />}
                  <span>بطاقة ائتمان</span>
                </button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">ملخص الطلب</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">المنتجات:</h4>
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between py-1">
                      <span>{item.name} (×{item.quantity})</span>
                      <span>{parseFloat(item.price.replace(' ج.م', '')) * item.quantity} ج.م</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">معلومات التوصيل:</h4>
                  <p>الاسم: {deliveryInfo.name}</p>
                  <p>الهاتف: {deliveryInfo.phone}</p>
                  <p>العنوان: {deliveryInfo.address}</p>
                  <p>المدينة: {deliveryInfo.city}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">طريقة الدفع:</h4>
                  <p>{paymentMethod === 'cash' ? 'الدفع عند الاستلام' : 'بطاقة ائتمان'}</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold flex items-center gap-2">
                {checkoutStep === 1 && <ShoppingBag className="h-5 w-5" />}
                {checkoutStep === 2 && <Truck className="h-5 w-5" />}
                {checkoutStep === 3 && <CreditCard className="h-5 w-5" />}
                {checkoutStep === 4 && <Check className="h-5 w-5" />}
                {checkoutStep === 1 && 'سلة التسوق'}
                {checkoutStep === 2 && 'معلومات التوصيل'}
                {checkoutStep === 3 && 'طريقة الدفع'}
                {checkoutStep === 4 && 'ملخص الطلب'}
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            {/* Progress Bar */}
            <div className="flex justify-between mt-4">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-2 flex-1 mx-1 rounded ${
                    step <= checkoutStep ? 'bg-black' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {renderStep()}

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">الإجمالي:</span>
                <span className="text-xl font-bold">{total} ج.م</span>
              </div>
              {checkoutStep < 4 ? (
                <button
                  onClick={() => setCheckoutStep(prev => prev + 1)}
                  disabled={checkoutStep === 2 && !isDeliveryInfoComplete()}
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  متابعة
                </button>
              ) : (
                <button
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="h-5 w-5" />
                  إتمام الطلب عبر واتساب
                </button>
              )}
              {checkoutStep > 1 && (
                <button
                  onClick={() => setCheckoutStep(prev => prev - 1)}
                  className="w-full mt-2 py-3 text-gray-600 hover:text-gray-800 transition-colors"
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