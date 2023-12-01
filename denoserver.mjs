import "https://esm.sh/preact/debug";
import styled, { createGlobalStyle, html, /*render,*/ useEffect, useState, RouteImport } from "./lib.mjs"

import render from 'https://esm.sh/preact-render-to-string?deps=preact@10.5.14';
//import styled from  'styled-components';

import { existsSync } from "https://deno.land/std/fs/mod.ts";
import { lookup } from 'npm:mrmime';


//console.log(await import("./lib.mjs"));
 
const StyledBody = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;
    color: white;
` 

function Comp() {
    const [data, setData] = useState("truc")
    
    return html`
        <span>
            Comp
            <div>
                ${data}
            </div>
        </span>
    `
    
}

function App() {
 return html`
    <div>
        Test
        <${Comp} />
        <${StyledBody} />
    </div>
    `
}

console.log(render(html`<${App} />`))

Deno.serve({port: 5000}, async req => {
    const pathUrl = req.url.replace("http://"+ req.headers.get("host"), "")
    const path = `.${pathUrl === '/' ? '/index.html' : pathUrl}`
    const fileExists = existsSync(path);
    const fileContent = fileExists ? await Deno.readTextFile(path) : ""
    // Enable CORS for all origins (*)
    return new Response(fileContent, {
        headers: new Headers({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            "Content-Type": lookup(path)
        }),
    });

})