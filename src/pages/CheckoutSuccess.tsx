import { useParams, Link } from "react-router-dom";

const CheckoutSuccess = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>Спасибо за заказ! 🎉</h2>
        <p>
          Ваш заказ успешно оформлен.
          <br />
          Номер заказа: <b>#{id}</b>
        </p>

        <div className="cart__bottom-buttons">
          <Link
            to="/"
            className="button button--outline button--add go-back-btn"
          >
            <span>На главную</span>
          </Link>

          <Link to="/cart" className="button pay-btn button--outline">
            <span>В корзину</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
