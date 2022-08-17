import { QUERIES } from "../../constants";

const { default: styled } = require("styled-components");
const getIconPath = (icon) => {
    if (icon === "animation") return "assets/images/icon-animation.svg";
    if (icon === "business") return "assets/images/icon-business.svg";
    if (icon === "design") return "assets/images/icon-design.svg";
    if (icon === "photography") return "assets/images/icon-photography.svg";
    if (icon === "crypto") return "assets/images/icon-crypto.svg";

    throw Error("Invalid Icon");
};

const Card = ({ title, icon, description, link }) => {
    const iconPath = getIconPath(icon);
    return (
        <Wrapper>
            <Icon src={iconPath} alt={title}></Icon>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Link href={link}>Get Started</Link>
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 0px 32px 40px 32px;
    box-shadow: 0px 25px 50px rgba(6, 22, 141, 0.0442381);
    border-radius: 15px;
    background-color: var(--color-white);

    @media ${QUERIES.tabletAndDown} {
        padding-left: 28px;
        padding-right: 28px;
        padding-bottom: 32px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${QUERIES.tabletAndDown} {
        gap: 16px;
    }
`;

const Icon = styled.img`
    --side: 56px;
    height: var(--side);
    width: var(--side);
    margin-top: calc(-1 * var(--side) / 2);
    margin-bottom: 32px;

    @media ${QUERIES.tabletAndDown} {
        margin-bottom: 24px;
    }
`;

const Title = styled.h2`
    font-weight: 800;
    font-size: calc(1rem * (24 / 16));
    line-height: calc(1rem * (30 / 16));

    @media ${QUERIES.tabletAndDown} {
        font-size: calc(1rem * (20 / 16));
        line-height: calc(1rem * (25 / 16));
    }
`;

const Description = styled.p`
    font-weight: 500;
    line-height: calc(1rem * (28 / 16));
    color: var(--color-lightest-blue);

    @media ${QUERIES.tabletAndDown} {
        font-size: calc(1rem * (16 / 16));
        line-height: calc(1rem * (26 / 16));
    }
`;

const Link = styled.a`
    color: var(--color-deeppink);
    font-weight: 700;
    line-height: calc(1rem * (28 / 16));
    text-decoration: none;
    margin-top: auto;
`;

export default Card;
