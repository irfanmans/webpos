export default interface MenuItem {
  id: string;
  image: string;
  nama: string;
  tipeMakanan:
    | "breakfast"
    | "fast food"
    | "drinks"
    | "healthy"
    | "juice"
    | "dessert";
  harga: number;
  lokasi: string;
  hargaAwal: number;
  qty: number;
}
