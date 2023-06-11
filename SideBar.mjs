import styled, { html, useEffect, useState } from "./lib.mjs";

const StyledSidebar = styled.div`
    float: right;
    width: 33%;
`;

export function SideBar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const height = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = document.body.scrollTop ||
        document.documentElement.scrollTop;
        setScrollPercent((scrollTop / height) * 100)
    });
  }, []);

  return html`
        <${StyledSidebar}>
            <h2>SideBar ${scrollPercent}</h2>
            <img style=${{
                    borderRadius: "70px",
                    filter: `blur(${100-scrollPercent}px)`
                }} 
                width="200"
                src="./img/Screenshot_20220225_111536.png" 
            />
        <//>
    `;
}
