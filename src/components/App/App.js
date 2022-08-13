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
                    <HeroImage src="/assets/images/image-hero-desktop.png" />
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
                </CategoryWrapper>
            </Main>
            <Footer />
        </>
    );
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleCard = styled.div`
    background: linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%);
    border-radius: 15px;
    font-size: 32px;
    line-height: 40px;
    font-weight: 800;
    color: white;
    max-width: 350px;
    padding: 64px 32px;
`;

const Hero = styled.div`
    display: flex;
    max-width: var(--max-width);
    margin: auto;
`;

const HeroImage = styled.img`
    width: 50%;
`;

const HeroCaption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

const Title = styled.h1`
    font-weight: 800;
    font-size: calc(1rem * (56 / 18));
    line-height: calc(1rem * (70 / 18));
    margin-bottom: 30px;
`;

const Description = styled.p`
    font-weight: 500;
    color: var(--color-lightest-blue);
    margin-bottom: 40px;
`;

const CategoryWrapper = styled.div`
    background: linear-gradient(180deg, #ffffff 0%, #f0f1ff 100%);
    padding-bottom: 140px;
`;

const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 56px 30px;
    max-width: var(--max-width);
    margin: auto;
`;

export default App;
