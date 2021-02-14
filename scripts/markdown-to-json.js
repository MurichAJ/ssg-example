"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const marked_1 = __importDefault(require("marked"));
const glob_1 = __importDefault(require("glob"));
const util_1 = require("util");
const path_1 = __importDefault(require("path"));
const fs_extra_1 = require("fs-extra");
const front_matter_1 = __importDefault(require("front-matter"));
// interface MarkdownContent {
//   title?: string;
//   description?: string;
//   meta? : MarkdownMetaTags[],
//   url?: string;
//   contributors?: string[];
//   // headings?: MarkdownHeading[];
//   // srcPath?: string;
//   hypertext?: any[];
// }
// interface MarkdownMetaTags {
//   name?: string,
//   content?: string
// }
const globAsync = util_1.promisify(glob_1.default);
const DESTINATION_DIR = "./src/assets/html-pages";
const SOURCE_DIR = "./src/md-pages";
// const SITE_STRUCTURE_FILE = './src/assets/docs-structure.json';
(async function () {
    // const siteStructure = await readFile(SITE_STRUCTURE_FILE, { encoding: 'utf8' });
    // const siteStructureJson: SiteStructureItem[] = JSON.parse(siteStructure);
    console.log(`running glob: ${SOURCE_DIR}/**/*.md`);
    const files = await globAsync(`${SOURCE_DIR}/**/*.md`, {});
    // console.log("🚀 ~ file: markdown-to-html.ts ~ line 17 ~ files", files)
    await fs_extra_1.remove(DESTINATION_DIR);
    const filePromises = files.map(async (filePath) => {
        if (filePath === "./src/docs/README.md") {
            return Promise.resolve();
        }
        let htmlContents = "";
        // let markdownMetadata: MarkdownContent = {};
        const jsonFileName = path_1.default.relative(SOURCE_DIR, filePath);
        const destinationFileName = path_1.default.join(DESTINATION_DIR, path_1.default.dirname(jsonFileName), path_1.default.basename(jsonFileName, ".md") + ".json");
        // markdownMetadata.headings = [];
        const markdownContents = await fs_extra_1.readFile(filePath, { encoding: "utf8" });
        try {
            let parsedMarkdown = front_matter_1.default(markdownContents);
            // parsedMarkdown = await getGithubData(filePath, parsedMarkdown);
            const renderer = new marked_1.default.Renderer();
            // collectHeadingMetadata(renderer, markdownMetadata);
            // changeCodeCreation(renderer);
            // localizeMarkdownLink(renderer, destinationFileName.replace('src',''), siteStructureJson);
            htmlContents = marked_1.default(parsedMarkdown.body, {
                renderer,
                headerIds: true,
            }).trim();
            await fs_extra_1.mkdirp(path_1.default.join(DESTINATION_DIR, path_1.default.dirname(jsonFileName)));
            const data = Object.assign(Object.assign({}, parsedMarkdown.attributes), { 
                //   ...markdownMetadata,
                //   srcPath: filePath,
                //   hypertext: convertHtmlToHypertextData(htmlContents)
                hypertext: htmlContents });
            // if (typeof data.title !== 'string') {
            //   data.title = 'Stencil';
            // } else {
            //   data.title = data.title.trim() + ' - Stencil';
            // }
            await fs_extra_1.writeFile(destinationFileName, JSON.stringify(data), {
                encoding: "utf8",
            });
        }
        catch (e) {
            console.error(filePath);
            throw e;
        }
    });
    await Promise.all(filePromises);
    // console.log(`successfully converted ${filePromises.length} files`);
})();
