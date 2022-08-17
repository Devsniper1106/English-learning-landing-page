import styled from "styled-components";
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

const Main = styled.main``;

export default App;
