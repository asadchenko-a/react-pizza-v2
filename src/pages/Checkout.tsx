import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../redux/cart/selectors";
import { clearItems } from "../redux/cart/slice";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutSummary from "../components/CheckoutSummary";
import { Order } from "../redux/orders/types";

const CheckoutPage = () => {
  const { items, totalPrice } = useSelector(selectCart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!loading && !orderCompleted && items.length === 0) {
      alert("Корзина пуста");
      navigate("/cart");
    }
  }, [items, loading, orderCompleted, navigate]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCheckout = (deliveryData: {
    name: string;
    phone: string;
    address: string;
    comment?: string;
  }) => {
    setLoading(true);

    // имитация async оплаты
    timerRef.current = setTimeout(() => {
      // создаём order
      const order: Order = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        items,
        totalPrice,
        delivery: deliveryData,
        status: "confirmed",
      };

      // сохраняем в localStorage
      localStorage.setItem("lastOrder", JSON.stringify(order));

      setOrderCompleted(true);

      // редирект на success
      navigate(`/checkout/success/${order.id}`);

      // очищаем корзину
      dispatch(clearItems());

      setLoading(false);
    }, 1500); // имитация оплаты
  };

  return (
    <div className="container">
      <h1 className="content__title">Оформление заказа</h1>
      <div className="checkout">
        <CheckoutForm onSubmit={handleCheckout} loading={loading} />
        <CheckoutSummary items={items} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default CheckoutPage;
