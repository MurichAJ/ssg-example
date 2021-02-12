import { PrerenderConfig} from "@stencil/core";
export const config: PrerenderConfig = {
  // crawlUrls: false,
  // entryUrls: [`/post`],
  hydrateOptions(url) {
    return {
      prettyHtml: true,
      runtimeLogging: true,
    };
  },
}