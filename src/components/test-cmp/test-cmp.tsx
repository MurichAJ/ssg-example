import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "test-cmp",
  shadow: true,
})
export class TestCmp {
  render() {
    return (
      <Host>
        <p>Some text</p>
      </Host>
    );
  }
}
