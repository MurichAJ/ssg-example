import { Component, h, Element } from "@stencil/core";
import marked from "marked";
// import { readFile } from "fs-extra";

@Component({
  tag: "test-page",
  shadow: true,
})
export class TestPage {
  @Element() el;
  htmlContents;
  async componentWillLoad() {
    //   let res = await fetch("/assets/test.json");
    //   await res.json().then((data) => {
    //       console.log(data);
    //   })
//     const markdownContents = await readFile("./src/md-pages/test.md", {
//       encoding: "utf8",
//     });
//     console.log(
//       "🚀 ~ file: test-page.tsx ~ line 18 ~ TestPage ~ componentWillLoad ~ markdownContents",
//       markdownContents
//     );
//     try {
//       const renderer = new marked.Renderer();
//       this.htmlContents = marked(markdownContents, {
//         renderer,
//         headerIds: true,
//       }).trim();
//       console.log(
//         "🚀 ~ file: test-page.tsx ~ line 23 ~ TestPage ~ componentWillLoad ~ htmlContents",
//         this.htmlContents
//       );
//     } catch (e) {
//       console.error("./src/md-pages/test.md");
//       throw e;
//     }
  }
  componentDidLoad() {
    this.el.shadowRoot.querySelector("#content").innerHTML = marked(
      "# Marked in browser\n\nRendered by **marked**."
    );
  }
  render() {
    return (
      <div id="content">
        Здесь должна быть страницу преобразованная из markdown.
      </div>
    );
  }
}
