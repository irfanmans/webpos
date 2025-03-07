import { useState } from "react";
import useCart from "../CustomHook/useCart";
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
  const [query, setQuery] = useState<string>("");

  const {
    openMenu,
    setOpenMenu,
    cart,
    setCart,
    handleOpenMenu,
    handleDeleteItemCart,
    handleAddToCart,
  } = useCart();

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
        setCart={setCart}
        onHandleDeleteItemCart={handleDeleteItemCart}
      />

      <div className="py-5">
        <div className="flex justify-between items-center font-poppins">
          <h1 className="text-xl font-bold">Discover our Menu</h1>
          <span className="py-2 px-5 bg-black/10 rounded-2xl">
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
