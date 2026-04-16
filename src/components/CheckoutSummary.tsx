import { CartItem } from "../redux/cart/types";

type Props = {
  items: CartItem[];
  totalPrice: number;
};

const CheckoutSummary = ({ items, totalPrice }: Props) => {
  return (
    <div className="checkout__summary">
      <h2>Состав заказа</h2>
      <ul>
        {items.map((item) => (
          <li className="checkout__item" key={item.id}>
            {item.title} × {item.count} — {item.price * item.count} ₽
          </li>
        ))}
      </ul>
      <h3 className="checkout__total">Итого: {totalPrice} ₽</h3>
    </div>
  );
};

export default CheckoutSummary;
