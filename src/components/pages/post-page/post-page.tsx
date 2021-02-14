import { Component, h, Prop, Element, Host } from "@stencil/core";
import Helmet from "@stencil/helmet";
// import { Posts } from "../../../assets/html-pages/posts.json"

@Component({
  tag: "post-page",
  shadow: true,
})
export class PostPage {
  @Element() el;

  @Prop() page: string = "posts";

  content;

  async componentWillLoad() {
    console.log("Start");
    this.content = await fetchContent(`/assets/html-pages/${this.page}.json`);
    // this.el.shadowRoot.querySelector("#content").innerHTML = this.content.hypertext;
    this.el.shadowRoot.innerHTML = this.content.hypertext;
  }

  render() {
    return (
      <Host>
        <Helmet>
          <title>{this.content.title}</title>
          {this.content.metaTags.map((metaTag) => <meta name={metaTag.name} content={metaTag.content} /> )}
          {/* <link rel="stylesheet" href="/styles.css"/> */}
        </Helmet>
        <div id="content">{/* {this.content.hypertext} */}</div>
          Autor: {this.content.contributors}
      </Host>
    );
  }
}

// const localCache = new Map;

const fetchContent = (path: string) => {
  // let promise = localCache.get(path);
  // if (!promise) {
  //   console.log('fetchContent', path);
  let promise = fetch(path).then((response) => response.json());
  //   localCache.set(path, promise);
  // }
  // console.log("🚀 ~ file: post-page.tsx ~ line 47 ~ fetchContent ~ promise", promise)
  return promise;
};
