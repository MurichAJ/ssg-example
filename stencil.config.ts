import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
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
