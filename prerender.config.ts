import { PrerenderConfig} from "@stencil/core";
export const config: PrerenderConfig = {
  crawlUrls: false,
  entryUrls: [`/`, `/cats`, `/example`, `/firestore-xmpl`],
  hydrateOptions(url) {
    return {
      prettyHtml: true,
      runtimeLogging: true,
    };
  },
}