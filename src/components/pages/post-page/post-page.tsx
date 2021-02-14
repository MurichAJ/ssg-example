import { Component, h, Prop, Element } from "@stencil/core";
// import { Posts } from "../../../assets/html-pages/posts.json"

@Component({
    tag: "post-page", 
    shadow: true
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
        // console.log("🚀 ~ file: post-page.tsx ~ line 19 ~ PostPage ~ componentWillRender ~ this.content", this.content)
    }

    render() {
        return(
            <div id="content">
                {/* {this.content.hypertext} */}
            </div>
        )
    }
}

// const localCache = new Map;

const fetchContent = (path: string) => {

    // let promise = localCache.get(path);
    // if (!promise) {
    //   console.log('fetchContent', path);
      let promise = fetch(path).then(response => response.json());
    //   localCache.set(path, promise);
    // }
    // console.log("🚀 ~ file: post-page.tsx ~ line 47 ~ fetchContent ~ promise", promise)
    return promise;
}
