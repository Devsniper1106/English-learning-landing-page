import styled from "styled-components";
import { QUERIES } from "../../constants";

const assetsPath = "/assets/images";
const Image = ({ alt, imgName }) => {
    const srcSetWebPDesktop = `
		${assetsPath}/${imgName}-desktop.webp 1x, 
		${assetsPath}/${imgName}-desktop@2x.webp 2x, 
	`;

    const srcSetPNGDesktop = `
		${assetsPath}/${imgName}-desktop.png 1x, 
		${assetsPath}/${imgName}-desktop@2x.png 2x,  
	`;

    const srcSetWebPTablet = `
		${assetsPath}/${imgName}-tablet.webp 1x, 
		${assetsPath}/${imgName}-tablet@2x.webp 2x, 
	`;

    const srcSetPNGTablet = `
		${assetsPath}/${imgName}-tablet.png 1x, 
		${assetsPath}/${imgName}-tablet@2x.png 2x,  
	`;

    const srcSetWebPMobile = `
		${assetsPath}/${imgName}-mobile.webp 1x, 
		${assetsPath}/${imgName}-mobile@2x.webp 2x, 
	`;

    const srcSetPNGMobile = `
		${assetsPath}/${imgName}-mobile.png 1x, 
		${assetsPath}/${imgName}-mobile@2x.png 2x,  
	`;

    const src = `${assetsPath}/${imgName}.png`;

    return (
        <Wrapper>
            <source
                media={QUERIES.phoneAndDown}
                type="image/webp"
                srcSet={srcSetWebPMobile}
            />
            <source
                media={QUERIES.phoneAndDown}
                type="image/png"
                srcSet={srcSetPNGMobile}
            />
            <source
                media={QUERIES.tabletAndDown}
                type="image/webp"
                srcSet={srcSetWebPTablet}
            />
            <source
                media={QUERIES.tabletAndDown}
                type="image/png"
                srcSet={srcSetPNGTablet}
            />

            <source type="image/webp" srcSet={srcSetWebPDesktop} />
            <source type="image/png" srcSet={srcSetPNGDesktop} />
            <img alt={alt} src={src} />
        </Wrapper>
    );
};

const Wrapper = styled.picture`
    width: 100%;
`;

export default Image;
