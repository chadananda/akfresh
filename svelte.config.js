import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
// import 'dotenv/config';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // define: {
    //   'process.env.VITE_BUILD_TIME':JSON.stringify((new Date()).toISOString()),
    // },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
