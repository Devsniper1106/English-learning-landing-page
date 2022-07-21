import { Fragment } from "react";
import styled from "styled-components";
import Button from "../Button";
import Header from "../Header";

function App() {
    return (
        <Fragment>
            <Header />
            <Main>
                <Hero>
                    <Title>Maximize skill, minimize budget</Title>
                    <Description>
                        Our modern courses across a range of in-demand skills
                        will give you the knowledge you need to live the life
                        you want.
                    </Description>
                    <Button variant="primary">Get Started</Button>
                </Hero>
                <div>
                    <div>Check out our most popular courses!</div>
                    <div>
                        <h2>Animation</h2>
                        <p>
                            Learn the latest animation techniques to create
                            stunning motion design and captivate your audience.
                        </p>
                    </div>
                </div>
            </Main>
            Get Started Design Create beautiful, usable interfaces to help shape
            the future of how the web looks. Get Started Photography Explore
            critical fundamentals like lighting, composition, and focus to
            capture exceptional photos. Get Started Crypto All you need to know
            to get started investing in crypto. Go from beginner to advanced
            with this 54 hour course. Get Started Business A step-by-step
            playbook to help you start, scale, and sustain your business without
            outside investment. Get Started Get Started
        </Fragment>
    );
}

const Main = styled.div``;
const Title = styled.h1``;
const Hero = styled.div``;
const Description = styled.p``;

export default App;
