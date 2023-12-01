import styled, { createGlobalStyle, html, render, useEffect, useState, RouteImport } from "./lib.mjs"

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


export function App() {
    return html`
        <${StyledBody}>
            <${GlobalStyle} />
            <${Menu}/>
            <${RouteImport} path="/" src="./homepage.mjs"/>
        </${StyledBody}>
     `;
}

if (!("Deno" in window)) {
    render(html`<${App} />`, document.getElementById("app"))
}