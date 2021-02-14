//Компонента страница??? Как, что, для чего?
import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "page-page",
  styleUrl: "page.css",
  shadow: true,
})
export class PagePage {
  @Prop() slug?: string;

  render() {
    return (
      <main>
        <nav>
          Here must be some site navigation
          {/* <posts-cmp></posts-cmp> */}
        </nav>
        <article>
          <post-page slug={this.slug}></post-page>
        </article>
        <aside>Try to use semantic tags</aside>
      </main>
    );
  }
}
