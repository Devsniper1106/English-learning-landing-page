import styled from "styled-components";
import { QUERIES } from "../../constants";
import Button from "../Button";
import Image from "../Image";

const Hero = () => {
    return (
        <Wrapper>
            <HeroCaption>
                <Title>Maximize skill, minimize budget</Title>
                <Description>
                    Our modern courses across a range of in-demand skills will
                    give you the knowledge you need to live the life you want.
                </Description>
                <Button variant="primary">Get Started</Button>
            </HeroCaption>
            <Image
                imgName="image-hero"
                alt="Woman working on a course. Members: 29k, Course hours: 1,451"
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 0 var(--min-pad);
    max-width: calc(var(--max-width) + var(--min-pad) * 2);
    width: 100%;
    margin: auto;
    display: flex;

    @media ${QUERIES.phoneAndDown} {
        flex-direction: column;
    }
`;

const HeroCaption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 500px;

    @media ${QUERIES.phoneAndDown} {
        max-width: auto;
    }
`;

const Title = styled.h1`
    font-weight: 800;
    font-size: calc(1rem * (56 / 16));
    line-height: calc(1rem * (70 / 16));
    margin-bottom: 30px;

    @media ${QUERIES.tabletAndDown} {
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

    @media ${QUERIES.tabletAndDown} {
        font-size: calc(1rem * (16 / 16));
        line-height: calc(1rem * (26 / 16));
        margin-bottom: 24px;
    }
`;

export default Hero;
