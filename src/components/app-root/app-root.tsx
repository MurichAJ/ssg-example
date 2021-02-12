import { Component, h } from '@stencil/core';

import { createRouter, match, Route } from "stencil-router-v2";

const Router = createRouter();

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <a href="/"><h1>SSG Example</h1></a>
        </header>

        <Router.Switch>
          <Route path="/">
            <app-home />
          </Route>

          <Route path="/cats">
            <cats-page />
          </Route>

          <Route path="/firestore-xmpl">
            <firestore-xmpl-page />
          </Route>

          <Route path="/test-cmp">
            <test-cmp></test-cmp>
          </Route>

          <Route path="/test-page">
            <test-page></test-page>
          </Route>

          <Route path={match("/example")}>
            <example-page />
          </Route>
        </Router.Switch>
      </div>
    );
  }
}
