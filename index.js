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