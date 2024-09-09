import { Enterprise } from "./enterprise";
import { Person } from "./Person";
import { Product } from "./Product";

export interface Provider extends Person{
    

    enterprises:Enterprise[];
  }