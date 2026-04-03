import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout";

import CheckoutSuccess from "./pages/CheckoutSuccess";

const Cart = lazy(() => import(/*webpackChunkName:"Cart"*/ "./pages/Cart"));
const FullPizza = lazy(
  () => import(/*webpackChunkName:"FullPizza"*/ "./pages/FullPizza"),
);
const NotFound = lazy(
  () => import(/*webpackChunkName:"NotFound"*/ "./pages/NotFound"),
);

const Checkout = lazy(
  () => import(/*webpackChunkName:"Checkout"*/ "./pages/Checkout"),
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка ...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="checkout"
          element={
            <Suspense fallback={<div>Загрузка оформления заказа...</div>}>
              <Checkout />
            </Suspense>
          }
        />

        <Route path="checkout/success/:id" element={<CheckoutSuccess />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка ...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
