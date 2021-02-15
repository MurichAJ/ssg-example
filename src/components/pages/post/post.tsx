import { Component, h, Prop, Element, Host } from "@stencil/core";
import Helmet from "@stencil/helmet";

@Component({
  tag: "post-page",
  shadow: true,
})
export class PostPage {
  @Element() el;

  @Prop() slug: string;

  data;

  async componentWillLoad() {
    console.log("Start");
    this.data = await fetchData(`/assets/pages/posts/${this.slug}.json`);
    // this.el.shadowRoot.innerHTML = this.data.content;
  }

  render() {
    return (
      <Host>
        <Helmet>
          <title>{this.data.title}</title>
          {this.data.metaTags.map((metaTag) => (
            <meta {...metaTag} />
          ))}
          {this.data.links.map((link) => {
            console.log(
              "🚀 ~ file: page-page.tsx ~ line 31 ~ PostPage ~ render ~ link",
              link
            );
            return <link {...link} />;
          })}
        </Helmet>
        <div innerHTML={this.data.content} />
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
