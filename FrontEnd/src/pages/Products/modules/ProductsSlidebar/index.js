import React from "react";
import ProductSlidbarItem from "./ProductSlidbarItems"
const ProductSlidbar = (props,{productsPhoto}) => {
    const productsPhoto = productsPhoto.map(elem => {
        return <ProductSlidbarItem test={elem.test} />
    });
    return (
        <ul>
            {productsPhoto}
        </ul>
    )
};

export default ProductSlidbar