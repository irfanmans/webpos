// import Avatar from "../ui/Avatar";
// import User from "../assets/images/user.jpeg";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa6";
// import IconBrand from "../ui/IconBrand";
// import ImageMenu from "../ui/ImageMenu";
// import MenuItem from "../types/menuItems";
// import formatRupiah from "../lib/formatHarga";
// import { IoMdClose } from "react-icons/io";
// import Button from "../components/Button";

// interface CheckoutProps {
//   openMenu?: boolean;
//   setOpenMenu?: (value: boolean) => void;
//   cart?: MenuItem[];
//   setCart?: (cart: MenuItem[]) => void;
//   onHandleDeleteItemCart?: (id: string) => void;
// }

// export default function Checkout({
//   openMenu,
//   setOpenMenu,
//   cart = [],
//   setCart,
//   onHandleDeleteItemCart,
// }: CheckoutProps) {
//   function handleIncrement(id: string) {
//     const updateCart = cart.map((item) =>
//       item.id === id
//         ? {
//             ...item,
//             qty: item.qty + 1,
//           }
//         : item
//     );
//     setCart?.(updateCart);
//   }

//   function handleDecrement(id: string) {
//     const updateCart = cart.map((item) =>
//       item.id === id && item.qty > 1
//         ? {
//             ...item,
//             qty: item.qty - 1,
//           }
//         : item
//     );
//     setCart?.(updateCart);
//   }

//   const totalHarga = cart.reduce(
//     (total, item) => total + item.qty * item.hargaAwal,
//     0
//   );

//   return (
//     <div
//       className={`fixed top-0 right-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 h-full font-poppins bg-white shadow-lg pt-9 transition-transform duration-300 ${
//         openMenu ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <div
//         className="p-2 bg-purple-500 absolute left-[15px] top-10 rounded-full cursor-pointer"
//         onClick={() => setOpenMenu?.(false)}
//       >
//         <IconBrand
//           icon={FaArrowAltCircleRight}
//           size={25}
//           className="text-white"
//         />
//       </div>

//       <div className="flex items-center pl-20 sm:justify-start sm:pl-17 sm:pt-1.5 gap-5 pb-5">
//         <Avatar srcImage={User} className="w-12 rounded-full" altDesc="user" />
//         <div>
//           <h1 className="font-bold">Irfan Mulya</h1>
//           <span className="text-black/60 text-sm">irfanmulya619@gmail.com</span>
//         </div>
//       </div>

//       {cart.length > 0 ? (
//         <>
//           <div className="px-3 py-5 flex flex-col gap-8 max-h-[70vh] overflow-y-auto relative">
//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex gap-3 px-3 py-3 shadow-lg rounded-lg relative font-poppins"
//               >
//                 <input type="checkbox" className="w-6 h-6 cursor-pointer" />
//                 <ImageMenu
//                   src={item.image}
//                   altDesc={item.nama}
//                   className="rounded-lg w-1/3 sm:w-1/3"
//                 />

//                 <div className="flex flex-col justify-between w-full">
//                   <div>
//                     <h1 className="font-bold">{item.nama}</h1>
//                     <p className="text-sm text-black/35">{item.tipeMakanan}</p>
//                     <span className="text-xs">
//                       {formatRupiah(item.hargaAwal)} - {item.lokasi}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <Button
//                       className="bg-gray-200 py-1.5 px-1.5 rounded-md"
//                       onClick={() => handleDecrement(item.id)}
//                     >
//                       <IconBrand icon={FaMinus} size={16} />
//                     </Button>
//                     <span>{item.qty}</span>
//                     <Button
//                       className="bg-gray-200 py-1.5 px-1.5 rounded-md"
//                       onClick={() => handleIncrement(item.id)}
//                     >
//                       <IconBrand icon={FaPlus} size={16} />
//                     </Button>
//                   </div>
//                 </div>

