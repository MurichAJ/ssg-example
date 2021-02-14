import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "posts-cmp",
  shadow: true,
})
export class PostsCmp {
  render() {
    return (
      <Host>
        {/* Компонента которая возвращает список постов?? */}
        List of posts?
      </Host>
    );
  }
}
