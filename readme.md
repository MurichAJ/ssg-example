# Static Site Generation Example with Stencil

Stencil is a compiler for building fast web apps using Web Components.

One of the best ways to build fast, interactive web sites and web apps is to utilize Static Site Generation instead of Server Side Rendering (known as SSR) or Client Side Rendering (known as Single Page Apps, or SPAs).

Static Site Generation (SSG) means building and rendering components and routes at build time (aka prerendering) rather than server request time (SSR) or at client run-time (SPA). Because a route is already prerendered, all of the content for the route is available to search engines and clients immediately, so SEO and performance are maximized.

Static Site Generation doesn't mean your pages have to be and/or stay static! Stencil utilizes hydration to efficiently load client-side components at runtime to get the best of both worlds.

Since Static Site Generation prerenders components, there are some tradeoffs and things to keep in mind, but most components can be easily prerendered without much modification.
