import { h, Component, render } from 'https://esm.sh/preact@10.5.14?bundle&min&exports=h';
import { useEffect, useState } from 'https://esm.sh/preact@10.5.14/hooks?bundle&min';
export * from  'https://esm.sh/styled-components?alias=react:preact/compat&deps=preact@10.5.14';
export { default } from 'https://esm.sh/styled-components?alias=react:preact/compat&deps=preact@10.5.14';
import htm from 'https://esm.sh/htm';

const html = htm.bind(h);
const colors = {
    home : {
        plain:"blue",
        textGradient:"-webkit-linear-gradient(#0089ff, #fff)"
    },
    tech: {
        plain: "green",
        textGradient:"linear-gradient(#fff, green)"
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