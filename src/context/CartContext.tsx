import { createContext, ReactNode, useEffect, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import MenuItem from "../types/menuItems";

interface CartContextType {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
  cart: MenuItem[];
  setCart: (cart: MenuItem[]) => void;
  handleOpenMenu: () => void;
  handleDeleteItemCart: (id: number | string) => void;
  handleAddToCart: (item: MenuItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function CartProvider({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [cart, setCart] = useState<MenuItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(
    function () {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    [cart]
  );

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  function handleDeleteItemCart(id: number | string) {
    setCart((value) => value.filter((item) => item.id !== id));
    toast.success(`Data Berhasil Anda Hapus`, {
      position: "top-center",
      transition: Slide,
      theme: "colored",
      autoClose: 2000,
    });
  }

  function handleAddToCart(item: MenuItem) {
    const existData = cart.find((cartItem) => cartItem.id === item.id);
    if (!existData) {
      setCart((cart) => [...cart, item]);
      toast.success("Data Berhasil Ditambahkan", {
        position: "top-center",
        transition: Slide,
        theme: "colored",
        autoClose: 2000,
      });
      return;
    }

    if (existData) {
      toast.error("Data Ini Sudah Anda Checkout Sebelumnya", {
        position: "top-center",
        transition: Slide,
        theme: "colored",
        autoClose: 2000,
      });
      return;
    }
  }

  return (
    <CartContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        cart,
        setCart,
        handleOpenMenu,
        handleDeleteItemCart,
        handleAddToCart,
      }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
