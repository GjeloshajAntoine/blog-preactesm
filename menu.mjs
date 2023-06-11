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
    width: 40%;
    display: inline-flex;
    justify-content: center;
    gap: 50px;
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
    padding: 5px;
    border-radius: 15px;
    text-decoration: none;
    font-family: Tahoma;
    font-size: 20px;
    background: linear-gradient(#fff, #0089ff);
    background: ${({textGradient}) => textGradient || null};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${({isSelected})=> isSelected && css`
        font-weight: bolder;
    
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
            <${LinkItem} href="/tag/pol">Pol <//>
        <//>
        <${StyledLgSelector}>
            <${StyledItem} isSelected=true>fr<//>
            <${StyledItem}>en<//>
        <//>
    <//>
    `;
}