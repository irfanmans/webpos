import formatRupiah from "../lib/formatHarga";
import MenuItem from "../types/menuItems";
import ImageMenu from "../ui/ImageMenu";
import Button from "./Button";

interface CardProps {
  data: MenuItem;
  onAddToCart: () => void;
}

export default function Card({ data, onAddToCart }: CardProps) {
  return (
    <>
      <div className="px-3 pt-3 pb-4 bg-black/2 rounded-2xl shadow-2xl font-poppins">
        <ImageMenu
          src={data.image}
          altDesc={data.id}
          className="w-full sm:w-full h-40 object-cover rounded-2xl"
        />

        <div className="pt-5">
          <h1 className="font-bold text-black/50 text-sm sm:text-[17px] md:text-[16px]">
            {data.nama}
          </h1>
          <span className="capitalize text-black/20 text-xs sm:text-[13px] lg:text-[14px] font-bold">
            {data.tipeMakanan}
          </span>
          <div className="flex items-center justify-between gap-1">
            <p className="font-bold text-sm text-black/80">
              {formatRupiah(data.harga)}
            </p>
            <span className="text-black/30 text-xs sm:text-sm md:text-md">
              {data.lokasi}
            </span>
          </div>
        </div>

        <Button
          type="button"
          onClick={onAddToCart}
          className="py-2 px-4 bg-red-400 mt-5 text-white w-full rounded-xl cursor-pointer"
        >
          Checkout
        </Button>
      </div>
    </>
  );
}
