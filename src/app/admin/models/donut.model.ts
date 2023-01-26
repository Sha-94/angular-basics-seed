import { Promo } from "./constants/promo.enum";

export interface Donut {
  id?: string;
  name: string;
  icon: string;
  price: number;
  promo?: Promo;
  description: string;
}
