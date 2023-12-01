import { h, Component, render } from 'https://esm.sh/preact@10.5.14';
import { useEffect, useState } from 'https://esm.sh/preact@10.5.14/hooks?deps=preact@10.5.14';
import { Link, Route } from "https://esm.sh/wouter-preact?alias=react:preact/compat&deps=preact@10.5.14&bundle&min";
export {css, createGlobalStyle, default} from  'https://esm.sh/styled-components?alias=react:preact/compat&deps=preact@10.5.14';
import htm from 'https://esm.sh/htm?bundle';

// export { default } from 'https://esm.sh/styled-components?alias=react:preact/compat&deps=preact@10.5.14';

const html = htm.bind(h);


export function PageImport({src}) {
    const [pageComp, setPageComp] = useState("loading")
    useEffect(() => {
        (async() =>{
            const page = await import(src)
            page.default ? setPageComp(page.default) : setPageComp(Object.values(page)[0])
        } )()
    }, [])
    return pageComp;
}

export function RouteImport({path, src}) {
    return html`
        <${Route} path=${path}>
            ${props => html`<${PageImport} src=${src} ...${props} />`}
        <//>
    `
}

const colors = {
    home : {
        plain:"blue",
        textGradient:"-webkit-linear-gradient(#0089ff, #fff)"
    },
    tech: {
        plain: "green",
        textGradient:`linear-gradient(147deg, rgb(255, 229, 59) 0%, rgb(255 132 0) 74%)
        `
    },
    pol: {
        plain: "blue",
        textGradient:`linear-gradient(132deg, #F4D03F 0%, #16A085 100%)
        `
    }
}
export {
    html,
    Component,
    render,
    useEffect, 
    useState,
    colors
}

