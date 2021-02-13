import { PrerenderConfig} from "@stencil/core";
export const config: PrerenderConfig = {
  // crawlUrls: false,
  entryUrls: [`/posts/about-how-i-love-cats`],
  hydrateOptions(url) {
    return {
      prettyHtml: true,
      runtimeLogging: true,
    };
  },
}