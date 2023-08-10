import { html } from "../lib.mjs";
import styled from "/lib.mjs";
import { useLocation } from "https://esm.sh/wouter-preact?alias=react:preact/compat&deps=preact@10.5.14&bundle&min"

const StyledTitle = styled.span`
    font-size: 20px;
`

const StyledTagChip = styled.span`
    border-radius: 25px;
    font-size: 15px;
    background-color: blueviolet;
    color: gray;
`

export function ArticleItem({ title, id, tags = [] }) {
    const [, setLocation] = useLocation();

  return html`
        <div onClick=${e => setLocation(`/article/${id}`) || e.preventDefault()} >
            <${StyledTitle}> ${title} <//>
            <div>
                ${
                    tags.map(tag => html`<${StyledTagChip}>${tag}<//>`)
                }
            </div> 
        </div>
    
    `;
}
