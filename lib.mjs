import { h, Component, render } from 'https://esm.sh/preact@10.5.14?bundle&min&exports=h';
import { useEffect, useState } from 'https://esm.sh/preact@10.5.14/hooks?bundle&min';
export {css, createGlobalStyle, default} from  'https://esm.sh/styled-components?alias=react:preact/compat&deps=preact@10.5.14';
// export { default } from 'https://esm.sh/styled-components?alias=react:preact/compat&deps=preact@10.5.14';
import htm from 'https://esm.sh/htm?bundle';



const html = htm.bind(h);
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

