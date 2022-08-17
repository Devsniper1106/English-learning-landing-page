import styled from "styled-components";
import { QUERIES } from "../../constants";
import { CATEGORIES } from "../../data";
import Card from "../Card";

const CardGrid = () => {
    return (
        <Wrapper>
            <Categories>
                <TitleCard>Check out our most popular courses!</TitleCard>
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
                <a href="https://www.frontendmentor.io/">Frontend Mentor</a>.
                Coded by{" "}
                <a href="https://github.com/BhandarkarPawan">
                    Pawan Bhandarkar
                </a>
                .
            </Attribution>
        </Wrapper>
    );
};

const Attribution = styled.p`
    margin-top: auto;
    background-color: transparent;
`;

const TitleCard = styled.div`
    background: linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%);
    border-radius: 15px;
    color: white;
    font-weight: 800;

    font-size: 32px;
    line-height: 40px;
    padding: 64px 32px;

    @media ${QUERIES.phoneAndDown} {
        font-size: 24px;
        line-height: 32px;
        padding: 24px 28px 32px 28px;
    }
`;

const Wrapper = styled.div`
    background: linear-gradient(180deg, #ffffff 0%, #f0f1ff 100%);
    padding-bottom: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Categories = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    /* gap: 56px 30px; */
    padding: 140px var(--min-pad);
    max-width: min(100%, calc(var(--max-width) + var(--min-pad) * 2));
    gap: 80px 30px;

    @media ${QUERIES.tabletAndDown} {
        gap: 56px 10px;
    }

    @media ${QUERIES.phoneAndDown} {
        padding-top: 0px;
        padding-bottom: 86px;
        gap: 40px;
    }
`;

export default CardGrid;
