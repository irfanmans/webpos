import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function useCart() {
  const ctx = useContext(CartContext);
  if (ctx === undefined) throw new Error("Context tidak ada");
  return ctx;
}
