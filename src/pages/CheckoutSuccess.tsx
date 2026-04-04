import { useParams, Link } from "react-router-dom";

const CheckoutSuccess = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container">
      <h1>Спасибо за заказ!</h1>
      <p>Номер вашего заказа: #{id}</p>
      <Link to="/">На главную</Link>
      <Link to="/cart">В корзину</Link>
    </div>
  );
};

export default CheckoutSuccess;
