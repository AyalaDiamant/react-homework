import { createContext } from "react";
import { ProductInterface } from "../interfaces/product.interface";

export type ProductContextType = {
    products?: ProductInterface[],
}

export const ProductContext = createContext<ProductContextType>({});
