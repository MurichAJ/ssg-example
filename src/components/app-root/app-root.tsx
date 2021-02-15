import { Component, Host, h } from "@stencil/core";

import { Route, createRouter, match  } from "stencil-router-v2";

const Router = createRouter();

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <Host>
        <header>
          <a href="/">
            <h1>SSG Example</h1>
          </a>
        </header>

        <Router.Switch>
          <Route path="/">
            <app-home />
          </Route>

          <Route
            path={match("/:slug1/:slug2")}
            render={({ slug1, slug2 }) => {
              if ( slug1  === "posts") {
                return <post-page slug={ slug2 }/>}
              else {
                return undefined // Пространство для других структур. Например: docs, messages...
              }}}
          />

          <Route
            path={match("/:slug")}
            render={({ slug }) => <page-page slug={ slug }/>}
          />
          {/* 404 page */}
        </Router.Switch>

        <footer>
          <a href="/about">
            <p>About</p>
          </a>
          <a href="/info">
            <p>Info</p>
          </a>
          <a href="/contact">
            <p>Contact Us</p>
          </a>
        </footer>
      </Host>
    );
  }
}
