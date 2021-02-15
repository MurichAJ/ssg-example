import { PrerenderConfig} from "@stencil/core";
export const config: PrerenderConfig = {
  // crawlUrls: false,
  entryUrls: [`/posts`, `/posts/test`, `/posts/first-post`, `/posts/about-how-i-love-cats`, `/posts/try`],
  hydrateOptions(url) {
    return {
      prettyHtml: true,
      runtimeLogging: true,
    };
  },
}