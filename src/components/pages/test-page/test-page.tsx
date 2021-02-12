import { Component, h, Element } from "@stencil/core";
import marked from "marked";

@Component({
  tag: "test-page",
  shadow: true,
})
export class TestPage {
  @Element() el;
  async componentWillLoad() {
    //   let res = await fetch("/assets/test.json");
    //   await res.json().then((data) => {
    //       console.log(data);
          
    //   })
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
