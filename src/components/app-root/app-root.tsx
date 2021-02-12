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

          <Route path="/test-page">
            <test-page></test-page>
          </Route>

          <Route path={match("/example")}>
            <example-page />
          </Route>

          <Route path="/post">
            <post-page />
          </Route>

          <Route 
            path={match("/post/:page")}
            render={({page}) => <post-page page={page} />}
          />

        </Router.Switch>
      </div>
    );
  }
}
