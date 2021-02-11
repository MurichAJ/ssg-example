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
        <a href="/firestore-xmpl"><button>Firestore Example</button></a>
        <a href="/test-cmp"><button>Test cmp</button></a>
      </div>
    );
  }
}
