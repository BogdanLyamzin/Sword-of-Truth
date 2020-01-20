import React from "react";
import PropTypes from "prop-types";

const slider = React.useRef(null);
const CarouselComponent = ({carouselItem}) => {

    const [active, setActive] = React.useState(0);
    React.useEffect( ()=> {
        scrollInterval = setTimeout(()=>{
            setActive((active+1) % carouselItem.length)
        })
    });
    return (
        <div className="carousel" ref={slider}>
            {carouselItem}
        </div>
    )
};


CarouselComponent.propTypes = {
    carouselItems: PropTypes.instanceOf(Array),
};

CarouselComponent.defaultProps = {
    carouselItems: []
};

export default CarouselComponent