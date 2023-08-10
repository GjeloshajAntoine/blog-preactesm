import styled, {createGlobalStyle, html, render, useEffect, useState} from "./lib.mjs"
import { Link, Route } from "https://esm.sh/wouter-preact?alias=react:preact/compat&deps=preact@10.5.14&bundle&min";

import { Menu } from "./menu.mjs";

const StyledBody = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;
    color: white;
`

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
    @import url('https://fonts.googleapis.com/css2?family=Geologica:wght@400;900&family=Moirai+One&family=Nunito:ital,wght@0,200;0,700;0,900;1,900&family=Sen:wght@400;700;800&family=Zilla+Slab&display=swap');
`

function PageImport({src}) {
    const [pageComp, setPageComp] = useState("loading")
    useEffect(() => {
        (async() =>{
            const page = await import(src)
            page.default ? setPageComp(page.default) : setPageComp(Object.values(page)[0])
        } )()
    }, [])
    return pageComp;
}

function RouteImport({path, src}) {
    return html`
        <${Route} path=${path}>
            ${props => html`<${PageImport} src=${src} ...${props} />`}
        <//>
    `
}

function App() {
    return html`
        <${StyledBody}>
            <${GlobalStyle} />
            <${Menu}/>
            <${RouteImport} path="/" src="./homepage.mjs"/>
        </${StyledBody}>
     `;
}

render(html`<${App} />`, document.getElementById("app"))