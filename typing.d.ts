import { Product } from "@stripe/firestore-stripe-payments";
import { error } from "console";
import { sign } from "crypto";
import { User } from "firebase/auth";
import { React } from "react";
export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Element {
  type:
    | "Bloopers"
    | "Featurette"
    | "Behind the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser";
}
Footer;

export interface Inputs {
  email: string;
  password: string;
}

export interface Auth {
  children: React.ReactNode;
}

export interface IAuth {
  user: User | null | undefined;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
  loading: boolean;
}

export interface IProduct {
  planTypes?: Product[] | null;
}
