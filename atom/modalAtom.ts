import { Product } from "@stripe/firestore-stripe-payments";
import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";
import { Movie } from "../typing";

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});

export const movieState = atom<Movie | DocumentData | null>({
  key: "movieState",
  default: null,
});

export const productState = atom<Product[] | null>({
  key: "productState",
  default: null,
});
