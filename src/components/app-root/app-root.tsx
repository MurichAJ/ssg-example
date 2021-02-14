import { Component, h } from "@stencil/core";

import { createRouter, match, Route } from "stencil-router-v2";

const Router = createRouter();

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <a href="/">
            <h1>SSG Example</h1>
          </a>
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

          <Route path="/test">
            <test-page></test-page>
          </Route>

          <Route path={match("/example")}>
            <example-page />
          </Route>

          <Route path={match("/posts")}>
            <posts-page/>
          </Route>

          {/* <Route
            path={match("/posts/:slug")}
            render={({ slug }) => <post-page slug={ slug } />}
          /> */}

          <Route
            path={match("/:slug/:slug")}
            render={({ slug }) => <page-page slug={ slug } />}
          />
        </Router.Switch>
      </div>
    );
  }
}
