import React from "react"
import { BrowserRouter as Link} from "react-router-dom";
const HotDeals = ({link,children,TextBefore,TextAfter}) => {
    return (
        <div>
            {...TextBefore}
            <Link to {link}>
                {...children}
            </Link>
            {...TextAfter}
        </div>
    )
};
export default HotDeals