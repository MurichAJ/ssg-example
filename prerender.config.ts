import { PrerenderConfig} from "@stencil/core";
export const config: PrerenderConfig = {
  crawlUrls: false,
  entryUrls: [`/`, `/cats`, `/example`],
  hydrateOptions(url) {
    return {
      prettyHtml: true,
      runtimeLogging: true,
    };
  },
}