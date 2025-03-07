import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./page/MainLayout";
import menuItems from "./data/menuItems";
import CheckoutDetails from "./parts/CheckoutDetails";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route
              index
              path="/"
              element={<MainLayout dataMenu={menuItems} />}
            />
            <Route path="checkout-details/:id" element={<CheckoutDetails />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
