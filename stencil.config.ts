import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';


// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  rollupPlugins: {
    before: [
      // Plugins injected before rollupNodeResolve()
      nodePolyfills()
    ],
  },
  // nodeResolve: { only: ["main", "module", "browser"] },
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'http://localhost:3333/',
      prerenderConfig: "./prerender.config.ts",
    },
  ],
  devServer: {
    openBrowser: false
  }
};
