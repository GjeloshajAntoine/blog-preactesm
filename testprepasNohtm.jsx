/** @jsxImportSource https://esm.sh/preact@11.0.0-experimental.1 */
import { h, Component} from 'https://esm.sh/preact@11.0.0-experimental.1';
//import { jsx as _jsx } from "https://esm.sh/preact@11.0.0-experimental.1/jsx-runtime";
import { Suspense, lazy } from 'https://esm.sh/preact@11.0.0-experimental.1/compat';
import htm from 'https://esm.sh/htm';
import render from 'https://esm.sh/preact-render-to-string';
import prepass from 'https://esm.sh/preact-ssr-prepass';

const html = htm.bind(h);

function Comp() {
  return (
        <span>hello component</span>
  );
}


const MyLazyAsyncComp = lazy(() => import('./lazycomp.jsx'))

function AsyncTest() {
  return (
        <div>
            <Suspense fallback={<span>waiting</span>}>
                <MyLazyAsyncComp />
            </Suspense>
        </div>
    );
}

const MyLazyComp = (await import('./lazycomp.jsx')).default
function App() {
  return (
        <div> 
            test 
            <Comp />
            <AsyncTest />
            <MyLazyComp message="imported" />
        </div>
    );
}

console.log(render(html`<${App} />`));
console.log(await prepass(html`<${App} />`));
console.log(await prepass(html`<${AsyncTest} />`));
console.log(render(await prepass(html`<${App} />`)));