//                 <div
//                   className="p-1 bg-black/10 absolute right-3 top-4 rounded-lg cursor-pointer"
//                   onClick={() => onHandleDeleteItemCart?.(item.id)}
//                 >
//                   <IconBrand
//                     icon={IoMdClose}
//                     size={20}
//                     className="text-red-600"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="px-3 py-2 shadow-lg absolute bottom-0 w-full font-poppins">
//             <div className="flex justify-between">
//               <span className="text-sm">Total :</span>
//               <span className="font-bold">{formatRupiah(totalHarga)}</span>
//             </div>
//             <Button
//               type="button"
//               className="bg-green-500 w-full mt-3 py-2 rounded-lg text-white"
//             >
//               Beli ({cart.length})
//             </Button>
//           </div>
//         </>
//       ) : (
//         <div className="px-8">
//           <p className="py-2 px-5 text-center bg-red-500 text-white rounded-2xl">
//             Data belum ada data
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import Avatar from "../ui/Avatar";
import User from "../assets/images/user.jpeg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import IconBrand from "../ui/IconBrand";
import ImageMenu from "../ui/ImageMenu";
import MenuItem from "../types/menuItems";
import formatRupiah from "../lib/formatHarga";
import { IoMdClose } from "react-icons/io";
import Button from "../components/Button";

interface CheckoutProps {
  openMenu?: boolean;
  setOpenMenu?: (value: boolean) => void;
  cart?: MenuItem[];
  setCart?: (cart: MenuItem[]) => void;
  onHandleDeleteItemCart?: (id: string) => void;
}

export default function Checkout({
  openMenu,
  setOpenMenu,
  cart = [],
  setCart,
  onHandleDeleteItemCart,
}: CheckoutProps) {
  // State untuk menyimpan item yang dipilih
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function handleIncrement(id: string) {
    const updateCart = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart?.(updateCart);
  }

  function handleDecrement(id: string) {
    const updateCart = cart.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setCart?.(updateCart);
  }

  // Fungsi untuk menangani checkbox
  function handleCheckboxChange(id: string) {
    setSelectedItems(
      (element) =>
        element.includes(id)
          ? element.filter((itemId) => itemId !== id) // Hapus jika sudah ada
          : [...element, id] // Tambahkan jika belum ada
    );
  }

  // Hitung total harga hanya dari item yang dicentang
  const totalHarga = cart
    .filter((item) => selectedItems.includes(item.id))
    .reduce((total, item) => total + item.qty * item.hargaAwal, 0);

  return (
    <div
      className={`fixed top-0 right-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 h-full font-poppins bg-white shadow-lg pt-9 transition-transform duration-300 ${
        openMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="p-2 bg-purple-500 absolute left-[15px] top-10 rounded-full cursor-pointer"
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

      {cart.length > 0 ? (
        <>
          <div className="px-3 py-5 flex flex-col gap-8 max-h-[70vh] overflow-y-auto relative">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 px-3 py-3 shadow-lg rounded-lg relative font-poppins"
              >
                <input
                  type="checkbox"
                  className="w-6 h-6 cursor-pointer"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />

                <ImageMenu
                  src={item.image}
                  altDesc={item.nama}
                  className="rounded-lg w-1/3 sm:w-1/3"
                />

                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h1 className="font-bold">{item.nama}</h1>
                    <p className="text-sm text-black/35">{item.tipeMakanan}</p>
                    <span className="text-sm">
                      {formatRupiah(item.hargaAwal)} - {item.lokasi}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      className="bg-gray-200 py-1.5 px-1.5 rounded-md"
                      onClick={() => handleDecrement(item.id)}
                    >
                      <IconBrand icon={FaMinus} size={16} />
                    </Button>
                    <span>{item.qty}</span>
                    <Button
                      className="bg-gray-200 py-1.5 px-1.5 rounded-md"
                      onClick={() => handleIncrement(item.id)}
                    >
                      <IconBrand icon={FaPlus} size={16} />
                    </Button>
                  </div>
                </div>

                <div
                  className="p-1 bg-black/10 absolute right-3 top-4 rounded-lg cursor-pointer"
                  onClick={() => onHandleDeleteItemCart?.(item.id)}
                >
                  <IconBrand
                    icon={IoMdClose}
                    size={20}
                    className="text-red-600"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 shadow-lg absolute bottom-0 w-full font-poppins bg-white">
            <div className="flex justify-between">
              <span className="text-sm">Total :</span>
              <span className="font-bold">{formatRupiah(totalHarga)}</span>
            </div>
            <Button
              type="button"
              className="bg-green-500 w-full mt-3 py-2 rounded-lg text-white"
              // Tombol beli dinonaktifkan jika tidak ada item yang dipilih
            >
              Beli ({selectedItems.length})
            </Button>
          </div>
        </>
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
