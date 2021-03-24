import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { nodeResolve } from "@rollup/plugin-node-resolve"

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  rollupPlugins: {
    before: [
      // Plugins injected before rollupNodeResolve()
      nodeResolve({mainFields: ["main", "module"]}),
    ],
    after: [
      // Plugins injected after commonjs()
      nodePolyfills(),
    ],
  },
  // nodeResolve: { only: ["main", "module", "browser"] },
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://ssg-example-96380.web.app',
      prerenderConfig: "./prerender.config.ts",
    },
  ],
  devServer: {
    openBrowser: false
  }
};
