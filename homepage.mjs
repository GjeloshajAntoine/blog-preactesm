import styled,{ html } from "./lib.mjs";
import { SideBar } from "./SideBar.mjs";
import { ArticleItem } from "./article/ArticleItem.mjs";

const StyledHome = styled.div`
    width: 70%;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    padding: 10%;
    padding-top: 1%;
`

const StyledIntro = styled.p`
    width: 70%;
    margin: 0 auto;
    margin-bottom: 5%;
    text-align: center;
`

const StyledArticleList = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;

`

const Articles = [
    {
        title: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la ",
        tags: ["pol","tech"]
    },
    {
        title: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la ",
        tags: ["pol","tech"]
    },
    {
        title: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la ",
        tags: ["pol","tech"]
    },
    {
        title: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la ",
        tags: ["pol","tech"]
    },
    {
        title: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la ",
        tags: ["pol","tech"]
    },
]

export function HomePage() {
    return html `
        <${StyledHome}>
            <${StyledIntro}>
                Welcome to my blog !
                Here you'll find my interest into computing and politics
            </${StyledIntro}>
            <${StyledArticleList}>
                ${Articles.map(art => html`<${ArticleItem} title=${art.title} tags=${art.tags} />`)}
            <//>
        </${StyledHome}>
            <!-- <${SideBar} /> -->
    `
}