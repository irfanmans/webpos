import Avatar from "../ui/Avatar";
import User from "../assets/images/user.jpeg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import IconBrand from "../ui/IconBrand";
import ImageMenu from "../ui/ImageMenu";
import Button from "../components/Button";
import MenuItem from "../types/menuItems";
import formatRupiah from "../lib/formatHarga";

interface CheckoutProps {
  openMenu?: boolean;
  setOpenMenu?: (value: boolean) => void;
  cart?: MenuItem[];
  setCart?: (e: MenuItem[]) => void;
  onHandleDeleteItemCart?: (id: string) => void;
}

export default function Checkout({
  openMenu,
  setOpenMenu,
  cart = [],
  onHandleDeleteItemCart,
  setCart,
}: CheckoutProps) {
  function handleIncrement(id: string) {
    const updateCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            qty: item.qty + 1,
            harga: item.hargaAwal * (item.qty + 1),
          }
        : item
    );
    setCart?.(updateCart);
  }

  function handleDecrement(id: string) {
    const updateCart = cart.map((item) =>
      item.id === id && item.qty > 1
        ? {
            ...item,
            qty: item.qty - 1,
            harga: item.hargaAwal * (item.qty - 1),
          }
        : item
    );
    setCart?.(updateCart);
  }

  return (
    <div
      className={`fixed top-0 right-0 w-4/5 sm:w-1/2 md:w-1/2 lg:w-1/3 h-full font-poppins bg-white shadow-lg pt-9 transition-transform duration-300 ${
        openMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="p-2 bg-purple-500 absolute left-[15px] top-11 rounded-full cursor-pointer"
        onClick={() => setOpenMenu?.(false)}
      >
        <IconBrand
          icon={FaArrowAltCircleRight}
          size={25}
          className="text-white"
        />
      </div>

      <div className="flex items-center pl-20 sm:justify-start sm:pl-17 sm:pt-1.5 gap-5 pb-5">
        <Avatar srcImage={User} className="w-12 rounded-full" altDesc="user" />
        <div>
          <h1 className="font-bold">Irfan Mulya</h1>
          <span className="text-black/60 text-sm">irfanmulya619@gmail.com</span>
        </div>
      </div>

      <div className="w-4/5 mx-auto h-px bg-gray-700 my-4 rounded-full"></div>

      {cart.length > 0 ? (
        <div className="px-5 py-5 flex flex-col gap-8 max-h-[70vh] overflow-y-auto">
          {cart.map((item) => (
            <div className="grid grid-cols-2 px-3" key={item.id}>
              <ImageMenu
                src={item.image}
                altDesc={item.nama}
                className="rounded-2xl sm:w-28 lg:w-4/5"
              />
              <div className="flex flex-col xl:justify-between">
                <div>
                  <h2 className="font-bold text-black/75 sm:text-sm xl:text-lg">
                    {item.nama}
                  </h2>
                  <p className="text-black/75 sm:text-sm xl:text-md">
                    {formatRupiah(item.harga)}
                  </p>
                </div>

                <div className="mt-2">
                  <Button
                    className="p-1 bg-red-400 text-white rounded-full cursor-pointer"
                    onClick={() => handleDecrement(item.id)}
                  >
                    <IconBrand icon={FaMinus} size={15} />
                  </Button>
                  <span className="px-4">{item.qty}</span>
                  <Button
                    className="p-1 bg-red-400 text-white rounded-full cursor-pointer"
                    onClick={() => handleIncrement(item.id)}
                  >
                    <IconBrand icon={FaPlus} size={15} />
                  </Button>
                </div>

                <Button
                  type="button"
                  className="bg-blue-500 py-1.5 px-5 sm:text-sm sm:mt-2 rounded-xl text-white cursor-pointer"
                  onClick={() => onHandleDeleteItemCart?.(item.id)}
                >
                  Batalkan
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="px-8">
          <p className="py-2 px-5 text-center bg-red-500 text-white rounded-2xl">
            Data belum ada data
          </p>
        </div>
      )}
    </div>
  );
}
