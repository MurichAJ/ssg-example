import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Static Site Generation Example.
        </p>
        <a href="/cats"><button>Cats</button></a>
        <a href="/example"><button>Example</button></a>
      </div>
    );
  }
}
