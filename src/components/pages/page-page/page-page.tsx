import { Component, Element, Host, Prop, h } from "@stencil/core";
import Helmet from "@stencil/helmet";

@Component({
  tag: "page-page",
  styleUrl: "page.css",
  shadow: true,
})
export class PostPage {
  @Element() el;

  @Prop() slug: string;

  data;

  async componentWillLoad() {
    console.log("Start");
    this.data = await fetchData(`/assets/pages/pages/${this.slug}.json`);
    this.el.shadowRoot.innerHTML = this.data.content;
  }

  render() {
    return (
      <Host>
        <Helmet>
          <title>{this.data.title}</title>
          {this.data.metaTags.map((metaTag) => (
            <meta name={metaTag.name} content={metaTag.content} />
          ))}
        </Helmet>
      </Host>
    );
  }
}

const fetchData = (path: string) => {
  let promise = fetch(path)
    .then((response) => response.json())
    .catch(( ) => document.location.href = "/404");
  return promise;
};
