import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
// import 'dotenv/config';

const prod = process.env.NODE_ENV === "production";

console.log(process.env.NODE_ENV)

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // ssr: false,
    adapter: adapter({
      pages: "build",
      assets: "build"
    }),
    // define: {
    //   'process.env.VITE_BUILD_TIME':JSON.stringify((new Date()).toISOString()),
    // },
    paths: {
      // change below to your repo name
      base: "",
    },

    prerender: {
      default: true
    },

  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
