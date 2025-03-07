// import { IoMdArrowRoundBack } from "react-icons/io";
// import IconBrand from "../ui/IconBrand";
// import { useLocation, useNavigate } from "react-router";
// import formatRupiah from "../lib/formatHarga";

// export default function CheckoutDetails() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const itemCart = location.state?.item;

//   function handleNavigateBack() {
//     navigate(-1);
//   }

//   return (
//     <div className="pt-10 px-4 font-poppins">
//       <div
//         className="flex items-center pb-5 gap-4"
//         onClick={handleNavigateBack}
//       >
//         <IconBrand
//           icon={IoMdArrowRoundBack}
//           size={20}
//           className="cursor-pointer"
//         />
//         <h1 className="text-lg">Keranjang Anda</h1>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full md:w-full border-collapse border-gray-300 rounded-lg">
//           <thead>
//             <tr className="bg-black/10">
//               <th className="border-gray-300 px-4 py-2">Product</th>
//               <th className="border-gray-300 px-4 py-2">Price</th>
//               <th className="border-gray-300 px-4 py-2">Quantity</th>
//               <th className="border-gray-300 px-4 py-2">Subtotal</th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//             {itemCart ? (
//               <tr>
//                 <td className="border-gray-300 px-4 py-2">{itemCart.nama}</td>
//                 <td className="border-gray-300 px-4 py-2">
//                   {formatRupiah(itemCart.harga)}
//                 </td>
//                 <td className="border-gray-300 px-4 py-2">{itemCart.qty}</td>
//                 <td className="border-gray-300 px-4 py-2">
//                   {itemCart.harga * itemCart.qty}
//                 </td>
//               </tr>
//             ) : (
//               <tr>
//                 <td colSpan={4} className="py-4">
//                   Tidak ada data
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router";
import useCart from "../CustomHook/useCart";
import { IoMdArrowRoundBack } from "react-icons/io";
import IconBrand from "../ui/IconBrand";
import formatRupiah from "../lib/formatHarga";
// import { FaMinus } from "react-icons/fa6";
// import { FaPlus } from "react-icons/fa6";

export default function CheckoutDetails() {
  const navigate = useNavigate();
  const { cart } = useCart();
  console.log("ddddd", cart);

  function handleNavigateBack() {
    navigate("/");
  }

  return (
    <div className="pt-4 px-4 font-poppins">
      <div
        className="flex items-center pb-5 gap-4"
        onClick={handleNavigateBack}
      >
        <IconBrand
          icon={IoMdArrowRoundBack}
          size={20}
          className="cursor-pointer"
        />
        <h1 className="text-lg">Keranjang Anda</h1>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
        <table className="w-full text-sm md:text-base text-gray-700">
          <thead className="bg-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="py-3 px-2 md:px-4 text-left">Menu</th>
              <th className="py-3 px-2 md:px-4">Harga</th>
              <th className="py-3 px-2 md:px-4">Quantity</th>
              <th className="py-3 px-2 md:px-4">Total Harga</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((data, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 text-center"
                >
                  <td className="py-3 px-2 md:px-4 text-left">{data.nama}</td>
                  <td className="py-3 px-2 md:px-4">
                    {formatRupiah(data.harga)}
                  </td>
                  <td className="py-3 px-2 md:px-4">{data.qty}</td>
                  <td className="py-3 px-2 md:px-4">
                    {formatRupiah(data.harga * data.qty)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-4 text-center text-gray-500">
                  Tidak ada item di keranjang
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* <table className="w-full font-poppins text-sm">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="py-3">Menu</th>
            <th className="py-3">Harga</th>
            <th className="py-3">Quantity</th>
            <th className="py-3">Total Harga</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {cart.map((data) => (
            <tr>
              <td className="py-2">{data.nama}</td>
              <td className="py-2">{data.harga}</td>
              <td className="py-2">{data.qty}</td>
              <td className="py-2">{data.harga}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

// {cart.map((data) => {
//   return (
//     <div className="flex gap-3 bg-black/10 rounded-lg p-3">
//       <ImageMenu
//         src={data.image}
//         altDesc={data.nama}
//         className="w-1/3 rounded-lg"
//       />

//       <>
//         <div>
//           <h1>{data.nama}</h1>
//           <p>{formatRupiah(data.harga)}</p>
//         </div>
//       </>
//     </div>
//   );
// })}
