import { Component, h, Prop, Element } from "@stencil/core";
// import { readFile } from "fs-extra";

@Component({
    tag: "post-page", 
    shadow: true
})

export class PostPage {
    @Element() el;

    @Prop() page: string = "/";

    content: string;

    async componentWillLoad() {
        console.log("Start");
        if (this.page === "/") {
            // берем html из html-pages/posts.md
            this.content = "<p><b>Start</b> posts page</p>";
            // this.content = await readFile("/assets/html-pages/posts.md", { encoding: 'utf8' });
        }
        else {
            // берем html из html-pages/post/:page.md

            console.log("Nope. It`s end");
            
        }
        
    }

    componentDidLoad() {
            this.el.shadowRoot.querySelector("#content").innerHTML = this.content;
    }

    render() {
        return(
            <div id="content">
                {/* {this.content} */}
            </div>
        )
    }
}