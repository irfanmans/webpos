import { useEffect, useState } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import { FaCircleLeft } from "react-icons/fa6";
import Checkout from "./Checkout";
import IconBrand from "../ui/IconBrand";
import MenuItem from "../types/menuItems";

interface HomeProps {
  dataMenu: MenuItem[];
}

export default function Home({ dataMenu }: HomeProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [cart, setCart] = useState<MenuItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function handleDeleteItemCart(id: number | string) {
    setCart((value) => value.filter((item) => item.id !== id));
  }

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  function handleAddToCart(item: MenuItem) {
    const existData = cart.find((cartItem) => cartItem.id === item.id);

    if (existData) {
      const updateData = cart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              qty: (cartItem.qty ?? 0) + 1,
              harga:
                (cartItem.hargaAwal ?? cartItem.harga) *
                ((cartItem.qty ?? 0) + 1),
            }
          : cartItem
      );
      setCart(updateData);
    } else {
      setCart([
        ...cart,
        { ...item, qty: 1, harga: item.harga, hargaAwal: item.harga },
      ]);
    }
  }

  useEffect(
    function () {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    [cart]
  );

  const filterMenu = dataMenu.filter((item) =>
    item.nama.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <Search query={query} setQuery={setQuery} />
        {!openMenu && (
          <>
            <div className="p-2 bg-purple-500 rounded-full cursor-pointer">
              <IconBrand
                size={25}
                icon={FaCircleLeft}
                onClick={handleOpenMenu}
                className="text-white"
              />
            </div>
          </>
        )}
      </div>

      <Checkout
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        cart={cart}
        onHandleDeleteItemCart={handleDeleteItemCart}
        setCart={setCart}
      />

      <div className="py-5">
        <div className="flex justify-between items-center font-poppins">
          <h1 className="text-xl font-bold">Discover our Menu</h1>
          <span className="py-2 px-5 bg-black/10 rounded-4xl">
            {dataMenu.length} Menu
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 py-5 md:grid-cols-3 lg:grid-cols-4">
          {filterMenu.map((data) => (
            <Card
              data={data}
              key={data.id}
              onAddToCart={() => handleAddToCart(data)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
