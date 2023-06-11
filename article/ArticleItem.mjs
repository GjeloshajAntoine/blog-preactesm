import styled from "/lib.mjs";
import { useLocation } from "https://esm.sh/wouter-preact?alias=react:preact/compat&deps=preact@10.5.14&bundle&min"

const StyledTagChip = styled.span`
    border-radius: 25px;
    font-size: 15px;
`

export function ArticleItem({ title, id, tags = [] }) {
    const [, setLocation] = useLocation();

  return html`
        <div onClick=${e => setLocation(`/article/${id}`) || e.preventDefault()} >
            <span> ${title} </span>
            <div>
                ${
                    tags.map(tag => html`<${StyledTagChip}>${tag}<//>`)
                }
            <div> 
        </div>
    
    `;
}
