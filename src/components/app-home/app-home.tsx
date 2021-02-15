import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>Welcome to the Static Site Generation Example.</p>
        <a href="/posts">
          <button>Posts Page</button>
        </a>
      </div>
    );
  }
}
