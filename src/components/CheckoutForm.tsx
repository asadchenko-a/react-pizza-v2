import { IMaskInput } from "react-imask";
import React, { useState } from "react";

type CheckoutFormProps = {
  onSubmit: (data: {
    name: string;
    phone: string;
    address: string;
    comment?: string;
  }) => void;
  loading: boolean;
};

const CheckoutForm = ({ onSubmit, loading }: CheckoutFormProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    comment: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name) newErrors.name = "Имя обязательно";
    const phoneDigits = form.phone.replace(/\D/g, "");

    if (!phoneDigits || phoneDigits.length < 11 || phoneDigits.length > 11) {
      newErrors.phone = "Неверный телефон";
    }
    if (!form.address) newErrors.address = "Адрес обязателен";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(form);
    }
  };

  return (
    <form className="checkout__form" onSubmit={handleSubmit}>
      <div className="checkout__group">
        <label>Имя:</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.name && <span className="checkout__error">{errors.name}</span>}
      </div>
      <div className="checkout__group">
        <label>Телефон:</label>
        <IMaskInput
          mask="+7 (000) 000-00-00"
          name="phone"
          value={form.phone}
          onAccept={(value) => setForm({ ...form, phone: value })}
          placeholder="+7 (***) ***-**-**"
          disabled={loading}
          className="checkout__input"
        />
        {errors.phone && (
          <span className="checkout__error">{errors.phone}</span>
        )}
      </div>
      <div className="checkout__group">
        <label>Адрес:</label>
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.address && (
          <span className="checkout__error">{errors.address}</span>
        )}
      </div>
      <div className="checkout__group">
        <label>Комментарий:</label>
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <button
        className="button checkout__button"
        type="submit"
        disabled={loading}
      >
        {loading ? "Оплата..." : "Оплатить"}
      </button>
    </form>
  );
};

export default CheckoutForm;
