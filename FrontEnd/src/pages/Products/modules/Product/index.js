import React from "react";
import Button from "../../../../components/Button";
import Image from "../../../../components/Image";
import CustomizationItem from  "../../components/CustomizationItem"
const Product = ({CustomizationItems}) => {
    CustomizationItems.map(elem => {
        return <CustomizationItem header={elem.header} children={"Пункты кастомизации"}/>
    });

    return (
        <div>
            <Image />
            {CustomizationItems}
            <Button onClick={} />
        </div>
    )
};

export default Product;
