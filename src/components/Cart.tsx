import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function Cart() {
  const { items, isCartOpen, toggleCart, removeItem, updateQuantity } = useCartStore();

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(' ج.م', ''));
    return sum + price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    const orderDetails = items
      .map((item) => `${item.name} (${item.quantity}x)`)
      .join('\n');
    const message = `طلب جديد:\n${orderDetails}\nالإجمالي: ${total} ج.م`;
    window.open(
      `https://wa.me/201001375582?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                سلة التسوق
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Cart Items */}
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

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">الإجمالي:</span>
                <span className="text-xl font-bold">{total} ج.م</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="h-5 w-5" />
                إتمام الطلب عبر واتساب
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}