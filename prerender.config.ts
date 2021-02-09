import { PrerenderConfig} from "@stencil/core";
export const config: PrerenderConfig = {
    
    hydrateOptions(url: URL = new URL("http://localhost:3333/cats")) {
        return {
            removeHtmlComments: false,
            excludeComponents: ["p"],
        }
    }
}