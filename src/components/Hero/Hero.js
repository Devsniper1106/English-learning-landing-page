import styled from "styled-components";
import { QUERIES } from "../../constants";
import Button from "../Button";

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
            <HeroImage
                alt="Hero Image Desktop"
                src="/assets/images/image-hero-desktop.png"
            />
            <HeroImageMobile
                alt="Hero Image Mobile"
                src="/assets/images/image-hero-mobile.png"
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    padding: 0 var(--min-pad);
    width: calc(var(--max-width) + var(--min-pad) * 2);
    margin-left: auto;
    margin-right: auto;
    display: flex;
    ${QUERIES.phoneAndDown} {
        flex-direction: column;
    }
`;

const HeroImage = styled.img`
    width: 80%;
    position: absolute;
    top: -100%;
    right: -35%;
    /* transform: scale(1.8) translate(calc(35%)); */
    object-fit: contain;

    ${QUERIES.phoneAndDown} {
        display: none;
    }
`;

const HeroImageMobile = styled.img`
    display: none;

    ${QUERIES.phoneAndDown} {
        display: block;
    }
`;

const HeroCaption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 500px;

    ${QUERIES.phoneAndDown} {
        max-width: none;
    }
`;

const Title = styled.h1`
    font-weight: 800;
    font-size: calc(1rem * (56 / 16));
    line-height: calc(1rem * (70 / 16));
    margin-bottom: 30px;

    ${QUERIES.tabletAndDown} {
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

    ${QUERIES.tabletAndDown} {
        font-size: calc(1rem * (16 / 16));
        line-height: calc(1rem * (26 / 16));
        margin-bottom: 24px;
    }
`;

export default Hero;
