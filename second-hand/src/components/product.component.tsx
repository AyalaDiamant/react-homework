import { ListOfProducts } from "../data/products.json"
import { useContext } from "react";
import { UserContext } from "../context/user.context";

export const ProductComponent = () => {
    const { user } = useContext(UserContext);

    return <div>
        <h1>Hello  { user?.firstName } { user?.lastName }  </h1>
        <h3>All Products</h3>
        <ul>
                {ListOfProducts?.map(p => (
                    <li >{p.productName} </li>
                ))}
            </ul>
    </div>

}

