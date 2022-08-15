import styled from "styled-components";
import { CATEGORIES } from "../../data";
import Button from "../Button";
import Card from "../Card";
import Footer from "../Footer";
import Header from "../Header";

function App() {
    return (
        <>
            <Header />
            <Main>
                <Hero>
                    <HeroCaption>
                        <Title>Maximize skill, minimize budget</Title>
                        <Description>
                            Our modern courses across a range of in-demand
                            skills will give you the knowledge you need to live
                            the life you want.
                        </Description>
                        <Button variant="primary">Get Started</Button>
                    </HeroCaption>
                    <HeroImage
                        alt="Hero Image Desktop"
                        src="/assets/images/image-hero-desktop.png"
                    />
                    <HeroImageMobile
                        alt="Hero Image Mobile"
                        src="/assets/images/image-hero-mobile.png"
                    />
                </Hero>

                <CategoryWrapper>
                    <Categories>
                        <TitleCard>
                            Check out our most popular courses!
                        </TitleCard>
                        {CATEGORIES.map((c, i) => {
                            return (
                                <Card
                                    key={i}
                                    link={c.link}
                                    title={c.title}
                                    description={c.description}
                                    icon={c.icon}
                                />
                            );
                        })}
                    </Categories>
                    <Attribution>
                        Challenge by{" "}
                        <a href="https://www.frontendmentor.io/">
                            Frontend Mentor
                        </a>
                        . Coded by{" "}
                        <a href="https://github.com/BhandarkarPawan">
                            Pawan Bhandarkar
                        </a>
                        .
                    </Attribution>
                </CategoryWrapper>
            </Main>
            <Footer />
        </>
    );
}

// const HeaderWrapper = styled.div`
//     z-index: 2;
// `;

// const Wrapper = styled.div`
//     overflow: hidden;
//     overflow-x: hidden;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
// `;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    flex-grow: 1;
    @media (max-width: 653px) {
        margin-top: 10px;
    }
`;

const Attribution = styled.p`
    margin-top: auto;
    background-color: transparent;
`;

const TitleCard = styled.div`
    background: linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%);
    border-radius: 15px;
    font-size: 32px;
    line-height: 40px;
    font-weight: 800;
    color: white;
    padding: 64px 32px;

    /* @media (max-width: 768px) {
      
    } */

    @media (max-width: 621px) {
        font-size: 24px;
        line-height: 32px;
        padding: 28px;
        padding-top: 24px;
        padding-bottom: 32px;
    }
`;

const Hero = styled.div`
    padding: 0 var(--min-pad);
    max-width: calc(var(--max-width) + var(--min-pad) * 2);
    margin-left: auto;
    margin-right: auto;
    display: flex;

    @media (max-width: 653px) {
        flex-direction: column;
    }
`;

const HeroImage = styled.img`
    max-width: 50%;
    transform: scale(1.8) translate(calc(35% - 3vw), -12%);
    object-fit: contain;

    @media (max-width: 653px) {
        display: none;
    }
`;

const HeroImageMobile = styled.img`
    display: none;

    @media (max-width: 653px) {
        display: block;
    }
`;

const HeroCaption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 500px;

    @media (max-width: 653px) {
        max-width: none;
    }
`;

const Title = styled.h1`
    font-weight: 800;
    font-size: calc(1rem * (56 / 16));
    line-height: calc(1rem * (70 / 16));
    margin-bottom: 30px;

    @media (max-width: 768px) {
        font-size: calc(1rem * (40 / 16));
        line-height: calc(1rem * (50.4 / 16));
        margin-bottom: 25px;
    }
`;

const Description = styled.p`
    font-weight: 500;
    color: var(--color-lightest-blue);
    margin-bottom: 40px;
    line-height: calc(1rem * (28 / 16));

    @media (max-width: 768px) {
        font-size: calc(1rem * (16 / 16));
        line-height: calc(1rem * (26 / 16));
        margin-bottom: 24px;
    }
`;

const CategoryWrapper = styled.div`
    background: linear-gradient(180deg, #ffffff 0%, #f0f1ff 100%);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
    max-width: 100%;
`;

const Categories = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    flex-wrap: wrap;
    /* gap: 56px 30px; */
    padding: 140px var(--min-pad);
    max-width: min(100%, calc(var(--max-width) + var(--min-pad) * 2));
    margin: auto;
    gap: 64px 30px;

    @media (max-width: 653px) {
        padding-top: 0px;
        padding-bottom: 86px;
        gap: 40px;
    }
`;

export default App;
