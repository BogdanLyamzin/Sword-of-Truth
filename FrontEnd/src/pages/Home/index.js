import React from "react";
import NavbarComponent from "../../modules/Navbar";
import SearchComponent from  "../../modules/Search"
import Container from "../../components/Container"
const HomePage = (props) => {
    return (
        <div>

            <Container>
                <SearchComponent />
                <NavbarComponent />
            </Container>
        </div>
    )
};
export default HomePage