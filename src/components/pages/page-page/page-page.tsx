import { Component, Element,/*  Host, */ Prop, State, Watch, h } from "@stencil/core";
import Helmet from "@stencil/helmet";

@Component({
  tag: "page-page",
  styleUrl: "page.scss",
  shadow: true,
})
export class PagePage {
  @Element() el;

  @Prop() slug: string;

  @State() data;

  @Watch("slug")
  async slugHandler() {
    this.data = await fetchData(`/assets/pages/pages/${this.slug}.json`);

  }
  async componentWillLoad() {
    console.log("Start");
    await this.slugHandler();
    // this.data = await fetchData(`/assets/pages/pages/${this.slug}.json`);
    // this.el.shadowRoot.innerHTML = this.data.content;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.data.title}</title>
          {this.data.metaTags.map((metaTag) => (
            <meta {...metaTag} />
          ))}
        </Helmet>
        <div innerHTML={this.data.content} />
      </div>
    );
  }
}

const fetchData = (path: string) => {
  let promise = fetch(path)
    .then((response) => response.json())
    .catch(() => (document.location.href = "/undefined-404"));
  return promise;
};
