/** @jsxImportSource https://esm.sh/preact@10.18.1 */
import { h, Component} from 'https://esm.sh/preact@10.18.1';
//import { jsx as _jsx } from "https://esm.sh/preact@10.18.1/jsx-runtime";
import { Suspense, lazy } from 'https://esm.sh/preact@10.18.1/compat';
import htm from 'https://esm.sh/htm';
import render from 'https://esm.sh/preact-render-to-string?deps=preact@10.18.1';
import prepass from 'https://esm.sh/preact-ssr-prepass?deps=preact@10.18.1';

export default function ({message}) {
    return (
        <div>Lazy Loaded {message}</div>
    )    
}