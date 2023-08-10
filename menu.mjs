import styled, { html, css, colors } from "./lib.mjs";
import { Link, useRoute, useLocation } from "https://esm.sh/wouter-preact?alias=react:preact/compat&deps=preact@10.5.14&bundle&min"

const StyledMenu = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const StyledName = styled.span`
    font-size: 40px;
    padding: 10%;
`

const StyledLink = styled.div`
    width: inherit;
    display: inline-flex;
    justify-content: center;
    gap: 50px;
    justify-content: end;
    /* box-shadow: rgb(46 55 240 / 48%) 6px 7px, rgb(96 46 240 / 55%) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgb(240 137 46 / 10%) 20px 20px, rgb(46 240 58 / 13%) 25px 25px; */
    border-radius: 15px;
    margin-left: 15%;
`

const StyledLgSelector = styled.div`
    width: 25%;
    display: inline-flex;
    justify-content: end;
    gap: 5px;
    flex-grow: 1;
    margin-right: 5%;
`

const StyledItem = styled.a`
    padding: 5px 19px;
    border-radius: 15px;
    text-decoration: none;
    font-family: Tahoma;
    font-size: 25px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 17px;
    color: #916a5c;
    color: white;
    background: #3d00be;

    /* background: linear-gradient(#fff, #0089ff);
    background: ${({textGradient}) => textGradient || null};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    /* font-weight: bolder; */
    &:hover {
        filter: brightness(1.4);
    }
    ${({isSelected})=> isSelected && css`
    
    `}
`

const LinkItem = ({children, href, textGradient}) => {
    const [isActive] = useRoute(href);
    const [, setLocation] = useLocation();// doing this cause <Link /> crashing with styled

    return html`
        <${StyledItem} 
            onClick=${e => setLocation(href) || e.preventDefault()} 
            href=${href} 
            isSelected=${isActive}
            textGradient=${textGradient}
        >
            ${children}
        <//>
    `
}

export function Menu() {
    return html`
    <${StyledMenu}>
        <!-- <${StyledName}>ToineLab<//> -->
        <img width="150" src="./img/wordart.png" />
        <${StyledLink}>
            <${LinkItem} href="/">Home<//>
            <${LinkItem} textGradient=${colors.tech.textGradient} href="/tag/tech">Tech <//>
            <${LinkItem} textGradient=${colors.pol.textGradient} href="/tag/pol">Pol <//>
        <//>
        <${StyledLgSelector}>
            <${StyledItem} isSelected=true>fr<//>
            <${StyledItem}>en<//>
        <//>
        <img width="150" src="./img/Screenshot_20220225_111536.png" />
    <//>
    `;
}