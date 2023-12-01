    // Deno import
/*
import { h, Component } from 'https://esm.sh/preact@10.18.1';
import { Suspense, lazy } from 'https://esm.sh/preact@10.18.1/compat';
import htm from 'https://esm.sh/htm?bundle';
import render from 'https://esm.sh/preact-render-to-string?deps=preact@10.18.1';
import prepass from 'https://esm.sh/preact-ssr-prepass?deps=preact@10.18.1';
 */

import "preact/debug";
import { Component, h } from "preact";
import { lazy, Suspense } from "preact/compat";
import htm from "htm";
import render from "preact-render-to-string";
import prepass from "preact-ssr-prepass";

const html = htm.bind(h);

function Comp() {
  return html`
        <span>hello component</span>
    `;
}

function AsyncTest() {
  const data = new Promise((resolve) => resolve("test promise"));
  return html`
        <div>
            <${Suspense} fallback=${html`<span>waiting</span>`}>
                <span>${data}</span>
            </${Suspense}>
        </div>
    `;
}


function App() {
  return html`
        <div> 
            test 
            <${Comp} />
            <${GetType}>
                <$${AsyncTest} />
            </${GetType}>
        </div>
    `;
}

console.log(render(html`<${App} />`));
console.log(await prepass(html`<${App} />`));
console.log(await prepass(html`<${AsyncTest} />`));
console.log(render(await prepass(html`<${App} />`)));
