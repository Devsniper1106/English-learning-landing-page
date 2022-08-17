import styled from "styled-components";
import { QUERIES } from "../../constants";
import CardGrid from "../CardGrid";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";

function App() {
    return (
        <>
            <Header />
            <Main>
                <Hero />
                <CardGrid />
            </Main>
            <Footer />
        </>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    flex-grow: 1;
    @media ${QUERIES.phoneAndDown} {
        margin-top: 10px;
    }
`;

export default App;
